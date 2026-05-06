import { cn } from "@/lib/utils";

type StarryBackgroundProps = {
  className?: string;
  intensity?: "soft" | "vivid";
};

const starPositions = [
  "left-[8%] top-[14%]",
  "left-[18%] top-[30%]",
  "left-[28%] top-[12%]",
  "left-[44%] top-[22%]",
  "left-[57%] top-[10%]",
  "left-[72%] top-[18%]",
  "left-[86%] top-[12%]",
  "left-[79%] top-[38%]",
  "left-[61%] top-[34%]",
  "left-[37%] top-[42%]",
  "left-[19%] top-[52%]",
  "left-[11%] top-[70%]",
  "left-[29%] top-[82%]",
  "left-[46%] top-[74%]",
  "left-[64%] top-[86%]",
  "left-[82%] top-[68%]",
];

export function StarryBackground({
  className,
  intensity = "soft",
}: StarryBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute inset-0",
          intensity === "vivid"
            ? "opacity-100"
            : "opacity-70"
        )}
      >
        <div className="absolute left-[-8%] top-[8%] h-72 w-72 rounded-full bg-cyan-300/12 blur-3xl animate-[float-orb_11s_ease-in-out_infinite]" />
        <div className="absolute right-[-10%] top-[12%] h-96 w-96 rounded-full bg-violet-300/14 blur-3xl animate-[float-orb_14s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-12%] left-[22%] h-80 w-80 rounded-full bg-fuchsia-300/10 blur-3xl animate-[float-orb_13s_ease-in-out_infinite]" />
        <div className="absolute inset-0 gold-fleck opacity-20" />
      </div>

      {starPositions.map((position, index) => (
        <span
          key={position}
          className={cn(
            "absolute block rounded-full bg-white/90 shadow-[0_0_14px_rgba(255,255,255,0.75)]",
            position,
            index % 3 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
            "animate-[pulse-star_4.6s_ease-in-out_infinite]"
          )}
          style={{ animationDelay: `${index * 0.35}s` }}
        />
      ))}
    </div>
  );
}
