import type { Metadata } from "next";

export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

type PageMetadataInput = {
  absoluteTitle?: boolean;
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  absoluteTitle = false,
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    robots: {
      index: allowIndexing,
      follow: allowIndexing,
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
      ...(path ? { url: path } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
