import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { headers } from "next/headers";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const h = await headers();
  const tzHeader = h.get("x-vercel-ip-timezone");
  const timeZone = tzHeader || "Europe/Rome";

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
    timeZone,
  };
});
