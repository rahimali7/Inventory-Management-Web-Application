import type { MetadataRoute } from "next";
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
