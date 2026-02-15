const CACHE_NAME = 'polymind-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) return;

  // Skip Vite dev server requests (HMR, source files, websockets)
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/src/') || url.pathname.startsWith('/node_modules/') ||
      url.pathname.startsWith('/@') || url.pathname.includes('?t=') ||
      url.pathname.endsWith('.ts') || url.pathname.endsWith('.tsx')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version and update cache in background
        event.waitUntil(
          fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
          }).catch(() => {})
        );
        return cachedResponse;
      }

      // Not in cache - fetch from network
      return fetch(event.request).then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Cache the fetched response
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        // Return a proper error response instead of undefined
        return new Response('Network error', { status: 408, statusText: 'Request Timeout' });
      });
    })
  );
});

// Handle push notifications (for future use)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Time to learn something new!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      { action: 'explore', title: 'Start Learning' },
      { action: 'close', title: 'Close' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Polymind', options)
  );
});

// Handle notification clicks (both push notifications and in-app notifications)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  // Handle old-style push notifications (from push service)
  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/dashboard'));
  }
  // Handle streak reminder notifications
  else if (event.action === 'continue') {
    event.waitUntil(clients.openWindow('/dashboard'));
  }
  // Handle dismiss action (just close, don't navigate)
  else if (event.action === 'dismiss') {
    // Already closed above
  }
  // Default: open dashboard
  else {
    event.waitUntil(
      clients.openWindow(event.notification.data?.url || '/')
    );
  }
});

// Handle messages from main thread (e.g., send notification)
self.addEventListener('message', (event) => {
  if (event.data.type === 'SEND_NOTIFICATION') {
    const { title, options } = event.data;
    self.registration.showNotification(title, options);
  }
});
