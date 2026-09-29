import type { MetadataRoute } from "next";

const siteUrl = "https://hanxuanye.hanxuan365475.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/news", "/publications", "/teaching"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
