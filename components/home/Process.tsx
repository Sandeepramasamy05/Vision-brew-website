"use client";

import { processSteps } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="From first conversation to launch."
        />
        <div className="mt-16 hidden lg:block">
          <div className="relative grid grid-cols-5 gap-8">
            <div className="absolute left-[10%] right-[10%] top-[15px] h-px bg-line" aria-hidden />
            {processSteps.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.08}>
                <div>
                  <div className="relative mb-8 flex justify-center">
                    <span className="relative z-10 h-[31px] w-[31px] rounded-full border border-teal bg-ink" />
                  </div>
                  <p className="font-display text-xl tracking-tight text-mist">{step.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <ol className="relative mt-14 space-y-0 border-l border-line lg:hidden">
          {processSteps.map((step, i) => (
            <li key={step.id} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-teal" />
              <Reveal delay={i * 0.05}>
                <p className="font-display text-xl tracking-tight text-mist">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
