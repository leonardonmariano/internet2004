import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a real dist/client/index.html so static hosts such as Vercel can
  // publish this single-page experience without a Cloudflare Worker runtime.
  output: "export",
};

export default nextConfig;
