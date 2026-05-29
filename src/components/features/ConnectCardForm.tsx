"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { FormError } from "@/components/ui/FormError";
import { submitForm } from "@/lib/submitForm";

const interests = [
  "I'm new and want to connect",
  "I'd like to join a group",
  "I want to serve",
  "I'd like to know more about faith",
  "Something else",
];

const schema = z.object({
  name: z.string().min(2, "Please tell us your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please choose an option."),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ConnectCardForm() {
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
      await submitForm("connect", data);
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
          Thank you for connecting!
        </h3>
        <p className="mt-2 text-ink/70">
          We&apos;ve received your details and someone from our team will be in
          touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <FormField label="Name" required error={errors.name?.message}>
        {(p) => (
          <Input {...p} {...register("name")} autoComplete="name" placeholder="Your name" />
        )}
      </FormField>
      <FormField label="Email" required error={errors.email?.message}>
        {(p) => (
          <Input
            {...p}
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        )}
      </FormField>
      <FormField label="Phone" error={errors.phone?.message}>
        {(p) => (
          <Input {...p} {...register("phone")} type="tel" placeholder="07000 000000" />
        )}
      </FormField>
      <FormField label="How can we help?" required error={errors.interest?.message}>
        {(p) => (
          <Select {...p} {...register("interest")} defaultValue="">
            <option value="" disabled>
              Choose an option
            </option>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </Select>
        )}
      </FormField>
      <FormField label="Message" error={errors.message?.message} className="sm:col-span-2">
        {(p) => (
          <Textarea {...p} {...register("message")} rows={4} placeholder="Anything else?" />
        )}
      </FormField>
      {failed ? (
        <div className="sm:col-span-2">
          <FormError />
        </div>
      ) : null}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Sending…" : "Send"}
        </Button>
      </div>
    </form>
  );
}
