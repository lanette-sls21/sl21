import Image, { ImageProps } from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { imageBuilder } from "@/server/sanity/client";

interface MyImageProps extends Omit<ImageProps, "src"> {
  src: SanityImageSource;
  quality?: number;
  blur?: number;
}

export default function SanityImage({
  quality = 80,
  blur = 0,
  src,
  ...props
}: MyImageProps) {
  const baseURL = "https://cdn.sanity.io/images/";
  console.log(props);
  return (
    <div
      className={`w-auto h-[${
        props.height ? props.height + "px" : "300px"
      }] relative`}>
      <Image
        {...props}
        loader={() => {
          let url =
            imageBuilder
              .image(src)
              .auto("format")
              .quality(quality)
              .fit("clip")
              .url() ?? "";
          if (blur) {
            url += `&blur=${blur}`;
          }

          return url;
        }}
        alt={"image"}
        src={
          imageBuilder.image(src).url()?.toString().replace(baseURL, "") ?? ""
        }
        layout={"fill"}
        height="100%"
        objectFit="cover"
      />
    </div>
  );
}
