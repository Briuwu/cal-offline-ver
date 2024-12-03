import characters from "@/lib/constants/characters.json";

export function useCharacter(characterId: number) {
  const character = characters.find((c) => c.id === characterId);
  return character!;
}
