const CACHE_NAME = 'asx-cache-v2'; // increment version to force update
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './icon/axs-192.png',
  './icon/axs-512.png',
  './css/style.css',
  './css/mmm.css',
  './js/script.js',
  './js/script1.js',
  './image/coachella.jpeg',
  './image/code code.jpeg'
];

// Install Service Worker
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker and clean old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: Always try network first, then fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Optional: Update cache with latest response
        if (event.request.method === 'GET') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => caches.match(event.request)) // fallback to cache if offline
  );
});
