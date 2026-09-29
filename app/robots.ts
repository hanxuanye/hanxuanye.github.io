import type { MetadataRoute } from "next";

const siteUrl = "https://hanxuanye.racing-ape-4537.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
