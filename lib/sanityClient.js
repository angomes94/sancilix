import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "7guc57bn",
    dataset: "production",
    apiVersion: "2022-03-25",
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    useCdn: true
  });
  
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


