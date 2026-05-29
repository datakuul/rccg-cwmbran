export type EventCategory =
  | "Worship"
  | "Kids"
  | "Youth"
  | "Groups"
  | "Outreach"
  | "Care";

export type ZoomDetails = {
  meetingId: string;
  passcode: string;
  joinUrl: string;
};

/**
 * Recurrence rules. `weekly` repeats on a weekday (0 = Sunday … 6 = Saturday);
 * `monthly-last` repeats on the last given weekday of each month.
 */
export type Recurrence =
  | { type: "weekly"; weekday: number }
  | { type: "monthly-last"; weekday: number };

export type ChurchEvent = {
  slug: string;
  title: string;
  /** Fixed date for one-off events. Ignored when `recurrence` is set. */
  date: string; // ISO YYYY-MM-DD
  time: string;
  location: string;
  description: string;
  image: string;
  category: EventCategory;
  recurring?: string;
  recurrence?: Recurrence;
  registrationUrl?: string;
  zoom?: ZoomDetails;
};

/** An event with its next real occurrence date resolved (ISO YYYY-MM-DD). */
export type ResolvedEvent = ChurchEvent & { displayDate: string };

/** Shared Zoom room for the church's online midweek gatherings. */
const onlineRoom: ZoomDetails = {
  meetingId: "255 698 6497",
  passcode: "880278",
  joinUrl: "https://zoom.us/j/2556986497?pwd=880278",
};

/**
 * Church events. Recurring gatherings carry a `recurrence` rule and always
 * surface their next occurrence; one-off events use their fixed `date`.
 */
export const events: ChurchEvent[] = [
  {
    slug: "sunday-service",
    title: "Sunday Service",
    date: "2026-05-31",
    time: "10:00 AM",
    location: "Henllys Village Hall, Cwmbran",
    description:
      "Our main weekly gathering. Expect heartfelt worship, practical Bible teaching, prayer, and a warm welcome. Children are cared for during the service, and there's tea, coffee, and conversation afterwards.",
    image: "/images/events/sunday-service.jpeg",
    category: "Worship",
    recurring: "Every Sunday",
    recurrence: { type: "weekly", weekday: 0 },
  },
  {
    slug: "altar-of-prayer",
    title: "Altar of Prayer",
    date: "2026-05-31",
    time: "10:30 AM",
    location: "Henllys Village Hall, Cwmbran",
    description:
      "Our monthly prayer gathering held onsite on the last Sunday of the month. A focused time to seek God together, intercede for our community, and stand in faith for one another.",
    image: "/images/events/altar-of-prayer.jpeg",
    category: "Worship",
    recurring: "Last Sunday monthly",
    recurrence: { type: "monthly-last", weekday: 0 },
  },
  {
    slug: "wednesday-prayer-meeting",
    title: "Wednesday Prayer Meeting",
    date: "2026-06-03",
    time: "7:00 PM",
    location: "Online via Zoom",
    description:
      "A midweek prayer meeting on Zoom. We gather to pray for the church, our families, and our community — wherever you are. New to prayer? You are very welcome to simply join and listen.",
    image: "/images/events/wednesday-prayer.jpeg",
    category: "Care",
    recurring: "Every Wednesday",
    recurrence: { type: "weekly", weekday: 3 },
    zoom: onlineRoom,
  },
  {
    slug: "digging-deep-bible-study",
    title: "Digging Deep Bible Study",
    date: "2026-06-05",
    time: "8:00 PM – 9:00 PM",
    location: "Online via Zoom",
    description:
      "Our Friday-night Bible study on Zoom. We go deeper into God's word together — exploring scripture, asking honest questions, and growing in understanding as a community.",
    image: "/images/events/friday-digging-deep.jpeg",
    category: "Groups",
    recurring: "Every Friday",
    recurrence: { type: "weekly", weekday: 5 },
    zoom: onlineRoom,
  },
  {
    slug: "family-sunday-celebration",
    title: "Family Sunday Celebration",
    date: "2026-06-14",
    time: "10:00 AM",
    location: "Henllys Village Hall, Cwmbran",
    description:
      "A joyful all-ages Sunday with worship, a family-friendly message, and a shared meal afterwards. Bring a friend, bring the kids, and let's celebrate together.",
    image: "/images/church/congregation-wide.webp",
    category: "Kids",
  },
  {
    slug: "community-outreach-day",
    title: "Community Outreach Day",
    date: "2026-06-21",
    time: "11:00 AM",
    location: "Cwmbran Town Centre",
    description:
      "We head out into Cwmbran to serve our neighbours — practical help, prayer, and a friendly hello. Everyone is welcome to join us in sharing the love of Christ with our town.",
    image: "/images/church/congregation-bw.webp",
    category: "Outreach",
    registrationUrl: "#",
  },
];

