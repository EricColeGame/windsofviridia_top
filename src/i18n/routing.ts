import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ja", "de", "fr"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
