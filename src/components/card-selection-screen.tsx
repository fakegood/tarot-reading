import { motion } from "framer-motion";
import { ArrowLeft, PauseCircle, Sparkles, Stars } from "lucide-react";
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
  const marqueeCards = [...cards, ...cards, ...cards];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
      <StarryBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl flex-col justify-between gap-6 sm:gap-8">
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              variant="ghost"
              onClick={onBack}
              className="w-fit rounded-full border border-white/12 bg-white/6 px-4 text-slate-100 hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to Landing
            </Button>

            <motion.div
              layout
              className="flex items-center gap-3 self-start rounded-full border border-amber-100/18 bg-amber-100/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-50/88"
            >
              <span>{selectedIds.length}/1</span>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 1 }).map((_, index) => (
                  <span
                    key={`progress-${index}`}
                    className={`h-2 w-2 rounded-full transition ${
                      index < selectedIds.length
                        ? "bg-amber-100 shadow-[0_0_12px_rgba(255,233,177,0.7)]"
                        : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.985 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/12 px-4 py-6 sm:px-8 sm:py-10"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(255,238,196,0.12),_transparent_65%)]" />
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100/14 bg-cyan-100/8 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.3em] text-cyan-100/78">
                  <Sparkles className="size-3.5" />
                  Choose your reading
                </div>
                <h2 className="font-heading text-3xl text-white sm:text-5xl">
                  Follow the card that catches your breath.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-slate-200/78 sm:text-base">
                  Draw one card from the full tarot deck. The river pauses when
                  you hover or press into it, then resumes its drift as soon as
                  you let go.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-slate-200/78">
                <PauseCircle className="size-3.5" />
                {isPaused ? "Scroll paused" : "Hover or touch to pause"}
              </div>
            </div>

            <div
              className="relative -mx-4 overflow-hidden py-4 sm:-mx-8 sm:py-5"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[rgba(10,10,28,0.95)] to-transparent sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[rgba(10,10,28,0.95)] to-transparent sm:w-20" />
              <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] border border-white/6" />

              <div
                className="flex w-max gap-4 px-4 sm:gap-5 sm:px-8"
                style={{
                  animation: "drift-marquee-seamless 76s linear infinite",
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {marqueeCards.map((card, index) => {
                  const isSelected = selectedIds.includes(card.id);

                  return (
                    <TarotCard
                      key={`${card.id}-${index}`}
                      card={card}
                      selected={isSelected}
                      onSelect={() => onToggleCard(card.id)}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="grid gap-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-5"
        >
          {Array.from({ length: 1 }).map((_, index) => {
            const card = cards.find((item) => item.id === selectedIds[index]);

            return (
              <div
                key={`slot-${index}`}
                className="rounded-[1.25rem] border border-dashed border-white/12 bg-[linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(0,0,0,0.16))] px-4 py-4"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-300/68">
                    {index + 1}/1
                  </div>
                  <Stars className={`size-4 ${card ? "text-amber-100" : "text-white/25"}`} />
                </div>
                <div className="font-heading text-xl text-white sm:text-2xl">
                  {card ? card.name : "Awaiting a card"}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300/72">
                  {card
                    ? "Chosen and now unfolding into your reading."
                    : "Pause the motion and follow the card that pulls your attention."}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
