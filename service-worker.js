const CACHE_NAME = 'dti224-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './converter.html',
  './grade.html',
  './change.html',
  './distance.html',
  './hobby.html',
  './images.jpg'
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
