// components/ui/MarqueeBanner.tsx
"use client";

import { motion } from "framer-motion";

interface MarqueeBannerProps {
  items: string[];
  speed?: number;
}

export function MarqueeBanner({ items, speed = 35 }: MarqueeBannerProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-5 bg-white/[0.02] border-y border-white/10 my-20">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden whitespace-nowrap select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 shrink-0 pr-12"
        >
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12 text-xs font-mono tracking-widest text-zinc-400 uppercase">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}