import type { MetadataRoute } from "next";
import { allowIndexing } from "@/lib/metadata";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://aptaflux.com",
);

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
