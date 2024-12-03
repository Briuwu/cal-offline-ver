"use client";

import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { useGlobalAudioPlayer } from "react-use-audio-player";

export const BackButton = () => {
  const router = useRouter();
  const { stop } = useGlobalAudioPlayer();

  const onBack = () => {
    stop();
    router.push("/stages");
  };

  return (
    <Button
      onClick={onBack}
      className="left-0 top-0 z-50 m-4 text-sm lg:absolute"
    >
      <ChevronLeft className="w-5" />
      Go Back
    </Button>
  );
};
