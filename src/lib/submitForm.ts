/**
 * Shared client helper: POST a website form submission to the contact API.
 * Throws on network/server failure so callers can show an error state.
 */
export async function submitForm(
  formType: "plan-visit" | "prayer" | "connect",
  data: Record<string, unknown>,
): Promise<void> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, data }),
  });
  if (!res.ok) {
    throw new Error("Request failed");
  }
}
