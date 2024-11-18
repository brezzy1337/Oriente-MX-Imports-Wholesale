/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'saboresdetailandia.blob.core.windows.net',
      'rwwz7tcmrdb2c192.public.blob.vercel-storage.com'
    ],
    unoptimized: process.env.NODE_ENV === 'production'
  },
  experimental: {
    serverActions: true
  }
}

export default nextConfig
