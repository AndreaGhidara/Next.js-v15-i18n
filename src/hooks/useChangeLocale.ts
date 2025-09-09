"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function useChangeLocale() {
  const router = useRouter();
  const currentLocale = useLocale();

  function setLocale(newLocale: string) {
    if (newLocale !== currentLocale) {
      router.replace(`/${newLocale}`);
    }
  }

  return { currentLocale, setLocale };
}
