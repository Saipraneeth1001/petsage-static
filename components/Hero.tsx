import { Container } from "@/components/Container";
import { WaitlistForm } from "@/components/WaitlistForm";
import { siteContent } from "@/content/siteContent";

export function Hero() {
  const { hero } = siteContent.pages.home;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-50 to-white" />
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink-700">
              {siteContent.brand.tagline}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-5 text-base text-ink-700">{hero.subtitle}</p>
            <p className="mt-4 text-sm text-ink-500">{hero.trustLine}</p>
          </div>

          <div id="waitlist" className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
            <div className="text-lg font-semibold">{siteContent.waitlist.title}</div>
            <div className="mt-1 text-sm text-ink-700">{siteContent.waitlist.subtitle}</div>
            <div className="mt-5">
              <WaitlistForm />
            </div>
            <div className="mt-4 text-xs text-ink-500">
              {siteContent.ui.waitlistPrivacyNotePrefix}{" "}
              <a className="underline decoration-black/20 hover:decoration-black/40" href="/privacy">
                {siteContent.ui.waitlistPrivacyNoteLinkLabel}
              </a>
              {siteContent.ui.waitlistPrivacyNoteSuffix}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
