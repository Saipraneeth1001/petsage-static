import type { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteContent.seo.siteUrl.replace(/\/$/, "");
  const staticRoutes = [
    "/",
    ...siteContent.nav.links.map((l) => l.href),
    ...siteContent.footer.legalLinks.map((l) => l.href)
  ];

  const now = new Date().toISOString();
  return staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}

