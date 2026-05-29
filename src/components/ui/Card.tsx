import Link from "next/link";
import { cn } from "@/lib/utils";

type Tone = "dark" | "light";

const toneClasses: Record<Tone, string> = {
  dark: "bg-charcoal border border-ivory/10 text-ivory",
  light: "bg-ivory border border-ink/10 text-ink",
};

type CardProps = {
  tone?: Tone;
  href?: string;
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Card({
  tone = "dark",
  href,
  interactive,
  className,
  children,
}: CardProps) {
  const isInteractive = interactive ?? Boolean(href);
  const classes = cn(
    "rounded-3xl p-6 sm:p-8 transition-all duration-300",
    toneClasses[tone],
    isInteractive &&
      "hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block focus-visible:outline-gold")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
