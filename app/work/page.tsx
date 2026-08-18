import type { Metadata } from "next";
import { WorkListing } from "@/components/work/WorkListing";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected VisionBrew projects — structured case studies covering industry, problem, solution, and technology.",
};

export default function WorkPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Work"
        title="Selected projects."
        description="These case studies are structured placeholders — realistic problems and solutions, ready to be replaced with live client work."
      />
      <WorkListing />
      <FinalCta />
    </main>
  );
}
