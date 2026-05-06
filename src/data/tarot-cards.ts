import type { TarotCardData } from "@/types/tarot";

export const tarotCards: TarotCardData[] = [
  {
    id: "the-fool",
    name: "The Fool",
    arcana: "Major Arcana",
    imageSrc: "/tarot/the-fool.svg",
    accent: "from-sky-300/70 via-cyan-200/50 to-amber-100/70",
    keywords: ["Beginnings", "Faith", "Leap"],
    meaning:
      "A fresh portal is opening. The Fool asks you to trust your curiosity, move lightly, and let wonder guide the first step.",
  },
  {
    id: "the-moon",
    name: "The Moon",
    arcana: "Major Arcana",
    imageSrc: "/tarot/the-moon.svg",
    accent: "from-indigo-400/70 via-fuchsia-300/40 to-amber-100/60",
    keywords: ["Intuition", "Dreams", "Mystery"],
    meaning:
      "Not every answer arrives in daylight. The Moon invites you to listen to symbols, notice patterns, and let instinct speak before logic rushes in.",
  },
  {
    id: "the-star",
    name: "The Star",
    arcana: "Major Arcana",
    imageSrc: "/tarot/the-star.svg",
    accent: "from-cyan-300/70 via-blue-300/50 to-violet-200/70",
    keywords: ["Hope", "Healing", "Grace"],
    meaning:
      "Relief is finding you. The Star restores your energy and reminds you that clarity returns once you stop gripping the outcome so tightly.",
  },
  {
    id: "the-sun",
    name: "The Sun",
    arcana: "Major Arcana",
    imageSrc: "/tarot/the-sun.svg",
    accent: "from-amber-200/90 via-orange-300/70 to-rose-200/80",
    keywords: ["Joy", "Confidence", "Vitality"],
    meaning:
      "The path ahead brightens. The Sun signals momentum, visibility, and the kind of truth that warms everything it touches.",
  },
  {
    id: "the-high-priestess",
    name: "The High Priestess",
    arcana: "Major Arcana",
    imageSrc: "/tarot/the-high-priestess.svg",
    accent: "from-violet-300/70 via-indigo-400/60 to-slate-200/60",
    keywords: ["Wisdom", "Silence", "Inner knowing"],
    meaning:
      "Hold still for a moment longer. The High Priestess suggests that what you need is already within reach if you let the noise settle.",
  },
  {
    id: "the-lovers",
    name: "The Lovers",
    arcana: "Major Arcana",
    imageSrc: "/tarot/the-lovers.svg",
    accent: "from-rose-200/80 via-pink-300/60 to-violet-200/70",
    keywords: ["Alignment", "Choice", "Union"],
    meaning:
      "This card points to honest choice. The Lovers ask whether your next move reflects your values, not just your immediate desire.",
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    arcana: "Major Arcana",
    imageSrc: "/tarot/wheel-of-fortune.svg",
    accent: "from-amber-100/80 via-yellow-300/60 to-indigo-300/70",
    keywords: ["Cycles", "Luck", "Turning point"],
    meaning:
      "Circumstances are shifting. Wheel of Fortune marks a change in rhythm and reminds you to respond with flexibility instead of resistance.",
  },
  {
    id: "temperance",
    name: "Temperance",
    arcana: "Major Arcana",
    imageSrc: "/tarot/temperance.svg",
    accent: "from-teal-200/70 via-cyan-300/60 to-amber-100/80",
    keywords: ["Balance", "Harmony", "Integration"],
    meaning:
      "Temperance blends extremes into something wiser. It is a sign to move with patience, mix intuition with action, and choose the steady path.",
  },
];
