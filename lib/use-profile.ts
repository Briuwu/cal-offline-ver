"use client";
import { useState } from "react";
import { Users } from "@/types";

export function useProfile() {
  const user = {
    id: 74,
    userId: "user_2pgIeyruaibP21Rscv1IbpERB3U",
    username: "Tamagooooooooo",
    email: "hicapdarenz@gmail.com",
    coins: 0,
    xp: 0,
    currentLevel: 1,
    selectedCharacter: Number(process.env.SELECTED_CHAR) || 1,
    created_at: "2024-12-02 23:17:32.230565",
    avatar:
      "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yampRMlNBa2hMUTNEbnZ6b2Q2a0hpVTlxOTQiLCJyaWQiOiJ1c2VyXzJwZ0lleXJ1YWliUDIxUnNjdjFJYnBFUkIzVSJ9",
  };
  const [profile, setProfile] = useState<Users>(user);

  const handleUserCharacterChange = (characterId: number) => {
    setProfile({
      ...profile,
      selectedCharacter: characterId,
    });
  };

  return {
    profile,
    handleUserCharacterChange,
  };
}
