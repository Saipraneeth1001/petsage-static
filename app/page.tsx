import { Container } from "@/components/Container";
import { siteContent } from "@/content/siteContent";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.pages.home.seoTitle,
  description: siteContent.pages.home.seoDescription
};

export default function HomePage() {
  const { home } = siteContent.pages;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-50 to-white" />
      <Container className="py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-12">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-surface-50 px-3 py-1 text-xs text-ink-700">
            {siteContent.brand.tagline}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {home.title}
          </h1>
          <p className="mt-5 text-base text-ink-700">{home.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={home.primaryCta.href}
              className="inline-flex rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white hover:bg-ink-950 transition"
            >
              {home.primaryCta.label}
            </Link>
            <Link
              href={home.secondaryCta.href}
              className="inline-flex rounded-xl border border-black/10 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-surface-50 transition"
            >
              {home.secondaryCta.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
