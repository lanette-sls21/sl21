import { createRouter } from "./context";

import groq from "groq";

export const testimonialRouter = createRouter().query("find-many", {
  async resolve({ ctx }) {
    const query = groq`*[_type == "testimonialSection"] {
      column1[]->,
      column2[]->,
      column3[]->,
    }`;

    const testimonials = await ctx.sanity
      .fetch(query)
      .then((testimonial: any) => {
        try {
          return testimonial.map((post: any) => {
            return [post.column1, post.column2, post.column3];
          });
        } catch (error) {
          console.error(error);
        }
      });
    return testimonials[0];
  },
});
