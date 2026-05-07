export type TarotSuit = "Wands" | "Cups" | "Swords" | "Pentacles";

export type TarotCardData = {
  id: string;
  name: string;
  arcana: "Major Arcana" | "Minor Arcana";
  suit?: TarotSuit;
  accent: string;
  meaning: string;
};
