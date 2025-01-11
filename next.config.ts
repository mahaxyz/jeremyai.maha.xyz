import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // experimental: {
  //   optimizePackageImports: ['@chakra-ui/react'],
  // },
  // reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  output: 'export',
};

export default nextConfig;
