"use client";

import { useMemo, useState } from "react";
import { eventCategories } from "@/data/events";
import type { ResolvedEvent, EventCategory } from "@/data/events";
import { EventCard } from "./EventCard";
import { cn } from "@/lib/utils";

const ALL = "All";

export function EventsBrowser({ events }: { events: ResolvedEvent[] }) {
  const [active, setActive] = useState<EventCategory | typeof ALL>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? events : events.filter((e) => e.category === active)),
    [events, active],
  );

  const tabs = [ALL, ...eventCategories] as const;

  return (
    <div>
      <div role="tablist" aria-label="Filter events by category" className="flex flex-wrap gap-2">
        {tabs.map((cat) => {
          const selected = active === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                selected
                  ? "bg-gold text-ink"
                  : "border border-ink/15 bg-white text-ink/70 hover:border-gold/40 hover:text-ink",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-ink/55" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "event" : "events"}
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((e) => (
          <EventCard key={e.slug} event={e} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-3xl border border-dashed border-ink/20 bg-white p-10 text-center text-ink/60">
          Nothing in this category right now — check back soon.
        </div>
      ) : null}
    </div>
  );
}
