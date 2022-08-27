import sanityClient, { ClientConfig } from "@sanity/client";
import sanityImage from "@sanity/image-url";

const options: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  useProjectHostname: true,
};

const sanity = sanityClient(options);

export const imageBuilder = sanityImage(sanity);

export default sanity;
