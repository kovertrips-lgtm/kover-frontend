import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "1pxog7ur",
    dataset: "production",
    apiVersion: "2024-02-20",
    useCdn: false, // Set to false to see changes instantly
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
