import Image from "next/image";
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

  return (
    <motion.button
      type="button"
      whileHover={clickable && !disabled ? { y: -6, rotate: -1 } : undefined}
      whileTap={clickable && !disabled ? { scale: 0.985 } : undefined}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      onClick={onSelect}
      disabled={disabled}
      className={cn(
        "group relative w-[176px] shrink-0 overflow-hidden rounded-[1.65rem] border border-white/12 p-3 text-left transition duration-300 sm:w-[210px] lg:w-[226px]",
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
          "pointer-events-none absolute inset-x-10 top-4 h-16 rounded-full blur-2xl transition-opacity duration-300",
          selected ? "opacity-90" : "opacity-0 group-hover:opacity-55",
          `bg-gradient-to-r ${card.accent}`
        )}
      />

      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/25">
        <Image
          src={card.imageSrc}
          alt={card.name}
          width={420}
          height={560}
          className="aspect-[3/4] h-auto w-full object-cover"
        />
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
              {card.arcana}
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

        <div className="flex flex-wrap gap-2">
          {card.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-slate-200/76"
            >
              {keyword}
            </span>
          ))}
        </div>

        {revealMeaning ? (
          <p className="text-sm leading-7 text-slate-200/82 sm:text-[0.96rem]">
            {card.meaning}
          </p>
        ) : (
          <p className="text-sm leading-7 text-slate-300/72">
            Select this card to weave its message into your reading.
          </p>
        )}
      </div>
    </motion.button>
  );
}
