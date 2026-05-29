import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { sermons } from "@/data/sermons";
import { events } from "@/data/events";

const staticPaths = [
  "",
  "/im-new",
  "/plan-your-visit",
  "/about",
  "/beliefs",
  "/leadership",
  "/ministries",
  "/ministries/kids",
  "/ministries/youth",
  "/ministries/groups",
  "/sermons",
  "/events",
  "/watch",
  "/give",
  "/prayer",
  "/serve",
  "/contact",
  "/privacy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/plan-your-visit" ? 0.9 : 0.7,
  }));

  const sermonPages: MetadataRoute.Sitemap = sermons.map((s) => ({
    url: `${siteUrl}/sermons/${s.slug}`,
    lastModified: new Date(`${s.date}T00:00:00`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const eventPages: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${siteUrl}/events/${e.slug}`,
    lastModified: new Date(`${e.date}T00:00:00`),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...pages, ...sermonPages, ...eventPages];
}
