"use client";
import { getNPC } from "@/lib/npc";
import { cn } from "@/lib/utils";
import { NPCState } from "@/types";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";

export const NPC = ({
  NPCState,
  stage,
}: {
  NPCState: NPCState;
  stage: number;
}) => {
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");
  let size = isLargeDevice ? 2.5 : 4.25;

  if (stage === 2) {
    size = isLargeDevice ? 1 : 1.5;
  }

  if (NPCState === "dialogue" && stage === 2) {
    size = isLargeDevice ? 1.5 : 2.3;
  }

  if (NPCState === "dialogue" && stage === 3) {
    size = isLargeDevice ? 3.5 : 5.95;
  }

  if (NPCState === "dialogue" && stage === 4) {
    size = isLargeDevice ? 2.5 : 6.5;
  }

  if (NPCState === "dialogue" && stage === 5) {
    size = isLargeDevice ? 2.5 : 6;
  }

  if (NPCState === "idle" && stage === 5) {
    size = isLargeDevice ? 2.25 : 4.25;
  }

  const { src, width, height } = getNPC(NPCState, size, stage);

  return (
    <Image
      src={src!}
      alt=""
      width={width}
      height={height}
      id="npc"
      className={cn(
        "absolute right-10 top-[115px] z-40 scale-x--1 md:top-[375px] lg:bottom-[105px] lg:right-40 lg:top-auto",
        stage === 2 && "top-[125px]",
        stage === 3 && "top-[120px]",
        stage === 4 && "top-[105px]",
      )}
      unoptimized
    />
  );
};
