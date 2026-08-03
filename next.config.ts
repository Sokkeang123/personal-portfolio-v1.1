import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/personal-portfolio-v1.1" : "",
  assetPrefix: isProd ? "/personal-portfolio-v1.1/" : "",
};

export default nextConfig;
