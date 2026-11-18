import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/store";

// Required so the file is written to out/robots.txt in a static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
