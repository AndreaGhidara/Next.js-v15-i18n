'use client'

import { useTranslations } from "next-intl";
import { useChangeLocale } from "@/hooks/useChangeLocale";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { currentLocale, setLocale } = useChangeLocale();

  return (
    <div className="navbar_custom">
      <p>{t("welcomeMessage")}</p>
      <select
        value={currentLocale}
        onChange={(event) => setLocale(event.target.value)}
      >
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}
