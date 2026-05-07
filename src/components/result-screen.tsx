import { motion } from "framer-motion";
import { RotateCcw, Sparkles, Stars } from "lucide-react";

import { StarryBackground } from "@/components/starry-background";
import { TarotCard } from "@/components/tarot-card";
import { Button } from "@/components/ui/button";
import type { TarotCardData } from "@/types/tarot";

type ResultScreenProps = {
  card: TarotCardData | null;
  onRetry: () => void;
  onBackToLanding: () => void;
};

export function ResultScreen({
  card,
  onRetry,
  onBackToLanding,
}: ResultScreenProps) {
  if (!card) {
    return null;
  }

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-10">
      <StarryBackground intensity="vivid" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -18, scale: 0.985 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/12 px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(191,239,255,0.18),_transparent_66%)]" />
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-100/18 bg-amber-100/8 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.3em] text-amber-50/82">
                <Stars className="size-3.5" />
                Your reading
              </div>
              <h2 className="font-heading text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
                One card, one clear threshold.
              </h2>
              <p className="max-w-3xl text-sm leading-7 text-slate-200/78 sm:text-base">
                Let the draw settle before you interpret it too quickly. This
                single card is meant to concentrate the moment rather than
                scatter it.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100/14 bg-cyan-100/8 px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-cyan-50/82">
                <Sparkles className="size-3.5" />
                Drawn from a single-card reading
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={onRetry}
                size="lg"
                className="h-11 rounded-full bg-amber-100 px-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950 hover:bg-amber-50"
              >
                <RotateCcw className="size-4" />
                Retry
              </Button>
              <Button
                variant="ghost"
                onClick={onBackToLanding}
                size="lg"
                className="h-11 rounded-full border border-white/12 bg-white/6 px-6 text-xs uppercase tracking-[0.28em] text-slate-100 hover:bg-white/10 hover:text-white"
              >
                Back to Landing
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="grid gap-4 rounded-[1.8rem] border border-white/10 bg-white/4 p-4 backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(0,0,0,0.12))] p-5">
            <div className="text-[0.68rem] uppercase tracking-[0.3em] text-slate-300/70">
              Reading focus
            </div>
            <h3 className="mt-3 font-heading text-3xl text-white">
              The card at the center of the moment.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300/78">
              Read this draw slowly. Notice what feels immediate, what feels
              cautionary, and what feels like an invitation into your next step.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/8 bg-black/12 px-4 py-3">
                <div className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-50/68">
                  Drawn card
                </div>
                <div className="mt-1 font-heading text-2xl text-white">
                  {card.name}
                </div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/12 px-4 py-3">
                <div className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-50/68">
                  Arcana
                </div>
                <div className="mt-1 font-heading text-2xl text-white">
                  {card.suit ? `${card.suit} · ${card.arcana}` : card.arcana}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: "easeOut",
              }}
              className="flex justify-center"
            >
              <TarotCard
                card={card}
                selected
                revealMeaning
                readingLabel="Your draw"
                className="w-full max-w-[320px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
