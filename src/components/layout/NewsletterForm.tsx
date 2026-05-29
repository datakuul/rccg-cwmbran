"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // v1: no backend. Show a friendly confirmation; wire to an API route later.
    if (!email) return;
    setDone(true);
  }

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 rounded-xl bg-sage/15 px-4 py-3 text-sm text-ivory">
        <Check className="size-4 text-sage" />
        Thanks! We&apos;ll be in touch with church updates.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-full border border-ivory/20 bg-ivory/5 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold-soft"
      >
        Subscribe
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
