import { trpc } from "@/utils/trpc";
import FeaturedPostCard from "./FeaturedPostCard";

export default function FeaturedBlogs() {
  const posts = trpc.useQuery(["post.find-many"]);

  console.log(posts.data);

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.data?.map((post: any, index: any) => (
            <FeaturedPostCard
              key={index}
              title={post.title}
              slug={post.slug}
              author={post.author}
              imageUrl={post.slug}
              description={post.description}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
