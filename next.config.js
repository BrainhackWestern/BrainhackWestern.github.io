/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const path = require('path');

const imgLoader = () => {
  const loader = process.env.NEXT_PUBLIC_LOADER;
  return loader
    ? {
        loader: 'custom',
        loaderFile: loader
      }
    : { loader: 'default' };
};
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    }
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, src, 'styles'),
      path.join(__dirname, 'node_modules')
    ]
  },
  images: imgLoader(),
  basePath: process.env.NEXT_PUBLIC_URL,
  assetPrefix: process.env.NEXT_PUBLIC_URL
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
