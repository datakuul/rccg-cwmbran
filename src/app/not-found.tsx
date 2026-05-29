import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-[70vh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(216,165,72,0.18),transparent_45%)]" />
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-serif-accent text-7xl text-gold">404</p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-4 text-lg text-ivory/75">
            The page may have moved, or the link might be out of date. Let&apos;s
            get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/plan-your-visit" variant="secondary">
              Plan your visit
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
