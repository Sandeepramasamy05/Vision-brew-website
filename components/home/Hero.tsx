import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NodeGraph } from "@/components/ui/NodeGraph";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container className="grid items-center gap-10 py-12 md:gap-12 md:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="lg:col-span-7">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
            Software & digital solutions
          </p>
          <h1 className="font-display text-display text-mist">{site.tagline}</h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" className="w-full sm:w-auto">
              Start a Project
            </Button>
            <Button href="/work" variant="secondary" className="w-full sm:w-auto">
              Explore Our Work
            </Button>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="mx-auto h-[220px] w-full max-w-md sm:h-[280px] md:h-[360px] md:max-w-none lg:h-[480px]">
            <NodeGraph />
          </div>
        </div>
      </Container>
    </section>
  );
}
