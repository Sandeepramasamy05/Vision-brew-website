import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <h2 className="font-display text-display text-ink">
            Have an idea worth building?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            Tell us what you&apos;re trying to solve. We&apos;ll help you figure out what
            to build next.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="invert" className="w-full sm:w-auto">
              Start a Project
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center justify-center text-sm tracking-wide text-ink/80 underline-offset-4 hover:text-teal hover:underline sm:justify-start"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
