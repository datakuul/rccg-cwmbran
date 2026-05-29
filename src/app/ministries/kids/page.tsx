import { ShieldCheck, Smile, Sparkles, Heart } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Faq } from "@/components/features/Faq";
import { CtaBand } from "@/components/features/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Children's Ministry",
  description:
    "A safe, fun, and faith-filled space for children at RCCG Overcomers House Cwmbran. DBS-checked team and secure check-in.",
  path: "/ministries/kids",
});

const highlights = [
  {
    icon: ShieldCheck,
    title: "Safe and secure",
    text: "Our team is DBS-checked and trained, with a clear check-in and check-out process for every child.",
  },
  {
    icon: Smile,
    title: "Fun and welcoming",
    text: "Songs, stories, crafts, and games — a place where children love to be and quickly feel at home.",
  },
  {
    icon: Sparkles,
    title: "Faith made simple",
    text: "Age-appropriate teaching that helps children discover how much God loves them.",
  },
  {
    icon: Heart,
    title: "Every child matters",
    text: "We celebrate each child as wonderfully made, and care for them as part of our family.",
  },
];

const faqs = [
  {
    q: "How does check-in work?",
    a: "When you arrive, our welcome team will help you register your child and show you where to go. Children are signed in and out, and only released to the adult who dropped them off.",
  },
  {
    q: "What ages do you cater for?",
    a: "We warmly welcome children of all ages on a Sunday, with activities suited to different age groups.",
  },
  {
    q: "Can I stay with my child?",
    a: "Of course — especially for little ones or on a first visit. You're always welcome to settle your child in or stay with them.",
  },
];

export default function KidsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Children"
        title="Fun, safe, and full of faith"
        description="Sunday mornings are something your children will look forward to. We provide a bright, secure, and joyful space where they can learn about Jesus and have fun."
        image="/images/church/congregation-wide.webp"
        imageAlt="Families gathered during a church service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Children", href: "/ministries/kids" },
        ]}
      />

      <Section tone="ivory">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Why families love it"
          title="Care you can trust"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-ink/10 bg-white p-7 shadow-sm"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="parchment">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="For parents"
            title="Your questions answered"
            className="mx-auto"
          />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Bring the whole family"
        description="Let us know you're coming and we'll have everything ready to welcome your children well."
        primary={{ href: "/plan-your-visit", label: "Plan your visit" }}
        secondary={{ href: "/contact", label: "Ask a question" }}
      />
    </>
  );
}
