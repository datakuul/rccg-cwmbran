import type { Metadata } from "next";
import { site, siteUrl } from "@/data/site";

const defaultOgImage = "/images/church/congregation-wide.webp";

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

/**
 * Build consistent per-page metadata. Pass a short page title and it is
 * appended to the church name; omit it for the homepage default.
 */
export function pageMeta({
  title,
  description = site.description,
  path = "/",
  image = defaultOgImage,
}: PageMetaInput = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} | A welcoming family church in Cwmbran, Wales`;
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** JSON-LD structured data describing the church as a local place of worship. */
export function churchJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.name,
    description: site.description,
    url: siteUrl,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.venue,
      addressLocality: "Cwmbran",
      postalCode: site.postcode,
      addressCountry: "GB",
    },
    sameAs: [site.social.youtube, site.social.instagram].filter(
      (v) => v && v !== "#",
    ),
    event: {
      "@type": "Event",
      name: "Sunday Service",
      startDate: "2026-05-31T10:00:00+01:00",
      eventSchedule: {
        "@type": "Schedule",
        byDay: "https://schema.org/Sunday",
        startTime: "10:00",
      },
      location: {
        "@type": "Place",
        name: site.venue,
        address: site.address,
      },
    },
  };
}

/** JSON-LD for an individual event page. */
export function eventJsonLd(input: {
  name: string;
  startDateIso: string;
  description: string;
  locationName: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: input.name,
    startDate: input.startDateIso,
    description: input.description,
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: input.locationName,
      address: site.address,
    },
    organizer: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
    },
  };
}