export const eventCategories: EventCategory[] = [
  "Worship",
  "Kids",
  "Youth",
  "Groups",
  "Outreach",
  "Care",
];

export function getEvent(slug: string): ChurchEvent | undefined {
  return events.find((e) => e.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Date resolution                                                     */
/* ------------------------------------------------------------------ */

function startOfDay(d: Date): Date {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

/** Format a Date as a local ISO date (YYYY-MM-DD), avoiding UTC shifts. */
function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Next date on or after `from` that falls on `weekday`. */
function nextWeekly(weekday: number, from: Date): Date {
  const d = startOfDay(from);
  const diff = (weekday - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + diff);
  return d;
}

/** The last `weekday` of the given month. */
function lastWeekdayOfMonth(year: number, month: number, weekday: number): Date {
  const last = startOfDay(new Date(year, month + 1, 0));
  const diff = (last.getDay() - weekday + 7) % 7;
  last.setDate(last.getDate() - diff);
  return last;
}

/** Next "last weekday of the month" occurrence on or after `from`. */
function nextMonthlyLast(weekday: number, from: Date): Date {
  const d = startOfDay(from);
  let candidate = lastWeekdayOfMonth(d.getFullYear(), d.getMonth(), weekday);
  if (+candidate < +d) {
    candidate = lastWeekdayOfMonth(d.getFullYear(), d.getMonth() + 1, weekday);
  }
  return candidate;
}

/** Resolve the next real occurrence date for an event. */
export function eventDate(event: ChurchEvent, from: Date = new Date()): Date {
  const r = event.recurrence;
  if (r?.type === "weekly") return nextWeekly(r.weekday, from);
  if (r?.type === "monthly-last") return nextMonthlyLast(r.weekday, from);
  return startOfDay(new Date(`${event.date}T00:00:00`));
}

/** Attach the resolved `displayDate` to an event. */
export function resolveEvent(
  event: ChurchEvent,
  from: Date = new Date(),
): ResolvedEvent {
  return { ...event, displayDate: toISODate(eventDate(event, from)) };
}

/** All events resolved and sorted by their next occurrence (soonest first). */
export function sortedEvents(from: Date = new Date()): ResolvedEvent[] {
  return events
    .map((e) => resolveEvent(e, from))
    .sort((a, b) => +new Date(a.displayDate) - +new Date(b.displayDate));
}

/**
 * Upcoming events relative to `from` (defaults to now). Recurring events always
 * qualify because they resolve to their next occurrence; past one-off events
 * fall away. Falls back to the full list if nothing is upcoming.
 */
export function upcomingEvents(
  limit?: number,
  from: Date = new Date(),
): ResolvedEvent[] {
  const todayISO = toISODate(startOfDay(from));
  const sorted = sortedEvents(from);
  const list = sorted.filter((e) => e.displayDate >= todayISO);
  const result = list.length ? list : sorted;
  return typeof limit === "number" ? result.slice(0, limit) : result;
}
