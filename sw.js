self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('nayra-v1').then((cache) => {
      return cache.addAll(['index.html', 'privacy.html', 'terms.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
