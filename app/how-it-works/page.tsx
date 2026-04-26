import type { Metadata } from "next";
import Link from "next/link";
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
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-soft">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent-600/10" />
          <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-surface-100" />
          <div className="relative">
            <p className="max-w-3xl text-sm text-ink-700">{howItWorks.intro}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-surface-50 px-3 py-1 text-xs font-semibold text-ink-700">
                Health timeline
              </span>
              <span className="rounded-full bg-surface-50 px-3 py-1 text-xs font-semibold text-ink-700">
                Prescription OCR
              </span>
              <span className="rounded-full bg-surface-50 px-3 py-1 text-xs font-semibold text-ink-700">
                Reminder workflows
              </span>
              <span className="rounded-full bg-surface-50 px-3 py-1 text-xs font-semibold text-ink-700">
                Vet-ready context
              </span>
            </div>
            <div className="mt-6">
              <Link
                href="/quick-start"
                className="inline-flex rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-950"
              >
                Open step-by-step guide
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">{howItWorks.builtForTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-700">
            {howItWorks.builtFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">{howItWorks.capabilitiesTitle}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {howItWorks.capabilities.map((capability) => (
              <article key={capability.title} className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft">
                <h3 className="text-base font-semibold">{capability.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">{howItWorks.flowTitle}</h2>
          <ol className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {howItWorks.steps.map((s) => (
              <li key={s.title} className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 text-xs font-semibold text-white">
                  {s.stepLabel.replace("Step ", "")}
                </div>
                <div className="mt-2 text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-ink-700">{s.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">{howItWorks.outcomesTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-700">
            {howItWorks.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-50 p-6">
          <h2 className="text-xl font-semibold">{howItWorks.safetyTitle}</h2>
          <p className="mt-3 text-sm text-ink-700">{howItWorks.safetyNote}</p>
          <p className="mt-3 text-sm font-medium text-ink-900">
            If you suspect an emergency, contact a veterinarian immediately.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
