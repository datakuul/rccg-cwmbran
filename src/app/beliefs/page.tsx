import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { CtaBand } from "@/components/features/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "What We Believe",
  description:
    "The core Christian beliefs of RCCG Overcomers House Cwmbran — rooted in the Bible and centred on Jesus Christ.",
  path: "/beliefs",
});

const beliefs = [
  {
    title: "The Bible",
    text: "We believe the Bible is the inspired word of God — our trustworthy guide for faith and everyday life.",
  },
  {
    title: "One God",
    text: "We believe in one God, eternally existing as Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    text: "We believe Jesus is the Son of God, who lived, died, and rose again so that we could be forgiven and made new.",
  },
  {
    title: "Salvation by grace",
    text: "We believe salvation is a gift of God's grace, received through faith in Jesus — not earned by our own efforts.",
  },
  {
    title: "The Holy Spirit",
    text: "We believe the Holy Spirit lives in every believer, comforting, guiding, and empowering us to live for God.",
  },
  {
    title: "The Church",
    text: "We believe the Church is God's family — called to worship, grow together, and share His love with the world.",
  },
  {
    title: "Prayer",
    text: "We believe prayer matters. God hears us, meets us, and works powerfully as we bring our lives to Him.",
  },
  {
    title: "Hope for all",
    text: "We believe the good news of Jesus is for everyone — offering purpose, transformation, and everyday hope.",
  },
];

export default function BeliefsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we believe"
        title="Rooted in the Bible, centred on Jesus"
        description="Our beliefs are simple, historic, and shared with Christians around the world. Here's the foundation everything we do is built on."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Beliefs", href: "/beliefs" },
        ]}
      />

      <Section tone="ivory">
        <div className="grid gap-6 sm:grid-cols-2">
          {beliefs.map((b, i) => (
            <div
              key={b.title}
              className="rounded-3xl border border-ink/10 bg-white p-7 shadow-sm"
            >
              <span className="font-serif-accent text-2xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                {b.title}
              </h2>
              <p className="mt-2 text-ink/70">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="burgundy">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif-accent text-2xl leading-snug sm:text-3xl">
            “For God so loved the world that he gave his one and only Son, that
            whoever believes in him shall not perish but have eternal life.”
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
            John 3:16
          </p>
        </div>
      </Section>

      <CtaBand
        title="Still have questions?"
        description="Faith is a journey, and questions are welcome. We'd love to talk things through with you over coffee."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/plan-your-visit", label: "Plan a visit" }}
      />
    </>
  );
}
