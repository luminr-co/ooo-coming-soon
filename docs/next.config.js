/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out/docs",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
