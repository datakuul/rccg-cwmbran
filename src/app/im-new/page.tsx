import Image from "next/image";
import { Heart, Coffee, MapPin, Smile } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Faq } from "@/components/features/Faq";
import { CtaBand } from "@/components/features/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "I'm New",
  description:
    "New to RCCG Overcomers House Cwmbran? Here's everything a first-time visitor needs to feel welcome and at home.",
  path: "/im-new",
});

const steps = [
  {
    icon: MapPin,
    title: "Arrive",
    text: "Pull into the free parking at Henllys Village Hall and look for our welcome team near the entrance.",
  },
  {
    icon: Smile,
    title: "Be welcomed",
    text: "Say hello, drop the kids at check-in, and grab a seat. No pressure, no spotlight — just a warm welcome.",
  },
  {
    icon: Heart,
    title: "Worship",
    text: "Enjoy heartfelt worship, a practical message, and space to pray and reflect.",
  },
  {
    icon: Coffee,
    title: "Connect",
    text: "Stay for coffee afterwards and meet a few friendly faces. We'd love to get to know you.",
  },
];

const faqs = [
  {
    q: "Do I need to be religious to come?",
    a: "Not at all. Whether you have a strong faith, are exploring, or are simply curious, you are genuinely welcome — exactly as you are.",
  },
  {
    q: "Will I have to do anything or give money?",
    a: "No. You can simply come, sit, and take it all in. There is an opportunity to give, but there's never any pressure or expectation on guests.",
  },
  {
    q: "I'd be coming on my own. Is that okay?",
    a: "Absolutely. Lots of people come for the first time on their own. Our welcome team will look after you, and you'll find it's a friendly, easy place to be.",
  },
  {
    q: "What do you offer for children?",
    a: "Children are warmly cared for during the service by our DBS-checked team, with age-appropriate activities. You'll check them in and out safely.",
  },
];

export default function ImNewPage() {
  return (
    <>
      <PageHeader
        eyebrow="Come as you are"
        title="You are welcome here"
        description="Visiting a church for the first time takes courage. We want to make it easy — no awkwardness, no pressure, just a warm welcome and a place to belong."
        image="/images/church/worship-hands.webp"
        imageAlt="Diverse congregation worshipping with raised hands"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "I'm New", href: "/im-new" },
        ]}
      />

      {/* Welcome split */}
      <Section tone="ivory">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/church/congregation-bw.webp"
              alt="Members of a congregation together in community"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              tone="light"
              eyebrow="A family, not a crowd"
              title="A place to belong"
              description="We're a diverse, multigenerational family in Cwmbran, united by our love for Jesus and for one another. Whatever you've been through, whatever you believe right now, there's room for you here."
            />
            <div className="mt-6">
              <Button href="/plan-your-visit" variant="light" size="lg">
                Plan your first visit
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* What happens on Sunday */}
      <Section tone="charcoal">
        <SectionHeading
          align="center"
          eyebrow="Your first Sunday"
          title="What happens when you arrive"
          className="mx-auto"
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="rounded-3xl border border-ivory/10 bg-ink/40 p-7"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-sm font-semibold text-gold-soft">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ivory">
                {title}
              </h3>
              <p className="mt-2 text-sm text-ivory/70">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section tone="ivory">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Honest answers"
            title="Questions you might be asking"
            className="mx-auto"
          />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
