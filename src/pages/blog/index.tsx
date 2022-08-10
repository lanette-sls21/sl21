import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import FeaturedBlogs from "@/components/FeaturedPosts";

export default function BlogHome() {
  return (
    <>
      <Head>
        <title>
          Secure Lifestyles 21 - Retirement investments made simple for everyone
        </title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <FeaturedBlogs />
      <Footer />
    </>
  );
}
