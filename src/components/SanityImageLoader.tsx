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

  return (
    <Image
      {...props}
      loader={({ width: srcWidth }) => {
        let url =
          imageBuilder
            .image(src)
            .width(srcWidth)
            .height(Number(props.height) || 256)
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
      src={imageBuilder.image(src).url()?.toString().replace(baseURL, "") ?? ""}
      width={500}
      height={200}
    />
  );
}
