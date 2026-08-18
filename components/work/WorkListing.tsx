"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { caseStudies } from "@/lib/content";
import { CaseVisual } from "@/components/ui/CaseVisual";
import { Container } from "@/components/ui/Container";

const allTag = "All";

export function WorkListing() {
  const industries = useMemo(
    () => [allTag, ...Array.from(new Set(caseStudies.map((c) => c.industry)))],
    []
  );
  const [active, setActive] = useState(allTag);
  const filtered =
    active === allTag ? caseStudies : caseStudies.filter((c) => c.industry === active);

  return (
    <Container className="py-12 md:py-16">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by industry">
        {industries.map((tag) => (
          <button
            key={tag}
            type="button"
            role="tab"
            aria-selected={active === tag}
            onClick={() => setActive(tag)}
            className={`min-h-11 px-4 text-sm transition-colors ${
              active === tag
                ? "bg-mist text-ink"
                : "border border-line text-muted hover:text-mist"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className="mt-12 grid gap-10 sm:grid-cols-2">
        {filtered.map((study) => (
          <li key={study.slug}>
            <Link href={`/work/${study.slug}`} className="group block">
              <CaseVisual
                visual={study.visual}
                className="aspect-[16/10] transition-opacity duration-300 group-hover:opacity-90"
              />
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-teal">
                {study.industry}
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-mist group-hover:text-teal-bright">
                {study.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{study.overview}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
