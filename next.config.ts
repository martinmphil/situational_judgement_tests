import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: './',
  allowedDevOrigins: ['192.168.1.98'],
  /* config options here */
};

export default nextConfig;
