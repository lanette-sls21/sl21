import { urlFor } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import SanityImage from "./SanityImageLoader";
import SvgDots from "./svgDots";

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="h-[500px] relative">
          <SanityImage image={value} />
        </div>
      );
    },
  },
};

export default function Post({ post }: any) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <SvgDots />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <span className="block text-lg text-center text-blue-600 font-semibold">
            Article
          </span>
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl capitalize">
              {post.title}
            </span>
          </h1>
          <article className="mt-6 prose prose-blue  prose-a:text-blue-600 prose-strong:text-blue-600 prose-lg text-gray-500 mx-auto prose-img:rounded-xl">
            <PortableText value={post.body} components={ptComponents} />
          </article>
        </div>
      </div>
    </div>
  );
}
