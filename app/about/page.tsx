import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.about.seoTitle,
  description: siteContent.pages.about.seoDescription
};

export default function AboutPage() {
  const { about } = siteContent.pages;
  return (
    <PageShell title={about.title} subtitle={about.subtitle}>
      <div className="prose prose-slate max-w-none">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </PageShell>
  );
}

