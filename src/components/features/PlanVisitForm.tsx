"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().min(1, "Please choose a service."),
  adults: z.string().optional(),
  children: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function PlanVisitForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(_data: FormValues) {
    // v1: simulate submission. Replace with a POST to /api/plan-visit later.
    void _data;
    await new Promise((r) => setTimeout(r, 600));
  }

  if (isSubmitSuccessful) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-sage/30 bg-sage/10 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-12 text-sage" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
          We saved you a seat!
        </h3>
        <p className="mt-2 text-ink/70">
          Thank you for letting us know you&apos;re coming. Someone from our
          welcome team will be in touch, and we&apos;ll be looking out for you on
          Sunday.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 sm:grid-cols-2"
    >
      <FormField label="Name" required error={errors.name?.message} className="sm:col-span-2">
        {(p) => (
          <Input
            {...p}
            {...register("name")}
            autoComplete="name"
            placeholder="Your full name"
          />
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
          <Input
            {...p}
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="07000 000000"
          />
        )}
      </FormField>

      <FormField label="Which service?" required error={errors.service?.message}>
        {(p) => (
          <Select {...p} {...register("service")} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            <option>Sunday Service (10:00 AM)</option>
            <option>Altar of Prayer (last Sunday, 10:30 AM)</option>
            <option>Wednesday Prayer (Zoom, 7:00 PM)</option>
            <option>Friday Digging Deep (Zoom, 8:00 PM)</option>
          </Select>
        )}
      </FormField>

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Adults" error={errors.adults?.message}>
          {(p) => (
            <Select {...p} {...register("adults")} defaultValue="1">
              {["1", "2", "3", "4", "5+"].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </Select>
          )}
        </FormField>
        <FormField label="Children" error={errors.children?.message}>
          {(p) => (
            <Select {...p} {...register("children")} defaultValue="0">
              {["0", "1", "2", "3", "4", "5+"].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </Select>
          )}
        </FormField>
      </div>

      <FormField
        label="Questions or accessibility needs"
        error={errors.message?.message}
        className="sm:col-span-2"
        hint="Let us know anything that would help us welcome you well."
      >
        {(p) => (
          <Textarea
            {...p}
            {...register("message")}
            rows={4}
            placeholder="Anything you'd like us to know?"
          />
        )}
      </FormField>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Sending…" : "Let us know you're coming"}
        </Button>
      </div>
    </form>
  );
}
