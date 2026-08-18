import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-8",
];

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="We turn business challenges into digital solutions."
          description="Six ways we work — from a first product to the system that replaces the spreadsheet."
        />
        <div className="mt-14 grid grid-cols-1 gap-px bg-line lg:grid-cols-12">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className={`group bg-ink p-7 transition-colors duration-300 hover:bg-charcoal md:p-8 ${spans[i]}`}
            >
              <ServiceIcon slug={service.slug} />
              <div className="mt-8 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl tracking-tight text-mist md:text-[1.75rem]">
                  {service.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-teal-bright"
                />
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-[15px]">
                {service.short}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
