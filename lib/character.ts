import { CharacterState } from "@/types";

import maleIdle from "@/public/characters/animations/male_homeless/idle.gif";
import maleAtk from "@/public/characters/animations/male_homeless/attack.gif";
import maleDead from "@/public/characters/animations/male_homeless/dead.gif";
import maleHurt from "@/public/characters/animations/male_homeless/hurt.gif";
import maleRun from "@/public/characters/animations/male_homeless/run.gif";
import maleWalk from "@/public/characters/animations/male_homeless/walk.gif";

import femaleIdle from "@/public/characters/animations/female_homeless/idle.gif";
import femaleAtk from "@/public/characters/animations/female_homeless/attack.gif";
import femaleDead from "@/public/characters/animations/female_homeless/dead.gif";
import femaleHurt from "@/public/characters/animations/female_homeless/hurt.gif";
import femaleRun from "@/public/characters/animations/female_homeless/run.gif";
import femaleWalk from "@/public/characters/animations/female_homeless/walk.gif";

import samuraiIdle from "@/public/characters/animations/samurai/idle.gif";
import samuraiAtk from "@/public/characters/animations/samurai/attack.gif";
import samuraiAtk2 from "@/public/characters/animations/samurai/attack-2.gif";
import samuraiDead from "@/public/characters/animations/samurai/dead.gif";
import samuraiHurt from "@/public/characters/animations/samurai/hurt.gif";
import samuraiRun from "@/public/characters/animations/samurai/run.gif";
import samuraiWalk from "@/public/characters/animations/samurai/walk.gif";

import shinobiIdle from "@/public/characters/animations/shinobi/idle.gif";
import shinobiAtk from "@/public/characters/animations/shinobi/attack.gif";
import shinobiAtk2 from "@/public/characters/animations/shinobi/attack-2.gif";
import shinobiDead from "@/public/characters/animations/shinobi/dead.gif";
import shinobiHurt from "@/public/characters/animations/shinobi/hurt.gif";
import shinobiRun from "@/public/characters/animations/shinobi/run.gif";
import shinobiWalk from "@/public/characters/animations/shinobi/walk.gif";

import fighterIdle from "@/public/characters/animations/fighter/idle.gif";
import fighterAtk from "@/public/characters/animations/fighter/attack.gif";
import fighterAtk2 from "@/public/characters/animations/fighter/attack-2.gif";
import fighterDead from "@/public/characters/animations/fighter/dead.gif";
import fighterHurt from "@/public/characters/animations/fighter/hurt.gif";
import fighterRun from "@/public/characters/animations/fighter/run.gif";
import fighterWalk from "@/public/characters/animations/fighter/walk.gif";

import fireMageIdle from "@/public/characters/animations/fire_mage/idle.gif";
import fireMageAtk from "@/public/characters/animations/fire_mage/attack.gif";
import fireMageAtk2 from "@/public/characters/animations/fire_mage/attack-2.gif";
import fireMageDead from "@/public/characters/animations/fire_mage/dead.gif";
import fireMageHurt from "@/public/characters/animations/fire_mage/hurt.gif";
import fireMageRun from "@/public/characters/animations/fire_mage/run.gif";
import fireMageWalk from "@/public/characters/animations/fire_mage/walk.gif";

import lightningMageIdle from "@/public/characters/animations/lightning_mage/idle.gif";
import lightningMageAtk from "@/public/characters/animations/lightning_mage/attack.gif";
import lightningMageAtk2 from "@/public/characters/animations/lightning_mage/attack-2.gif";
import lightningMageDead from "@/public/characters/animations/lightning_mage/dead.gif";
import lightningMageHurt from "@/public/characters/animations/lightning_mage/hurt.gif";
import lightningMageRun from "@/public/characters/animations/lightning_mage/run.gif";
import lightningMageWalk from "@/public/characters/animations/lightning_mage/walk.gif";
import { StaticImageData } from "next/image";

