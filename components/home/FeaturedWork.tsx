import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { CaseVisual } from "@/components/ui/CaseVisual";
import { Container, Section, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedWork() {
  return (
    <Section className="border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Built to solve real problems."
          description="Placeholder engagements, structured the way real case studies will live here — industry, problem, solution, and the stack."
        />
        <div className="mt-16 space-y-20 lg:space-y-28">
          {caseStudies.map((study, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={study.slug}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                    <CaseVisual visual={study.visual} className="aspect-[16/10]" />
                  </div>
                  <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-teal">
                      {study.industry}
                      <span className="mx-2 text-line">/</span>
                      {study.type}
                    </p>
                    <h3 className="mt-3 font-display text-3xl tracking-tight text-mist md:text-4xl">
                      {study.name}
                    </h3>
                    <dl className="mt-6 space-y-4 text-sm leading-relaxed md:text-[15px]">
                      <div>
                        <dt className="text-muted">Problem</dt>
                        <dd className="mt-1 text-mist/90">{study.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">Solution</dt>
                        <dd className="mt-1 text-mist/90">{study.solution}</dd>
                      </div>
                    </dl>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {study.tech.map((t) => (
                        <li
                          key={t}
                          className="border border-line px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href={`/work/${study.slug}`} variant="secondary" className="w-full sm:w-auto">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-16">
          <Link
            href="/work"
            className="text-sm text-mist underline-offset-4 transition-colors hover:text-teal-bright hover:underline"
          >
            All work
          </Link>
        </div>
      </Container>
    </Section>
  );
}
