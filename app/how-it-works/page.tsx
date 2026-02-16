import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.howItWorks.seoTitle,
  description: siteContent.pages.howItWorks.seoDescription
};

export default function HowItWorksPage() {
  const { howItWorks } = siteContent.pages;
  return (
    <PageShell title={howItWorks.title} subtitle={howItWorks.subtitle}>
      <ol className="grid gap-4 lg:grid-cols-3">
        {howItWorks.steps.map((s) => (
          <li key={s.title} className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-wide text-ink-500">{s.stepLabel}</div>
            <div className="mt-2 text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-ink-700">{s.description}</p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}

