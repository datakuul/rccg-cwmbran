"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { sermonSeries, sermonSpeakers, sermonTopics } from "@/data/sermons";
import type { Sermon } from "@/data/sermons";
import { SermonCard } from "./SermonCard";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";

const ANY = "All";

export function SermonLibrary({ sermons }: { sermons: Sermon[] }) {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState(ANY);
  const [speaker, setSpeaker] = useState(ANY);
  const [topic, setTopic] = useState(ANY);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sermons.filter((s) => {
      if (series !== ANY && s.series !== series) return false;
      if (speaker !== ANY && s.speaker !== speaker) return false;
      if (topic !== ANY && !s.topics.includes(topic)) return false;
      if (q) {
        const haystack =
          `${s.title} ${s.description} ${s.scripture} ${s.series} ${s.speaker} ${s.topics.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [sermons, query, series, speaker, topic]);

  return (
    <div>
      <div className="rounded-3xl border border-ivory/10 bg-charcoal p-5 sm:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink/40" />
          <label htmlFor="sermon-search" className="sr-only">
            Search sermons
          </label>
          <Input
            id="sermon-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, topic, or scripture…"
            className="pl-12"
          />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ivory/80">
            Series
            <Select value={series} onChange={(e) => setSeries(e.target.value)}>
              <option>{ANY}</option>
              {sermonSeries.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ivory/80">
            Speaker
            <Select value={speaker} onChange={(e) => setSpeaker(e.target.value)}>
              <option>{ANY}</option>
              {sermonSpeakers.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ivory/80">
            Topic
            <Select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option>{ANY}</option>
              {sermonTopics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </Select>
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "sermon" : "sermons"}
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <SermonCard key={s.slug} sermon={s} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-3xl border border-dashed border-ivory/20 p-10 text-center text-ivory/60">
          No sermons match your search. Try clearing a filter.
        </div>
      ) : null}
    </div>
  );
}
