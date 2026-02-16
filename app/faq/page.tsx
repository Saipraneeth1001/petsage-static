import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.faq.seoTitle,
  description: siteContent.pages.faq.seoDescription
};

export default function FaqPage() {
  const { faq } = siteContent.pages;
  return (
    <PageShell title={faq.title} subtitle={faq.subtitle}>
      <div className="space-y-4">
        {faq.items.map((item) => (
          <details key={item.q} className="group rounded-2xl border border-black/5 bg-white p-5 shadow-soft">
            <summary className="cursor-pointer list-none font-semibold">
              {item.q}
              <span className="float-right text-ink-500 group-open:rotate-180 transition">▾</span>
            </summary>
            <p className="mt-3 text-sm text-ink-700">{item.a}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}

