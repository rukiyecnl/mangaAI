"use client";

import { useState } from "react";
import { characters } from "@/data/characters";
import CharacterGrid from "@/components/CharacterGrid";
import { genres } from "@/data/genres";
import { locations } from "@/data/locations";
import GenerateButton from "@/components/GenerateButton";
import MangaResult from "@/components/MangaResult";

export default function Home() {
  const [selectedCharacters, setSelectedCharacters] = useState<any[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("action");
  const [location, setLocation] = useState("forest");



  const toggleCharacter = (character: any) => {
    setSelectedCharacters(prev => {
      const exists = prev.find(c => c.id === character.id);

      if (exists) {
        return prev.filter(c => c.id !== character.id);
      }

      if (prev.length >= 4) return prev;

      return [...prev, character];
    });
  };



  return (
    <div className="flex flex-row p-8 gap-8 bg-slate-50 min-h-screen">

      {/* LEFT */}
      <div className="flex-[2] space-y-4">
<div className="space-y-2">

  <h1 className="text-4xl font-semibold tracking-tight text-slate-800">
    Create your own manga scene
  </h1>

  <p className="text-slate-500 w-full leading-relaxed">
    Choose up to <span className="font-medium text-slate-700">4 characters </span>
    from different styles and create a manga panel.
    You can explore more characters using pagination below.
  </p>

  <div className="flex items-center gap-2 text-sm text-slate-400">
    <span>Mixed character styles</span>
    <span>•</span>
    <span>Multiple pages</span>
    <span>•</span>
    <span>AI generated scenes</span>
  </div>

</div>



        <CharacterGrid
          characters={characters}
          selectedCharacters={selectedCharacters}
          onToggle={toggleCharacter}
        />
      </div>

      {/* RIGHT */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 space-y-5">
        <div className="flex flex-row gap-4">

          {/* Genre */}
          <div className="flex-1">
            <label className="text-sm text-slate-500 mb-1 block">Genre</label>
            <select
              value={genre}
              onChange={e => setGenre(e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-blue-300
                bg-slate-50 hover:bg-white transition
              "
            >
              {genres.map(g => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="flex-1">
            <label className="text-sm text-slate-500 mb-1 block">Location</label>
            <select
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-blue-300
                bg-slate-50 hover:bg-white transition
              "
            >
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Generate Button */}
        <GenerateButton selectedCharacters={selectedCharacters} setImage={setImage} setLoading={setLoading} genre={genre} location={location}/>

        {loading && (
          <p className="text-sm text-slate-500 animate-pulse">
            Generating… good things take time! (1–2 minutes)
          </p>
        )}

        <MangaResult image={image}/>
      </div>
    </div>
  );
}
