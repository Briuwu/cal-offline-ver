"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import { BossState, CharacterState, Levels } from "@/types";

import { GameQuestion } from "@/app/game/[challengeId]/components/game-question";
import { Player } from "@/app/game/[challengeId]/components/player";
import { GameOver } from "@/app/game/[challengeId]/components/game-over";
import { Boss } from "./boss";
import { sleep } from "@/lib/utils";
import { useProfile } from "@/lib/use-profile";

type Props = {
  level: Levels;
  stageId: number;
};

const audioBg = {
  1: "/audio/stage-1-boss.mp3",
  2: "/audio/stage-2-boss.mp3",
  3: "/audio/stage-3-boss.mp3",
  4: "/audio/stage-4-boss.mp3",
  5: "/audio/stage-5-boss.mp3",
};

export const Game = ({ level, stageId }: Props) => {
  const router = useRouter();
  const { profile } = useProfile();
  const characterType = profile.selectedCharacter;
  const coins = profile.coins;
  const { load, stop } = useGlobalAudioPlayer();
  const [scope, animate] = useAnimate();
  const [isAnimating, setIsAnimating] = useState(false);

  const [gameOver, setGameOver] = useState(false);
  const [lifes, setLifes] = useState(5);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [characterState, setCharacterState] = useState<CharacterState>("walk");
  const [bossState, setBossState] = useState<BossState>("idle");

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)",
  );
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  const questions = level.questions!;

  useEffect(() => {
    setIsAnimating(true);
    stop();
    load(audioBg[stageId as keyof typeof audioBg], {
      loop: true,
      autoplay: true,
    });

    const animateCharacter = async () => {
      setBossState("idle");
      await animate(
        "#character",
        { x: isLargeDevice ? 200 : 90 },
        { duration: 3 },
      );
      setCharacterState("idle");
      await animate("#gameQuestion", { opacity: 1 }, { duration: 1 });
    };

    animateCharacter();
    setIsAnimating(false);
  }, []);

  const currentQuestion = questions[questionIdx];

  const handleWrong = async () => {
    setIsAnimating(true);
    let xBossPosition = isSmallDevice ? 150 : isMediumDevice ? 400 : 500;
    if (level.description === "dragon") {
      xBossPosition = isSmallDevice ? 80 : isMediumDevice ? 300 : 375;
    }
    const xBossOriginal = isSmallDevice ? 10 : 30;
    setBossState("walk");
    await animate("#boss", { x: -xBossPosition }, { duration: 2 });
    setBossState("attack");
    setCharacterState("hurt");
    await sleep(1250);
    await animate("#boss", { scaleX: -1 }, { duration: 0.5 });
    setCharacterState("idle");
    setBossState("walk");
    await animate("#boss", { x: -xBossOriginal }, { duration: 2 });
    setBossState("idle");
    await animate("#boss", { scaleX: 1 }, { duration: 0.5 });

    if (lifes > 0) {
      setLifes(lifes - 1);
    }

    if (lifes === 1) {
      setCharacterState("dead");
      await sleep(1000);
      setGameOver(true);
    }
    setIsAnimating(false);
  };

  const handleCorrect = async () => {
    setIsAnimating(true);
    setCharacterState("running");
    const xCharacterPosition = isSmallDevice ? 200 : isMediumDevice ? 500 : 700;
    const xCharacterOriginal = isSmallDevice ? 80 : 170;
    await animate("#character", { x: xCharacterPosition }, { duration: 2 });
    if (questionIdx % 2 === 0 && characterType >= 3) {
      setCharacterState("attack-2");
    } else {
      setCharacterState("attack");
    }
    setBossState("hurt");
    await sleep(1000);
    setCharacterState("idle");
    await animate("#character", { scaleX: -1 }, { duration: 0.5 });
    setCharacterState("running");
    setBossState("idle");
    await animate("#character", { x: xCharacterOriginal }, { duration: 2 });
    setCharacterState("idle");
    await animate("#character", { scaleX: 1 }, { duration: 0.5 });

    if (questionIdx < level.questions!.length! - 1) {
      setQuestionIdx(questionIdx + 1);
    }

    if (questionIdx === level.questions!.length! - 1) {
      const x = isSmallDevice ? 450 : isMediumDevice ? 600 : 1150;
      const duration = isSmallDevice ? 5 : isMediumDevice ? 7 : 8;
      setBossState("death");
      await animate("#gameQuestion", { opacity: 0 }, { duration: 1 });
      await animate("#gameCompleted", { opacity: 1 }, { duration: 1 });
      setCharacterState("running");
      await animate("#character", { x }, { duration });
      router.push(
        `/game/${level.stageId}/reward/${level.stageId}/${level.levelNumber + 1}`,
      );
    }
    setIsAnimating(false);
  };

  console.log(level.description);

  return (
    <div
      ref={scope}
      className="z-20 overflow-hidden lg:absolute lg:inset-0 lg:p-4"
    >
      <GameOver open={gameOver} handleOpen={setGameOver} />
      <GameQuestion
        data={currentQuestion}
        onCorrect={handleCorrect}
        onWrong={handleWrong}
        answer={currentQuestion.answer}
        isAnimating={isAnimating}
      />
      <Player characterState={characterState} characterType={characterType} />
      <Boss bossState={bossState} bossName={level.description} />
      <div>
        <div className="bottom-4 left-4 lg:absolute">
          <div className="flex items-center">
            {lifes > 0 &&
              Array.from({ length: lifes }).map((_, idx) => (
                <Image
                  key={idx}
                  src="/heart.png"
                  alt=""
                  width={50}
                  height={50}
                  className="w-10"
                />
              ))}
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/coins.png"
              alt=""
              width={43}
              height={43}
              className="w-10"
            />
            <span className="text-xl text-white">{coins}</span>
          </div>
        </div>
        <div className="bottom-4 right-4 lg:absolute">
          <span className="text-xl text-white">
            Questions: {questionIdx + 1}/{level.questions?.length}
          </span>
        </div>
      </div>
    </div>
  );
};
