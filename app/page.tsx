import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Differentiators } from "@/components/home/Differentiators";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Technology } from "@/components/home/Technology";
import { Transformation } from "@/components/home/Transformation";
import { FinalCta } from "@/components/ui/FinalCta";
import { Marquee } from "@/components/ui/Marquee";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <ServicesGrid />
      <Transformation />
      <Process />
      <Differentiators />
      <Technology />
      <AboutTeaser />
      <FinalCta />
    </main>
  );
}
