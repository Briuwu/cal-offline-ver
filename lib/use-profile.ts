"use client";
import { useState } from "react";
import usersData from "@/lib/constants/users.json";
import { Users } from "@/types";

export function useProfile() {
  const [users, setUsers] = useState(usersData);
  const [profile, setProfile] = useState<Users>(users[0]);

  const handleUserCharacterChange = (characterId: number) => {
    setProfile({
      ...profile,
      selectedCharacter: characterId,
    });
  };

  const addProfile = (user: Users) => {
    setUsers([...users, user]);
  };

  return {
    profile,
    handleUserCharacterChange,
    addProfile,
  };
}
