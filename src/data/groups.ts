export type Group = {
  slug: string;
  name: string;
  description: string;
  day:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  time: string;
  lifeStage: "Everyone" | "Adults" | "Young Adults" | "Women" | "Men" | "Families";
  location: string;
  format: "In-person" | "Online";
  childcare: boolean;
};

/** Small groups for the group finder. */
export const groups: Group[] = [
  {
    slug: "wednesday-prayer",
    name: "Midweek Prayer",
    description:
      "A warm, welcoming prayer gathering on Zoom where we pray for the church, our families, and our community.",
    day: "Wednesday",
    time: "7:00 PM",
    lifeStage: "Everyone",
    location: "Online via Zoom",
    format: "Online",
    childcare: false,
  },
  {
    slug: "digging-deep",
    name: "Digging Deep Bible Study",
    description:
      "Go deeper into scripture together on Friday evenings — honest questions, real discussion, and growing faith.",
    day: "Friday",
    time: "8:00 PM",
    lifeStage: "Everyone",
    location: "Online via Zoom",
    format: "Online",
    childcare: false,
  },
  {
    slug: "women-of-grace",
    name: "Women of Grace",
    description:
      "A supportive circle of women sharing life, studying the Word, and encouraging one another in faith.",
    day: "Tuesday",
    time: "7:30 PM",
    lifeStage: "Women",
    location: "Cwmbran (host home)",
    format: "In-person",
    childcare: false,
  },
  {
    slug: "men-on-purpose",
    name: "Men on Purpose",
    description:
      "Men gathering to grow in faith, friendship, and purpose — with honest conversation and real accountability.",
    day: "Saturday",
    time: "9:00 AM",
    lifeStage: "Men",
    location: "Cwmbran (host home)",
    format: "In-person",
    childcare: false,
  },
  {
    slug: "young-adults",
    name: "Young Adults Hangout",
    description:
      "A relaxed midweek space for 18–30s to connect, discuss faith and life, and build genuine friendships.",
    day: "Thursday",
    time: "7:00 PM",
    lifeStage: "Young Adults",
    location: "Cwmbran (cafe)",
    format: "In-person",
    childcare: false,
  },
  {
    slug: "family-life",
    name: "Family Life Group",
    description:
      "A group for parents and families to share the joys and challenges of raising children in faith — children welcome.",
    day: "Sunday",
    time: "4:00 PM",
    lifeStage: "Families",
    location: "Cwmbran (host home)",
    format: "In-person",
    childcare: true,
  },
];

export const groupDays = Array.from(new Set(groups.map((g) => g.day)));
export const groupLifeStages = Array.from(
  new Set(groups.map((g) => g.lifeStage)),
);
export const groupFormats = Array.from(new Set(groups.map((g) => g.format)));
