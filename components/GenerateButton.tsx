"use client";

import { useState } from "react";

export default function GenerateButton({
    selectedCharacters,
    setImage,
    setLoading,
    genre,
    location
}: any) {
    
    async function generate() {
        if (selectedCharacters.length === 0) return;
    
        setLoading(true);
    
        try {
          const res = await fetch("/api/manga", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              characters: selectedCharacters,
              genre,
              location
            })
          });
    
          const data = await res.json();
    
          console.log("FRONT RESULT:", data);
    
          const url =
            data?.data?.images?.[0]?.url ||
            data?.images?.[0]?.url ||
            null;
    
          setImage(url);
    
        } catch (err) {
          console.error("FRONT ERROR:", err);
        }
    
        setLoading(false);
      }
    return (
        <button
          disabled={selectedCharacters.length === 0}
          onClick={generate}
          className={`
                w-full mt-2 py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-pink-400 to-orange-400
                hover:from-pink-500 hover:to-orange-500
                shadow-lg hover:shadow-xl
                transition-all duration-300
                hover:scale-[1.03] active:scale-95
            ${selectedCharacters.length === 0
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:scale-[1.02] active:scale-95 shadow-md"
            }
          `}
        >
          Generate Manga
        </button>
    )

}