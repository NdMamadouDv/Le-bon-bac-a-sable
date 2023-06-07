
import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITYID,
  dataset: "production",
  apiVersion:"2023-06-06",
  useCdn: true, // set to `true` to fetch from edge cache
};

// export const sanity = new SanityClient(config);
export const sanity = createClient({ ...config });

export const urlFor = (source:any) => createImageUrlBuilder(config).image(source);
