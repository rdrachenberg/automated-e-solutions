/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'https://assets.calendly.com/assets/external/widget.js', 'https://tecdn.b-cdn.net','https://aecomsolution.com', 'https://www.aecomsolution.com']
  }
}

module.exports = nextConfig
