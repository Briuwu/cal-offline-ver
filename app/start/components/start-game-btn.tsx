"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useGlobalAudioPlayer } from "react-use-audio-player";

export const StartGameBtn = () => {
  const router = useRouter();
  const { stop } = useGlobalAudioPlayer();

  const handleClick = () => {
    stop();
    router.push("/character-selection");
  };

  return (
    <Button
      onClick={handleClick}
      className="gameBtn w-full bg-green-300 text-black"
    >
      Start Game
    </Button>
  );
};
