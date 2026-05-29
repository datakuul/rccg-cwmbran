import { Play, Radio } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/data/site";

/**
 * Livestream placeholder. v1 links out to the church YouTube channel; swap the
 * inner content for an embedded player iframe once a stream key is available.
 */
export function LivestreamPanel() {
  return (
    <div className="overflow-hidden rounded-3xl border border-ivory/10 bg-charcoal">
      <div className="relative grid aspect-video place-items-center bg-gradient-to-br from-midnight via-ink to-charcoal">
        <div className="grain absolute inset-0" />
        <div className="relative flex flex-col items-center text-center">
          <Badge variant="gold">
            <Radio className="size-3.5" /> Live on Sundays
          </Badge>
          <a
            href={site.livestreamUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch the livestream on YouTube"
            className="mt-5 grid size-20 place-items-center rounded-full bg-gold text-ink transition hover:scale-105 hover:bg-gold-soft"
          >
            <Play className="size-9 translate-x-0.5 fill-current" />
          </a>
          <p className="mt-5 max-w-sm px-6 text-sm text-ivory/70">
            Can&apos;t make it in person? Join the service live, or catch up any
            time on our YouTube channel.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <p className="font-display text-lg font-semibold text-ivory">
            Sunday Service Livestream
          </p>
          <p className="text-sm text-muted">Every Sunday · 10:00 AM</p>
        </div>
        <Button href={site.livestreamUrl} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </Button>
      </div>
    </div>
  );
}
