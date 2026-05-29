import {
  Music2,
  Baby,
  Coffee,
  HandHeart,
  Laptop,
  HeartHandshake,
} from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConnectCardForm } from "@/components/features/ConnectCardForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Serve",
  description:
    "Use your gifts to make a difference. Discover ways to serve and volunteer at RCCG Overcomers House Cwmbran.",
  path: "/serve",
});

const teams = [
  {
    icon: Coffee,
    title: "Welcome & Hospitality",
    text: "Be the warm first face people meet — greeting, serving coffee, and helping everyone feel at home.",
  },
  {
    icon: Music2,
    title: "Worship & Music",
    text: "Sing or play an instrument? Help lead our church into God's presence each Sunday.",
  },
  {
    icon: Baby,
    title: "Children's Team",
    text: "Help create a safe, fun, faith-filled space where children love to be.",
  },
  {
    icon: Laptop,
    title: "Tech & Media",
    text: "Run sound, slides, and our livestream so everyone — onsite and online — can take part.",
  },
  {
    icon: HandHeart,
    title: "Prayer Team",
    text: "Stand with people in faith, praying for needs in the service and throughout the week.",
  },
  {
    icon: HeartHandshake,
    title: "Outreach & Care",
    text: "Serve our community in practical ways and help care for those in need.",
  },
];

export default function ServePage() {
  return (
    <>
      <PageHeader
        eyebrow="Serve"
        title="Use your gifts to bless others"
        description="God has given everyone something to offer. Serving is one of the best ways to grow, build friendships, and make a real difference."
        image="/images/church/congregation-wide.webp"
        imageAlt="Congregation serving and worshipping together"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Serve", href: "/serve" },
        ]}
      />

      <Section tone="ink">
        <SectionHeading
          align="center"
          eyebrow="Find your fit"
          title="Teams you could join"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-ivory/10 bg-charcoal p-7"
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

      <Section tone="ivory">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Take the first step"
            title="I'd like to serve"
            description="Let us know where you'd love to get involved, and a member of our team will help you take the next step."
            className="mx-auto"
          />
          <div className="mt-10 rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-10">
            <ConnectCardForm />
          </div>
        </div>
      </Section>
    </>
  );
}
