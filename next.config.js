/** @type {import('next').NextConfig} */
const webpack = require('webpack')
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'node_modules')
    ]
  },
  images: {
    loader: 'custom'
  },
  basePath: process.env.NEXT_PUBLIC_URL,
  assetPrefix: process.env.NEXT_PUBLIC_URL,
}
