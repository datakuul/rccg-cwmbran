import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { MinistryCard } from "@/components/features/MinistryCard";
import { CtaBand } from "@/components/features/CtaBand";
import { ministries } from "@/data/ministries";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Ministries",
  description:
    "Discover the ministries of RCCG Overcomers House Cwmbran — children, youth, groups, outreach, worship, and prayer. There's a place for everyone.",
  path: "/ministries",
});

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="There's a place for everyone"
        description="From our youngest children to our most seasoned saints, our ministries help you connect, grow, and use your gifts to bless others."
        image="/images/church/worshipper-stage.webp"
        imageAlt="Worshipper with raised hands during a service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
        ]}
      />

      <Section tone="ink">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m) => (
            <div key={m.slug} className="aspect-[4/5]">
              <MinistryCard ministry={m} />
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not sure where to start?"
        description="Tell us a little about you and we'll help you find the right next step into community."
        primary={{ href: "/contact", label: "Help me connect" }}
        secondary={{ href: "/ministries/groups", label: "Find a group" }}
      />
    </>
  );
}
