# Teddy Lumidi — Portfolio

Personal portfolio of **Teddy Lumidi**, full stack developer, designer, I.T support specialist and analyst based in Kisumu, Kenya.

**Live site:** https://teddylumidi.github.io/Lumidi/

## What's on the site

| Page | URL | Contents |
|---|---|---|
| Home | `#home` | Intro, who I am, core competencies, featured websites, latest blog posts, latest vlog |
| About | `#about` | Profile, skills, experience timeline, education, role details |
| Portfolio | `#portfolio` | Live client websites with screenshots and links |
| Hobbies | `#hobbies` | Interests and a photo gallery with a full-screen viewer |
| Vlog | `#vlog` | Both YouTube channels with an embedded player of the latest uploads |
| Blog | `#blog`, `#blog/<post>` | Articles, filterable by category; each post has its own link |
| Contact | `#contact` | WhatsApp, phone, and a form that opens WhatsApp with the message ready |

### Featured websites

- [Wahito Musonge & Company Advocates LLP](https://wahitomusongeadvocates.co.ke/)
- [Kanya Interior](https://kanyainterior.co.ke/)
- [Remax Safaris](https://remaxsafaris.com/)
- [The Lonah Maiko Foundation](https://thelonahmaikofoundation.com/)
- [Mwalali Homes](https://mwalalihomes.co.ke/)
- [Donovan's Heavy Metal Recycling](https://donovansheavymetalrecycling.ca/)

## How it's built

A static site with no build step, hosted on GitHub Pages from the `main` branch.

```
index.html          all pages (shown one at a time by the URL hash)
assets/site.css     styles (theme colours at the top)
assets/site.js      navigation, rendering, gallery, video player, contact form
assets/content.js   projects, blog posts, gallery list, YouTube channels
img/                photos; img/projects/ = site screenshots, img/gallery/ = gallery thumbnails
server.js           optional Node server for local/Replit preview (adds /api/youtube)
```

Fonts: Josefin Sans and Playfair Display (Google Fonts). Icons: Font Awesome 6.

## Editing content

Everything that changes often is in `assets/content.js`:

- **Add a website to the portfolio:** add an entry at the top of `projects` with `title`, `summary`, `tech`, `url`, and a 1280×720 screenshot saved as `img/projects/<name>.webp`.
- **Add a blog post:** add an entry to `posts` with a unique `slug`, `title`, `cat` (`personal`, `career`, `web`, `tech` or `marketing`), `date`, `excerpt`, `img` and `body` (HTML). Category filters appear automatically for categories that have posts.
- **Add a gallery photo:** put the photo in `img/`, add it to `gallery` with a short description, then run `npm run images` to create its thumbnail.

Text on the About, Hobbies and Contact pages is edited directly in `index.html`.

## Run locally

```bash
npm install
npm start        # http://localhost:5000
```

Or open `index.html` through any static server. With the Node server running, the vlog shows the latest videos as cards (from `/api/youtube`); on GitHub Pages it shows each channel's uploads playlist player instead.

## Deploying

Push to `main`. GitHub Pages publishes the repository root. The `.nojekyll` file tells Pages to serve the files as they are.

## Legacy pages

`aboutme.html`, `howitworks.html`, `referrallink.html` and `rewards.html` (with `styles.css`) are from the earlier referral-link version of this site. They are no longer linked from the portfolio.

## Licence

MIT
