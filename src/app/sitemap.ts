import type { MetadataRoute } from "next";

// Keeps this route generatable under `output: "export"`, so the site can be
// deployed as plain static files (GitHub Pages, Cloudflare Pages) as well as
// on a Node host. It is already static on Vercel; this just makes it explicit.
export const dynamic = "force-static";
import { primaryNav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...primaryNav.map((n) => n.href), "/donate"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
