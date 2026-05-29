import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href: string };

/**
 * Standard inner-page hero. Optionally renders a background image with overlay.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  breadcrumbs,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: Crumb[];
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "grain relative isolate overflow-hidden bg-ink",
        image ? "pb-16 pt-36 sm:pb-20 sm:pt-44" : "pb-14 pt-32 sm:pb-16 sm:pt-40",
        className,
      )}
    >
      {image ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,165,72,0.18),transparent_42%)]" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(216,165,72,0.16),transparent_38%),linear-gradient(135deg,#0B0B0C_0%,#081826_60%,#171514_100%)]" />
      )}

      <Container>
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {breadcrumbs ? (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol
                className={cn(
                  "flex flex-wrap items-center gap-1 text-xs text-ivory/60",
                  align === "center" && "justify-center",
                )}
              >
                {breadcrumbs.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-1">
                    {i > 0 ? <ChevronRight className="size-3.5" /> : null}
                    <Link href={c.href} className="hover:text-gold-soft">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          {eyebrow ? (
            <div className={cn(align === "center" && "flex justify-center")}>
              <Badge variant="gold">{eyebrow}</Badge>
            </div>
          ) : null}

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.04] text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "mt-5 text-lg leading-relaxed text-ivory/80 sm:text-xl",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
