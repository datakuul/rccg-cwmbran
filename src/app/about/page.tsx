import Image from "next/image";
import { Heart, Users, BookOpen, Globe } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/features/CtaBand";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Us",
  description:
    "Learn about RCCG Overcomers House Cwmbran — who we are, what we value, and the welcoming family church community at the heart of it.",
  path: "/about",
});

const values = [
  {
    icon: Heart,
    title: "Warm hospitality",
    text: "We want everyone who walks through our doors to feel genuinely seen, valued, and welcomed.",
  },
  {
    icon: BookOpen,
    title: "Faith in God's Word",
    text: "We build our lives on the truth of scripture and seek to live it out in everyday, practical ways.",
  },
  {
    icon: Users,
    title: "Authentic community",
    text: "We do life together — celebrating, grieving, growing, and supporting one another through every season.",
  },
  {
    icon: Globe,
    title: "Heart for our city",
    text: "We're committed to serving Cwmbran and sharing the hope of Jesus with practical love.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="A welcoming family church in Cwmbran"
        description="We are RCCG Overcomers House Cwmbran — a diverse, multigenerational community committed to sharing the love of Christ, growing in faith, and supporting one another."
        image="/images/church/congregation-bw.webp"
        imageAlt="Congregation gathered together in community"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Welcome statement */}
      <Section tone="ivory">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif-accent text-2xl leading-snug text-ink sm:text-3xl">
            “We are a family of believers committed to sharing the love of
            Christ, growing in faith, and supporting one another in our spiritual
            journey.”
          </p>
          <p className="mt-8 text-lg leading-relaxed text-ink/70">
            Our desire is to create a warm and welcoming environment where
            everyone can encounter God, discover purpose, and experience
            transformation through His Word and the power of the Holy Spirit. No
            matter your background or where you are in your faith journey, you are
            welcome here.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section tone="charcoal">
        <SectionHeading
          align="center"
          eyebrow="What we value"
          title="The heart of who we are"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-ivory/10 bg-ink/40 p-7"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ivory">
                {title}
              </h3>
              <p className="mt-2 text-sm text-ivory/70">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Part of RCCG */}
      <Section tone="ivory">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-3xl lg:order-first">
            <Image
              src="/images/venue/henllys-village-hall-1.jpeg"
              alt="Henllys Village Hall, the home of RCCG Overcomers House Cwmbran"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Part of a global family"
              title="The Redeemed Christian Church of God"
              description="Overcomers House Cwmbran is part of the RCCG — a worldwide church family present in more than 190 countries. Locally, we gather at Henllys Village Hall to worship, grow, and serve our community here in Wales."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/beliefs" variant="light">
                What we believe
              </Button>
              <Button href="/leadership" variant="light">
                Meet our leadership
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title={`Come and visit us in ${site.city}`}
        description="The best way to get to know us is to join us on a Sunday. We'd love to meet you."
      />
    </>
  );
}
