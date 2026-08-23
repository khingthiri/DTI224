const CACHE_NAME = 'dti224-cache-v2'; // Updated version name to force cache refresh
const urlsToCache = [
  './',
  './index.html',
  './converter.html',
  './grade.html',
  './change.html',
  './distance.html',
  './hobby.html',
  './icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
