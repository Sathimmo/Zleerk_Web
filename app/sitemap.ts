import type { MetadataRoute } from "next";
import { allProducts, siteUrl } from "@/data/store";

// Required so the file is written to out/sitemap.xml in a static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/collection/", "/about/", "/contact/"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const products = allProducts.map((product) => ({
    url: `${siteUrl}/collection/${product.sku}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...products];
}
