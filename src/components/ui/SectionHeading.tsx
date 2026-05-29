import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** "dark" = light text on dark bg, "light" = dark text on light bg. */
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const muted = tone === "dark" ? "text-muted" : "text-copper";
  const body = tone === "dark" ? "text-ivory/75" : "text-ink/70";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            muted,
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className={cn("mt-4 text-lg leading-relaxed", body)}>{description}</p>
      ) : null}
    </div>
  );
}
