import { SanityClient } from "@sanity/client";

const sanityClient = require("@sanity/client");

declare global {
  var sanity: SanityClient | undefined;
}

const date = new Date();
const UTCDate = date.toISOString().split(":")[0];

export const sanity = sanityClient({
  projectId: "u5kaoc2x",
  dataset: "production",
  apiVersion: "2022-08-09", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});
