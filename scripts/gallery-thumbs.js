// Creates gallery images listed in assets/content.js:
//   img/gallery/<name>-sm.webp  (480x480 thumbnail)
//   img/gallery/<name>.webp     (full size, max 1400px)
// Usage: npm run images
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT, 'assets', 'content.js'));
const name = (f) => f.replace(/\.[a-z]+$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

(async () => {
  const out = path.join(ROOT, 'img', 'gallery');
  fs.mkdirSync(out, { recursive: true });
  for (const g of window.SITE.gallery) {
    const src = path.join(ROOT, 'img', g.file);
    if (!fs.existsSync(src)) { console.warn('Missing:', g.file); continue; }
    const n = name(g.file);
    await sharp(src).resize(480, 480, { fit: 'cover', position: 'attention' }).webp({ quality: 76 }).toFile(path.join(out, `${n}-sm.webp`));
    await sharp(src).resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(out, `${n}.webp`));
    console.log('ok', g.file);
  }
})();
