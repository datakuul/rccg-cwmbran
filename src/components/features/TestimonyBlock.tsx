import Image from "next/image";
import { Quote } from "lucide-react";

export function TestimonyBlock({
  quote,
  attribution,
  image,
  imageAlt,
}: {
  quote: string;
  attribution: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent" />
      </div>
      <figure>
        <Quote className="size-10 text-gold" aria-hidden />
        <blockquote className="mt-5 font-serif-accent text-2xl leading-snug text-ivory sm:text-3xl">
          “{quote}”
        </blockquote>
        <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
          {attribution}
        </figcaption>
      </figure>
    </div>
  );
}
