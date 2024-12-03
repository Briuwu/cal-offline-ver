"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useAnimate } from "framer-motion";
import { Player } from "@/app/game/[challengeId]/components/player";
import { CharacterState, Levels } from "@/types";
import { Treasure } from "./treasure";
import { Button } from "@/components/ui/button";
import { Rewards } from "./rewards";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useProfile } from "@/lib/use-profile";
import { useRouter } from "next/navigation";

type Props = {
  level: Levels;
  stageId: number;
};

const rewards = [
  {
    stageId: 1,
    coins: 100,
    level: 3,
  },
  {
    stageId: 2,
    coins: 200,
    level: 5,
  },
  {
    stageId: 3,
    coins: 300,
    level: 5,
    hasCharacter: 5,
  },
  {
    stageId: 4,
    coins: 800,
    level: 5,
  },
  {
    stageId: 5,
    coins: 1500,
    level: 10,
    hasCharacter: 4,
  },
];

const audioBg = {
  1: "/audio/stage-1.mp3",
  2: "/audio/stage-2.mp3",
  3: "/audio/stage-3.mp3",
  4: "/audio/stage-4.mp3",
  5: "/audio/stage-5.mp3",
};

export const Game = ({ level, stageId }: Props) => {
  const router = useRouter();
  const { profile } = useProfile();
  const characterType = profile.selectedCharacter;
  const { load } = useGlobalAudioPlayer();
  const [scope, animate] = useAnimate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [, setOpenChest] = useState(false);
  const [characterState, setCharacterState] = useState<CharacterState>("walk");

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  const currentReward = rewards.find(
    (reward) => reward.stageId === Number(level.stageId),
  );

  useEffect(() => {
    setIsAnimating(true);

    load(audioBg[stageId as keyof typeof audioBg], {
      loop: true,
      autoplay: true,
    });

    const animateCharacter = async () => {
      await animate(
        "#character",
        { x: isLargeDevice ? 200 : 90 },
        { duration: 3 },
      );
      setCharacterState("idle");
    };

    animateCharacter();
    setIsAnimating(false);
  }, []);

  const characterXPos = isSmallDevice ? 200 : isLargeDevice ? 500 : 375;
  const handleOpenChest = async () => {
    setOpenChest(true);
    setIsAnimating(true);
    await animate("#openBtn", { opacity: 0 }, { duration: 1 });
    setCharacterState("walk");
    await animate("#character", { x: characterXPos }, { duration: 2 });
    setCharacterState("idle");
    await animate("#chest", { opacity: 0 }, { duration: 1 });
    await animate("#animatedChest", { opacity: 1 }, { duration: 1 });
    await animate("#rewards", { opacity: 1 }, { duration: 1 });
    setCharacterState("running");
    const characterPosition = isSmallDevice ? 700 : isLargeDevice ? 1250 : 750;
    await animate("#character", { x: characterPosition }, { duration: 4 });
    router.push(
      `/game/${level.stageId + 1}/learning/${level.stageId + 1}/${level.levelNumber + 1}`,
    );
    setIsAnimating(false);
  };

  return (
    <div
      ref={scope}
      className="z-20 overflow-hidden lg:absolute lg:inset-0 lg:p-4"
    >
      <Player
        characterState={characterState}
        characterType={characterType}
        levelType={level.type}
      />
      <Treasure />
      <Button
        disabled={isAnimating}
        id="openBtn"
        className="absolute right-1/2 top-[100px] z-[99] translate-x-1/2 text-xs hover:bg-opacity-50 md:top-[375px] lg:bottom-[190px] lg:top-auto lg:text-base"
        onClick={handleOpenChest}
      >
        Open Chest
      </Button>
      <Rewards reward={currentReward!} />
      {/* <div>
        <div className="bottom-4 left-4 flex lg:absolute">
          {lifes > 0 &&
            Array.from({ length: lifes }).map((_, idx) => (
              <Image key={idx} src="/heart.png" alt="" width={50} height={50} />
            ))}
        </div>
      </div> */}
    </div>
  );
};
