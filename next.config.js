/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,
}
const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
