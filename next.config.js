/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
//   dest: "public",
// });

// const nextConfig = {};

// module.exports = withPWA(nextConfig);

// next.config.js



const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  // disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
});
