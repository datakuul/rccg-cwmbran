export type NavLink = {
  label: string;
  href: string;
  /** Optional sub-links rendered as a dropdown in the header. */
  children?: NavLink[];
};

/** Primary header navigation. */
export const navLinks: NavLink[] = [
  { label: "I'm New", href: "/im-new" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "What We Believe", href: "/beliefs" },
      { label: "Our Leadership", href: "/leadership" },
    ],
  },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Watch", href: "/watch" },
  { label: "Give", href: "/give" },
];

/** Grouped links used in the footer. */
export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Visit",
    links: [
      { label: "I'm New", href: "/im-new" },
      { label: "Plan Your Visit", href: "/plan-your-visit" },
      { label: "What We Believe", href: "/beliefs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Ministries", href: "/ministries" },
      { label: "Groups", href: "/ministries/groups" },
      { label: "Serve", href: "/serve" },
      { label: "Request Prayer", href: "/prayer" },
    ],
  },
  {
    heading: "Grow",
    links: [
      { label: "Sermons", href: "/sermons" },
      { label: "Events", href: "/events" },
      { label: "Watch Online", href: "/watch" },
      { label: "Give", href: "/give" },
    ],
  },
];
