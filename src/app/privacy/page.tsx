import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How RCCG Overcomers House Cwmbran collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        description="We respect your privacy and are committed to protecting your personal information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy", href: "/privacy" },
        ]}
      />

      <Section tone="ivory">
        <div className="mx-auto max-w-2xl space-y-8 text-ink/75">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Who we are
            </h2>
            <p className="mt-2">
              {site.name} is a local church meeting at {site.address}. This policy
              explains how we handle any personal information you share with us.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Information we collect
            </h2>
            <p className="mt-2">
              When you contact us, plan a visit, request prayer, or sign up for
              updates, we may collect your name, email address, phone number, and
              the message you send. We only collect what you choose to provide.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              How we use it
            </h2>
            <p className="mt-2">
              We use your information solely to respond to you, to provide the
              pastoral care or updates you&apos;ve asked for, and to keep in touch
              where you&apos;ve given us permission. We never sell your data.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Keeping your data safe
            </h2>
            <p className="mt-2">
              We treat your information with care and confidentiality, and keep it
              only for as long as needed. You can ask us to update or delete your
              details at any time.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Contact us
            </h2>
            <p className="mt-2">
              For any questions about this policy or your data, email us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-copper hover:text-burgundy"
              >
                {site.email}
              </a>
              .
            </p>
            <p className="mt-4 text-sm text-ink/50">
              This is a general template and should be reviewed before launch.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
