import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.deleteAccount.seoTitle,
  description: siteContent.pages.deleteAccount.seoDescription
};

export default function DeleteAccountPage() {
  const { deleteAccount } = siteContent.pages;

  return (
    <PageShell title={deleteAccount.title} subtitle={deleteAccount.subtitle}>
      <div className="space-y-6">
        <p className="text-sm text-ink-700">{deleteAccount.intro}</p>

        <div className="rounded-2xl border border-black/5 bg-surface-50 p-6 shadow-soft">
          <p className="text-sm text-ink-700">
            Users can request account deletion by emailing{" "}
            <a className="underline decoration-black/20 hover:decoration-black/40" href={`mailto:${deleteAccount.supportEmail}`}>
              {deleteAccount.supportEmail}
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-ink-700">{deleteAccount.turnaround}</p>
          <p className="mt-3 text-sm text-ink-700">{deleteAccount.dataSummary}</p>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-900">How to request deletion</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-ink-700">
            {deleteAccount.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-ink-700">
            You can use this email template:{" "}
            <a
              className="underline decoration-black/20 hover:decoration-black/40"
              href={deleteAccount.emailTemplateUrl}
            >
              draft the request email
            </a>
            .
          </p>
        </div>
      </div>
    </PageShell>
  );
}
