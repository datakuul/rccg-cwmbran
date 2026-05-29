import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";

/**
 * Single endpoint for all website forms (plan-a-visit, prayer, connect/serve).
 * Validates a minimal payload and emails the submission to the church inbox via
 * Resend. If RESEND_API_KEY is not configured (e.g. local dev), it logs the
 * submission and returns `delivered: false` so the form UX still works.
 *
 * Required env for live delivery:
 *   RESEND_API_KEY       — from resend.com
 *   CONTACT_FROM_EMAIL   — a verified sender, e.g. "Overcomers House <noreply@rccgcwmbran.co.uk>"
 * Optional:
 *   CONTACT_EMAIL        — recipient inbox (defaults to site.email)
 */

const RECIPIENT = process.env.CONTACT_EMAIL || site.email;
const FROM = process.env.CONTACT_FROM_EMAIL || "Overcomers House <onboarding@resend.dev>";

const SUBJECTS: Record<string, string> = {
  "plan-visit": "New visit request — website",
  prayer: "New prayer request — website",
  connect: "New message — website",
};

type Payload = {
  formType?: string;
  data?: Record<string, unknown>;
};

function labelize(key: string): string {
  const spaced = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function formatValue(value: unknown): string {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

export async function POST(req: Request) {
  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { formType, data } = payload;
  if (!formType || typeof data !== "object" || data === null) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const subject = SUBJECTS[formType] ?? "New website submission";
  const lines = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${labelize(k)}: ${formatValue(v)}`);
  const text = `${subject}\n\n${lines.join("\n")}\n\n— Sent from the ${site.name} website`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      `[contact] RESEND_API_KEY not set — submission NOT emailed.\n${text}`,
    );
    return NextResponse.json({ delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const replyTo =
      typeof data.email === "string" && data.email ? data.email : undefined;

    const { error } = await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      subject,
      text,
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ delivered: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
