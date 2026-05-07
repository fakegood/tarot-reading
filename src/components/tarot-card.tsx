import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { TarotCardData } from "@/types/tarot";

type TarotCardProps = {
  card: TarotCardData;
  selected: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  revealMeaning?: boolean;
  className?: string;
  readingLabel?: string;
};

export function TarotCard({
  card,
  selected,
  disabled = false,
  onSelect,
  revealMeaning = false,
  className,
  readingLabel,
}: TarotCardProps) {
  const clickable = Boolean(onSelect);
  const emblem = getCardEmblem(card);

  return (
    <motion.button
      type="button"
      whileHover={clickable && !disabled ? { y: -6, rotate: -1 } : undefined}
      whileTap={clickable && !disabled ? { scale: 0.985 } : undefined}
      transition={{ type: "tween", duration: 0.14, ease: "easeIn" }}
      onClick={onSelect}
      disabled={disabled}
      className={cn(
        "group relative w-[176px] shrink-0 overflow-hidden rounded-[1.65rem] border border-white/12 p-3 text-left transition duration-150 sm:w-[210px] lg:w-[226px]",
        "bg-[linear-gradient(180deg,_rgba(18,18,46,0.94),_rgba(10,10,28,0.98))]",
        "shadow-[0_18px_60px_rgba(2,4,18,0.5)] backdrop-blur-sm",
        clickable ? "cursor-pointer" : "cursor-default",
        selected
          ? "border-amber-100/70 shadow-[0_0_0_1px_rgba(255,240,196,0.35),0_0_34px_rgba(255,220,134,0.25),0_24px_70px_rgba(2,4,18,0.55)]"
          : "hover:border-white/25 hover:shadow-[0_24px_70px_rgba(2,4,18,0.58)]",
        disabled ? "opacity-55 saturate-75" : "",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_38%)]" />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-10 top-4 h-16 rounded-full blur-2xl transition-opacity duration-150",
          selected ? "opacity-90" : "opacity-0 group-hover:opacity-55",
          `bg-gradient-to-r ${card.accent}`
        )}
      />

      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(10,12,34,0.88),_rgba(6,8,24,0.98))]">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-70", card.accent)} />
        <div className="absolute inset-[14px] rounded-[1rem] border border-amber-100/18 bg-[radial-gradient(circle_at_top,_rgba(255,244,204,0.22),_transparent_28%),linear-gradient(180deg,_rgba(15,17,41,0.78),_rgba(7,9,22,0.92))]" />
        <div className="absolute inset-[26px] rounded-[0.85rem] border border-white/10" />
        <div className="absolute left-1/2 top-8 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.34em] text-amber-50/80">
          {card.suit ?? card.arcana}
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-white/8 shadow-[0_0_40px_rgba(255,255,255,0.12)] backdrop-blur-md">
          <div className="text-center">
            <div className="text-4xl font-semibold text-white">{emblem}</div>
            <div className="mt-2 text-[0.58rem] uppercase tracking-[0.32em] text-slate-200/72">
              {getCardSubtitle(card)}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-10 bottom-10 rounded-full border border-white/10 px-3 py-2 text-center text-[0.6rem] uppercase tracking-[0.3em] text-slate-100/76">
          {card.name}
        </div>
      </div>

      <div className="relative space-y-3 px-1 pb-1 pt-4">
        {readingLabel ? (
          <div className="inline-flex rounded-full border border-cyan-100/15 bg-cyan-100/10 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.3em] text-cyan-50/82">
            {readingLabel}
          </div>
        ) : null}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[0.68rem] uppercase tracking-[0.3em] text-slate-300/68">
              {card.suit ? `${card.suit} · ${card.arcana}` : card.arcana}
            </div>
            <h3 className="font-heading text-xl leading-tight text-white sm:text-2xl">
              {card.name}
            </h3>
          </div>
          {selected ? (
            <span className="rounded-full border border-amber-100/30 bg-amber-100/12 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-amber-50">
              Chosen
            </span>
          ) : null}
        </div>

        {revealMeaning ? (
          <p className="text-sm leading-7 text-slate-200/82 sm:text-[0.96rem]">
            {card.meaning}
          </p>
        ) : null}
      </div>
    </motion.button>
  );
}

function getCardEmblem(card: TarotCardData) {
  if (card.suit === "Wands") return "W";
  if (card.suit === "Cups") return "C";
  if (card.suit === "Swords") return "S";
  if (card.suit === "Pentacles") return "P";

  return card.name
    .split(" ")
    .filter((part) => part.toLowerCase() !== "the")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function getCardSubtitle(card: TarotCardData) {
  if (card.suit) {
    return card.name.replace(` of ${card.suit}`, "");
  }

  return "Major";
}
