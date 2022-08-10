import { sanity } from "@/server/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export function urlFor(source: any) {
  return imageUrlBuilder(sanity).image(source);
}
