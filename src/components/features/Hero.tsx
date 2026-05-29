import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { ServiceTimesCard } from "./ServiceTimesCard";

export function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[88vh] items-end overflow-hidden bg-ink pb-10 pt-28 sm:min-h-screen sm:pb-14">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/church/worship-hands.webp"
          alt="Congregation worshipping together with raised hands during a church service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,165,72,0.22),transparent_38%)]" />
      </div>

      <Container>
        <div className="max-w-3xl">
          <div className="animate-rise">
            <Badge variant="gold">✦ You are welcome here</Badge>
          </div>
          <p className="animate-rise delay-1 mt-6 text-sm font-medium uppercase tracking-[0.2em] text-gold-soft">
            Sundays at 10:00 AM · Henllys Village Hall, Cwmbran
          </p>
          <h1 className="animate-rise delay-2 mt-4 font-display text-[2.6rem] font-semibold leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
            A church for real people, deep faith, and everyday hope.
          </h1>
          <p className="animate-rise delay-3 mt-6 max-w-xl text-lg leading-relaxed text-ivory/80 sm:text-xl">
            Join a joyful, multigenerational community in the heart of Cwmbran,
            learning to follow Jesus together. Whoever you are, there&apos;s a
            seat saved for you.
          </p>
          <div className="animate-rise delay-4 mt-8 flex flex-wrap gap-3">
            <Button href="/plan-your-visit" size="lg">
              Plan Your Visit
            </Button>
            <Button href="/watch" size="lg" variant="secondary">
              Watch Online
            </Button>
          </div>
        </div>

        <ServiceTimesCard className="animate-fade delay-4 mt-12 max-w-3xl" />
      </Container>
    </section>
  );
}
