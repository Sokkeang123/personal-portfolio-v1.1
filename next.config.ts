/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/personal-portfolio-v1.1",
  assetPrefix: "/personal-portfolio-v1.1/",
};

module.exports = nextConfig;
