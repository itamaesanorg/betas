/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['upload.wikimedia.org'],
    formats: ['image/webp', 'image/jpeg', 'image/png'],
  },
}