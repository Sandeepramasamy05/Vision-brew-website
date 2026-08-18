import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { CaseVisual } from "@/components/ui/CaseVisual";
import { Container } from "@/components/ui/Container";
import { FinalCta } from "@/components/ui/FinalCta";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case study" };
  return {
    title: study.name,
    description: study.overview,
  };
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-12 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.2em] text-teal">{label}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <main id="main">
      <header className="border-b border-line">
        <Container className="py-16 md:py-24">
          <p className="text-[11px] uppercase tracking-[0.2em] text-teal">
            {study.industry}
            <span className="mx-2 text-line">/</span>
            {study.type}
            <span className="mx-2 text-line">/</span>
            {study.year}
          </p>
          <h1 className="mt-4 font-display text-display text-mist">{study.name}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {study.overview}
          </p>
        </Container>
      </header>

      <CaseVisual visual={study.visual} className="aspect-[21/9] max-h-[520px] w-full" />

      <Container className="max-w-3xl py-4">
        <Block label="Overview">
          <p className="text-[15px] leading-relaxed text-mist/90 md:text-base">{study.overview}</p>
        </Block>
        <Block label="Challenge">
          <p className="text-[15px] leading-relaxed text-mist/90 md:text-base">{study.challenge}</p>
        </Block>
        <Block label="Approach">
          <p className="text-[15px] leading-relaxed text-mist/90 md:text-base">{study.approach}</p>
        </Block>
        <Block label="Solution">
          <p className="text-[15px] leading-relaxed text-mist/90 md:text-base">{study.solution}</p>
        </Block>
        <Block label="Features">
          <ul className="space-y-3">
            {study.features.map((f) => (
              <li
                key={f}
                className="border-b border-line pb-3 text-[15px] text-mist/90 last:border-0"
              >
                {f}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Technology">
          <ul className="flex flex-wrap gap-2">
            {study.tech.map((t) => (
              <li
                key={t}
                className="border border-line px-3 py-1.5 text-xs uppercase tracking-wider text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Results">
          <ul className="space-y-4">
            {study.results.map((r) => (
              <li key={r} className="text-[15px] leading-relaxed text-mist/90 before:mr-3 before:text-teal before:content-['—']">
                {r}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Screenshots">
          <p className="mb-6 text-sm text-muted">
            Interface frames — placeholders until production captures replace them.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <CaseVisual visual={study.visual} className="aspect-[4/3]" />
            <CaseVisual visual={study.visual} className="aspect-[4/3] opacity-80" />
          </div>
        </Block>
      </Container>

      {others.length > 0 ? (
        <section className="border-t border-line">
          <Container className="py-16">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted">More work</p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/work/${item.slug}`} className="group block">
                    <h2 className="font-display text-2xl tracking-tight text-mist group-hover:text-teal-bright">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{item.industry}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-line">
        <Container className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <p className="max-w-lg font-display text-2xl tracking-tight text-mist">
            A similar problem in your business?
          </p>
          <Button href="/contact" className="w-full md:w-auto">
            Start a Project
          </Button>
        </Container>
      </section>
      <FinalCta />
    </main>
  );
}
