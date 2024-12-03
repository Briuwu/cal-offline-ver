"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const pathname = usePathname();
  const choices = [
    {
      label: "Learn",
      link: "/stages",
      icon: "/stages/learn-icon.png",
      active: pathname === "/stages",
    },
    {
      label: "Leaderboard",
      link: "/stages/leaderboard",
      icon: "/stages/leaderboard-icon.png",
      active: pathname === "/stages/leaderboard",
    },
    {
      label: "Achievements",
      link: "/stages/achievements",
      icon: "/stages/achievements-icon.png",
      active: pathname === "/stages/achievements",
    },
    {
      label: "Shop",
      link: "/stages/shop",
      icon: "/stages/cart.png",
      active: pathname === "/stages/shop",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <nav>
          <ul className="space-y-3">
            {choices.map((choice) => (
              <li
                key={choice.label}
                className={cn("rounded", choice.active && "bg-green-300")}
              >
                <Button
                  asChild
                  variant={"ghost"}
                  className={cn(
                    "w-full justify-start gap-2 p-0",
                    choice.active && "font-bold",
                  )}
                >
                  <span>
                    <Image
                      src={choice.icon}
                      alt=""
                      width={30}
                      height={30}
                      className="object-contain pl-2"
                    />
                    <Link className="w-full p-2" href={choice.link}>
                      {choice.label}
                    </Link>
                  </span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
