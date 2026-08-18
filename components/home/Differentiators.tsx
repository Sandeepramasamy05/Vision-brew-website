import { differentiators } from "@/lib/content";
import { Container, Section } from "@/components/ui/Container";

export function Differentiators() {
  return (
    <Section className="border-t border-line">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
              Why VisionBrew
            </p>
            <h2 className="font-display text-display-sm text-mist">
              Technology should solve problems, not create them.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <ol className="divide-y divide-line border-y border-line">
              {differentiators.map((item, i) => (
                <li key={item.title} className="grid gap-4 py-8 sm:grid-cols-12 sm:gap-8">
                  <p className="font-display text-sm text-muted sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-xl tracking-tight text-mist sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-7 md:text-[15px]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
