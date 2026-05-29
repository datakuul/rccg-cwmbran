import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A rounded, overflow-clipped image container using next/image fill.
 * Pass an aspect ratio via `ratio` (Tailwind aspect class) and `sizes`.
 */
export function ImageFrame({
  src,
  alt,
  ratio = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  imageClassName,
  priority = false,
  overlay = false,
  rounded = "rounded-3xl",
}: {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  overlay?: boolean;
  rounded?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", rounded, ratio, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imageClassName)}
      />
      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      ) : null}
    </div>
  );
}
