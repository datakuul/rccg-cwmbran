import { HandHeart, HeartHandshake, UserPlus, CalendarClock } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LivestreamPanel } from "@/components/features/LivestreamPanel";
import { SermonCard } from "@/components/features/SermonCard";
import { sermonsByDate } from "@/data/sermons";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Watch Online",
  description:
    "Join RCCG Overcomers House Cwmbran online. Watch our Sunday service livestream and catch up on recent messages.",
  path: "/watch",
});

const schedule = [
  { day: "Sunday", title: "Sunday Service", time: "10:00 AM", where: "Onsite & livestream" },
  { day: "Wednesday", title: "Prayer Meeting", time: "7:00 PM", where: "Zoom" },
  { day: "Friday", title: "Digging Deep Bible Study", time: "8:00 PM", where: "Zoom" },
];

const ctas = [
  {
    icon: HandHeart,
    title: "Request Prayer",
    text: "Share a need and let our team stand with you.",
    href: "/prayer",
    label: "Request prayer",
  },
  {
    icon: HeartHandshake,
    title: "Give Online",
    text: "Support the work of the church securely.",
    href: "/give",
    label: "Give securely",
  },
  {
    icon: UserPlus,
    title: "Connect With Us",
    text: "New here? Let us know and we'll say hello.",
    href: "/contact",
    label: "Connect",
  },
];

export default function WatchPage() {
  const latestThree = sermonsByDate.slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Watch online"
        title="Worship with us, wherever you are"
        description="Can't make it in person? Join our Sunday service live, or catch up on recent messages any time."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Watch", href: "/watch" },
        ]}
      />

      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <LivestreamPanel />

          <div className="rounded-3xl border border-ivory/10 bg-charcoal p-7">
            <div className="flex items-center gap-2 text-gold">
              <CalendarClock className="size-5" />
              <h2 className="font-display text-lg font-semibold text-ivory">
                Weekly schedule
              </h2>
            </div>
            <ul className="mt-5 divide-y divide-ivory/10">
              {schedule.map((s) => (
                <li key={s.title} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-semibold text-ivory">{s.title}</p>
                    <p className="text-sm text-muted">
                      {s.day} · {s.where}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-gold-soft">
                    {s.time}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              href={site.livestreamUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="mt-6 w-full"
            >
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </Section>

      {/* CTAs */}
      <Section tone="midnight">
        <div className="grid gap-6 md:grid-cols-3">
          {ctas.map(({ icon: Icon, title, text, href, label }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl border border-ivory/10 bg-charcoal/60 p-7"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ivory">
                {title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-ivory/70">{text}</p>
              <div className="mt-5">
                <Button href={href} variant="secondary" size="sm">
                  {label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Latest sermons */}
      <Section tone="charcoal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Catch up" title="Recent messages" />
          <Button href="/sermons" variant="secondary">
            All sermons
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestThree.map((s) => (
            <SermonCard key={s.slug} sermon={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
