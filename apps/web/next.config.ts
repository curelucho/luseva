import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@luseva/ui", "@luseva/types", "@luseva/config"],
};

export default nextConfig;
