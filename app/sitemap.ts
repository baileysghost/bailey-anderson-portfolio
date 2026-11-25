import type { MetadataRoute } from "next";
import projects from "../content/projects.json";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return host
    ? ["/", ...projects.map((p) => "/work/" + p.slug + "/")].map((path) => ({
        url: "https://" + host + path,
      }))
    : [];
}
