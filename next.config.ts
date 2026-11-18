import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `npm run build` writes plain HTML/CSS/JS to `out/`.
  output: "export",
  // Emit `/about/index.html` instead of `/about.html` so any static host works.
  trailingSlash: true,
  // The image optimizer needs a server, so serve images as-is.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
