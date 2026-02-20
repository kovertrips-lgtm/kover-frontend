import { client } from "@/sanity/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const tours = await client.fetch(`*[_type == "tour"]{ "slug": slug.current, _updatedAt }`);

    const tourUrls = tours.map((tour: any) => ({
        url: `https://kover-frontend.vercel.app/tour/${tour.slug}`,
        lastModified: tour._updatedAt,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: "https://kover-frontend.vercel.app",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...tourUrls,
    ];
}
