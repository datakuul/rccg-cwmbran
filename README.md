# RCCG Overcomers House Cwmbran

A modern, warm, accessible website for **RCCG Overcomers House Cwmbran**, built with
Next.js (App Router), TypeScript, and Tailwind CSS, and ready to deploy on Vercel.

## Requirements

- **Node.js 20.9+** (Next.js 16 requires Node ≥ 20.9). An `.nvmrc` pins Node 22 — run `nvm use`.

## Getting started

```bash
nvm use            # use the Node version in .nvmrc (22)
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint
npm run build      # production build
npm run start      # serve the production build
```

## Editing content

All content lives in plain TypeScript data files so the church can update the site
without touching components — and so a CMS (Sanity, Payload, Contentful, etc.) can be
dropped in later behind the same shapes.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Church name, address, phone, email, service times, social links, giving URL |
| `src/data/nav.ts` | Header and footer navigation |
| `src/data/sermons.ts` | Sermon library (the most recent date is the "latest" sermon) |
| `src/data/events.ts` | Events and recurring gatherings |
| `src/data/ministries.ts` | Ministries shown across the site |
| `src/data/groups.ts` | Small groups powering the group finder |

Images live in `public/images/` (`church/` stock photos, `brand/` logo, `pastor/`,
`venue/`, `events/`). Stock photos are from Pexels — replace them with real church
photos before launch where possible.

## Project structure

```
src/
  app/            # routes (App Router), sitemap.ts, robots.ts
  components/
    layout/       # Header, Footer, MobileNav, Container, Section
    ui/           # Button, Badge, Card, Input, Select, FormField, …
    features/     # Hero, forms, cards, GroupFinder, SermonLibrary, …
  data/           # editable content
  lib/            # utils + SEO/metadata helpers
```

## Forms

