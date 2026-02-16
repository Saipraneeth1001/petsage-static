import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.privacy.seoTitle,
  description: siteContent.pages.privacy.seoDescription
};

export default function PrivacyPage() {
  const { privacy } = siteContent.pages;
  return (
    <PageShell title={privacy.title} subtitle={privacy.subtitle}>
      <div className="prose prose-slate max-w-none">
        {privacy.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
      </div>
    </PageShell>
  );
}

