export type Users = {
  id: number;
  userId: string;
  username: string;
  email: string;
  coins: number;
  xp: number;
  currentLevel: number;
  selectedCharacter: number;
  created_at: string;
  avatar: string;
};

export type Questions = {
  question: string;
  answer: string;
  clue: string;
};

export type Leaderboard = {
  id: number;
  userId: number;
  username: string;
  email: string;
  coins: number;
  xp: number;
  currentLevel: number;
  selectedCharacter: number;
  avatar: string;
  created_at: string;
};

export type UserCharacters = {
  id: number;
  userId: number;
  characterId: number;
  created_at: string;
};

export type Characters = "male_homeless" | "female_homeless";

export type CharacterState =
  | "idle"
  | "running"
  | "walk"
  | "attack"
  | "hurt"
  | "attack-2"
  | "dead";

export type NPCState = "idle" | "dialogue";

export type BossState = "idle" | "hurt" | "death" | "attack" | "walk";

export type TreasureState = "open" | "closed";

export type LevelsType = "learning" | "mini-challenge" | "boss" | "reward";

export type LevelsName = "html" | "css" | "htmlcss" | "js" | "htmlcssjs";

export type LevelsQuestions = {
  question: string;
  answer: string;
  clue: string;
}[];

export type Levels = {
  id: number;
  stageId: number;
  type: LevelsType;
  name: LevelsName;
  description: string;
  questions?: LevelsQuestions;
  levelNumber: number;
};

export type PvpQuestions = {
  id: number;
  question: string;
  answer: string;
  options: string[];
};
export type UserProgress = {
  id: number;
  userId: number;
  levelNumber: number;
  stageId: number;
  status: "locked" | "unlocked" | "completed";
  created_at: string;
};
