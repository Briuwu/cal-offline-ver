import Image from "next/image";
import { Game } from "./components/game";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { dialogues as dataDialogues } from "@/lib/dialogues";
import { Guidebook } from "@/app/game/[challengeId]/components/guidebook";
import { backgroundImg, backgroundStage } from "@/lib/backgrounds";
import levels from "@/lib/constants/levels.json";
import { Levels } from "@/types";

async function LearningPage({
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

  if (level.type !== "learning") {
    redirect("/stages");
  }

  const dialogues = dataDialogues[level.name as keyof typeof dataDialogues];

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
        <Button asChild>
          <Link
            href="/stages"
            className="left-0 top-0 z-50 m-4 text-sm lg:absolute"
          >
            <ChevronLeft className="w-5" />
            Go Back
          </Link>
        </Button>
        <Guidebook stageName={level.name} />
      </div>
      <div className="relative max-w-[320px] overflow-hidden border-2 border-white md:max-w-[768px] lg:max-w-full">
        <Image
          src={backgroundImg[level.levelNumber as keyof typeof backgroundImg]}
          alt=""
          width={925}
          height={660}
        />
        <Game
          level={level as Levels}
          dialogues={dialogues}
          stageId={Number(params.stageId)}
        />
      </div>
    </main>
  );
}
export default LearningPage;
