"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { FormError } from "@/components/ui/FormError";
import { submitForm } from "@/lib/submitForm";

const schema = z.object({
  name: z.string().optional(),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  request: z.string().min(5, "Please share a little about your request."),
  confidential: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

export function PrayerRequestForm() {
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    setFailed(false);
    try {
      await submitForm("prayer", data);
      setDone(true);
    } catch {
      setFailed(true);
    }
  }

  if (done) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-sage/30 bg-sage/10 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-12 text-sage" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
          We&apos;re praying with you
        </h3>
        <p className="mt-2 text-ink/70">
          Thank you for trusting us with your request. Our prayer team will be
          standing with you in faith.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" error={errors.name?.message}>
          {(p) => (
            <Input {...p} {...register("name")} placeholder="Your name (optional)" />
          )}
        </FormField>
        <FormField label="Email" error={errors.email?.message}>
          {(p) => (
            <Input
              {...p}
              {...register("email")}
              type="email"
              placeholder="So we can follow up (optional)"
            />
          )}
        </FormField>
      </div>

      <FormField label="Your prayer request" required error={errors.request?.message}>
        {(p) => (
          <Textarea
            {...p}
            {...register("request")}
            rows={5}
            placeholder="Share what's on your heart…"
          />
        )}
      </FormField>

      <label className="flex items-start gap-3 text-sm text-ink/75">
        <input
          type="checkbox"
          {...register("confidential")}
          className="mt-1 size-4 rounded border-ink/30 text-gold focus:ring-gold"
        />
        Please keep this request confidential to the pastoral team.
      </label>

      {failed ? <FormError /> : null}

      <div>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send prayer request"}
        </Button>
      </div>
    </form>
  );
}
