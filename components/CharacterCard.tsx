"use client";

import { useRouter } from "next/navigation";

export default function CharacterCard({ character }: any) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/generate?id=${character.id}`)}
      className="border p-4 cursor-pointer hover:scale-105 transition"
    >
      <img src={character.image} />
      <h2>{character.name}</h2>
    </div>
  );
}
