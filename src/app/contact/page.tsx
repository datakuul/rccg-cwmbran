import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/features/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConnectCardForm } from "@/components/features/ConnectCardForm";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with RCCG Overcomers House Cwmbran. Find our address, contact details, and a simple form to connect.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="We'd love to hear from you"
        description="Have a question, a prayer need, or just want to connect? Reach out — a real person will get back to you."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <Section tone="ivory">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Details */}
          <div>
            <SectionHeading tone="light" eyebrow="Find us" title="Get in touch" />
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Where we meet
                  </h3>
                  <p className="mt-1 text-ink/70">{site.address}</p>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex text-sm font-semibold text-copper hover:text-burgundy"
                  >
                    Get directions →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                  <Mail className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Email
                  </h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-flex text-ink/70 hover:text-copper"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                  <Phone className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Phone
                  </h3>
                  <a href={site.phoneHref} className="mt-1 inline-flex text-ink/70 hover:text-copper">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-copper">
                  <Clock className="size-5" />
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
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10">
              <iframe
                title="Map to Henllys Village Hall, Cwmbran"
                src={site.mapEmbed}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-9">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Send us a message
            </h2>
            <p className="mt-2 text-ink/65">
              Fill in the form and we&apos;ll be in touch as soon as we can.
            </p>
            <div className="mt-7">
              <ConnectCardForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
