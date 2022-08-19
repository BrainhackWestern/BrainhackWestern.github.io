/** @type {import('next').NextConfig} */
const webpack = require('webpack')
const path = require('path')

const imgLoader = () => {
  const loader = process.env.NEXT_PUBLIC_LOADER || 'default';
  if (["default", "custom"].includes(loader)) {
    return {
      loader: loader
    }
  } else {
    return {
      loader: loader,
      path: process.env.NEXT_IMAGE_LOADER_URL
    }
  }
}

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'node_modules')
    ]
  },
  images: imgLoader(),
  basePath: process.env.NEXT_PUBLIC_URL,
  assetPrefix: process.env.NEXT_PUBLIC_URL,
}
