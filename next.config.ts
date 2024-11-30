import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/22',
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['raw-loader']
    });
    return config;
  }
};

export default nextConfig;
