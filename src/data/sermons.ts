export type Sermon = {
  slug: string;
  title: string;
  series: string;
  speaker: string;
  date: string; // ISO YYYY-MM-DD
  scripture: string;
  description: string;
  image: string;
  videoUrl: string;
  audioUrl?: string;
  topics: string[];
};

/**
 * Sermon library. The most recent date is treated as the "latest" sermon.
 * `videoUrl` points at the church YouTube channel until individual videos
 * are linked.
 */
export const sermons: Sermon[] = [
  {
    slug: "anchored-in-hope",
    title: "Anchored in Hope",
    series: "Everyday Hope",
    speaker: "Pastor Dapo Soye",
    date: "2026-05-24",
    scripture: "Hebrews 6:19",
    description:
      "When life feels uncertain, hope is the anchor that holds the soul. We explore how a living hope in Christ steadies us through every season and gives us courage to keep moving forward.",
    image: "/images/church/worshipper-stage.webp",
    videoUrl: "https://www.youtube.com/@RCCGOvercomersHouseCwmbran/streams",
    topics: ["Hope", "Faith", "Encouragement"],
  },
  {
    slug: "a-place-at-the-table",
    title: "A Place at the Table",
    series: "Belonging",
    speaker: "Pastor Dapo Soye",
    date: "2026-05-17",
    scripture: "Luke 14:15-24",
    description:
      "God's invitation is wider than we imagine. This message is about belonging — how the family of God makes room for everyone, no matter their background or where they are on the journey.",
    image: "/images/church/congregation-wide.webp",
    videoUrl: "https://www.youtube.com/@RCCGOvercomersHouseCwmbran/streams",
    topics: ["Community", "Belonging", "Grace"],
  },
  {
    slug: "the-power-of-praise",
    title: "The Power of Praise",
    series: "Worship That Moves Heaven",
    speaker: "Pastor Dapo Soye",
    date: "2026-05-10",
    scripture: "Psalm 34:1-4",
    description:
      "Praise is more than a song — it is a posture of trust. Discover how worship reorders our perspective, lifts our burdens, and ushers us into the presence of God.",
    image: "/images/church/worship-hands.webp",
    videoUrl: "https://www.youtube.com/@RCCGOvercomersHouseCwmbran/streams",
    topics: ["Worship", "Praise", "Spiritual Growth"],
  },
  {
    slug: "praying-with-confidence",
    title: "Praying With Confidence",
    series: "Digging Deep",
    speaker: "Pastor Dapo Soye",
    date: "2026-05-03",
    scripture: "1 John 5:14-15",
    description:
      "Prayer is a conversation, not a performance. Learn how to come to God boldly, honestly, and expectantly — and why your prayers matter more than you think.",
    image: "/images/church/man-prayer-bw.webp",
    videoUrl: "https://www.youtube.com/@RCCGOvercomersHouseCwmbran/streams",
    topics: ["Prayer", "Faith", "Discipleship"],
  },
  {
    slug: "stronger-together",
    title: "Stronger Together",
    series: "Belonging",
    speaker: "Pastor Dapo Soye",
    date: "2026-04-26",
    scripture: "Ecclesiastes 4:9-12",
    description:
      "We were never meant to do life alone. This message unpacks the beauty and strength of authentic community, and why your next step of faith is best taken with others.",
    image: "/images/church/congregation-bw.webp",
    videoUrl: "https://www.youtube.com/@RCCGOvercomersHouseCwmbran/streams",
    topics: ["Community", "Groups", "Friendship"],
  },
  {
    slug: "rooted-and-growing",
    title: "Rooted and Growing",
    series: "Everyday Hope",
    speaker: "Pastor Dapo Soye",
    date: "2026-04-19",
    scripture: "Colossians 2:6-7",
    description:
      "A healthy faith is a growing faith. We look at what it means to be rooted in Christ, established in His word, and overflowing with thankfulness in everyday life.",
    image: "/images/church/women-praying-bw.webp",
    videoUrl: "https://www.youtube.com/@RCCGOvercomersHouseCwmbran/streams",
    topics: ["Spiritual Growth", "Discipleship", "Faith"],
  },
];

export const sermonsByDate = [...sermons].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date),
);

export const latestSermon = sermonsByDate[0];

export function getSermon(slug: string): Sermon | undefined {
  return sermons.find((s) => s.slug === slug);
}

/** Unique values for filter UIs. */
export const sermonSeries = Array.from(new Set(sermons.map((s) => s.series)));
export const sermonSpeakers = Array.from(
  new Set(sermons.map((s) => s.speaker)),
);
export const sermonTopics = Array.from(
  new Set(sermons.flatMap((s) => s.topics)),
).sort();
