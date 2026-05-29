import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "ink" | "charcoal" | "midnight" | "ivory" | "parchment" | "burgundy";

const toneClasses: Record<Tone, string> = {
  ink: "bg-ink text-ivory",
  charcoal: "bg-charcoal text-ivory",
  midnight: "bg-midnight text-ivory",
  ivory: "bg-ivory text-ink",
  parchment: "bg-parchment text-ink",
  burgundy: "bg-burgundy text-ivory",
};

export function Section({
  tone = "ink",
  className,
  containerClassName,
  children,
  id,
  bleed = false,
}: {
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  /** When true, children are not wrapped in a Container. */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 sm:py-16 lg:py-24",
        toneClasses[tone],
        className,
      )}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
