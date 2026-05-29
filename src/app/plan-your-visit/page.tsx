import {
  Clock,
  MapPin,
  Car,
  Baby,
  Shirt,
  Music2,
  Accessibility,
  Coffee,
} from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlanVisitForm } from "@/components/features/PlanVisitForm";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Plan Your Visit",
  description:
    "Everything you need for your first visit to RCCG Overcomers House Cwmbran — service times, parking, kids check-in, what to wear, and a warm welcome.",
  path: "/plan-your-visit",
});

const details = [
  {
    icon: Clock,
    title: "Service length",
    text: "Our Sunday service runs around 90 minutes, including worship, teaching, and prayer.",
  },
  {
    icon: Shirt,
    title: "What to wear",
    text: "Come as you are. You'll see smart, casual, and everything in between — there's no dress code.",
  },
  {
    icon: Music2,
    title: "Worship style",
    text: "Heartfelt, contemporary, and joyful — with room to simply be still in God's presence.",
  },
  {
    icon: Car,
    title: "Parking",
    text: "Free parking is available at and around Henllys Village Hall. Arrive 10–15 minutes early to settle in.",
  },
  {
    icon: Baby,
    title: "Kids check-in",
    text: "Our welcome team will help you check your children in safely. All our team are DBS-checked.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "The venue is step-free and accessible. Tell us about any needs and we'll make sure you're looked after.",
  },
];

export default function PlanYourVisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="We can't wait to meet you"
        title="Plan your visit"
        description="Knowing what to expect makes a first visit so much easier. Here's everything you need — and a simple way to let us know you're coming."
        image="/images/church/congregation-wide.webp"
        imageAlt="Congregation gathered for a Sunday service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Plan Your Visit", href: "/plan-your-visit" },
        ]}
      />

      {/* When & where */}
      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="When & where"
              title="Join us this Sunday"
            />
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                  <Clock className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Service times
                  </h3>
                  <ul className="mt-1 space-y-0.5 text-ink/70">
                    {site.serviceTimes.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                  <MapPin className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Address
                  </h3>
                  <p className="mt-1 text-ink/70">{site.address}</p>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-sm font-semibold text-copper hover:text-burgundy"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                  <Coffee className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Stay for coffee
                  </h3>
                  <p className="mt-1 text-ink/70">
                    Hang around after the service for tea, coffee, and a friendly
                    chat. It&apos;s the best way to meet people.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-ink/10 shadow-sm">
            <iframe
              title="Map to Henllys Village Hall, Cwmbran"
              src={site.mapEmbed}
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      {/* What to expect details */}
      <Section tone="parchment">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Good to know"
          title="What to expect"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {details.map(({ icon: Icon, title, text }) => (
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

      {/* Let us know form */}
      <Section tone="ivory">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="One last thing"
            title="Let us know you're coming"
            description="It's not required — but if you let us know, we'll be looking out for you and can have everything ready to make you feel at home."
            className="mx-auto"
          />
          <div className="mt-10 rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-10">
            <PlanVisitForm />
          </div>
        </div>
      </Section>
    </>
  );
}
