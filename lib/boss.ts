import { BossState } from "@/types";

export const getBoss = (
  bossState: BossState,
  size: number,
  bossName: string,
) => {
  let idle_width,
    idle_height,
    hurt_width,
    hurt_height,
    death_width,
    death_height,
    attack_width,
    attack_height,
    walk_width,
    walk_height;
  const boss = bossName.toLowerCase();

  switch (boss) {
    case "bloated":
      attack_width = 324;
      attack_height = 325;
      death_width = 314;
      death_height = 319;
      hurt_width = 289;
      hurt_height = 310;
      idle_width = 301;
      idle_height = 328;
      walk_width = 313;
      walk_height = 322;

      break;
    case "centipede":
      attack_width = 426;
      attack_height = 276;
      death_width = 392;
      death_height = 240;
      hurt_width = 299;
      hurt_height = 239;
      idle_width = 332;
      idle_height = 247;
      walk_width = 332;
      walk_height = 247;
      break;
    case "turtle":
      attack_width = 423;
      attack_height = 254;
      death_width = 424;
      death_height = 267;
      hurt_width = 370;
      hurt_height = 250;
      idle_width = 393;
      idle_height = 249;
      walk_width = 396;
      walk_height = 271;

      break;
    case "twohead":
      attack_width = 574;
      attack_height = 291;
      death_width = 450;
      death_height = 279;
      hurt_width = 403;
      hurt_height = 291;
      idle_width = 410;
      idle_height = 291;
      walk_width = 437;
      walk_height = 278;

      break;

    case "dragon":
      attack_width = 1026;
      attack_height = 557;
      death_width = 710;
      death_height = 303;
      hurt_width = 699;
      hurt_height = 317;
      idle_width = 724;
      idle_height = 395;
      walk_width = 666;
      walk_height = 328;

      break;
  }
  const images = {
    idle: {
      src: `/boss/${boss}/idle.gif`,
      width: idle_width ?? 0,
      height: idle_height ?? 0,
    },
    hurt: {
      src: `/boss/${boss}/hurt.gif`,
      width: hurt_width ?? 0,
      height: hurt_height ?? 0,
    },
    death: {
      src: `/boss/${boss}/death.gif`,
      width: death_width ?? 0,
      height: death_height ?? 0,
    },
    attack: {
      src: `/boss/${boss}/attack.gif`,
      width: attack_width ?? 0,
      height: attack_height ?? 0,
    },
    walk: {
      src: `/boss/${boss}/walk.gif`,
      width: walk_width ?? 0,
      height: walk_height ?? 0,
    },
  };

  const src = images[bossState].src;
  const width = images[bossState].width / size;
  const height = images[bossState].height / size;

  return {
    src,
    width,
    height,
  };
};
