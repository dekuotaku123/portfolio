// components/ui/MagneticButton.tsx
"use client";

import { motion, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({ children, href, className }: { children: ReactNode, href?: string, className?: string }) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    x.set((e.clientX - center.x) * 0.3);
    y.set((e.clientY - center.y) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-white/5 border border-white/10 transition-colors hover:bg-white hover:text-black hover:border-white";

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x, y }}
        className={cn(baseStyles, className)}
        target={href.startsWith("http") ? "_blank" : "_self"}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={cn(baseStyles, className)}
    >
      {children}
    </motion.button>
  );
}