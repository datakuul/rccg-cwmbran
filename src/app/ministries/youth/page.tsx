import { MessageCircle, Users, Sparkles, Heart } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/features/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Youth Ministry",
  description:
    "A welcoming space for young people at RCCG Overcomers House Cwmbran to build friendships, ask big questions, and grow in faith.",
  path: "/ministries/youth",
});

const pillars = [
  {
    icon: Users,
    title: "Real friendship",
    text: "A place to belong, be yourself, and build genuine friendships that last.",
  },
  {
    icon: MessageCircle,
    title: "Big questions welcome",
    text: "A safe space to wrestle with faith, life, and everything in between — no question is off-limits.",
  },
  {
    icon: Sparkles,
    title: "Discover your purpose",
    text: "We help young people discover who God made them to be and the gifts they carry.",
  },
  {
    icon: Heart,
    title: "Genuinely cared for",
    text: "Our leaders are here to encourage, listen, and walk alongside each young person.",
  },
];

export default function YouthPage() {
  return (
    <>
      <PageHeader
        eyebrow="Youth"
        title="Real faith for real life"
        description="The teenage years are full of questions, change, and possibility. Our youth community is a place where young people can grow in faith without pretence or pressure."
        image="/images/church/worship-hands.webp"
        imageAlt="Young people worshipping with raised hands"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Youth", href: "/ministries/youth" },
        ]}
      />

      <Section tone="ink">
        <SectionHeading
          align="center"
          eyebrow="What it's about"
          title="More than a youth group"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-ivory/10 bg-charcoal p-7"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ivory">
                {title}
              </h3>
              <p className="mt-2 text-sm text-ivory/70">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Parents and young people welcome"
        description="Want to find out when and where youth meets? Get in touch and we'll fill you in."
        primary={{ href: "/contact", label: "Find out more" }}
        secondary={{ href: "/plan-your-visit", label: "Plan a visit" }}
      />
    </>
  );
}
