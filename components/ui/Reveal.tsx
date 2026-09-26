// components/ui/Reveal.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, delay: delay * 0.2, ease: "easeOut" }
      }}
      viewport={{ once: false, margin: "-15% 0px -15% 0px", amount: "some" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}