import { cn } from "@/lib/utils";
import Image from "next/image";

import ACHIEVEMENTS from "@/lib/constants/achievements.json";

async function AchievementPage() {
  const achievements = ACHIEVEMENTS;
  // const userAchievements = await getUserAchievements();

  // const completedAchievements = userAchievements.map(
  //   (achievement) => achievement.achievementId,
  // );
  return (
    <div>
      <h1 className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
        Achievements
      </h1>
      <div className="mt-6 grid gap-6">
        {achievements.map((achievement) => {
          // const completed = completedAchievements.includes(achievement.id);
          return (
            <div
              key={achievement.id}
              className={cn(
                "flex items-center justify-between rounded-md border border-black p-4 odd:bg-blue-100 even:bg-green-100",
                true /* TEMPORARY */ && "opacity-50",
              )}
            >
              <div className="space-y-2">
                <p className="font-bold uppercase">{achievement.name}</p>
                <p className="text-black/70">{achievement.description}</p>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1">
                    <Image
                      alt=""
                      src="/coins.png"
                      width={43}
                      height={43}
                      className="w-5 object-contain"
                    />
                    <span className="text-yellow-500">
                      + {achievement.coins}
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-1">
                    <Image
                      alt=""
                      src="/xp.png"
                      width={43}
                      height={43}
                      className="w-5 object-contain"
                    />
                    <span className="text-yellow-500">
                      + {achievement.rewarded_at} levels
                    </span>
                  </div> */}
                </div>
              </div>
              <div>
                {/* {completed ? ( */}
                {/* <span className="rounded-full bg-green-500 p-2 text-xs uppercase text-white">
                    Completed
                  </span> */}
                {/* ) : ( */}
                <span className="rounded-full bg-red-500 p-2 text-xs uppercase text-white">
                  Locked
                </span>
                {/* )} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AchievementPage;
