import type { Metadata } from "next";
import { about } from "@/lib/content";
import { Container, Section } from "@/components/ui/Container";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "VisionBrew is a software and digital solutions studio. Good technology starts with a clear vision.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader eyebrow="About" title={about.headline} description={about.story[0]} />

      <Section className="border-b border-line">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl tracking-tight text-mist">The studio</h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7 md:text-lg">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-line bg-charcoal">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl tracking-tight text-mist">Philosophy</h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7 md:text-lg">
            {about.philosophy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-line">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl tracking-tight text-mist">Approach</h2>
          </div>
          <ol className="lg:col-span-7">
            {about.approach.map((item, i) => (
              <li
                key={item}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-line py-6 last:border-0"
              >
                <span className="font-display text-sm text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl tracking-tight text-mist md:text-2xl">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-mist">People</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Roles as they stand. Names and portraits come later — the work does not wait on a
            headshot.
          </p>
          <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2">
            {about.team.map((member) => (
              <li key={member.role} className="bg-ink p-8">
                <div className="mb-8 h-px w-12 bg-teal" />
                <h3 className="font-display text-xl tracking-tight text-mist">{member.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{member.focus}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta />
    </main>
  );
}
