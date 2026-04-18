import { MetadataRoute } from "next";
import { siteMetadata, projects, hobbies } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = siteMetadata.siteUrl;

  const routes = [
    "",
    "/projects",
    "/cv",
    "/hobbies",
    "/contact",
    "/imprint",
    "/privacy-policy",
  ].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${url}/projects/${project.slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const hobbyRoutes = hobbies
    .filter((hobby) => hobby.slug)
    .map((hobby) => ({
      url: `${url}/hobbies/${hobby.slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [...routes, ...projectRoutes, ...hobbyRoutes];
}
