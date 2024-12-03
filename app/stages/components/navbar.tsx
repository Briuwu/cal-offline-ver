import { Progress } from "@/components/ui/progress";
import { MobileMenu } from "./mobile-menu";
import users from "@/lib/constants/users.json";

export const StagesNavbar = async () => {
  const profile = users[0];

  return (
    <header className="border-b-2 border-black py-5">
      <div className="container flex items-center justify-end gap-4">
        <div className="grid w-full max-w-52 gap-1">
          <div className="flex items-center gap-2 text-sm font-bold uppercase">
            <span>xp:</span>
            <Progress value={profile.xp} />
          </div>

          <div className="flex items-center justify-between gap-2 text-sm font-bold uppercase">
            <p>
              lvl:{" "}
              <span className="text-green-400">{profile.currentLevel}</span>
            </p>
            <p>
              coins: <span className="text-yellow-400">{profile.coins}</span>
            </p>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};
