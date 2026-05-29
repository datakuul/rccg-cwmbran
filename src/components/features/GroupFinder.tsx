"use client";

import { useMemo, useState } from "react";
import { Clock, MapPin, Users, Baby, Search } from "lucide-react";
import {
  groups,
  groupDays,
  groupLifeStages,
  groupFormats,
} from "@/data/groups";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";

const ANY = "Any";

export function GroupFinder() {
  const [day, setDay] = useState(ANY);
  const [lifeStage, setLifeStage] = useState(ANY);
  const [format, setFormat] = useState(ANY);
  const [childcare, setChildcare] = useState(false);

  const filtered = useMemo(() => {
    return groups.filter((g) => {
      if (day !== ANY && g.day !== day) return false;
      if (lifeStage !== ANY && g.lifeStage !== lifeStage) return false;
      if (format !== ANY && g.format !== format) return false;
      if (childcare && !g.childcare) return false;
      return true;
    });
  }, [day, lifeStage, format, childcare]);

  return (
    <div>
      <div className="rounded-3xl border border-ink/10 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
            Day
            <Select value={day} onChange={(e) => setDay(e.target.value)}>
              <option>{ANY}</option>
              {groupDays.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </Select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
            Life stage
            <Select
              value={lifeStage}
              onChange={(e) => setLifeStage(e.target.value)}
            >
              <option>{ANY}</option>
              {groupLifeStages.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
            Format
            <Select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option>{ANY}</option>
              {groupFormats.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </Select>
          </label>
        </div>
        <label className="mt-4 flex items-center gap-2.5 text-sm font-medium text-ink/80">
          <input
            type="checkbox"
            checked={childcare}
            onChange={(e) => setChildcare(e.target.checked)}
            className="size-4 rounded border-ink/30 text-gold focus:ring-gold"
          />
          Childcare available
        </label>
      </div>

      <p className="mt-6 flex items-center gap-2 text-sm text-ink/60" aria-live="polite">
        <Search className="size-4" />
        {filtered.length} {filtered.length === 1 ? "group" : "groups"} match your
        filters
      </p>

      <div className="mt-4 grid gap-5 md:grid-cols-2">
        {filtered.map((g) => (
          <article
            key={g.slug}
            className="rounded-3xl border border-ink/10 bg-ivory p-6 transition hover:border-gold/40"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink">
                {g.name}
              </h3>
              <Badge variant={g.format === "Online" ? "sage" : "copper"}>
                {g.format}
              </Badge>
            </div>
            <p className="mt-2 text-sm text-ink/70">{g.description}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/65">
              <li className="flex items-center gap-1.5">
                <Clock className="size-4 text-copper" />
                {g.day}s · {g.time}
              </li>
              <li className="flex items-center gap-1.5">
                <Users className="size-4 text-copper" />
                {g.lifeStage}
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="size-4 text-copper" />
                {g.location}
              </li>
              {g.childcare ? (
                <li className="flex items-center gap-1.5 text-sage">
                  <Baby className="size-4" />
                  Childcare
                </li>
              ) : null}
            </ul>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-3xl border border-dashed border-ink/20 bg-ivory p-10 text-center text-ink/60">
          No groups match those filters yet. Try widening your search, or{" "}
          <a href="/contact" className="font-semibold text-copper underline">
            get in touch
          </a>{" "}
          and we&apos;ll help you find a place.
        </div>
      ) : null}
    </div>
  );
}
