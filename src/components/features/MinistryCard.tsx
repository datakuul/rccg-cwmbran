import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Users,
  HeartHandshake,
  Music,
  HandHeart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { Ministry } from "@/data/ministries";

const icons = {
  kids: Baby,
  youth: Sparkles,
  groups: Users,
  outreach: HeartHandshake,
  worship: Music,
  prayer: HandHeart,
} as const;

export function MinistryCard({ ministry }: { ministry: Ministry }) {
  const Icon = icons[ministry.icon];
  return (
    <Link
      href={ministry.href}
      className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-ivory/10 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="absolute inset-0">
        <Image
          src={ministry.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      </div>
      <div className="relative p-6 pt-24">
        <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
          <Icon className="size-5" />
        </span>
        <h3 className="font-display text-xl font-semibold text-ivory">
          {ministry.name}
        </h3>
        <p className="mt-1 text-sm text-gold-soft">{ministry.tagline}</p>
        <p className="mt-3 line-clamp-2 text-sm text-ivory/70">
          {ministry.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ivory group-hover:text-gold-soft">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
