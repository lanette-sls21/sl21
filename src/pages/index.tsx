import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
// import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
// import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { Testimonials } from "@/components/Testimonials";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Secure Lifestyles 21 - Retirement investments made simple for everyone
        </title>
        <meta name="description" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        <Testimonials />
        <CallToAction />
        <FeaturedPosts />
        {/* <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  );
}
