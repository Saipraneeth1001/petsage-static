import { Container } from "@/components/Container";

export function Section({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-2 text-sm text-ink-700">{subtitle}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

