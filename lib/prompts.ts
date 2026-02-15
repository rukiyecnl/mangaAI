export function buildPrompt(character: any, storyType: string) {
  return `
black and white manga panel,
emotional storytelling,
character named ${character.name},
${character.personality},

three-panel horizontal manga layout with clear panel borders,

main character based on the reference image,
keep same hairstyle, face shape and outfit,

strong leader personality,
cold and serious expression,
confident posture,

panel 1: character looking forward with speech bubble "We move now."
panel 2: close-up face with speech bubble "Stay focused."
panel 3: dramatic pose with speech bubble "Victory is certain."

black and white manga style,
high contrast ink lines,
professional manga illustration,
dramatic lighting,
clean lineart,
classic Japanese manga framing
cinematic angles,
dynamic composition
same character across all panels
no extra characters,
no color,
no blurry faces,
no distorted hands,
no realistic style
`;
}
