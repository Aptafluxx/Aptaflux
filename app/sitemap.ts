import type { MetadataRoute } from "next";
import { allowIndexing } from "@/lib/metadata";
import { work } from "@/content/work";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://aptaflux.com",
);

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing) {
    return [];
  }

  const staticRoutes = ["", "/work", "/services", "/about", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route, siteUrl).toString(),
    })),
    ...work.map((project) => ({
      url: new URL(`/work/${project.slug}`, siteUrl).toString(),
    })),
  ];
}
