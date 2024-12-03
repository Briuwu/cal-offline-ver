"use client";
import { getCharacter } from "@/lib/character";
import { cn } from "@/lib/utils";
import { CharacterState } from "@/types";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";

export const Player = ({
  characterState,
  characterType,
  levelType,
}: {
  characterState: CharacterState;
  characterType: number;
  levelType?: string;
}) => {
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");
  const size = isLargeDevice ? 2.5 : 4.25;

  const { src, width, height } = getCharacter(
    characterState,
    size,
    characterType,
  );

  return (
    <>
      <Image
        src={src!}
        alt=""
        width={width}
        height={height}
        id="character"
        className={cn(
          "absolute -left-20 z-40 md:top-[375px] lg:-left-40 lg:bottom-[105px] lg:top-auto",
          levelType === "reward" && "top-[150px]",
          characterType === 1 && "top-[112px]",
          characterType === 2 && "top-[127px]",
          characterType === 3 && "top-[105px]",
          characterType === 4 && "top-[110px]",
          characterType === 5 && "top-[105px]",
          characterType === 6 && "top-[125px]",
          characterType === 7 && "top-[120px]",
        )}
        unoptimized
        priority
      />
    </>
  );
};
