import { technologies } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/Container";

export function Technology() {
  return (
    <Section className="border-t border-line bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="Technology we work with."
          description="Chosen for the problem. Maintained so you can keep going after launch."
        />
        <ul className="mt-14 grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="border-b border-r border-line px-5 py-6 font-display text-base tracking-tight text-muted transition-colors duration-300 hover:text-teal even:border-r-0 sm:py-7 sm:text-lg sm:even:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
