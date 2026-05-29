import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { EventsBrowser } from "@/components/features/EventsBrowser";
import { CtaBand } from "@/components/features/CtaBand";
import { sortedEvents } from "@/data/events";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Events",
  description:
    "What's on at RCCG Overcomers House Cwmbran — services, prayer, Bible study, family events, and community outreach. Everyone is welcome.",
  path: "/events",
});

// Recompute recurring-event dates hourly so they always roll forward.
export const revalidate = 3600;

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What's on"
        title="Events & gatherings"
        description="From weekly services to special celebrations, there's always something happening. Come and be part of it."
        image="/images/church/worshipper-stage.webp"
        imageAlt="Worshipper with raised hands during a gathering"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
        ]}
      />

      <Section tone="ivory">
        <EventsBrowser events={sortedEvents()} />
      </Section>

      <CtaBand
        title="Join us this week"
        description="The warmest welcome awaits. Plan your visit, or reach out with any questions."
      />
    </>
  );
}
