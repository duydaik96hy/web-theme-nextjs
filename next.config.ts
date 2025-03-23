import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.forEach((rule: { test: { toString: () => string | string[]; }; use: any[]; }) => {
      if (rule.test && rule.test.toString().includes('css')) {
        rule.use.forEach((loader) => {
          if (loader.loader === 'css-loader') {
            loader.options = {
              ...loader.options,
              // Disable CSS Modules completely
              modules: false,
              // Enable class name renaming with a hash (adjust to your preference)
              localIdentName: '[hash:base64:8]', // Renaming class with base64 hash
            };
          }
        });
      }
    });
    return config;
  },
};

export default nextConfig;
