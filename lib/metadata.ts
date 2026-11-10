import type { Metadata } from "next";

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
