import sanityClient, { ClientConfig } from "@sanity/client";
import sanityImage from "@sanity/image-url";

const options: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  useProjectHostname: true,
  apiVersion: "2022-08-09", // use current UTC date - see "specifying API version"!
};

export const sanity = sanityClient(options);

export const imageBuilder = sanityImage(sanity);
