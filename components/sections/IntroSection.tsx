// components/sections/IntroSection.tsx
"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function IntroSection() {
  return (
    <section id="intro" className="relative pt-[20vh] min-h-[90vh] flex flex-col items-center justify-center mb-16 w-full">
      <div className="max-w-2xl relative z-10 flex flex-col items-center">
        
        <Reveal>
          <div className="flex items-center justify-center gap-3 text-xs font-mono-tech uppercase tracking-[0.3em] text-zinc-400 mb-8">
            <span className="w-8 h-px bg-zinc-600" />
            Software Engineer & Systems Architect
            <span className="w-8 h-px bg-zinc-600" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-editorial font-normal tracking-tight text-white mb-6 leading-[1.1]">
            Sourav <br />
            <span className="italic font-light text-zinc-300">Ram Mani</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl font-editorial italic text-zinc-400 mb-8 tracking-wide">
            "Building tools that read, learn from, and test other people's code."
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mb-12">
            Mapping codebase dependencies into graphs, training language models for PR reviews, and building autonomous browser testing agents. <strong className="text-zinc-200 font-normal">Currently studying computer science at the University of Engineering and Management, Kolkata.</strong>
          </p>
        </Reveal>

        <Reveal delay={0.4} className="flex flex-wrap justify-center gap-4">
          <MagneticButton href="https://github.com/dekuotaku123">GitHub</MagneticButton>
          <MagneticButton href="https://linkedin.com/in/souravrammani">LinkedIn</MagneticButton>
        </Reveal>

      </div>
    </section>
  );
}