import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-xl border-2 border-gold/55 bg-white px-4 py-3 text-ink placeholder:text-ink/40 transition hover:border-gold/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 aria-[invalid=true]:border-burgundy aria-[invalid=true]:ring-burgundy/30";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn(fieldClasses, className)} {...props} />;
});
