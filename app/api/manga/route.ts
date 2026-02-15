import fal from "@/lib/fal";
import { buildPrompt } from "@/lib/prompts";
import { characters } from "@/data/characters";

export async function POST(req: Request) {
    try {
        const { characterId, storyType } = await req.json();

        console.log("CHARACTER ID:", characterId);

        const character = characters.find(c => c.id === characterId);

        if (!character) {
            return Response.json({ error: "Character not found" }, { status: 400 });
        }

        const result = await fal.subscribe("fal-ai/flux-2-pro/edit", {
            input: {
                image_urls: [character.image],
                prompt: buildPrompt(character, storyType),
            }
        });

        return Response.json(result);

    } catch (err) {
        console.error(err);
        return Response.json({ error: "API failed" }, { status: 500 });
    }
}
