/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "img.freepik.com",
        port: '',
        pathname: '/free-vector/gradient-h-logo-template_23-2149372721.jpg?w=200/',
      },
    ],
  },
}

module.exports = nextConfig
