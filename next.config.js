const withWorkbox = require("next-with-workbox");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
  experimental: {
    appDir: true,
  },
  workbox: {
    swSrc: "sw.js",
  },
}

module.exports = nextConfig
