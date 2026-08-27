import type { SignUpSchema } from "../_components/form/signup-form";

export async function createUser(formData: SignUpSchema) {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      payload?.error ?? "Não foi possível criar a conta no momento.",
    );
  }

  return payload;
}
