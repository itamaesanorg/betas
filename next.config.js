/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['cdn.vercel.com'],
    formats: ['image/webp'],
  },
}