import { NPCState } from "@/types";

import stage1Idle from "@/public/npc/stage-1/idle.gif";
import stage1Dialogue from "@/public/npc/stage-1/dialogue.gif";

import stage2Idle from "@/public/npc/stage-2/idle.gif";
import stage2Dialogue from "@/public/npc/stage-2/dialogue.gif";

import stage3Idle from "@/public/npc/stage-3/idle.gif";
import stage3Dialogue from "@/public/npc/stage-3/dialogue.gif";
import { StaticImageData } from "next/image";

import stage4Idle from "@/public/npc/stage-4/idle.gif";

import stage5Idle from "@/public/npc/stage-5/idle.gif";

export const getNPC = (NPCState: NPCState, size: number, stage: number) => {
  let idleSrc, dialogueSrc;

  switch (stage) {
    case 1:
      idleSrc = stage1Idle;
      dialogueSrc = stage1Dialogue;

      break;
    case 2:
      idleSrc = stage2Idle;
      dialogueSrc = stage2Dialogue;

      break;
    case 3:
      idleSrc = stage3Idle;
      dialogueSrc = stage3Dialogue;

      break;
    case 4:
      idleSrc = stage4Idle;

      break;
    case 5:
      idleSrc = stage5Idle;

      break;
    default:
      idleSrc = stage1Idle;
      dialogueSrc = stage1Dialogue;
      break;
  }

  const images: Record<
    NPCState,
    { src?: StaticImageData; width: number; height: number }
  > = {
    idle: {
      src: idleSrc,
      width: 171,
      height: 308,
    },
    dialogue: {
      src: dialogueSrc ? dialogueSrc : idleSrc,
      width: 263,
      height: 306,
    },
  };

  const src = images[NPCState].src;
  const width = images[NPCState].width / size;
  const height = images[NPCState].height / size;

  return {
    src,
    width,
    height,
  };
};

export const getNPCImage = (stage: number) => {
  let stageName;

  switch (stage) {
    case 1:
      stageName = "stage-1";
      break;
    case 2:
      stageName = "stage-2";
      break;
    case 3:
      stageName = "stage-3";
      break;
    case 4:
      stageName = "stage-4";
      break;
    case 5:
      stageName = "stage-5";
      break;
    default:
      stageName = "stage-1";
      break;
  }

  return `/npc/${stageName}/idle.gif`;
};
