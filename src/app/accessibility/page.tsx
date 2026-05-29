import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Accessibility",
  description:
    "Our commitment to making both our church gatherings and this website accessible and welcoming to everyone.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Everyone welcome"
        title="Accessibility statement"
        description="We want everyone to be able to take part — both in person and online."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Accessibility", href: "/accessibility" },
        ]}
      />

      <Section tone="ivory">
        <div className="mx-auto max-w-2xl space-y-8 text-ink/75">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              At our gatherings
            </h2>
            <p className="mt-2">
              Henllys Village Hall offers step-free access, and our welcome team
              is always glad to help. If you have any access needs — mobility,
              hearing, sight, or anything else — please let us know on the{" "}
              <a href="/plan-your-visit" className="font-semibold text-copper hover:text-burgundy">
                Plan Your Visit
              </a>{" "}
              form and we&apos;ll make sure you&apos;re well looked after.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              On this website
            </h2>
            <p className="mt-2">
              We&apos;ve built this site to be accessible, aiming to meet the Web
              Content Accessibility Guidelines (WCAG 2.1 AA). That includes
              semantic structure, keyboard navigation, visible focus states,
              meaningful alternative text for images, and sufficient colour
              contrast.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Tell us how we can improve
            </h2>
            <p className="mt-2">
              If you come across any part of this site that&apos;s difficult to
              use, we genuinely want to know. Email us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-copper hover:text-burgundy"
              >
                {site.email}
              </a>{" "}
              and we&apos;ll do our best to put it right.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
