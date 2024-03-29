import Image from "next/image";

import { Container } from "@/components/Container";
import { trpc } from "@/utils/trpc";
import SanityImage from "./SanityImageLoader";
import FadeInDiv from "./FadeInDiv";
// import avatarImage1 from "@/images/avatars/avatar-1.png";
// import avatarImage2 from "@/images/avatars/avatar-2.png";
// import avatarImage3 from "@/images/avatars/avatar-3.png";
// import avatarImage4 from "@/images/avatars/avatar-4.png";
// import avatarImage5 from "@/images/avatars/avatar-5.png";

// const testimonials = [
//   [
//     {
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam consequatur hic voluptates et quae pariatur ex laboriosam libero quam ad veritatis deleniti.",
//       author: {
//         name: "Sheryl Berge",
//         location: "Popejoy, Iowa",
//         image: avatarImage1,
//       },
//     },
//     {
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam consequatur hic voluptates et quae pariatur ex laboriosam libero quam ad veritatis.",
//       author: {
//         name: "Amy Hahn",
//         location: "Hooker, Oklahoma",
//         image: avatarImage4,
//       },
//     },
//   ],
//   [
//     {
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam consequatur hic voluptates et quae pariatur ex laboriosam libero quam ad veritatis deleniti deserunt, nemo alias! Enim ipsum quidem deleniti.",
//       author: {
//         name: "Leland Kiehn",
//         location: "China, Texas",
//         image: avatarImage5,
//       },
//     },
//     {
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam consequatur hic voluptates et quae pariatur ex laboriosam.",
//       author: {
//         name: "Erin Powlowski",
//         location: "Rainbow City, Alabama",
//         image: avatarImage2,
//       },
//     },
//   ],
//   [
//     {
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam consequatur hic voluptates et quae pariatur ex laboriosam libero quam ad",
//       author: {
//         name: "Peter Renolds",
//         location: "Blue Grass, Iowa",
//         image: avatarImage3,
//       },
//     },
//     {
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam consequatur hic voluptates et quae pariatur ex laboriosam libero quam ad veritatis.",
//       author: {
//         name: "Amy Hahn",
//         location: "Colon, Michigan",
//         image: avatarImage4,
//       },
//     },
//   ],
// ];

export function Testimonials() {
  const testimonials = trpc.useQuery(["testimonail.find-many"]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-slate-50 py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            It&apos;s never too early to start saving
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Secure Lifestyles 21 has beening helping people across the country
            make smart money decisions.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.data?.map((column: any, columnIndex: any) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((testimonial: any, testimonialIndex: any) => (
                  <FadeInDiv
                    key={testimonialIndex}
                    whenVisible={"translate-y-0 opacity-100"}
                    whenHidden={"translate-y-10 opacity-10"}
                    duration={700}>
                    <li>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <svg
                          aria-hidden="true"
                          width={105}
                          height={78}
                          className="absolute top-6 left-6 fill-slate-100">
                          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                        </svg>
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            {testimonial.content}
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.location}
                            </div>
                          </div>
                          <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50 relative">
                            <SanityImage image={testimonial.image} />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  </FadeInDiv>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
