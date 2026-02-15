"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function GeneratePage() {
    const params = useSearchParams();
    const characterId = params.get("id");

    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function generate() {
        setLoading(true);

        const res = await fetch("/api/manga", {
            method: "POST",
            body: JSON.stringify({
                characterId,
                storyType: "emotional dramatic scene"
            })
        });

        const text = await res.text();
        console.log(text);

        const data = JSON.parse(text);

        setImage(data.data?.images?.[0]?.url || data.images?.[0]?.url);
        setLoading(false);

    }

    return (
        <main className="p-10">
            <h1 className="text-2xl mb-4">Generate Manga</h1>

            <button
                onClick={generate}
                className="border px-4 py-2"
            >
                Generate
            </button>

            {loading && <p>Generating...</p>}

            {image && <img src={image} className="mt-6" />}
        </main>
    );
}
