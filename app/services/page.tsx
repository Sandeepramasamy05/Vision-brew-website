import type { Metadata } from "next";
import { services } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web applications, UI/UX, AI and automation, data, and e-commerce — built around how your business actually works.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Services"
        title="What we build."
        description="We turn ideas, manual processes, and complex requirements into software people can use. Each engagement starts with the work as it happens today."
      />
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-20 border-b border-line ${i % 2 === 1 ? "bg-charcoal" : ""}`}
        >
          <Container className="grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <ServiceIcon slug={service.slug} />
              <h2 className="mt-6 font-display text-3xl tracking-tight text-mist md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{service.summary}</p>
            </div>
            <div className="space-y-10 lg:col-span-7">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-teal">What it is</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist/90">{service.what}</p>
              </div>
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-teal">When it fits</h3>
                <ul className="mt-3 space-y-2">
                  {service.fits.map((item) => (
                    <li
                      key={item}
                      className="border-l border-line pl-4 text-[15px] leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-teal">
                  Typical outcomes
                </h3>
                <ul className="mt-3 space-y-2">
                  {service.outcomes.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] leading-relaxed text-mist/90 before:mr-3 before:text-teal before:content-['—']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}
      <Section>
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-lg font-display text-2xl tracking-tight text-mist">
            Not sure which of these you need? Start with the problem.
          </p>
          <Button href="/contact" className="w-full md:w-auto">
            Start a Project
          </Button>
        </Container>
      </Section>
      <FinalCta />
    </main>
  );
}
