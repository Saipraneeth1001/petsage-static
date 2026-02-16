import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.pages.home.seoTitle,
  description: siteContent.pages.home.seoDescription
};

export default function HomePage() {
  const { home } = siteContent.pages;
  return (
    <>
      <Hero />

      <Section title={home.valuePropsTitle} subtitle={home.valuePropsSubtitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {home.valueProps.map((vp) => (
            <div key={vp.title} className="rounded-2xl border border-black/5 bg-surface-50 p-5 shadow-soft">
              <div className="text-sm font-semibold text-accent-700">{vp.kicker}</div>
              <div className="mt-2 text-lg font-semibold">{vp.title}</div>
              <p className="mt-2 text-sm text-ink-700">{vp.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={home.howItWorksPreviewTitle} subtitle={home.howItWorksPreviewSubtitle}>
        <ol className="grid gap-4 lg:grid-cols-3">
          {siteContent.pages.howItWorks.steps.map((s) => (
            <li key={s.title} className="rounded-2xl border border-black/5 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-ink-500">{s.stepLabel}</div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-ink-700">{s.description}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}

