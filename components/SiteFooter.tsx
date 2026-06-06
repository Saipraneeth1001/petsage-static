import Link from "next/link";
import { Container } from "@/components/Container";
import { siteContent } from "@/content/siteContent";

export function SiteFooter() {
  const hasSocials = siteContent.footer.socialLinks.length > 0;
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container className="py-12">
        <div className={hasSocials ? "grid gap-8 md:grid-cols-3" : "grid gap-8 md:grid-cols-2"}>
          <div>
            <div className="text-sm font-semibold">{siteContent.brand.name}</div>
            <div className="mt-2 text-sm text-ink-700">{siteContent.footer.finePrint}</div>
          </div>
          <div>
            <div className="text-sm font-semibold">{siteContent.ui.linksHeading}</div>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              {siteContent.nav.links.map((l) => (
                <li key={l.href}>
                  <Link className="hover:text-ink-900" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
              {siteContent.footer.legalLinks.map((l) => (
                <li key={l.href}>
                  <Link className="hover:text-ink-900" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {hasSocials ? (
            <div>
              <div className="text-sm font-semibold">{siteContent.ui.socialHeading}</div>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                {siteContent.footer.socialLinks.map((l) => (
                  <li key={l.label}>
                    <a className="hover:text-ink-900" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="mt-10 text-xs text-ink-500">
          © {new Date().getFullYear()} {siteContent.brand.name}. {siteContent.ui.footerCopyrightSuffix}
        </div>
      </Container>
    </footer>
  );
}
