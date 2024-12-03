"use client";
import { useState } from "react";
import users from "@/lib/constants/users.json";

export function useProfile() {
  const [profile, setProfile] = useState(users[0]);

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
