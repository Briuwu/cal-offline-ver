"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const StagesAside = () => {
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
    {
      label: "PVP",
      link: "/pvp",
      icon: "/stages/pvp.png",
      active: pathname === "/pvp",
      isDisabled: true,
    },
  ];
  return (
    <aside className="relative hidden h-full w-[300px] border-r-2 border-black p-5 lg:block">
      <nav className="sticky top-3">
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
                  choice.isDisabled && "opacity-50",
                )}
                disabled={choice.isDisabled}
              >
                <span>
                  <Image
                    src={choice.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain pl-2"
                  />
                  <Link
                    className={cn(
                      "w-full p-2",
                      choice.isDisabled &&
                        "pointer-events-none cursor-not-allowed",
                    )}
                    href={choice.link}
                    aria-disabled={choice.isDisabled}
                  >
                    {choice.label}
                  </Link>
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
