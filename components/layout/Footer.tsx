import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { navLinks, site, socialLinks } from "@/lib/content";
import { Container } from "@/components/ui/Container";

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl tracking-tight text-mist">VisionBrew</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">Navigate</p>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist/90 transition-colors hover:text-teal-bright"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">Connect</p>
              <ul className="space-y-2.5">
                {socialLinks.map(({ label, href }) => {
                  const Icon = socialIcons[label];
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-mist/90 transition-colors hover:text-teal-bright"
                      >
                        {Icon ? <Icon size={14} /> : null}
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">Contact</p>
              <a
                href={`mailto:${site.email}`}
                className="block text-sm text-mist/90 transition-colors hover:text-teal-bright"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="mt-2 block text-sm text-mist/90 transition-colors hover:text-teal-bright"
              >
                {site.phone}
              </a>
              <a
                href={`https://${site.domain}`}
                className="mt-2 block text-sm text-muted transition-colors hover:text-teal-bright"
              >
                {site.domain}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VisionBrew. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
