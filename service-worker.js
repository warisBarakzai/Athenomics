/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/ipfs/QmbnTXHC8q52XUwy5Q1wmjrzrFEyCSpsFHxZPDJhNCfXFJ/precache-manifest.e5b77a61dbab861e8aa1a3a8ac9c6e8d.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/ipfs/QmbnTXHC8q52XUwy5Q1wmjrzrFEyCSpsFHxZPDJhNCfXFJ/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
