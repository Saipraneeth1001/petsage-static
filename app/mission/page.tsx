import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.mission.seoTitle,
  description: siteContent.pages.mission.seoDescription
};

export default function MissionPage() {
  const { mission } = siteContent.pages;
  return (
    <PageShell title={mission.title} subtitle={mission.subtitle}>
      <div className="prose prose-slate max-w-none">
        {mission.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </PageShell>
  );
}

