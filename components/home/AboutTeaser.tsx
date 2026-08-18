import { about } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

export function AboutTeaser() {
  return (
    <Section>
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
              Studio
            </p>
            <h2 className="font-display text-display-sm text-mist">{about.headline}</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-muted md:text-lg">{about.story[0]}</p>
            <div className="mt-8">
              <Button href="/about" variant="secondary" className="w-full sm:w-auto">
                About VisionBrew
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
