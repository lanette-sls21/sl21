import { trpc } from "@/utils/trpc";
import Post from "@/components/Post";
import { Header } from "@/components/Header";

const PostPage = ({ slug }: any) => {
  const postTRPC = trpc.useQuery(["post.find-unique", { slug }]);

  return (
    <>
      <Header />
      <Post post={postTRPC.data} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug } = context.params;
  return {
    props: {
      slug,
    },
  };
}

export default PostPage;
