import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aptaflux — Engineering scalable mobile, web, and AI solutions",
  description:
    "Aptaflux builds cross-platform apps, web dashboards, and custom AI tools for businesses that need to ship and scale with confidence.",
  metadataBase: new URL("https://aptaflux.com"),
  openGraph: {
    title: "Aptaflux — Engineering scalable mobile, web, and AI solutions",
    description:
      "Cross-platform apps, web dashboards, and custom AI tools engineered for scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-canvas text-ink font-sans antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
