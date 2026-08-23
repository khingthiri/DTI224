const CACHE_NAME = 'dti224-cache-v1';
const urlsToCache = [
  '/DTI224/',
  '/DTI224/index.html',
  '/DTI224/converter.html',
  '/DTI224/grade.html',
  '/DTI224/change.html',
  '/DTI224/distance.html',
  '/DTI224/hobby.html',
  '/DTI224/images.jpg'
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
