export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  websiteUrl?: string;
  steamCommunityUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Winds of Viridia Wiki",
  shortName: "Winds of Viridia",
  logoText: "WV",
  tagline: "Demo Guides, Bosses, Totems & Movement Tips",
  description: "Fan-made Winds of Viridia wiki covering the demo, movement and grappling, bosses, Totems, the Mothbug companion, and release updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://windsofviridia.top",
  supportEmail: "support@windsofviridia.top",
  gameUrl: "https://store.steampowered.com/app/5178570/Winds_of_Viridia/",
  websiteUrl: "https://windsofviridia.com",
  steamCommunityUrl: "https://steamcommunity.com/app/5178570",
  heroVideoId: "t_Ldq6eq0nQ", // Winds of Viridia – Reveal Trailer – Nintendo Switch 2
  social: {
    youtube: "https://www.youtube.com/watch?v=t_Ldq6eq0nQ",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
