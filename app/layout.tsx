import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/content/siteContent";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.siteUrl),
  title: {
    default: siteContent.seo.defaultTitle,
    template: `%s · ${siteContent.brand.name}`
  },
  description: siteContent.seo.defaultDescription,
  openGraph: {
    type: "website",
    siteName: siteContent.brand.name,
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.defaultDescription,
    url: siteContent.seo.siteUrl,
    images: [{ url: siteContent.seo.ogImagePath }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.defaultDescription,
    images: [siteContent.seo.ogImagePath]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-dvh flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
