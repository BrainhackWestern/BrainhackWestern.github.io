/** @type {import('next').NextConfig} */
const webpack = require('webpack')
const path = require('path')

const imgLoader = process.env.NEXT_PUBLIC_LOADER || 'default';

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'node_modules')
    ]
  },
  images: {
    loader: imgLoader,
    path: "https://brainhack-western.imgix.net/",
  },
  basePath: process.env.NEXT_PUBLIC_URL,
  assetPrefix: process.env.NEXT_PUBLIC_URL,
}
