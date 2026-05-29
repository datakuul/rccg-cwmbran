import Image from "next/image";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/features/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Leadership",
  description:
    "Meet the leadership of RCCG Overcomers House Cwmbran, led by Pastor Dapo Soye.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our leadership"
        title="Meet the team who serve our church"
        description="Our leaders are here to shepherd, encourage, and walk alongside our church family in faith."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Leadership", href: "/leadership" },
        ]}
      />

      {/* Lead pastor */}
      <Section tone="ivory">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/pastor/pastor-dapo-soye.jpeg"
              alt="Pastor Dapo Soye, lead pastor of RCCG Overcomers House Cwmbran"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Lead Pastor"
              title="Pastor Dapo Soye"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
              <p>
                “It is my joy to welcome you to RCCG Overcomers House Cwmbran.”
              </p>
              <p>
                “Our prayer is that as you worship with us, you will experience
                God&apos;s presence in a real and personal way. We are passionate
                about raising strong believers, building lives on the truth of
                God&apos;s Word, and equipping individuals to fulfil their divine
                purpose.”
              </p>
              <p>
                “We look forward to welcoming you personally and walking this
                journey of faith together.”
              </p>
            </div>
            <p className="mt-6 font-serif-accent text-xl italic text-copper">
              — Pastor Dapo Soye
            </p>
          </div>
        </div>
      </Section>

      {/* Serving together */}
      <Section tone="charcoal">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="A team effort"
            title="Led by a team who love this church"
            description="Alongside our lead pastor, a dedicated team of ministry leaders and volunteers give their time to serve worship, prayer, children, hospitality, and outreach. If you'd like to connect with a leader, we'd love to hear from you."
            className="mx-auto"
          />
        </div>
      </Section>

      <CtaBand
        title="Want to connect with our team?"
        description="Whether you have a question, a need, or simply want to say hello, our leaders would love to meet you."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/prayer", label: "Request prayer" }}
      />
    </>
  );
}
