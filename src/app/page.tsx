import Image from "next/image";
import Link from "next/link";
import {
  Shirt,
  Baby,
  Clock,
  Music2,
  BookOpen,
  HandHeart,
  Users,
  ArrowRight,
  Users2,
  HeartHandshake,
  Droplets,
  PlayCircle,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Hero } from "@/components/features/Hero";
import { MinistryCard } from "@/components/features/MinistryCard";
import { EventCard } from "@/components/features/EventCard";
import { TestimonyBlock } from "@/components/features/TestimonyBlock";
import { GivingPanel } from "@/components/features/GivingPanel";

import { ministries } from "@/data/ministries";
import { upcomingEvents } from "@/data/events";
import { latestSermon } from "@/data/sermons";
import { formatDate } from "@/lib/utils";

// Recompute recurring-event dates hourly so "Upcoming events" rolls forward.
export const revalidate = 3600;

const newHere = [
  {
    icon: Shirt,
    q: "What should I wear?",
    a: "Come as you are. You'll see everything from smart to casual — wear whatever feels comfortable for you.",
  },
  {
    icon: Baby,
    q: "What about my kids?",
    a: "Children are warmly welcomed and cared for by our friendly, DBS-checked team during the service.",
  },
  {
    icon: Clock,
    q: "How long is the service?",
    a: "Our Sunday service runs around 90 minutes, with worship, teaching, prayer, and time to connect afterwards.",
  },
];

const sundayExperience = [
  {
    icon: Music2,
    title: "Worship",
    text: "Heartfelt, joyful worship that lifts your eyes to God and your spirit with it.",
  },
  {
    icon: BookOpen,
    title: "Teaching",
    text: "Practical, Bible-based messages you can carry into your everyday life.",
  },
  {
    icon: HandHeart,
    title: "Prayer",
    text: "Space to bring your real life to God, with people ready to pray alongside you.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Warm faces, real friendships, and tea and conversation after the service.",
  },
];

const nextSteps = [
  {
    icon: Users2,
    title: "Join a Group",
    text: "Find your people midweek.",
    href: "/ministries/groups",
  },
  {
    icon: HeartHandshake,
    title: "Serve",
    text: "Use your gifts to bless others.",
    href: "/serve",
  },
  {
    icon: HandHeart,
    title: "Request Prayer",
    text: "Let us stand with you.",
    href: "/prayer",
  },
  {
    icon: Droplets,
    title: "Get Baptized",
    text: "Take your next step of faith.",
    href: "/contact",
  },
];

export default function HomePage() {
  const events = upcomingEvents(3);

  return (
    <>
      <Hero />

      {/* 3. New here */}
      <Section tone="ivory">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="First time?"
          title="Thinking about visiting?"
          description="We know walking into a new church can feel daunting. Here are a few things that might help."
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {newHere.map(({ icon: Icon, q, a }) => (
            <div
              key={q}
              className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {q}
              </h3>
              <p className="mt-2 text-ink/70">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/plan-your-visit" size="lg" variant="light">
            Plan Your Visit
          </Button>
        </div>
      </Section>

      {/* 4. Sunday experience */}
      <Section tone="charcoal">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-3xl lg:order-first">
            <Image
              src="/images/church/congregation-wide.webp"
              alt="Congregation worshipping together during a Sunday service"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Sunday at Overcomers House"
              title="Here's what to expect on Sunday"
              description="Every Sunday is built around four simple things — and there's always a warm welcome waiting."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {sundayExperience.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ivory">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-ivory/70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/im-new" variant="secondary">
                More about your first visit
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Latest sermon */}
      <Section tone="ink">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Link
            href={`/sermons/${latestSermon.slug}`}
            className="group relative block aspect-video overflow-hidden rounded-3xl"
          >
            <Image
              src={latestSermon.image}
              alt="Worship during a church service"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <PlayCircle className="absolute inset-0 m-auto size-16 text-ivory/90 transition group-hover:scale-110 group-hover:text-gold" />
          </Link>
          <div>
            <Badge variant="gold">Latest Message</Badge>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-gold-soft">
              {latestSermon.series}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ivory sm:text-4xl lg:text-5xl">
              {latestSermon.title}
            </h2>
            <p className="mt-3 font-serif-accent text-lg italic text-gold/80">
              {latestSermon.scripture}
            </p>
            <p className="mt-4 text-ivory/75">{latestSermon.description}</p>
            <p className="mt-4 text-sm text-muted">
              {latestSermon.speaker} · {formatDate(latestSermon.date)}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`/sermons/${latestSermon.slug}`}>Watch Latest</Button>
              <Button href="/sermons" variant="secondary">
                Browse Sermons
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Next steps */}
      <Section tone="midnight">
        <SectionHeading
          align="center"
          eyebrow="Find your next step"
          title="Wherever you are, there's a next step"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nextSteps.map(({ icon: Icon, title, text, href }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-3xl border border-ivory/10 bg-charcoal/60 p-7 transition hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ivory">
                {title}
              </h3>
              <p className="mt-1 text-sm text-ivory/65">{text}</p>
              <ArrowRight className="mt-4 size-5 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. Ministries preview */}
      <Section tone="ink">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Get involved"
            title="Ministries for every season of life"
            description="From the littlest ones to our most seasoned saints, there's a place for everyone to belong and grow."
          />
          <Button href="/ministries" variant="secondary">
            All ministries
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m) => (
            <div key={m.slug} className="aspect-[4/5]">
              <MinistryCard ministry={m} />
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Upcoming events */}
      <Section tone="parchment">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            tone="light"
            eyebrow="What's on"
            title="Upcoming events"
            description="There's always something happening. Come and be part of it."
          />
          <Button href="/events" variant="light">
            View all events
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </Section>

      {/* 9. Story / testimony */}
      <Section tone="burgundy">
        <TestimonyBlock
          quote="I came in not knowing a soul, carrying a lot. By the end of the service someone had prayed with me and invited me for coffee. For the first time in a long while, I felt like I belonged."
          attribution="A member of our church family"
          image="/images/church/women-praying-bw.webp"
          imageAlt="People praying and singing together during a church service"
        />
      </Section>

      {/* 10. Giving */}
      <Section tone="ink">
        <GivingPanel />
      </Section>
    </>
  );
}
