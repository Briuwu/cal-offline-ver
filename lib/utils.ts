import { PvpQuestions } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function shuffleData(array: PvpQuestions[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// export function calculateTotalPoints(
//   totalScore: number,
//   timeTaken: number,
//   weightScore = 0.7,
//   weightTime = 0.3,
// ) {
//   // Fixed default bounds for time normalization
//   const DEFAULT_MIN_TIME = 0;
//   const DEFAULT_MAX_TIME = 600; // Adjust based on expected maximum time

//   // Normalize the time
//   let normalizedTime =
//     (timeTaken - DEFAULT_MIN_TIME) / (DEFAULT_MAX_TIME - DEFAULT_MIN_TIME);
//   // Calculate the inverse time score
//   let inverseTimeScore = 1 - normalizedTime;
//   // Calculate the total points
//   let totalPoints = weightScore * totalScore + weightTime * inverseTimeScore;

//   return totalPoints;
// }
