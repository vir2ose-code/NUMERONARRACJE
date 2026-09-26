const CACHE_NAME = 'numeronarracje-v62';
const urlsToCache = [
  './',
  './index.html',
  './about.html',
  './offer.html',
  './app-info.html',
  './quiz.html',
  './jokes.html',
  './privacy.html',
  './terms.html',
  './style.css',
  './app.js',
  './about.js',
  './app-info.js',
  './quiz.js',
  './jokes.js',
  './privacy.js',
  './terms.js',
  './stories.html',
  './stories.js',
  './stories_db.js',
  './vibrations_db.js',
  './emotions_db.js',
  './i18n.js',
  './personality_data.js',
  './body_quiz_data.js',
  './forecast_data.js',
  './critic_test.js',
  './critic_test_data.js',
  './manifest.json',
  './logo master violet rund.png',
  './NN_ICON_192x192.png',
  './NN ICON_512x512.png',
  './screenshot1.png',
  './screenshot2.png',
  './screenshot_mobile1.jpg',
  './screenshot_mobile2.jpg',
  './Milky Way 4K.png',
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', event => {
  // Bypass caching for audio files to avoid Range request issues (e.g. 206 Partial Content error on Safari/iOS)
  if (event.request.url.includes('.mp3') || event.request.headers.has('range')) {
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(networkResponse => {
          // If response is valid, and it's a card image request, cache it dynamically
          if (networkResponse && networkResponse.status === 200 && event.request.url.includes('/KARTY%20MOTYWACYJNE%20Z%20OPISEM/')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
            // Optional: return offline page if implemented
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

