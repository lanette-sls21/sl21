import Image from "next/image";

import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your retirement. Book a meeting with us
            today by sending us an email.
          </p>
          <ButtonLink
            href="mailto: john@sls21.com"
            color="white"
            className="mt-10 mr-6">
            Contact Us
          </ButtonLink>
          {/* <ButtonLink href="/register" color="white" className="mt-10">
            Download Free E-Book
          </ButtonLink> */}
        </div>
      </Container>
    </section>
  );
}
