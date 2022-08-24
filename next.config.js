/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && "/"
  ,trailingSlash: true

  ,reactStrictMode: true
  ,swcMinify: true
  ,experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
