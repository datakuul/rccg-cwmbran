import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SermonLibrary } from "@/components/features/SermonLibrary";
import { sermonsByDate, latestSermon } from "@/data/sermons";
import { formatDate } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sermons",
  description:
    "Watch and listen to messages from RCCG Overcomers House Cwmbran. Search and filter our sermon library by series, speaker, and topic.",
  path: "/sermons",
});

export default function SermonsPage() {
  const rest = sermonsByDate;

  return (
    <>
      <PageHeader
        eyebrow="Messages"
        title="Sermons & teaching"
        description="Catch up on recent messages or revisit a favourite. Practical, Bible-based teaching to help you grow in faith."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sermons", href: "/sermons" },
        ]}
      />

      {/* Featured latest */}
      <Section tone="ink">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-ivory/10 bg-charcoal lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[22rem]">
            <Image
              src={latestSermon.image}
              alt="Worship during a church service"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <PlayCircle className="absolute inset-0 m-auto size-16 text-ivory/90" />
          </div>
          <div className="p-8 lg:p-10">
            <Badge variant="gold">Latest Message</Badge>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-gold-soft">
              {latestSermon.series}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ivory">
              {latestSermon.title}
            </h2>
            <p className="mt-3 font-serif-accent text-lg italic text-gold/80">
              {latestSermon.scripture}
            </p>
            <p className="mt-4 text-ivory/75">{latestSermon.description}</p>
            <p className="mt-4 text-sm text-muted">
              {latestSermon.speaker} · {formatDate(latestSermon.date)}
            </p>
            <div className="mt-6">
              <Button href={`/sermons/${latestSermon.slug}`}>Watch this message</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Library */}
      <Section tone="ink" className="pt-0">
        <SectionHeading
          eyebrow="The library"
          title="Browse all sermons"
          description="Search and filter to find exactly what you're looking for."
        />
        <div className="mt-10">
          <SermonLibrary sermons={rest} />
        </div>
      </Section>
    </>
  );
}
