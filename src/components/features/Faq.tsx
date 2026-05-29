type QA = { q: string; a: string };

/** Accessible FAQ using native <details>/<summary> — no JS required. */
export function Faq({ items, tone = "light" }: { items: QA[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="divide-y divide-current/10">
      {items.map(({ q, a }) => (
        <details key={q} className="group py-5">
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold ${
              dark ? "text-ivory" : "text-ink"
            }`}
          >
            {q}
            <span
              className={`grid size-7 shrink-0 place-items-center rounded-full text-xl leading-none transition group-open:rotate-45 ${
                dark ? "bg-ivory/10 text-gold" : "bg-ink/5 text-copper"
              }`}
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className={`mt-3 leading-relaxed ${dark ? "text-ivory/70" : "text-ink/70"}`}>
            {a}
          </p>
        </details>
      ))}
    </div>
  );
}
