import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { footerNav } from "@/data/nav";
import { site } from "@/data/site";
import { Container } from "./Container";
import { NewsletterForm } from "./NewsletterForm";
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/BrandIcons";

export function Footer() {
  const year = 2026;

  const socials = [
    site.social.youtube && {
      href: site.social.youtube,
      label: "YouTube",
      Icon: YoutubeIcon,
    },
    site.social.instagram &&
      site.social.instagram !== "#" && {
        href: site.social.instagram,
        label: "Instagram",
        Icon: InstagramIcon,
      },
    site.social.facebook && {
      href: site.social.facebook,
      label: "Facebook",
      Icon: FacebookIcon,
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    Icon: (props: { className?: string }) => React.ReactElement;
  }[];

  return (
    <footer className="border-t border-ivory/10 bg-charcoal text-ivory">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/brand/rccg-logo.png"
                alt=""
                width={48}
                height={48}
                className="size-11 object-contain"
              />
              <span className="font-display text-lg font-semibold">
                Overcomers House Cwmbran
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              {site.tagline} A welcoming RCCG family church in the heart of
              Cwmbran.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft"
                >
                  {site.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-soft">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={site.phoneHref} className="hover:text-gold-soft">
                  {site.phone}
                </a>
              </li>
            </ul>

            {socials.length ? (
              <div className="mt-6 flex gap-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full border border-ivory/15 p-2.5 text-ivory/80 transition hover:border-gold/40 hover:text-gold"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {/* Quick links */}
          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ivory/75 transition hover:text-gold-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Service times + newsletter */}
        <div className="mt-14 grid gap-8 border-t border-ivory/10 pt-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Service Times
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-ivory/80">
              {site.serviceTimes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Stay Connected
            </h2>
            <p className="mb-4 mt-4 text-sm text-ivory/70">
              Sign up for occasional church updates and encouragement.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/55 sm:flex-row">
          <p>
            © {year} {site.name}. Part of {site.parent}.
          </p>
          <nav aria-label="Legal" className="flex gap-5">
            <Link href="/contact" className="hover:text-gold-soft">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gold-soft">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-gold-soft">
              Accessibility
            </Link>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
