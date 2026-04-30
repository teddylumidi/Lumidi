// Service Worker — Cache-first strategy for Teddy Lumidi site
const CACHE = 'lumidi-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/img/background.jpg',
  '/img/avatar.jpg',
  '/img/avatar254.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Cache-first for same-origin assets (images, HTML)
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (!res || res.status !== 200 || res.type !== 'basic') return res;
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        }).catch(() => caches.match('/index.html'));
      })
    );
    return;
  }
  // Network-first for external resources (fonts, icons, YouTube)
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
