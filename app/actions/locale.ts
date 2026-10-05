"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setLocaleAction(formData: FormData) {
  const locale = formData.get("locale") === "hm" ? "hm" : "en";
  const cookieStore = await cookies();
  cookieStore.set("site-locale", locale, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  const returnTo = formData.get("returnTo");
  const path = typeof returnTo === "string" && returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/";
  redirect(path);
}
