import { ArrowRight } from "lucide-react";
import { transformation } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/Container";

export function Transformation() {
  return (
    <Section className="border-t border-line bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="Transformation"
          title="Manual → Digital"
          description="The shift we design for: from scattered tools to a system the business can see and run."
        />
        <div className="mt-14 grid gap-0 md:grid-cols-[1fr_auto_1fr]">
          <div className="border border-line bg-ink p-6 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Before</p>
            <ul className="mt-8 space-y-5">
              {transformation.before.map((item) => (
                <li
                  key={item}
                  className="border-b border-line pb-4 font-display text-2xl tracking-tight text-muted last:border-0 md:text-3xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden items-center justify-center px-4 md:flex" aria-hidden>
            <ArrowRight className="text-teal" size={28} />
          </div>
          <div className="flex items-center justify-center py-4 text-teal md:hidden" aria-hidden>
            <ArrowRight className="rotate-90" size={24} />
          </div>
          <div className="border border-line bg-ink p-6 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-teal">After</p>
            <ul className="mt-8 space-y-5">
              {transformation.after.map((item) => (
                <li
                  key={item}
                  className="border-b border-line pb-4 font-display text-2xl tracking-tight text-mist last:border-0 md:text-3xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
