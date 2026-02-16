import fal from "@/lib/fal";
import { buildPrompt } from "@/lib/prompts";
import { genres } from "@/data/genres";
import { locations } from "@/data/locations";

export async function POST(req: Request) {
    try {
        //const { characters, genre, location } = await req.json();

        const body = await req.json();
        console.log("REQUEST BODY:", body);

        const { characters, genre, location } = body;

        if (!characters?.length) {
            return Response.json({ error: "No characters" }, { status: 400 });
        }

        const genreObj = genres.find(g => g.id === genre);
        const locationObj = locations.find(l => l.id === location);

        const prompt = buildPrompt(
            characters,
            genreObj?.visual || "",
            locationObj?.prompt || ""
        );

        const imageUrls = characters.map((c: any) => c.image);

        const result = await fal.subscribe("fal-ai/flux-2-pro/edit", {
            input: {
                image_urls: imageUrls,
                prompt
            }
        });

        console.log("FAL RESULT:", JSON.stringify(result, null, 2));
        console.log("PROMPT:", prompt);
        return Response.json(result);

    } catch (err) {
        console.error(err);
        return Response.json({ error: "API failed" }, { status: 500 });
    }
}
