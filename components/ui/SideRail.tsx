// components/ui/SideRail.tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "arsenal", label: "Arsenal" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

export function SideRail() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" } 
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-10">
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10 -z-10" />
      
      {navItems.map(({ id, label }) => {
        const isActive = activeSection === id;
        
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleScroll(e, id)}
            className="group flex items-center relative h-3 cursor-pointer"
          >
            <div className="absolute left-0 w-[11px] flex justify-center">
              <div 
                className={cn(
                  "rounded-full transition-all duration-300",
                  isActive 
                    ? "w-2.5 h-2.5 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]" 
                    : "w-1.5 h-1.5 bg-zinc-600 group-hover:bg-zinc-400 group-hover:scale-110"
                )}
              />
            </div>
            
            <span 
              className={cn(
                "pl-8 text-[11px] font-mono tracking-widest uppercase transition-all duration-300",
                isActive 
                  ? "text-white opacity-100 translate-x-0" 
                  : "text-zinc-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              )}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}