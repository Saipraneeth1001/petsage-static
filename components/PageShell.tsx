import { Container } from "@/components/Container";

export function PageShell({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-14">
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? <p className="mt-2 text-sm text-ink-700">{subtitle}</p> : null}
        </header>
        <div className="mt-10">{children}</div>
      </Container>
    </div>
  );
}

