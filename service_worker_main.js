const CACHE_NAME = 'cache-v1';
// The files we want to cache
const resourceList = ['index.html','index.js', 'styles/homepage2017.css',  'styles/fonts/index.woff'];
self.onfetch = (e) => {
   const fetched = fetch(e.request)
  const cached = caches.match(e.request)
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

self.addEventListener('push', event => {
  event.waitUntil(
    // Process the event and display a notification.
    self.registration.showNotification("Hey!")
  );
});

/*
Notification.requestPermission().then(function(result) {
  if (result === 'denied') {
    console.log('Permission wasn\'t granted. Allow a retry.');
    return;
  }
  if (result === 'default') {
    console.log('The permission request was dismissed.');
    return;
  }  
	self.addEventListener('notificationclick', event => {  
	  // Do something with the event  
	  event.notification.close();  
	});

	self.addEventListener('notificationclose', event => {  
	  // Do something with the event  
	});
  // Do something with the granted permission.
});

*/

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

