import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

/** Reusable closing call-to-action band. */
export function CtaBand({
  title = "We saved a seat for you",
  description = "Whatever your story, you are welcome here. Come and see for yourself this Sunday.",
  primary = { href: "/plan-your-visit", label: "Plan Your Visit" },
  secondary = { href: "/contact", label: "Get in touch" },
}: {
  title?: string;
  description?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <Section tone="ink">
      <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-midnight via-ink to-charcoal p-10 text-center sm:p-14">
        <div className="absolute -left-20 -top-20 size-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ivory sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-ivory/75">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={primary.href} size="lg">
              {primary.label}
            </Button>
            <Button href={secondary.href} size="lg" variant="secondary">
              {secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
