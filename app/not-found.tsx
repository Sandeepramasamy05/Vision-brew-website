import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main id="main">
      <Container className="py-32">
        <p className="text-[11px] uppercase tracking-[0.2em] text-teal">404</p>
        <h1 className="mt-4 font-display text-display-sm text-mist">Page not found.</h1>
        <p className="mt-4 text-muted">That URL does not exist on this site.</p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm text-mist underline-offset-4 hover:text-teal-bright hover:underline"
        >
          Back home
        </Link>
      </Container>
    </main>
  );
}
