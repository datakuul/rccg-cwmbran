import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrayerRequestForm } from "@/components/features/PrayerRequestForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Prayer",
  description:
    "Request prayer or join us to pray together. At RCCG Overcomers House Cwmbran, our prayer team would be honoured to stand with you in faith.",
  path: "/prayer",
});

export default function PrayerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prayer"
        title="We'd be honoured to pray with you"
        description="Whatever you're carrying, you don't have to carry it alone. Share your request and our prayer team will stand with you in faith."
        image="/images/church/man-prayer-bw.webp"
        imageAlt="Person praying during a church service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Prayer", href: "/prayer" },
        ]}
      />

      <Section tone="ivory">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Pray with us"
              title="Join our prayer gatherings"
              description="Prayer is the heartbeat of our church. You're warmly invited to pray with us each week — wherever you are."
            />
            <div className="mt-8 space-y-5">
              <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-copper">
                  <Clock className="size-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Wednesdays · 7:00 PM
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  Midweek Prayer Meeting
                </h3>
                <p className="mt-1 text-sm text-ink/70">
                  We gather on Zoom to pray for the church, our families, and our
                  community. New to prayer? Simply join and listen.
                </p>
              </div>
              <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-copper">
                  <Users className="size-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Last Sunday · 10:30 AM
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  Altar of Prayer
                </h3>
                <p className="mt-1 text-sm text-ink/70">
                  Our monthly onsite prayer gathering — a focused time to seek God
                  together and stand in faith for one another.
                </p>
              </div>
            </div>

            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src="/images/church/women-praying-bw.webp"
                alt="People praying and singing together during a church service"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-9">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Send a prayer request
            </h2>
            <p className="mt-2 text-ink/65">
              Share as much or as little as you like. Our team treats every
              request with care and confidentiality.
            </p>
            <div className="mt-7">
              <PrayerRequestForm />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="burgundy">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif-accent text-2xl leading-snug sm:text-3xl">
            “Do not be anxious about anything, but in every situation, by prayer
            and petition, with thanksgiving, present your requests to God.”
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Philippians 4:6
          </p>
        </div>
      </Section>
    </>
  );
}
