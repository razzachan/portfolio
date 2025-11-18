import type { MetadataRoute } from "next";
import { projects } from "@/src/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://julio.betoni.dev";
  const routes = (["", "/projects", "/about", "/contact"].map((r) => ({
    url: `${base}${r}`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  })) satisfies MetadataRoute.Sitemap);

  const projectRoutes = (projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  })) satisfies MetadataRoute.Sitemap);

  return [...routes, ...projectRoutes];
}
