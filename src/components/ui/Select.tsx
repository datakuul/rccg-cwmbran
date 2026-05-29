import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full appearance-none rounded-xl border-2 border-gold/55 bg-white px-4 py-3 pr-10 text-ink transition hover:border-gold/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 aria-[invalid=true]:border-burgundy";

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...props }, ref) {
  return (
    <div className="relative">
      <select ref={ref} className={cn(fieldClasses, className)} {...props}>
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink/50"
      />
    </div>
  );
});
