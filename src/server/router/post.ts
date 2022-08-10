import { TRPCError } from "@trpc/server";
import { createRouter } from "./context";

import groq from "groq";

export const postRouter = createRouter().query("find-many", {
  async resolve({ ctx }) {
    const query = groq`*[_type == "post"] {
      title,
      "author": author->name,
      "body": *[_type == "movie" && references(^._id)].title,
      mainImage
    }`;

    const posts = await ctx.sanity.fetch(query).then((posts: any) => {
      try {
        return posts.map((post: any) => {
          return {
            title: post.title,
            author: post.author,
            image: post.mainImage,
            body: post.body,
          };
        });
      } catch (error) {
        console.error(error);
      }
    });

    console.log(posts);
    return posts;
  },
});
