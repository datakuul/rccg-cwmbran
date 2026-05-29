import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  MapPin,
  Repeat,
  ArrowLeft,
  CalendarPlus,
  Video,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/features/EventCard";
import { events, getEvent, resolveEvent, sortedEvents } from "@/data/events";
import { formatDate } from "@/lib/utils";
import { pageMeta, eventJsonLd } from "@/lib/seo";
import { siteUrl } from "@/data/site";

type Params = Promise<{ slug: string }>;

// Recompute recurring-event dates hourly so they always roll forward.
export const revalidate = 3600;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return pageMeta({ title: "Event" });
  return pageMeta({
    title: event.title,
    description: event.description,
    path: `/events/${event.slug}`,
    image: event.image,
  });
}

export default async function EventDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const base = getEvent(slug);
  if (!base) notFound();
  const event = resolveEvent(base);

  const more = sortedEvents()
    .filter((e) => e.slug !== event.slug)
    .slice(0, 3);

  const jsonLd = eventJsonLd({
    name: event.title,
    startDateIso: `${event.displayDate}T10:00:00+01:00`,
    description: event.description,
    locationName: event.location,
    url: `${siteUrl}/events/${event.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-ink pb-12 pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        </div>
        <Container>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm text-ivory/70 hover:text-gold-soft"
          >
            <ArrowLeft className="size-4" /> All events
          </Link>
          <div className="mt-6 max-w-2xl">
            <Badge variant="gold">{event.category}</Badge>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
              {event.title}
            </h1>
          </div>
        </Container>
      </section>

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <SectionHeading tone="light" title="About this event" as="h2" />
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              {event.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {event.zoom ? (
                <Button
                  href={event.zoom.joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Video className="size-4" />
                  Join on Zoom
                </Button>
              ) : null}
              <Button
                href="#"
                variant={event.zoom ? "light" : "primary"}
                className="pointer-events-auto"
              >
                <CalendarPlus className="size-4" />
                Add to calendar
              </Button>
              {event.registrationUrl ? (
                <Button
                  href={event.registrationUrl}
                  variant="light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </Button>
              ) : (
                <Button href="/plan-your-visit" variant="light">
                  Plan your visit
                </Button>
              )}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-ink/10 bg-white p-7 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Details
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-ink/75">
              <li className="flex items-start gap-3">
                <Calendar className="mt-0.5 size-5 text-copper" />
                <span>
                  <span className="block font-semibold text-ink">
                    {event.recurrence ? "Next date" : "Date"}
                  </span>
                  {formatDate(event.displayDate)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 text-copper" />
                <span>
                  <span className="block font-semibold text-ink">Time</span>
                  {event.time}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-copper" />
                <span>
                  <span className="block font-semibold text-ink">Location</span>
                  {event.location}
                </span>
              </li>
              {event.recurring ? (
                <li className="flex items-start gap-3">
                  <Repeat className="mt-0.5 size-5 text-copper" />
                  <span>
                    <span className="block font-semibold text-ink">Frequency</span>
                    {event.recurring}
                  </span>
                </li>
              ) : null}
            </ul>

            {event.zoom ? (
              <div className="mt-6 rounded-2xl border border-copper/30 bg-parchment/60 p-5">
                <div className="flex items-center gap-2 text-copper">
                  <Video className="size-5" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    Join on Zoom
                  </h3>
                </div>
                <dl className="mt-3 space-y-2 text-sm text-ink/75">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="font-semibold text-ink">Meeting ID</dt>
                    <dd className="tabular-nums">{event.zoom.meetingId}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="font-semibold text-ink">Passcode</dt>
                    <dd className="tabular-nums">{event.zoom.passcode}</dd>
                  </div>
                </dl>
                <Button
                  href={event.zoom.joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className="mt-4 w-full"
                >
                  Open Zoom
                </Button>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading tone="light" eyebrow="More to come" title="Other events" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {more.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </Section>
    </>
  );
}
