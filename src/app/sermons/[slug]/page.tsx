import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Play, Calendar, User, BookOpen, ArrowLeft } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SermonCard } from "@/components/features/SermonCard";
import { sermons, getSermon } from "@/data/sermons";
import { formatDate } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return sermons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const sermon = getSermon(slug);
  if (!sermon) return pageMeta({ title: "Sermon" });
  return pageMeta({
    title: sermon.title,
    description: sermon.description,
    path: `/sermons/${sermon.slug}`,
    image: sermon.image,
  });
}

export default async function SermonDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const sermon = getSermon(slug);
  if (!sermon) notFound();

  const related = sermons
    .filter((s) => s.slug !== sermon.slug && s.series === sermon.series)
    .slice(0, 3);
  const fallback = sermons.filter((s) => s.slug !== sermon.slug).slice(0, 3);
  const relatedList = related.length ? related : fallback;

  return (
    <>
      <section className="grain relative isolate overflow-hidden bg-ink pb-12 pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(216,165,72,0.16),transparent_40%),linear-gradient(135deg,#0B0B0C,#081826,#171514)]" />
        <Container>
          <Link
            href="/sermons"
            className="inline-flex items-center gap-1.5 text-sm text-ivory/70 hover:text-gold-soft"
          >
            <ArrowLeft className="size-4" /> All sermons
          </Link>
          <div className="mt-6 max-w-3xl">
            <Badge variant="gold">{sermon.series}</Badge>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
              {sermon.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivory/75">
              <span className="inline-flex items-center gap-2">
                <User className="size-4 text-gold" />
                {sermon.speaker}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="size-4 text-gold" />
                {formatDate(sermon.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="size-4 text-gold" />
                {sermon.scripture}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="ink" className="pt-0">
        {/* Video placeholder */}
        <div className="relative grid aspect-video place-items-center overflow-hidden rounded-3xl border border-ivory/10 bg-charcoal">
          <Image
            src={sermon.image}
            alt="Worship during a church service"
            fill
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="object-cover opacity-40"
          />
          <div className="relative flex flex-col items-center text-center">
            <a
              href={sermon.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch "${sermon.title}" on YouTube`}
              className="grid size-20 place-items-center rounded-full bg-gold text-ink transition hover:scale-105 hover:bg-gold-soft"
            >
              <Play className="size-9 translate-x-0.5 fill-current" />
            </a>
            <p className="mt-4 text-sm text-ivory/70">
              Watch this message on our YouTube channel
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ivory">
              About this message
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ivory/80">
              {sermon.description}
            </p>
            <p className="mt-6 font-serif-accent text-xl italic text-gold/80">
              {sermon.scripture}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={sermon.videoUrl} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </Button>
              <Button href="/sermons" variant="secondary">
                Browse more
              </Button>
            </div>
          </div>
          <aside className="rounded-3xl border border-ivory/10 bg-charcoal p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Topics
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {sermon.topics.map((t) => (
                <li key={t}>
                  <Badge variant="outline">{t}</Badge>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="charcoal">
        <SectionHeading eyebrow="Keep growing" title="Related messages" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedList.map((s) => (
            <SermonCard key={s.slug} sermon={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
