import Img, { ImageProps } from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";
import sanity from "@/server/sanity/client";

interface MyImageProps extends Omit<ImageProps, "src"> {
  image: SanityImageSource;
}

export default function SanityImage({ image }: MyImageProps) {
  const baseURL = "https://cdn.sanity.io/images/";

  const imageProps = useNextSanityImage(sanity, image);

  return (
    <Img
      {...imageProps}
      layout="fill"
      objectFit="cover"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
}
