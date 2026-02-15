"use client";

import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ characters }: any) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {characters.map((c: any) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  );
}
