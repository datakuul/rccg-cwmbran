import { Repeat, Gift, Globe, ShieldCheck, HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Faq } from "@/components/features/Faq";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Give",
  description:
    "Give securely to RCCG Overcomers House Cwmbran. Your generosity helps us serve families, support outreach, and share the hope of Jesus.",
  path: "/give",
});

const options = [
  {
    icon: Gift,
    title: "One-time gift",
    text: "Make a single donation whenever you'd like to give. Every gift makes a difference.",
  },
  {
    icon: Repeat,
    title: "Regular giving",
    text: "Set up a recurring gift and partner with us in the ongoing work of the church.",
  },
  {
    icon: Globe,
    title: "Missions & outreach",
    text: "Direct your gift towards local outreach and supporting those in need in our community.",
  },
];

const faqs = [
  {
    q: "Is online giving secure?",
    a: "Yes. Giving is handled by a trusted, secure third-party provider. We never see or store your card details on this website.",
  },
  {
    q: "Can I give by bank transfer or standing order?",
    a: "Absolutely. Many of our members prefer to give by standing order. Get in touch and we'll share our bank details with you.",
  },
  {
    q: "Will my giving be kept private?",
    a: "Yes. Your giving is treated with complete confidentiality and handled with care and integrity.",
  },
  {
    q: "Can I claim Gift Aid?",
    a: "If you're a UK taxpayer, Gift Aid lets us reclaim 25p for every £1 you give, at no extra cost to you. Contact us to complete a simple declaration.",
  },
];

export default function GivePage() {
  const giveHref = site.givingUrl;
  const giveDisabled = giveHref === "#";

  return (
    <>
      <PageHeader
        eyebrow="Generosity"
        title="Give with joy and purpose"
        description="Your generosity helps us serve families, support local outreach, and share the hope of Jesus in our city. Thank you for partnering with us."
        image="/images/church/man-prayer-bw.webp"
        imageAlt="Person in quiet prayer and reflection during a service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Give", href: "/give" },
        ]}
      />

      {/* Primary give CTA */}
      <Section tone="ink">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-charcoal to-midnight p-10 text-center sm:p-14">
          <div className="absolute -right-16 -top-16 size-56 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
              <HeartHandshake className="size-6" />
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ivory sm:text-4xl">
              Give securely online
            </h2>
            <p className="mt-4 text-lg text-ivory/75">
              Giving takes less than a minute through our secure provider.
            </p>
            <div className="mt-7">
              <Button
                href={giveDisabled ? "/contact" : giveHref}
                size="lg"
                target={giveDisabled ? undefined : "_blank"}
                rel={giveDisabled ? undefined : "noopener noreferrer"}
              >
                {giveDisabled ? "Contact us to give" : "Give Securely"}
              </Button>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-ivory/60">
              <ShieldCheck className="size-4 text-sage" />
              Processed by a secure third-party provider
            </p>
          </div>
        </div>
      </Section>

      {/* Ways to give */}
      <Section tone="ivory">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Ways to give"
          title="Choose what works for you"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {options.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-ink/70">{text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/60">
          A note on stewardship: we are committed to handling every gift with
          honesty, transparency, and care — using what is given to serve God and
          our community faithfully.
        </p>
      </Section>

      {/* FAQ */}
      <Section tone="parchment">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Good to know"
            title="Giving questions"
            className="mx-auto"
          />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </Section>
    </>
  );
}
