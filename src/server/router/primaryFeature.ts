import { createRouter } from "./context";

import groq from "groq";

export const primaryFeatureRouter = createRouter().query("find-many", {
  async resolve({ ctx }) {
    const query = groq`*[_type == "primaryFeature"] {
      title,
      description,
      image
    }`;

    const primaryFeatures = await ctx.sanity
      .fetch(query)
      .then((primaryFeature: any) => {
        try {
          return primaryFeature.map((post: any) => {
            return {
              title: post.title,
              description: post.description,
              image: post.image,
            };
          });
        } catch (error) {
          console.error(error);
        }
      });
    console.log(primaryFeatures);
    return primaryFeatures;
  },
});
