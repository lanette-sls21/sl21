import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/utils/sanity";
import Image from "next/image";
import { trpc } from "@/utils/trpc";

// const ptComponents = {
//   types: {
//     image: ({ value }: any) => {
//       if (!value?.asset?._ref) {
//         return null;
//       }
//       return (
//         // eslint-disable-next-line @next/next/no-img-element
//         <img
//           alt={value.alt || " "}
//           loading="lazy"
//           src={urlFor(value).width(320).height(240).fit("max").auto("format")}
//         />
//       );
//     },
//   },
// };

const Post = ({ post }: any) => {
  const posts = trpc.useQuery(["post.find-unique"]);

  return <p>{posts.data?.title}</p>;
};

// const query = groq`*[_type == "post" && slug.current == $slug][0]{
//   title,
//   "name": author->name,
//   "categories": categories[]->title,
//   "authorImage": author->image,
//   body
// }`;
// export async function getStaticPaths() {
//   const paths = await client.fetch(
//     groq`*[_type == "post" && defined(slug.current)][].slug.current`
//   );

//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.params;
//   const post = await client.fetch(query, { slug });
//   return {
//     props: {
//       post,
//     },
//   };
// }

export default Post;
