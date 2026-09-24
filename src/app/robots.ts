import type { MetadataRoute } from "next";
import { sitio } from "@/lib/sitio";

// Decidir por proyecto qué rastreadores de IA se permiten (metodología, capítulo 7.5).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${sitio.url}/sitemap.xml`,
  };
}
