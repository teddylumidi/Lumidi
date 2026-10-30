// Local / Replit server for the portfolio.
// The live site is static (GitHub Pages); this server adds one optional
// endpoint, /api/youtube, which returns the latest videos as cards. Without
// it the vlog shows each channel's uploads playlist player instead.
const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 5000;

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
      return {
        videoId,
        title: readXmlTag(entry, 'title') || 'Latest video',
        published: readXmlTag(entry, 'published'),
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumb: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : ''
      };
    })
    .filter((video) => /^[\w-]{11}$/.test(video.videoId));
}

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/youtube', async (req, res) => {
  const handle = String(req.query.channel || '');
  const channelId = YOUTUBE_CHANNELS[handle];
  const parsedLimit = Number.parseInt(req.query.limit, 10);
  const limit = Number.isInteger(parsedLimit) ? Math.min(Math.max(parsedLimit, 1), 12) : 4;
  if (!channelId) return res.status(400).json({ error: 'Unknown YouTube channel' });

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      signal: controller.signal,
      headers: { 'user-agent': 'Teddy Lumidi portfolio vlog feed' }
    });
    if (!response.ok) return res.status(502).json({ error: 'YouTube feed unavailable' });
    const videos = parseYoutubeFeed(await response.text(), limit);
    res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=900');
    return res.json({ channel: handle, videos });
  } catch (error) {
    return res.status(502).json({ error: 'Unable to load YouTube feed' });
  } finally {
    clearTimeout(timeoutId);
  }
});

app.use(express.static(__dirname, { extensions: ['html'] }));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
