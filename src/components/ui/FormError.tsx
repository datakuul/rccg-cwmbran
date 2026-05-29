import { AlertCircle } from "lucide-react";
import { site } from "@/data/site";

/** Inline error banner shown when a form submission fails to send. */
export function FormError() {
  return (
    <p
      role="alert"
      className="flex items-start gap-2 rounded-xl border border-burgundy/30 bg-burgundy/5 px-4 py-3 text-sm text-burgundy"
    >
      <AlertCircle className="mt-0.5 size-4 shrink-0" />
      <span>
        Sorry, something went wrong sending your message. Please try again, or
        email us directly at{" "}
        <a href={`mailto:${site.email}`} className="font-semibold underline">
          {site.email}
        </a>
        .
      </span>
    </p>
  );
}
