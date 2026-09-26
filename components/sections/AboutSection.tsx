// components/sections/AboutSection.tsx
"use client";

import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-32 w-full flex flex-col items-center">
      <Reveal>
        <div className="flex items-center justify-center gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-zinc-400 mb-6">
          <span className="w-6 h-px bg-zinc-600" />
          01 — About
          <span className="w-6 h-px bg-zinc-600" />
        </div>
      </Reveal>
      
      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-editorial font-normal tracking-tight text-white mb-10 leading-[1.2]">
          Code, but make it <span className="italic font-light text-zinc-300">intelligent.</span>
        </h2>
      </Reveal>

      <div className="max-w-2xl space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
        <Reveal delay={0.2}>
          <p>
            I'm Sourav — a software engineer working where systems architecture, static analysis, and applied AI meet. Most recently, I spend my time inside complex codebases — mapping repository dependencies into directed acyclic graphs and building autonomous browser agents for automated QA.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-zinc-400">
            My path runs through parser design, LLM fine-tuning via QLoRA, and modern web infrastructure. Currently deepening that practice through a B.Tech in Computer Science at the University of Engineering and Management, Kolkata.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="pt-4">
            <blockquote className="font-editorial italic text-zinc-300 text-lg border-l-2 border-amber-500/60 pl-4 inline-block text-left">
              "Software engineering is never just about syntax — it is the deliberate orchestration of logic."
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}