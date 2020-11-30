importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

import { registerRoute } from "workbox-routing";

import { StaleWhileRevalidate } from "workbox-strategies";

// import { registerRoute } from "workbox-routing";
// import { CacheFirst } from "workbox-strategies";
// const { GenerateSW } = require("workbox-webpack-plugin");

// const { backgroundSync, routing, strategies } = workbox;

// Inside of webpack.config.js:

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`, workbox);
} else {
  console.log(`Boo! Workbox didn't load 😬`, workbox);
}

registerRoute(matchCb, new StaleWhileRevalidate());

const matchCb = ({ url, request, event }) => {
  return url.pathname === "/";
};

const handlerCb = async ({ url, request, event, params }) => {
  const response = await fetch(request);
  const responseBody = await response.text();
  console.log("====================================");
  console.log(responseBody);
  console.log("====================================");
  return new StaleWhileRevalidate();
};

registerRoute(matchCb, handlerCb);

// registerRoute(
//   ({ request }) => request.destination === "style",
//   new CacheFirst()
// );

// var CACHE_NAME = "my-site-cache-v1";
// var urlsToCache = ["/", "/styles/main.css", "/script/main.js"];

// self.addEventListener("install", function (event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// self.addEventListener("activate", function (event) {
//   var cacheAllowlist = ["pages-cache-v1", "blog-posts-cache-v1"];

//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames.map(function (cacheName) {
//           if (cacheAllowlist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// ref.authAnonymously(function (error, authData) {
//   if (error) {
//     /* handle error */
//   }
// }, options);
