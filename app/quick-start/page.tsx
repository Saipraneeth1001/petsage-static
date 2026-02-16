import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.quickStart.seoTitle,
  description: siteContent.pages.quickStart.seoDescription
};

export default function QuickStartPage() {
  const { quickStart } = siteContent.pages;
  return (
    <PageShell title={quickStart.title} subtitle={quickStart.subtitle}>
      <div className="space-y-6">
        {quickStart.sections.map((section) => (
          <section key={section.heading} className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold">{section.heading}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-700">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

