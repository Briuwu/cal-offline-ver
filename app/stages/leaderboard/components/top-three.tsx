import { cn } from "@/lib/utils";
import { Users } from "@/types";
import Image from "next/image";
import characters from "@/lib/constants/characters.json";

type Props = {
  topThreePlayers: Users[];
};

export const TopThree = async ({ topThreePlayers }: Props) => {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {topThreePlayers.map(async (player, index) => {
        const playerCharacter = characters.find(
          (char) => char.id === player.selectedCharacter,
        );
        return (
          <div
            key={player.id}
            className={cn(
              "relative rounded-md border p-2 text-center",
              index === 0 && "border-yellow-300 md:order-2 md:-translate-y-10",
              index === 1 && "border-green-300 md:order-1",
              index === 2 && "border-pink-300 md:order-3",
            )}
          >
            <span className="absolute left-2 grid aspect-square w-7 place-content-center rounded-full bg-black text-sm text-white">
              {index + 1}
            </span>
            {index === 0 && (
              <Image
                src="/stages/crown.png"
                alt=""
                width={100}
                height={100}
                className="absolute -top-16 right-1/2 w-20 translate-x-1/2"
              />
            )}
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
            <Image
              src={playerCharacter!.characterSrc!}
              alt=""
              width={180}
              height={304}
              className="mx-auto w-20 object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};
