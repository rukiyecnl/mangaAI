import { characters } from "@/data/characters";
import CharacterGrid from "@/components/CharacterGrid";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl mb-6">Choose your character</h1>
      <CharacterGrid characters={characters} />
    </main>
  );
}
