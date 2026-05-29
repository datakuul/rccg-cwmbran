import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Accessible field wrapper: associates a label, optional hint, and error
 * message with the control via aria attributes. Render the control through
 * the `children` render-prop so it receives the right ids.
 */
export function FormField({
  label,
  hint,
  error,
  required,
  className,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: (props: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
  }) => React.ReactNode;
}) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required ? <span className="ml-1 text-burgundy">*</span> : null}
        {!required ? (
          <span className="ml-2 text-xs font-normal text-ink/45">optional</span>
        ) : null}
      </label>
      {hint ? (
        <p id={hintId} className="text-xs text-ink/55">
          {hint}
        </p>
      ) : null}
      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy,
      })}
      {error ? (
        <p id={errorId} className="text-sm font-medium text-burgundy">
          {error}
        </p>
      ) : null}
    </div>
  );
}
