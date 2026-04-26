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
        {quickStart.sections.map((section) => {
          const sectionTitle = section.title ?? section.heading;
          const steps = section.steps ?? section.items;
          const images = section.images ?? [];
          return (
            <section key={sectionTitle} className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft">
              <h2 className="text-lg font-semibold">{sectionTitle}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-700">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              {images.length > 0 ? (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {images.map((image) => (
                    <figure key={image.src} className="overflow-hidden rounded-2xl border border-black/10 bg-surface-50">
                      <img src={image.src} alt={image.alt} className="h-auto w-full object-cover" loading="lazy" />
                      {image.caption ? (
                        <figcaption className="px-3 py-2 text-xs text-ink-700">{image.caption}</figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              ) : null}
              {section.note ? (
                <div className="mt-4 rounded-xl border border-accent-600/20 bg-accent-600/5 px-4 py-3 text-sm text-ink-700">
                  {section.note}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
