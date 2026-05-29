import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "sage" | "copper";

const variants: Record<Variant, string> = {
  gold: "bg-gold/15 text-gold-soft ring-1 ring-inset ring-gold/30",
  outline: "bg-transparent text-ivory/80 ring-1 ring-inset ring-ivory/20",
  sage: "bg-sage/20 text-sage ring-1 ring-inset ring-sage/30",
  copper: "bg-copper/15 text-copper ring-1 ring-inset ring-copper/30",
};

export function Badge({
  variant = "gold",
  className,
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
