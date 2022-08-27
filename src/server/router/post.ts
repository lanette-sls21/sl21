import { createRouter } from "./context";

import groq from "groq";
import { z } from "zod";

export const postRouter = createRouter()
  .query("find-many", {
    async resolve({ ctx }) {
      const query = groq`*[_type == "post"] {
      title,
      slug,
      mainImage,
      "author": author->name,
      body,
      publishedAt,
    }`;

      const posts = await ctx.sanity.fetch(query).then((posts: any) => {
        try {
          return posts.map((post: any) => {
            return {
              title: post.title,
              slug: post.slug,
              author: post.author,
              image: post.mainImage,
              description: post.body[0].children[0].text,
              publishedAt: post.publishedAt,
            };
          });
        } catch (error) {
          console.error(error);
        }
      });
      console.log(posts);
      return posts;
    },
  })
  .query("find-unique", {
    input: z.object({
      slug: z.string(),
    }),
    async resolve({ ctx, input }) {
      console.log(input.slug);
      const query = groq`*[_type == "post" && slug.current == "${input.slug}"] {
      title,
      slug,
      mainImage,
      "author": author->name,
      body,
      publishedAt,
    }`;

      const posts = await ctx.sanity.fetch(query).then((posts: any) => {
        try {
          return posts.map((post: any) => {
            return {
              title: post.title,
              slug: post.slug,
              image: post.mainImage,
              author: post.author,
              body: post.body,
              publishedAt: post.publishedAt,
            };
          });
        } catch (error) {
          console.error(error);
        }
      });

      console.log(posts[0]);
      return posts[0];
    },
  });
