export type Ministry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  icon: "kids" | "youth" | "groups" | "outreach" | "worship" | "prayer";
};

/**
 * Church ministries. `href` points to a dedicated page where one exists,
 * otherwise to the ministries overview.
 */
export const ministries: Ministry[] = [
  {
    slug: "children",
    name: "Children",
    tagline: "Fun, safe, and full of faith",
    description:
      "A bright, secure, and joyful space where children learn about Jesus through stories, songs, crafts, and play. Every child is checked in and cared for by our trained, DBS-checked team.",
    image: "/images/church/congregation-wide.webp",
    href: "/ministries/kids",
    icon: "kids",
  },
  {
    slug: "youth",
    name: "Youth",
    tagline: "Real faith for real life",
    description:
      "A welcoming community where young people can ask big questions, build genuine friendships, and discover who God has made them to be — without pretence or pressure.",
    image: "/images/church/worship-hands.webp",
    href: "/ministries/youth",
    icon: "youth",
  },
  {
    slug: "groups",
    name: "Groups",
    tagline: "Life is better together",
    description:
      "Small groups are where church becomes family. Meet midweek to share life, study the Bible, pray, and support one another through every season.",
    image: "/images/church/congregation-bw.webp",
    href: "/ministries/groups",
    icon: "groups",
  },
  {
    slug: "outreach",
    name: "Outreach",
    tagline: "Loving our city in practical ways",
    description:
      "We believe faith has hands and feet. Through community service, generosity, and friendship, we share the hope of Jesus across Cwmbran and beyond.",
    image: "/images/church/congregation-bw.webp",
    href: "/serve",
    icon: "outreach",
  },
  {
    slug: "worship",
    name: "Worship",
    tagline: "Hearts lifted, heaven near",
    description:
      "Our worship team leads us into God's presence each Sunday with heartfelt, Spirit-filled music. If you sing or play, there's a place for you to serve.",
    image: "/images/church/worshipper-stage.webp",
    href: "/serve",
    icon: "worship",
  },
  {
    slug: "prayer",
    name: "Prayer",
    tagline: "Standing with you in faith",
    description:
      "Prayer is the heartbeat of our church. Join us midweek to intercede together, or send a request and let our team stand with you in faith.",
    image: "/images/church/women-praying-bw.webp",
    href: "/prayer",
    icon: "prayer",
  },
];

export function getMinistry(slug: string): Ministry | undefined {
  return ministries.find((m) => m.slug === slug);
}
