/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: ["www.covalenthq.com"],
  },
  reactStrictMode: true,
};

module.exports = withPlugins([[withImages]], nextConfig);
