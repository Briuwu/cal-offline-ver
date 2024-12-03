import { cn } from "@/lib/utils";
import { Levels } from "./levels";
import stages from "@/lib/constants/stages.json";
import levels from "@/lib/constants/levels.json";
import { Levels as LevelsType } from "@/types";

export const AllStages = async () => {
  const stageColors = [
    "bg-green-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-pink-500",
    "bg-purple-500",
  ];

  const stagesWithColors = stages.map((stage, index) => ({
    ...stage,
    color: stageColors[index],
  }));

  return (
    <div className="space-y-10">
      {stagesWithColors.map((stage) => (
        <div key={stage.id} className="space-y-5">
          <div
            style={{
              backgroundImage: `url(${stage.stage_bg_url})`,
            }}
            className={cn(
              "relative rounded-md border-2 border-black bg-cover bg-center p-10 text-white",
              stage.color,
            )}
          >
            <h1 className="relative z-20 text-lg font-bold md:text-xl lg:text-2xl">
              {stage.stage_name}
            </h1>
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <Levels levels={levels as LevelsType[]} stageId={stage.id} />
        </div>
      ))}
    </div>
  );
};
