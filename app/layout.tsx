import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { PageTransition } from "@/components/providers/PageTransition";
import { site } from "@/content/site";
import { bodyFont, displayFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aptaflux.com",
  ),
  title: {
    default: site.brand,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.brand,
    title: site.brand,
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand,
    description: site.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="flex min-h-svh flex-col">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <LenisProvider>
          <Navbar />
          <main className="flex-1" id="main-content" tabIndex={-1}>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
