/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.pravatar.cc', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
