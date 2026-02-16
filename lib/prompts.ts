export function buildPrompt(characters: any[], genre: string, location: string) {
  return `
professional black and white japanese manga illustration,
high contrast ink,
dramatic cinematic lighting,
clean ink lineart

Location:
${location}

Characters:
${characters.map((c, i) => `
Character ${i + 1}:
name: ${c.name}
personality: ${c.personality}
character identity inspired by reference image ${i + 1}
`).join("")}

preserve face, hairstyle and outfit style only
allow dynamic body poses and gestures
do not copy original pose

Three panel horizontal manga layout with clear borders

Genre mood:
${genre}

panel 1: both characters visible, wide establishing shot
panel 2: emotional close-up on main character
panel 3: cinematic pose with both characters

speech bubbles present but empty

same characters across all panels
no redesign
no color
no realistic style
no pose cloning
no distorted hands
`;
}
