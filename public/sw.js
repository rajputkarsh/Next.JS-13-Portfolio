
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

workbox.core.clientsClaim();

/**
 * We are not wrapping it in a 'message' event as per the new update.
 * @see https://developers.google.com/web/tools/workbox/modules/workbox-core
 */
self.skipWaiting();

/**
 * Precache all of the assets generated by your build process.
 * Their URLs are injected into the manifest variable below.
 * This variable must be present somewhere in your service worker file,
 * even if you decide not to use precaching. See https://cra.link/PWA
 */
// TODO: Array of resources to be precached that we know at build time.
// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

/**
 * We use workbox.strategies.CacheFirst for images because, images are not going to change very often,
 * so it does not make sense to revalidate images on every request.
 *
 * @see https://developers.google.com/web/tools/workbox/guides/common-recipes#caching_images
 */
workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);