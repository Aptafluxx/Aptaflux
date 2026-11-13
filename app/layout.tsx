import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { PageTransition } from "@/components/providers/PageTransition";
import { site } from "@/content/site";
import { bodyFont, displayFont } from "@/lib/fonts";
import { allowIndexing } from "@/lib/metadata";
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
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
  },
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1E8" },
    { media: "(prefers-color-scheme: dark)", color: "#060D10" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#F5F1E8" />
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => { const stored = localStorage.getItem("theme"); const theme = stored === "light" || stored === "dark" ? stored : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); document.documentElement.dataset.theme = theme; document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#060D10" : "#F5F1E8"); })()`}
        </Script>
      </head>
      <body className="flex min-h-svh flex-col text-body">
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
