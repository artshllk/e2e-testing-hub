/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  basePath: isProd ? "/e2e-testing-hub" : "",
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: isProd ? "/e2e-testing-hub" : "",
  },
};

export default nextConfig;
