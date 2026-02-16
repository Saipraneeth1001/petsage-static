import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.contact.seoTitle,
  description: siteContent.pages.contact.seoDescription
};

export default function ContactPage() {
  const { contact } = siteContent.pages;
  return (
    <PageShell title={contact.title} subtitle={contact.subtitle}>
      <div className="rounded-2xl border border-black/5 bg-surface-50 p-6 shadow-soft">
        <div className="text-sm text-ink-700">{contact.primaryLine}</div>
        <div className="mt-3 text-lg font-semibold">
          <a className="underline decoration-black/20 hover:decoration-black/40" href={`mailto:${contact.supportEmail}`}>
            {contact.supportEmail}
          </a>
        </div>
        <div className="mt-4 text-sm text-ink-700">{contact.secondaryLine}</div>
      </div>
    </PageShell>
  );
}

