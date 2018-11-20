# Service Worker
* [Service Worker Overview](#service-worker-overview)
* [Service Worker Lifecycle](#service-worker-lifecycle)

## Service Worker Overview
* A service worker is a JS script that the browser runs in the background, separate from a webpage. It opens the door to features that don't need a webpage or user interaction.
* Features allowed include push notifications and background sync. 
* The core feature of a service worker is the ability to intercept and handle network requests, including programatically managing a cache of responses.
* Service workers allow us to support offline experiences, giving developers complete control over the experience.
* **Things to note about a Service Worker:**
  * It's a JavaScript worker, so it `can't` access the DOM directly. Instead, it can communicate with the pages it controls by responding to messages sent via the postMessage interface.
  * It's a programmable network proxy, allowing us to control how network requests from the page are handled
  * It's terminated when not in use, and restarted when it's next needed. `Can't` rely on global state with a serviceWorker.

## Service Worker Lifecycle
* Service workers have a lifecylce that is completely different that that of the webpage.
* First, to install a service worker, it miust be registered which is done in the webpages / applications JavaScript.
* Normally during the install, we want to cache static assets, in order to make them available offline later.
* Once a service worker is in control, it will be in one of two states: either the service worker will be terminated to save memory, or it will handle fetch and message events that occur when a network request or message is made from your page.
* Simple service worker registration script:
    ```js
    if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  ```
* The above code checks to see if the service worker API is available, and if it is, the service worker at /sw.js is registered once the page is loaded. 
* Once the service worker is registered, we need to install the service worker.
* The install script lives in the actual sw.js file.
* Inside an install event listener callback we need to:
  1) open a cache
  2) Cache our files
  3) Confirm whether all the required assets are cached or not
* Example service worker install script:
  ```js
  var CACHE_NAME = 'my-site-cache-v1';
  var urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/main.js'
  ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
  ```