import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GroupFinder } from "@/components/features/GroupFinder";
import { CtaBand } from "@/components/features/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Find a Group",
  description:
    "Life is better together. Browse small groups at RCCG Overcomers House Cwmbran by day, life stage, location, and format.",
  path: "/ministries/groups",
});

export default function GroupsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Groups"
        title="Life is better together"
        description="Small groups are where church becomes family. Use the finder below to discover a group that fits your week and your season of life."
        image="/images/church/congregation-bw.webp"
        imageAlt="Members of a congregation in community together"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Groups", href: "/ministries/groups" },
        ]}
      />

      <Section tone="ivory">
        <SectionHeading
          tone="light"
          eyebrow="Find your people"
          title="Browse our groups"
          description="Filter by what matters to you — there's no commitment, just come and see."
        />
        <div className="mt-10">
          <GroupFinder />
        </div>
      </Section>

      <CtaBand
        title="Can't find the right fit?"
        description="New groups start all the time. Tell us what you're looking for and we'll help you find — or start — the right one."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/serve", label: "Lead a group" }}
      />
    </>
  );
}
