import { TopThree } from "./components/top-three";
import { cn } from "@/lib/utils";
import Image from "next/image";
import users from "@/lib/constants/users.json";

async function LeaderboardPage() {
  const leaderboard = users.sort((a, b) => b.currentLevel - a.currentLevel);
  if (!leaderboard) {
    return <div>Wow... so empty, start playing to be on the leaderboard!</div>;
  }

  const topThreePlayers = leaderboard.slice(0, 3);
  const restOfThePlayers = leaderboard.slice(3);
  return (
    <div className="py-28">
      <TopThree topThreePlayers={topThreePlayers} />
      <div className="mt-20 space-y-10">
        {restOfThePlayers.map((player, index) => (
          <div
            key={player.id}
            className={cn("relative rounded-md border p-2 text-center")}
          >
            <span className="absolute left-2 grid aspect-square w-7 place-content-center rounded-full bg-black text-sm text-white">
              {index + 4}
            </span>
            <Image
              src={player.avatar || "/avatar.png"}
              alt=""
              width={50}
              height={50}
              className={cn("mx-auto rounded-full")}
            />
            <div className="mt-2 border-t pt-2">
              <p className="font-bold">{player.username}</p>
              <p>lvl: {player.currentLevel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LeaderboardPage;
