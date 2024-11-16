/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  basePath: "/e2e-testing-hub",
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: "/e2e-testing-hub",
  },
};

export default nextConfig;
