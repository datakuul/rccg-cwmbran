import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { Sermon } from "@/data/sermons";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export function SermonCard({ sermon }: { sermon: Sermon }) {
  return (
    <Link
      href={`/sermons/${sermon.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-ivory/10 bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={sermon.image}
          alt="Worship during a church service"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <PlayCircle className="absolute bottom-4 right-4 size-10 text-ivory/90 transition group-hover:text-gold" />
        <span className="absolute left-4 top-4">
          <Badge variant="gold">{sermon.series}</Badge>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-ivory group-hover:text-gold-soft">
          {sermon.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-ivory/65">
          {sermon.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted">
          <span>{sermon.speaker}</span>
          <span aria-hidden>·</span>
          <span>{formatDate(sermon.date)}</span>
        </div>
        <p className="mt-1 font-serif-accent text-sm italic text-gold/80">
          {sermon.scripture}
        </p>
      </div>
    </Link>
  );
}
