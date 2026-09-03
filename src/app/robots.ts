import type { MetadataRoute } from "next";

// Keeps this route generatable under `output: "export"`, so the site can be
// deployed as plain static files (GitHub Pages, Cloudflare Pages) as well as
// on a Node host. It is already static on Vercel; this just makes it explicit.
export const dynamic = "force-static";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
