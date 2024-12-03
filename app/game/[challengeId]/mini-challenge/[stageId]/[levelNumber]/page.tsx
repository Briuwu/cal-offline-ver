import Image from "next/image";
import { Game } from "./components/game";
import { redirect } from "next/navigation";
import { Guidebook } from "@/app/game/[challengeId]/components/guidebook";
import { BackButton } from "@/components/back-btn";
import { backgroundImg, backgroundStage } from "@/lib/backgrounds";
import levels from "@/lib/constants/levels.json";
import { Levels } from "@/types";

async function ChallengePage({
  params,
}: {
  params: { levelNumber: number; stageId: number };
}) {
  const level = levels.find(
    (level) =>
      level.stageId === Number(params.stageId) &&
      level.levelNumber === Number(params.levelNumber),
  );

  // const profile = await getProfile();

  if (!level) {
    redirect("/stages");
  }

  if (level.type !== "mini-challenge") {
    redirect("/stages");
  }

  return (
    <main className="relative grid min-h-dvh place-content-center bg-green-300">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <Image
          src={backgroundStage[level.stageId as keyof typeof backgroundStage]}
          alt="Background"
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="flex items-center justify-between">
        <BackButton />
        <Guidebook stageName={level.name} />
      </div>
      <div className="relative max-w-[320px] overflow-hidden border-2 border-white md:max-w-[768px] lg:max-w-full">
        <Image
          src={backgroundImg[level.levelNumber as keyof typeof backgroundImg]}
          alt=""
          width={925}
          height={660}
        />
        <Game level={level as Levels} stageId={Number(params.stageId)} />
      </div>
    </main>
  );
}
export default ChallengePage;
