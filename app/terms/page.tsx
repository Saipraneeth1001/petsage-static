import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.terms.seoTitle,
  description: siteContent.pages.terms.seoDescription
};

export default function TermsPage() {
  const { terms } = siteContent.pages;
  return (
    <PageShell title={terms.title} subtitle={terms.subtitle}>
      <div className="prose prose-slate max-w-none">
        {terms.sections.map((s) => (
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

