import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";

export const Treasure = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  const size = isSmallDevice ? 5 : isLargeDevice ? 3 : 2;

  return (
    <>
      <Image
        src="/reward/chest.png"
        alt=""
        width={381 / size}
        height={235 / size}
        id="chest"
        className={cn(
          "absolute right-1/2 top-[175px] z-40 translate-x-1/2 md:top-[395px] lg:bottom-[105px] lg:top-auto",
        )}
      />
      <Image
        src="/reward/animated-chest.gif"
        alt=""
        width={436 / size}
        height={281 / size}
        id="animatedChest"
        className={cn(
          "absolute right-1/2 top-[165px] z-40 translate-x-1/2 opacity-0 md:top-[385px] lg:bottom-[105px] lg:top-auto",
        )}
        unoptimized
      />
    </>
  );
};
