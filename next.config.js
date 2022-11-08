/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['loremflickr.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
