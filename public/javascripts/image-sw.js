const CACHE_NAME = 'hes-vault-image-cache-v1';
const CACHE_DURATION = 60 * 60 * 24 * 7;

const FILES_TO_CACHE = [
    '/offline.html',
    '/placeholder.webp'
];

let placeholderFetchFailed = false;

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('hes-vault-') && cacheName !== CACHE_NAME;
                }).map(cacheName => caches.delete(cacheName))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (!url.pathname.startsWith('/uploads/') && !url.pathname.startsWith('/images/')) {
        return;
    }

    if (url.pathname.includes('placeholder.webp')) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    // Check if cached response is still valid
                    const cachedDate = new Date(cachedResponse.headers.get('date'));
                    const now = new Date();
                    const ageInSeconds = (now - cachedDate) / 1000;

                    if (ageInSeconds < CACHE_DURATION) {
                        return cachedResponse;
                    }
                }

                // Fetch from network and update cache
                return fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        // Clone the response before caching
                        const responseToCache = networkResponse.clone();
                        cache.put(event.request, responseToCache);
                    }
                    return networkResponse;
                }).catch(() => {
                    if (!placeholderFetchFailed) {
                        placeholderFetchFailed = true;
                        return fetch('/placeholder.webp').then(res => {
                            placeholderFetchFailed = false;
                            return res;
                        }).catch(() => {
                            placeholderFetchFailed = false;
                            return new Response('Image not found', {
                                status: 404,
                                statusText: 'Not Found'
                            });
                        });
                    } else {
                        // Return a simple 404 response to break the loop
                        return new Response('Image not found', {
                            status: 404,
                            statusText: 'Not Found'
                        });
                    }
                });
            });
        })
    );
})