import { motion } from "framer-motion";
import { ArrowLeft, PauseCircle, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { StarryBackground } from "@/components/starry-background";
import { TarotCard } from "@/components/tarot-card";
import type { TarotCardData } from "@/types/tarot";

type CardSelectionScreenProps = {
  cards: TarotCardData[];
  selectedIds: string[];
  onToggleCard: (cardId: string) => void;
  onBack: () => void;
};

export function CardSelectionScreen({
  cards,
  selectedIds,
  onToggleCard,
  onBack,
}: CardSelectionScreenProps) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeCards = [...cards, ...cards];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-10">
      <StarryBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-between gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="rounded-full border border-white/12 bg-white/6 px-4 text-slate-100 hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to Landing
            </Button>

            <div className="rounded-full border border-amber-100/18 bg-amber-100/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-50/88">
              {selectedIds.length} of 3 cards chosen
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-panel overflow-hidden rounded-[2rem] border border-white/12 px-5 py-8 sm:px-8 sm:py-10"
          >
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100/14 bg-cyan-100/8 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.3em] text-cyan-100/78">
                  <Sparkles className="size-3.5" />
                  Choose your reading
                </div>
                <h2 className="font-heading text-4xl text-white sm:text-5xl">
                  Hover to still the river of cards.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-slate-200/78 sm:text-base">
                  Select any three cards. Their messages will combine into a
                  quick reading focused on your current threshold.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-200/78">
                <PauseCircle className="size-3.5" />
                {isPaused ? "Scroll paused" : "Hover or touch to pause"}
              </div>
            </div>

            <div
              className="relative -mx-5 overflow-hidden py-5 sm:-mx-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[rgba(10,10,28,0.95)] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[rgba(10,10,28,0.95)] to-transparent" />

              <div
                className="flex w-max gap-5 px-5 sm:px-8"
                style={{
                  animation: "drift-marquee 34s linear infinite",
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {marqueeCards.map((card, index) => {
                  const isSelected = selectedIds.includes(card.id);
                  const disableNewSelection =
                    !isSelected && selectedIds.length >= 3;

                  return (
                    <TarotCard
                      key={`${card.id}-${index}`}
                      card={card}
                      selected={isSelected}
                      disabled={disableNewSelection}
                      onSelect={() => onToggleCard(card.id)}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-4 sm:grid-cols-3 sm:p-5">
          {Array.from({ length: 3 }).map((_, index) => {
            const card = cards.find((item) => item.id === selectedIds[index]);

            return (
              <div
                key={`slot-${index}`}
                className="rounded-[1.25rem] border border-dashed border-white/12 bg-black/15 px-4 py-4"
              >
                <div className="mb-2 text-[0.65rem] uppercase tracking-[0.3em] text-slate-300/68">
                  Slot {index + 1}
                </div>
                <div className="font-heading text-2xl text-white">
                  {card ? card.name : "Awaiting a card"}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300/72">
                  {card
                    ? "Chosen and woven into the reading."
                    : "Pause the motion and follow the card that pulls your attention."}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
