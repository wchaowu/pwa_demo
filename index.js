window.addEventListener('beforeinstallprompt', function(e) {
  // beforeinstallprompt Event fired

  // e.userChoice will return a Promise. 
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(function(choiceResult) {

    console.log(choiceResult.outcome);

    if(choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    }
    else {
      console.log('User added to home screen');
    }
  });
});

    if(navigator.serviceWorker){
        // For security reasons, a service worker can only control the pages that are in the same directory level or below it. That's why we put sw.js at ROOT level.
        navigator.serviceWorker
            .register('service_worker_main.js')
            .then((registration) => {console.log('Service Worker Registered. ', registration)})
            .catch((error) => {console.log('ServiceWorker registration failed: ', error)})
    }