export const getCharacter = (
  characterState: CharacterState,
  size: number,
  type: number,
) => {
  let idle_width,
    idle_height,
    run_width,
    run_height,
    walk_width,
    walk_height,
    attack_width,
    attack_height,
    hurt_width,
    hurt_height,
    attack_2_width,
    attack_2_height,
    dead_width,
    dead_height;

  let walkSrc, runSrc, idleSrc, attackSrc, hurtSrc, attack2Src, deadSrc;

  switch (type) {
    case 1:
      attack_width = 293;
      attack_height = 295;
      dead_width = 226;
      dead_height = 287;
      hurt_width = 226;
      hurt_height = 287;
      idle_width = 193;
      idle_height = 328;
      run_width = 248;
      run_height = 292;
      walk_width = 181;
      walk_height = 323;

      walkSrc = maleWalk;
      runSrc = maleRun;
      idleSrc = maleIdle;
      attackSrc = maleAtk;
      hurtSrc = maleHurt;
      deadSrc = maleDead;

      break;
    case 2:
      attack_width = 300;
      attack_height = 274;
      dead_width = 275;
      dead_height = 229;
      hurt_width = 162;
      hurt_height = 262;
      idle_width = 163;
      idle_height = 257;
      run_width = 212;
      run_height = 270;
      walk_width = 158;
      walk_height = 276;

      walkSrc = femaleWalk;
      runSrc = femaleRun;
      idleSrc = femaleIdle;
      attackSrc = femaleAtk;
      hurtSrc = femaleHurt;
      deadSrc = femaleDead;

      break;
    case 3:
      attack_2_width = 358;
      attack_2_height = 342;
      attack_width = 252;
      attack_height = 347;
      dead_width = 331;
      dead_height = 268;
      hurt_width = 178;
      hurt_height = 302;
      idle_width = 152;
      idle_height = 352;
      run_width = 251;
      run_height = 317;
      walk_width = 159;
      walk_height = 353;

      walkSrc = fighterWalk;
      runSrc = fighterRun;
      idleSrc = fighterIdle;
      attackSrc = fighterAtk;
      attack2Src = fighterAtk2;
      hurtSrc = fighterHurt;
      deadSrc = fighterDead;

      break;
    case 4:
      attack_2_width = 448;
      attack_2_height = 324;
      attack_width = 445;
      attack_height = 317;
      dead_width = 389;
      dead_height = 318;
      hurt_width = 224;
      hurt_height = 342;
      idle_width = 221;
      idle_height = 356;
      run_width = 261;
      run_height = 334;
      walk_width = 241;
      walk_height = 366;

      walkSrc = samuraiWalk;
      runSrc = samuraiRun;
      idleSrc = samuraiIdle;
      attackSrc = samuraiAtk;
      attack2Src = samuraiAtk2;
      hurtSrc = samuraiHurt;
      deadSrc = samuraiDead;

      break;
    case 5:
      attack_2_width = 423;
      attack_height = 332;
      attack_width = 437;
      attack_height = 332;
      dead_width = 361;
      dead_height = 301;
      hurt_width = 168;
      hurt_height = 322;
      idle_width = 171;
      idle_height = 336;
      run_width = 284;
      run_height = 322;
      walk_width = 168;
      walk_height = 335;

      walkSrc = shinobiWalk;
      runSrc = shinobiRun;
      idleSrc = shinobiIdle;
      attackSrc = shinobiAtk;
      attack2Src = shinobiAtk2;
      hurtSrc = shinobiHurt;
      deadSrc = shinobiDead;

      break;
    case 6:
      attack_2_width = 485;
      attack_2_height = 290;
      attack_width = 536;
      attack_height = 284;
      dead_width = 248;
      dead_height = 248;
      hurt_width = 147;
      hurt_height = 225;
      idle_width = 149;
      idle_height = 266;
      run_width = 225;
      run_height = 267;
      walk_width = 114;
      walk_height = 274;

      walkSrc = lightningMageWalk;
      runSrc = lightningMageRun;
      idleSrc = lightningMageIdle;
      attackSrc = lightningMageAtk;
      attack2Src = lightningMageAtk2;
      hurtSrc = lightningMageHurt;
      deadSrc = lightningMageDead;

      break;
    case 7:
      attack_2_width = 534;
      attack_2_height = 345;
      attack_width = 374;
      attack_height = 256;
      dead_width = 285;
      dead_height = 247;
      hurt_width = 145;
      hurt_height = 228;
      idle_width = 158;
      idle_height = 282;
      run_width = 221;
      run_height = 278;
      walk_width = 135;
      walk_height = 288;

      walkSrc = fireMageWalk;
      runSrc = fireMageRun;
      idleSrc = fireMageIdle;
      attackSrc = fireMageAtk;
      attack2Src = fireMageAtk2;
      hurtSrc = fireMageHurt;
      deadSrc = fireMageDead;

      break;
  }
  const images: Record<
    CharacterState,
    { src?: StaticImageData; width: number; height: number }
  > = {
    idle: {
      src: idleSrc,
      width: idle_width ?? 0,
      height: idle_height ?? 0,
    },
    running: {
      src: runSrc,
      width: run_width ?? 0,
      height: run_height ?? 0,
    },
    walk: {
      src: walkSrc,
      width: walk_width ?? 0,
      height: walk_height ?? 0,
    },
    attack: {
      src: attackSrc,
      width: attack_width ?? 0,
      height: attack_height ?? 0,
    },
    hurt: {
      src: hurtSrc,
      width: hurt_width ?? 0,
      height: hurt_height ?? 0,
    },
    "attack-2": {
      src: attack2Src,
      width: attack_2_width ?? 0,
      height: attack_2_height ?? 0,
    },
    dead: {
      src: deadSrc,
      width: dead_width ?? 0,
      height: dead_height ?? 0,
    },
  };

  const src = images[characterState].src;
  const width = images[characterState].width / size;
  const height = images[characterState].height / size;

  return {
    src,
    width,
    height,
  };
};
