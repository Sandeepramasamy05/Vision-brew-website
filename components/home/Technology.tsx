import { technologyGroups } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/Container";

export function Technology() {
  return (
    <Section className="border-t border-line bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="The stack we use to ship production systems."
          description="Chosen for the problem. Maintained so you can keep going after launch."
        />
        <div className="mt-14 space-y-12">
          {technologyGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
                {group.label}
              </p>
              <ul className="grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-5">
                {group.items.map((tech) => (
                  <li
                    key={tech}
                    className="border-b border-r border-line px-5 py-6 font-display text-base tracking-tight text-muted transition-colors duration-300 hover:text-teal even:border-r-0 sm:even:border-r sm:[&:nth-child(3n)]:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(5n)]:border-r-0"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
