import Image from "next/image";
import Link from "next/link";
import React from "react";
import SanityImage from "./SanityImageLoader";

function FeaturedPostCard({ post }: any) {
  console.log(post.image);
  return (
    <div
      key={post.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <div className="h-[300px] relative">
          <SanityImage image={post.image} />
        </div>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">Article</p>
          <Link href={`/blog/${post.slug.current}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={post.author.href}>
              <span className="sr-only">{post.author.name}</span>
              {/* <Image
                className="h-10 w-10 rounded-full"
                src={author.imageUrl}
                width="40"
                height="40"
                alt=""
              /> */}
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={post.author.href} className="hover:underline">
                {post.author.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={"datetime"}>
                {new Date(post.publishedAt).toDateString()}
              </time>
              {/* <span aria-hidden="true">&middot;</span>
              <span>{"readingTime"} read</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPostCard;
