import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  // @ts-ignore
  turbopack: {
    root: path.join(process.cwd(), '..'),
  },
};

export default nextConfig;
