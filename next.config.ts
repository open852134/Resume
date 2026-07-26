import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages artifact adapter serves `en.html` (not `en/index.html`),
  // so trailing-slash URLs 404 in production.
  trailingSlash: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;
