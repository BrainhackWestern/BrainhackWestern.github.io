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

const basePath = () => {
  return process.env.NEXT_PUBLIC_URL;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT_APP ? 'export' : undefined,
  reactStrictMode: true,
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    },
    'react-bootstrap': {
      transform: 'react-bootstrap/{{member}}'
    }
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src", 'styles'),
      path.join(__dirname, 'node_modules')
    ]
  },
  images: imgLoader(),
  basePath: basePath(),
  assetPrefix: basePath()
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
