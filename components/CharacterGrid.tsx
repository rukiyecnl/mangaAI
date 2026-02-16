"use client";

import { useState } from "react";

export default function CharacterGrid({
  characters,
  selectedCharacters,
  onToggle
}: any) {
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(0);

  const start = page * ITEMS_PER_PAGE;
  const paginated = characters.slice(start, start + ITEMS_PER_PAGE);

  const maxPage = Math.ceil(characters.length / ITEMS_PER_PAGE) - 1;

  return (
    <div className="space-y-4">

    <div className="grid grid-cols-4 gap-6">
      {paginated.map((c: any) => {
        const selected = selectedCharacters.some(
          (sc: any) => sc.id === c.id
        );

        return (
          <div
            key={c.id}
            onClick={() => onToggle(c)}
            className={`
              group cursor-pointer rounded-2xl p-3 space-y-3
              bg-white/70 backdrop-blur
              shadow-md hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
              ${
                selected
                  ? "ring-2 ring-indigo-400 shadow-indigo-200"
                  : "hover:ring-1 hover:ring-slate-200"
              }
            `}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={c.image}
                className="
                  w-full h-66 object-cover
                  transition duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Info */}
            <div className="space-y-1">
              <p className="font-semibold text-sm tracking-wide">
                {c.name}
              </p>

              <span className="
                inline-block text-xs py-1 text-slate-500
              ">
                {c.personality}
              </span>
            </div>
          </div>
        );
      })}
    </div>


      {/* Pagination */}
    <div className="flex justify-center items-center gap-6 mt-6">

      <button
        disabled={page === 0}
        onClick={() => setPage(p => p - 1)}
        className="
          px-4 py-2 rounded-full
          bg-slate-100 text-slate-600
          hover:bg-slate-200
          transition
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        ← Prev
      </button>

      <span className="text-sm font-medium text-slate-500">
        {page + 1} / {maxPage + 1}
      </span>

      <button
        disabled={page === maxPage}
        onClick={() => setPage(p => p + 1)}
        className="
          px-4 py-2 rounded-full
          bg-slate-100 text-slate-600
          hover:bg-slate-200
          transition
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        Next →
      </button>

    </div>

    </div>
  );
}
