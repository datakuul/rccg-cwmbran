/**
 * Central site configuration. Edit church details here — every page reads from
 * this single source so the church can later swap it for a CMS document.
 */
export const site = {
  name: "RCCG Overcomers House Cwmbran",
  shortName: "Overcomers House",
  parent: "The Redeemed Christian Church of God",
  tagline: "Real people. Deep faith. Everyday hope.",
  description:
    "A warm, welcoming family church in Cwmbran, Wales. Join a joyful, multigenerational community learning to follow Jesus together.",
  city: "Cwmbran, Wales",
  venue: "Henllys Village Hall",
  address: "Henllys Village Hall, Cwmbran, NP44 6JZ, Wales",
  addressLines: ["Henllys Village Hall", "Cwmbran", "NP44 6JZ", "Wales"],
  postcode: "NP44 6JZ",
  phone: "07387 635087",
  phoneHref: "tel:+447387635087",
  email: "hello@rccgcwmbran.co.uk",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Henllys+Village+Hall+Cwmbran+NP44+6JZ",
  mapEmbed:
    "https://www.google.com/maps?q=Henllys+Village+Hall+Cwmbran+NP44+6JZ&output=embed",
  serviceTimes: [
    "Sunday Service — 10:00 AM (onsite)",
    "Wednesday Prayer Meeting — 7:00 PM (Zoom)",
    "Friday Digging Deep Bible Study — 8:00 PM (Zoom)",
  ],
  livestreamUrl: "https://www.youtube.com/@RCCGOvercomersHouseCwmbran/streams",
  givingUrl: "#",
  social: {
    instagram: "#",
    facebook: "",
    youtube: "https://www.youtube.com/@RCCGOvercomersHouseCwmbran",
  },
} as const;

/** Resolved canonical site URL — overridable per environment in Vercel. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rccgcwmbran.co.uk";
