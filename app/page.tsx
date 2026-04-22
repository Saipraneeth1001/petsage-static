import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.pages.home.seoTitle,
  description: siteContent.pages.home.seoDescription
};

export default function HomePage() {
  const { home } = siteContent.pages;
  const { about } = siteContent.pages;
  return (
    <>
      <Hero />

      <Section title={home.problemTitle}>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-surface-50 p-6 shadow-soft">
            <h3 className="text-lg font-semibold">{home.problemTitle}</h3>
            <p className="mt-3 text-sm text-ink-700">{home.problemStatement}</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold">{home.solutionTitle}</h3>
            <p className="mt-3 text-sm text-ink-700">{home.solutionStatement}</p>
          </div>
        </div>
      </Section>

      <Section title={home.featureHighlightsTitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {home.featureHighlights.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-black/5 bg-surface-50 p-5 shadow-soft">
              <div className="text-lg font-semibold">{feature.title}</div>
              <p className="mt-2 text-sm text-ink-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={home.howToUseTitle}>
        <ol className="grid gap-4 lg:grid-cols-3">
          {home.howToUseSteps.map((s) => (
            <li key={s.title} className="rounded-2xl border border-black/5 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-ink-500">{s.stepLabel}</div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-ink-700">{s.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={home.whyItMattersTitle}>
        <ul className="grid gap-3 sm:grid-cols-3">
          {home.whyItMatters.map((item) => (
            <li key={item} className="rounded-2xl border border-black/5 bg-surface-50 p-5 text-sm font-medium">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={home.trustSafetyTitle}>
        <div className="rounded-2xl border border-black/5 bg-white p-6">
          <p className="text-sm text-ink-700">{home.trustSafetyNote}</p>
        </div>
      </Section>

      <Section title="Why we started">
        <div className="rounded-2xl border border-black/5 bg-surface-50 p-6 shadow-soft">
          <p className="text-sm text-ink-700">{about.subtitle}</p>
          <p className="mt-3 text-sm text-ink-700">{about.paragraphs[0]}</p>
          <p className="mt-2 text-sm text-ink-700">{about.paragraphs[9]}</p>
          <Link
            href="/about"
            className="mt-4 inline-flex rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white hover:bg-ink-950 transition"
          >
            Read the full story
          </Link>
        </div>
      </Section>
    </>
  );
}
