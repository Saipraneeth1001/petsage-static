import Link from "next/link";
import { siteContent } from "@/content/siteContent";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-2xl font-semibold">{siteContent.ui.notFoundTitle}</h1>
      <p className="mt-3 text-sm text-ink-700">{siteContent.ui.notFoundDescription}</p>
      <Link className="mt-6 inline-block rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white" href="/">
        {siteContent.ui.backToHomeLabel}
      </Link>
    </div>
  );
}
