import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-16 md:py-24 lg:py-28">
        {eyebrow ? (
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-display text-display text-mist">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
