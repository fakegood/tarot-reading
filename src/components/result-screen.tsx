import { motion } from "framer-motion";
import { RotateCcw, Stars } from "lucide-react";

import { StarryBackground } from "@/components/starry-background";
import { TarotCard } from "@/components/tarot-card";
import { Button } from "@/components/ui/button";
import type { TarotCardData } from "@/types/tarot";

type ResultScreenProps = {
  cards: TarotCardData[];
  onRetry: () => void;
  onBackToLanding: () => void;
};

export function ResultScreen({
  cards,
  onRetry,
  onBackToLanding,
}: ResultScreenProps) {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-10">
      <StarryBackground intensity="vivid" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-panel rounded-[2rem] border border-white/12 px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-100/18 bg-amber-100/8 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.3em] text-amber-50/82">
                <Stars className="size-3.5" />
                Your reading
              </div>
              <h2 className="font-heading text-4xl text-white sm:text-5xl">
                Three cards, one quiet constellation.
              </h2>
              <p className="max-w-3xl text-sm leading-7 text-slate-200/78 sm:text-base">
                Read them in sequence. The first card opens the door, the second
                reveals the present current, and the third offers the energy
                that wants to carry you forward.
              </p>
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

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.12 + index * 0.12,
                ease: "easeOut",
              }}
              className="flex justify-center"
            >
              <TarotCard card={card} selected revealMeaning />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
