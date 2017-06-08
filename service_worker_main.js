const CACHE_NAME = 'cache-v1';
// The files we want to cache
const resourceList = [
  'index.html'
];

self.onfetch = (e) => {
  e.respondWith(new Response('Hello World!'))
}
self.oninstall = (e) => {
  e.waitUntil(
    caches.open('installation')
      .then(cache =>  cache.addAll([
         'index.js'
      ]))
  )
};

self.onfetch = (e) => {
  const fetched = fetch(e.request)
  const cached = caches.match(e.request)

  e.respondWith(
    fetched.catch(_ => cached)
  )
}

self.addEventListener('push', event => {
  event.waitUntil(
    // Process the event and display a notification.
    self.registration.showNotification("Hey!")
  );
});

self.addEventListener('notificationclick', event => {  
  // Do something with the event  
  event.notification.close();  
});

self.addEventListener('notificationclose', event => {  
  // Do something with the event  
});


self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
