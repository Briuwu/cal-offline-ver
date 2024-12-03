"use client";
import { getBoss } from "@/lib/boss";
import { cn } from "@/lib/utils";
import { BossState } from "@/types";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";

export const Boss = ({
  bossState,
  bossName,
}: {
  bossState: BossState;
  bossName: string;
}) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");
  let size = isSmallDevice ? 2.65 : 2;

  if (bossName === "dragon") {
    size = isSmallDevice ? 4 : 2;
  }

  if (bossName === "twohead") {
    size = isSmallDevice ? 3 : 2;
  }

  if (bossName === "dragon" && bossState === "hurt") {
    size = isSmallDevice ? 3.5 : 2;
  }

  const { src, width, height } = getBoss(bossState, size, bossName);

  return (
    <>
      <Image
        src={src!}
        alt=""
        width={width}
        height={height}
        id="boss"
        className={cn(
          "absolute right-5 top-[100px] md:right-40 md:top-[390px] lg:bottom-[110px] lg:top-auto",
          bossName === "dragon" && "right-0 md:right-16 lg:bottom-[90px]",
          bossName === "dragon" && bossState === "walk" && "top-[115px]",
          bossName === "dragon" && bossState === "attack" && "top-[50px]",
          bossName === "twohead" && "top-[95px]",
        )}
        unoptimized
      />
    </>
  );
};
