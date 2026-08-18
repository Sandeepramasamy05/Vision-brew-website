import type { Metadata } from "next";
import { site } from "@/lib/content";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with VisionBrew. Tell us what you are trying to solve — we will help figure out what to build next.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Contact"
        title="Start a project."
        description="Tell us what you are trying to solve. A short note is enough — we will follow up to find the right next step."
      />
      <Container className="grid gap-16 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Direct</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 block font-display text-xl tracking-tight text-mist hover:text-teal-bright"
          >
            {site.email}
          </a>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted">
            Based in India. We work with teams across the country — and remotely where it makes
            sense.
          </p>
        </div>
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
