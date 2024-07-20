/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "always",
    },
  },
}

export default nextConfig
