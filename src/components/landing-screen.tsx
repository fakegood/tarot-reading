import { motion } from "framer-motion";
import { Sparkles, Stars } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StarryBackground } from "@/components/starry-background";

type LandingScreenProps = {
  onStart: () => void;
};

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
      <StarryBackground intensity="vivid" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/12 px-6 py-10 shadow-2xl sm:px-10 sm:py-14 lg:px-16 lg:py-18"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-100/20 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-100/80">
                <Stars className="size-3.5" />
                Moon Thread Tarot
              </div>

              <div className="space-y-5">
                <h1 className="font-heading text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                  Step into a reading
                  <span className="block bg-gradient-to-r from-amber-100 via-yellow-200 to-cyan-100 bg-clip-text text-transparent">
                    written in starlight.
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-200/78 sm:text-lg">
                  Choose three cards and uncover a short message shaped by hope,
                  intuition, and timing. The entire reading lives here in a
                  single luminous moment.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  onClick={onStart}
                  size="lg"
                  className="h-12 rounded-full bg-amber-100 px-7 text-sm font-semibold tracking-[0.2em] text-slate-950 uppercase shadow-[0_0_35px_rgba(255,233,187,0.4)] hover:bg-amber-50"
                >
                  Start Reading
                </Button>
                <div className="inline-flex items-center gap-2 text-sm text-slate-300/80">
                  <Sparkles className="size-4 text-cyan-200" />
                  No accounts. No waiting. Just a quiet ritual.
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
              <div className="absolute inset-6 rounded-full bg-cyan-200/10 blur-3xl" />
              <div className="glass-panel relative w-full rounded-[2rem] border border-white/12 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {["Past", "Present", "Future", "Guidance"].map((label, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.2 + index * 0.08,
                        ease: "easeOut",
                      }}
                      className="rounded-[1.5rem] border border-white/12 bg-white/6 p-4"
                    >
                      <div className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-slate-300/70">
                        {label}
                      </div>
                      <div className="aspect-[3/4] rounded-[1.25rem] border border-amber-100/18 bg-[radial-gradient(circle_at_top,_rgba(255,239,188,0.28),_transparent_32%),linear-gradient(180deg,_rgba(35,31,79,0.94),_rgba(14,14,34,0.96))] p-3">
                        <div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-white/16">
                          <Stars className="size-9 text-amber-100/70" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
