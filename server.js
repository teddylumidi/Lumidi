const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const PROJECT_PREVIEWS = Object.freeze({
  'kenya-interior': 'https://kanyainterior.co.ke/',
  'remax-safaris': 'https://remaxsafaris.com/',
  'lonah-maiko-foundation': 'https://thelonahmaikofoundation.com/',
  'mwalali-homes': 'https://mwalalihomes.co.ke/',
  'donovans-heavy-metal-recycling': 'https://donovansheavymetalrecycling.ca/'
});

const YOUTUBE_CHANNELS = Object.freeze({
  teddylumidi: 'UCFIUN1hJgmmCK5ytaXuQnxg',
  teddylumidimusic: 'UCME4llAMpRmY3tiieXOamrg'
});

function decodeXml(value = '') {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

function readXmlTag(source, tagName) {
  const match = source.match(new RegExp(`<${tagName}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
  return match ? decodeXml(match[1]).trim() : '';
}

function parseYoutubeFeed(xml, limit) {
  return [...xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi)]
    .slice(0, limit)
    .map((match) => {
      const entry = match[1];
      const videoId = readXmlTag(entry, 'yt:videoId');
      const alternateLink = entry.match(/<link\b[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i);
      const published = readXmlTag(entry, 'published');
      const description = readXmlTag(entry, 'media:description')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      return {
        videoId,
        title: readXmlTag(entry, 'title') || 'Latest video',
        caption: description.substring(0, 140),
        published,
        url: alternateLink ? decodeXml(alternateLink[1]) : `https://www.youtube.com/watch?v=${videoId}`,
        thumb: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : ''
      };
    })
    .filter((video) => video.videoId && video.url);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Proxy stable full-page landing-page screenshots so the browser does not
// depend on third-party CORS behavior.
app.get('/api/project-preview/:projectId', async (req, res) => {
  const targetUrl = PROJECT_PREVIEWS[req.params.projectId];
  if (!targetUrl) {
    return res.status(404).json({ error: 'Project preview not found' });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);
  try {
    const previewUrl = `https://image.thum.io/get/width/1440/fullpage/${targetUrl}`;
    const response = await fetch(previewUrl, {
      signal: controller.signal,
      headers: { 'user-agent': 'Teddy Lumidi portfolio preview' }
    });
    const contentType = response.headers.get('content-type') || '';
    if (!response.ok || !contentType.startsWith('image/')) {
      return res.status(502).json({ error: 'Preview provider unavailable' });
    }

    const image = Buffer.from(await response.arrayBuffer());
    res.set('Content-Type', contentType);
    res.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    return res.send(image);
  } catch (error) {
    return res.status(502).json({ error: 'Unable to load project preview' });
  } finally {
    clearTimeout(timeoutId);
  }
});

// Read the public YouTube channel feed server-side. This avoids the
// rate-limited rss2json dependency while keeping thumbnails live.
app.get('/api/youtube', async (req, res) => {
  const handle = String(req.query.channel || '');
  const channelId = YOUTUBE_CHANNELS[handle];
  const parsedLimit = Number.parseInt(req.query.limit, 10);
  const limit = Number.isInteger(parsedLimit) ? Math.min(Math.max(parsedLimit, 1), 12) : 4;

  if (!channelId) {
    return res.status(400).json({ error: 'Unknown YouTube channel' });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const response = await fetch(feedUrl, {
      signal: controller.signal,
      headers: { 'user-agent': 'Teddy Lumidi portfolio vlog feed' }
    });
    if (!response.ok) {
      return res.status(502).json({ error: 'YouTube feed unavailable' });
    }

    const videos = parseYoutubeFeed(await response.text(), limit);
    res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=900');
    return res.json({ channel: handle, videos });
  } catch (error) {
    return res.status(502).json({ error: 'Unable to load YouTube feed' });
  } finally {
    clearTimeout(timeoutId);
  }
});

// Serve static files from root directory with HTML extensions support
app.use(express.static(__dirname, {
  extensions: ['html', 'htm']
}));

// Fallback to index.html for unmatched routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
