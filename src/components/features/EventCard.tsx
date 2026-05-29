import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock, Repeat } from "lucide-react";
import type { ResolvedEvent } from "@/data/events";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export function EventCard({ event }: { event: ResolvedEvent }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)]">
      <Link href={`/events/${event.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4">
          <Badge variant="copper">{event.category}</Badge>
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">
          <Link href={`/events/${event.slug}`} className="hover:text-copper">
            {event.title}
          </Link>
        </h3>
        <ul className="mt-3 space-y-1.5 text-sm text-ink/70">
          <li className="flex items-center gap-2">
            <Calendar className="size-4 text-copper" />
            {formatDate(event.displayDate)}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-4 text-copper" />
            {event.time}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4 text-copper" />
            {event.location}
          </li>
          {event.recurring ? (
            <li className="flex items-center gap-2 font-medium text-sage">
              <Repeat className="size-4" />
              {event.recurring}
            </li>
          ) : null}
        </ul>
        <p className="mt-4 line-clamp-2 text-sm text-ink/65">
          {event.description}
        </p>
        <Link
          href={`/events/${event.slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-copper hover:text-burgundy"
        >
          Event details
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
