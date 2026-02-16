"use client";

import { siteContent } from "@/content/siteContent";

export function WaitlistForm() {
  if (siteContent.waitlist.externalFormUrl) {
    return (
      <a
        href={siteContent.waitlist.externalFormUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white hover:bg-ink-950 transition"
      >
        {siteContent.waitlist.buttonLabel}
      </a>
    );
  }

  return null;
}
