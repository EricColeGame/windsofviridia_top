import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { CONTENT_TYPES } from "@/config/navigation";
import { routing, type Locale } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://windsofviridia.top").replace(/\/$/, "");

  // Static paths that always exist
  const staticPaths = ["/", ...CONTENT_TYPES.map((contentType) => `/${contentType}`), "/privacy-policy", "/terms-of-service", "/copyright", "/about"];

  // Dynamic paths are scoped to the locale that actually has the MDX files.
  const dynamicPathsByLocale = await Promise.all(
    routing.locales.map(async (locale) => {
      const contentPaths = await getAllContentPaths(locale as Locale);
      return {
        locale,
        paths: contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`),
      };
    }),
  );

  return dynamicPathsByLocale.flatMap(({ locale, paths: dynamicPaths }) =>
    [...staticPaths, ...dynamicPaths].map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : path === "/guide" ? 0.8 : 0.6,
    })),
  );
}
