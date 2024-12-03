"use client";
import { useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

type Props = {
  audioId: number;
};

export const AudioPlayer = ({ audioId }: Props) => {
  const { load } = useGlobalAudioPlayer();
  let audioSrc = "";

  switch (audioId) {
    case 1:
      audioSrc = "/audio/start-game.mp3";
      break;
    case 2:
      audioSrc = "/audio/stage-selection.mp3";
      break;
  }

  useEffect(() => {
    load(audioSrc, {
      autoplay: true,
      loop: true,
    });
  }, []);

  return null;
};
