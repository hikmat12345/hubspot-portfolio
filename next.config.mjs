/** @type {import('next').NextConfig} */

// importing env.mjs in your next.config.mjs will make sure
// your environment variables are validated at build time
// https://env.t3.gg/
import './data/env.mjs';

const nextConfig = {
  images: {
    domains: [
      'demo.themesberg.com', // Add the demo.themesberg.com domain
      'themesberg.s3.us-east-2.amazonaws.com',
      'images.unsplash.com',
      // Add any other domains from which you want to load images
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }]},
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
};

export default nextConfig;
