import { HeartHandshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function GivingPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-charcoal to-midnight p-8 sm:p-12">
      <div className="absolute -right-16 -top-16 size-56 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative max-w-2xl">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
          <HeartHandshake className="size-6" />
        </span>
        <h2 className="mt-5 font-display text-3xl font-semibold text-ivory sm:text-4xl">
          Generosity that changes lives
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ivory/75">
          Your generosity helps us serve families, support local outreach, and
          share the hope of Jesus in our city. Every gift, large or small, makes
          a difference.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Button href={site.givingUrl === "#" ? "/give" : site.givingUrl} size="lg">
            Give Securely
          </Button>
          <span className="inline-flex items-center gap-2 text-sm text-ivory/60">
            <ShieldCheck className="size-4 text-sage" />
            Secure, third-party giving
          </span>
        </div>
      </div>
    </div>
  );
}
