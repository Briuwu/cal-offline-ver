"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { guidebooks } from "@/lib/guidebooks";
import Image from "next/image";

type Props = {
  stageName: string;
};

export const Guidebook = ({ stageName }: Props) => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  if (!hasHydrated) {
    return null;
  }
  const guidebook = guidebooks[stageName as keyof typeof guidebooks];
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="left-0 z-50 m-4 text-sm lg:absolute lg:bottom-0"
      >
        <Button>Guidebook</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <div className="space-y-10">
          {guidebook.map((item, idx) => (
            <div key={idx}>
              <p className="text-sm font-bold uppercase md:text-base">
                {item.text}
              </p>
              <Image
                src={item.code}
                alt=""
                width={item.width}
                height={item.height}
              />
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