Plan-a-visit, prayer-request, and connect/serve forms POST to the
`src/app/api/contact/route.ts` Route Handler, which **emails each submission to the
church inbox** via [Resend](https://resend.com). Forms validate with Zod and show
success and error states.

- **Production:** set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and (optionally)
  `CONTACT_EMAIL` — see [Form email delivery](#form-email-delivery-required-for-live-forms).
- **Local dev without a key:** the form still shows success, and the submission is
  logged to the server console instead of being emailed (nothing breaks).

The recipient defaults to the `email` in `src/data/site.ts`; the sender's email
(`email`) is set as the message **reply-to**, so replying goes straight back to them.

## Giving

Giving links to a secure third-party provider via `site.givingUrl` in
`src/data/site.ts` (currently the placeholder `#`, which safely routes to the contact
page). No card details are ever processed by this site. Set `givingUrl` to your
provider's hosted donation-page URL to activate the **Give Securely** buttons.

### Choosing a provider (UK)

The site only needs a shareable donation link, so any UK provider with a hosted giving
page works. For a UK church, prioritise **Gift Aid** support (reclaim 25% on eligible
donations), low fees, and recurring giving.

| Provider | Best for | Gift Aid | Notes |
| --- | --- | --- | --- |
| [Stewardship](https://www.stewardship.org.uk) | UK churches specifically | Yes (automated) | Christian charity built for UK churches; donor accounts + hosted giving pages. Most "church-native" option. |
| [Give A Little](https://givealittle.co) | Small churches, simplicity | Yes | Free tier; great for online + in-person contactless. |
| [Wonderful.org](https://wonderful.org) | Keeping 100% of gifts | Yes | 0% platform/transaction fees; UK charities only. |
| [CAF Donate](https://www.cafonline.org) | Established/trusted | Yes | Long-standing UK charity payments + hosted donation pages. |
| ChurchSuite / Tithe.ly | Church admin + giving combined | Yes | If you also want membership/rotas/giving in one system. |
| [GoCardless](https://gocardless.com) | Cheap recurring giving | Via integration | Direct Debit — much lower fees than card for monthly gifts. |

General-purpose options (Stripe, PayPal, SumUp, Donorbox) also work but are not
church-specific, so Gift Aid handling is more manual.

> **Important — RCCG structure:** Gift Aid and charity rates require HMRC charity
> recognition. RCCG UK operates under a central charity structure, so **confirm with
> RCCG UK HQ first** — many parishes route giving through a denominational arrangement
> or shared charity number, which may determine the provider.

Once chosen, set the hosted giving-page URL in `src/data/site.ts`:

```ts
givingUrl: "https://your-provider.example/give-to-overcomers-house",
```

## Production deployment

This is a standard Next.js app and deploys to **Vercel** with zero extra
infrastructure. Vercel provides the CDN, automatic HTTPS/SSL, and DDoS protection out
of the box.

### What you need

- A **GitHub** (or GitLab/Bitbucket) repository.
- A free or Pro **Vercel** account.
- A **domain name** (optional but recommended), e.g. `rccgcwmbran.co.uk`, from any
  registrar (Namecheap, GoDaddy, 123-reg, Cloudflare Registrar, etc.).

### What you do NOT need

| Service | Needed? | Why |
| --- | --- | --- |
| **Cloudflare** | ❌ Not required | Vercel already provides a global CDN, free HTTPS, and DDoS mitigation. Adding Cloudflare in front can cause double-caching and SSL conflicts. Only use it if you specifically want to keep DNS there — and if so, set those records to **DNS-only ("grey cloud")**, not proxied. |
| **Resend / email service** | ❌ Not required to launch | The forms (Plan a Visit, Prayer, Connect) show a success message without sending data in v1. You only need an email/webhook provider *if and when* you wire forms to deliver submissions — see [Forms](#forms). |
| **A database / CMS** | ❌ Not required | All content is static data in `src/data/*`. A CMS can be added later if desired. |
| **A separate server / Node host** | ❌ Not required | Vercel builds and hosts everything, including the hourly ISR revalidation for recurring event dates. |

### Step-by-step

1. **Push to Git.** Commit this project and push it to a GitHub repository.
2. **Import to Vercel.** In Vercel → *Add New → Project*, import the repo. The framework
   is auto-detected as **Next.js**; leave Build Command (`next build`), Output, and
   Install Command at their defaults.
3. **Set the Node version.** This project requires **Node 20.x or 22.x** (Next.js 16).
   The included `.nvmrc` pins Node 22; Vercel reads it automatically. To be explicit,
   set Project → Settings → *Node.js Version* to **22.x**.
4. **Set the environment variable** (Project → Settings → Environment Variables), for
   the **Production** (and Preview) environments:

   ```
   NEXT_PUBLIC_SITE_URL=https://rccgcwmbran.co.uk
   ```

   This is the **only** variable the app needs. It drives canonical URLs, Open Graph
   tags, the sitemap, and robots.txt — set it to your real domain so SEO is correct.
   See `.env.example` for optional placeholders that only apply once analytics or form
   delivery are wired up.
5. **Deploy.** Vercel builds on every push. Pushes to your main branch publish to
   Production; other branches/PRs get Preview URLs automatically.
6. **Add your custom domain** (Project → Settings → Domains): enter
   `rccgcwmbran.co.uk`. Vercel then shows the DNS records to add — typically an `A`
   record for the apex (`@`) and a `CNAME` for `www` → `cname.vercel-dns.com`. Use the
   exact values Vercel displays (its apex IP has changed over time). HTTPS certificates
   are issued automatically. After the domain is live, update `NEXT_PUBLIC_SITE_URL` to
   match and redeploy.

   **Namecheap note:** there are two valid setups — pick one, don't mix them:
   - **Manage DNS at Namecheap (recommended, simplest):** keep the nameservers on
     **Namecheap BasicDNS** (the default), then add Vercel's `A` and `CNAME` records
     under the **Advanced DNS** tab. For the apex, Namecheap also offers an
     `ALIAS` record type if you prefer it over the `A` record.
   - **Delegate DNS to Vercel:** set Namecheap to **Custom DNS** and enter Vercel's
     nameservers; then manage all records inside Vercel (you would *not* add anything
     under Advanced DNS).

   **You do not need Cloudflare.** If you ever route DNS through Cloudflare, set the
   records to **DNS-only ("grey cloud")**, not proxied, to avoid SSL/caching conflicts
   with Vercel.

### Post-deploy checklist

Verify these load correctly on the live domain:

- `/`, `/plan-your-visit`, `/im-new`, `/about`, `/sermons`, `/events`, `/watch`, `/give`
- `/sitemap.xml` and `/robots.txt` (should reference your real domain)
- An event detail page (e.g. `/events/sunday-service`) shows the correct **next** date
- Mobile menu opens, forms show their success state, and the "Give Securely" buttons
  point to your provider once `givingUrl` is set

### Analytics (optional)

- **Vercel Analytics:** `npm i @vercel/analytics`, then render `<Analytics />` from
  `@vercel/analytics/next` in `src/app/layout.tsx`. Enable it in the Vercel dashboard.
- **Google Analytics:** set `NEXT_PUBLIC_GA_ID` (see `.env.example`) and add the GA
  script via `next/script` in `src/app/layout.tsx`.

### Form email delivery (required for live forms)

The form-to-email pipeline is already built (`src/app/api/contact/route.ts` using
[Resend](https://resend.com)). To make submissions actually arrive in an inbox:

1. **Create a Resend account** (free tier is generous) and **verify your sending
   domain** (e.g. `rccgcwmbran.co.uk`) — Resend gives you a few DNS records (SPF/DKIM)
   to add at your registrar. You can only send "from" a verified domain.
2. **Create an API key** in Resend.
3. **Set these environment variables** in Vercel (Production + Preview):

   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
   CONTACT_FROM_EMAIL=Overcomers House <noreply@rccgcwmbran.co.uk>
   CONTACT_EMAIL=hello@rccgcwmbran.co.uk          # inbox that receives submissions (optional)
   ```

   - `CONTACT_FROM_EMAIL` **must** be on your Resend-verified domain.
   - `CONTACT_EMAIL` is who receives the submissions; if omitted it defaults to the
     `email` in `src/data/site.ts`.
   - The visitor's email is set as **reply-to**, so you can reply to them directly.

4. **Redeploy.** Submit a test from `/contact` and confirm the email arrives.

> Until `RESEND_API_KEY` is set, forms still show a success message but submissions are
> only logged to the server console — so nothing is lost, but nothing is emailed either.
> No database is needed; Resend handles delivery.
