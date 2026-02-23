import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "http", 
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;