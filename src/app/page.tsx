"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { CardSelectionScreen } from "@/components/card-selection-screen";
import { LandingScreen } from "@/components/landing-screen";
import { ResultScreen } from "@/components/result-screen";
import { tarotCards } from "@/data/tarot-cards";
import type { TarotCardData } from "@/types/tarot";

type Screen = "landing" | "selection" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const selectedCards = useMemo<TarotCardData[]>(
    () =>
      selectedIds
        .map((id) => tarotCards.find((card) => card.id === id))
        .filter((card): card is TarotCardData => Boolean(card)),
    [selectedIds]
  );

  useEffect(() => {
    if (selectedIds.length !== 3) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setScreen("result");
    }, 650);

    return () => window.clearTimeout(timeout);
  }, [selectedIds]);

  const handleStartReading = () => {
    setSelectedIds([]);
    setScreen("selection");
  };

  const handleToggleCard = (cardId: string) => {
    setSelectedIds((current) => {
      if (current.includes(cardId)) {
        return current.filter((id) => id !== cardId);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, cardId];
    });
  };

  const handleRetry = () => {
    setSelectedIds([]);
    setScreen("selection");
  };

  const handleBackToLanding = () => {
    setSelectedIds([]);
    setScreen("landing");
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {screen === "landing" ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 28, scale: 0.985, filter: "blur(18px)" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 1.015,
              filter: "blur(14px)",
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-screen"
          >
            <LandingScreen onStart={handleStartReading} />
          </motion.div>
        ) : null}

        {screen === "selection" ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 28, scale: 0.985, filter: "blur(18px)" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 1.015,
              filter: "blur(14px)",
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-screen"
          >
            <CardSelectionScreen
              cards={tarotCards}
              selectedIds={selectedIds}
              onToggleCard={handleToggleCard}
              onBack={handleBackToLanding}
            />
          </motion.div>
        ) : null}

        {screen === "result" ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 28, scale: 0.985, filter: "blur(18px)" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 1.015,
              filter: "blur(14px)",
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-screen"
          >
            <ResultScreen
              cards={selectedCards}
              onRetry={handleRetry}
              onBackToLanding={handleBackToLanding}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
