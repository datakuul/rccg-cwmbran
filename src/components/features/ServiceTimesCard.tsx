import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function ServiceTimesCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-ivory/15 bg-ink/60 p-6 backdrop-blur-md sm:p-7",
        className,
      )}
    >
      <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold/90">
                Service Times
              </p>
              <ul className="mt-1 space-y-0.5 text-sm text-ivory/85">
                {site.serviceTimes.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold/90">
                Where We Meet
              </p>
              <p className="mt-1 text-sm text-ivory/85">{site.address}</p>
            </div>
          </div>
        </div>
        <a
          href={site.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold-soft"
        >
          Get Directions
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
