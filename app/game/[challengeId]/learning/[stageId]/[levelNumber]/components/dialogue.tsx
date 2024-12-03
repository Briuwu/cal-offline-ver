"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getNPCImage } from "@/lib/npc";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";
import { useState } from "react";

type Props = {
  dialogue: {
    name: string;
    text: string;
    image?: string;
  };
  onNextDialogue: () => void;
  onPreviousDialogue: () => void;
  playerName: string;
  charSrc: string;
  stageId: number;
};
export const Dialogue = ({
  dialogue,
  onNextDialogue,
  playerName,
  charSrc,
  stageId,
  onPreviousDialogue,
}: Props) => {
  const [open, setOpen] = useState(true);
  const npcImage = getNPCImage(stageId);
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");
  return !isLargeDevice ? (
    <div className="flex flex-col gap-2 rounded-md bg-white p-4 text-sm md:text-base">
      <p className="font-bold uppercase">
        {dialogue.name === "player" ? playerName : dialogue.name}
      </p>
      <hr />
      <p className="text-black/75">{dialogue.text}</p>
      {dialogue.image && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"default"}>View Example</Button>
          </DialogTrigger>
          <DialogContent>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/${dialogue.image}`} alt="" className="max-w-full" />
          </DialogContent>
        </Dialog>
      )}
      <div className="flex items-center justify-between border-t-2 border-black pt-4">
        <Button
          onClick={onPreviousDialogue}
          variant={"destructive"}
          className="w-fit text-xs transition hover:scale-105 active:scale-95"
        >
          Previous
        </Button>
        <Button
          onClick={onNextDialogue}
          variant={"ghost"}
          className="text-xs transition hover:scale-105 active:scale-95"
        >
          Next
        </Button>
      </div>
    </div>
  ) : (
    <div className="absolute bottom-10 left-0 right-0">
      <Image
        src={charSrc}
        alt=""
        width={125}
        height={125}
        className="relative -z-10 translate-y-16"
      />
      <Image
        src={npcImage}
        alt=""
        width={125}
        height={125}
        className={cn(
          "absolute right-6 top-0 translate-y-16",
          stageId === 2 && "w-[250px] translate-y-28",
        )}
      />
      <div className="relative z-[99] grid min-h-56 grid-rows-[auto,1fr,auto] rounded-xl bg-white p-5">
        <p
          className={cn(
            "font-bold uppercase",
            dialogue.name === "player"
              ? "justify-self-start"
              : "justify-self-end",
          )}
        >
          {dialogue.name === "player" ? playerName : dialogue.name}
        </p>
        <div className="flex flex-col gap-2 p-2">
          <p className="text-center leading-relaxed tracking-wide">
            {dialogue.text}
          </p>
          {dialogue.image && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"default"} className="mx-auto">
                  View Example
                </Button>
              </DialogTrigger>
              <DialogContent>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/${dialogue.image}`} alt="" className="max-w-full" />
              </DialogContent>
            </Dialog>
          )}
        </div>
        <div className="flex justify-between border-t-2 border-black pt-4">
          <Button
            onClick={onPreviousDialogue}
            variant={"destructive"}
            className="w-fit text-xs transition hover:scale-105 active:scale-95"
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              onNextDialogue();
              setOpen(true);
            }}
            variant={"default"}
            className="w-fit text-xs transition hover:scale-105 active:scale-95"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
