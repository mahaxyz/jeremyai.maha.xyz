/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  // assetPrefix: "./",
  trailingSlash: true,
  // eslint-disable-next-line
  // basePath: '/frontend-lending',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
};
