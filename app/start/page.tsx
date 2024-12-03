import { Button } from "@/components/ui/button";
// import { db } from "@/db";
// import { users } from "@/db/schema";
// import { handleAuth, handleCurrentUser } from "@/lib/auth";
// import { SignOutButton } from "@clerk/nextjs";
// import { eq } from "drizzle-orm";
// import { redirect } from "next/navigation";
import Link from "next/link";
import { AudioPlayer } from "../../components/audio-player";
import { StartGameBtn } from "./components/start-game-btn";

async function StartPage() {
  // const userId = handleAuth();

  // if (!userId) {
  //   redirect("/sign-in");
  // }

  // const user = await db.query.users.findFirst({
  //   where: eq(users.userId, userId),
  // });

  return (
    <main
      style={{
        backgroundImage: "url('/start/bg.webp')",
      }}
      className="grid min-h-dvh place-content-center bg-cover bg-bottom"
    >
      <AudioPlayer audioId={1} />
      <div className="space-y-10">
        <div className="text-center font-bold uppercase">
          <h1 className="text-xl md:text-2xl lg:text-5xl">
            Ctrl + Alt + Learn
          </h1>
          <p>The Adventure of Learning</p>
        </div>
        <div className="mx-auto flex max-w-sm flex-col items-center space-y-5">
          <StartGameBtn />
          <Button asChild className="gameBtn w-full bg-blue-300 text-black">
            <Link href="/pvp">PvP (Speed Run)</Link>
          </Button>
          {/* <Button asChild className="gameBtn w-full bg-red-500">
            <SignOutButton>Logout</SignOutButton>
          </Button> */}
        </div>
      </div>
    </main>
  );
}
export default StartPage;
