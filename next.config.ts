import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true // Required for static export
  }
};

export default nextConfig;
