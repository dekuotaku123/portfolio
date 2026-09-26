// components/sections/ArsenalSection.tsx
"use client";

import { Reveal } from "@/components/ui/Reveal";

export function ArsenalSection() {
  return (
    <section id="arsenal" className="py-32 border-t border-white/10 w-full flex flex-col items-center">
      <Reveal>
        <div className="flex items-center justify-center gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-zinc-400 mb-6">
          <span className="w-6 h-px bg-zinc-600" />
          03 — Arsenal
          <span className="w-6 h-px bg-zinc-600" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-editorial font-normal tracking-tight text-white mb-4 leading-[1.2]">
          Technologies & <span className="italic font-light text-zinc-300">stack depth.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-zinc-400 text-sm max-w-lg mb-20 font-editorial italic">
          Core languages, frontend/backend frameworks, and machine learning infrastructure deployed for production applications.
        </p>
      </Reveal>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full text-left">
        
        <Reveal delay={0.1}>
          <div className="relative pl-5 border-l border-white/10 space-y-4">
            <div className="absolute left-[-27px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
            <h3 className="text-base font-semibold text-white mb-4">Languages</h3>
            <div className="space-y-3">
              {["JavaScript (ES6+)", "Python", "C++", "C"].map((tech) => (
                <div key={tech} className="flex flex-col gap-0.5 border-l border-white/10 pl-2.5">
                  <span className="text-xs text-zinc-200 font-medium">{tech}</span>
                  <span className="text-[10px] font-mono-tech text-teal-400">Core</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative pl-5 border-l border-white/10 space-y-4">
            <div className="absolute left-[-27px] top-1.5 w-3.5 h-3.5 rounded-full bg-teal-400 ring-4 ring-teal-400/20" />
            <h3 className="text-base font-semibold text-white mb-4">Frontend</h3>
            <div className="space-y-3">
              {["React.js", "Next.js", "Tailwind CSS", "Redux"].map((tech) => (
                <div key={tech} className="flex flex-col gap-0.5 border-l border-white/10 pl-2.5">
                  <span className="text-xs text-zinc-200 font-medium">{tech}</span>
                  <span className="text-[10px] font-mono-tech text-teal-400">UI</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="relative pl-5 border-l border-white/10 space-y-4">
            <div className="absolute left-[-27px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
            <h3 className="text-base font-semibold text-white mb-4">Backend</h3>
            <div className="space-y-3">
              {["Node.js", "FastAPI", "Express.js", "REST", "JWT"].map((tech) => (
                <div key={tech} className="flex flex-col gap-0.5 border-l border-white/10 pl-2.5">
                  <span className="text-xs text-zinc-200 font-medium">{tech}</span>
                  <span className="text-[10px] font-mono-tech text-teal-400">Server</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="relative pl-5 border-l border-white/10 space-y-4">
            <div className="absolute left-[-27px] top-1.5 w-3.5 h-3.5 rounded-full bg-teal-400 ring-4 ring-teal-400/20" />
            <h3 className="text-base font-semibold text-white mb-4">AI & ML</h3>
            <div className="space-y-3">
              {["PyTorch", "LLMs", "RAG", "Ollama", "Unsloth", "QLoRA"].map((tech) => (
                <div key={tech} className="flex flex-col gap-0.5 border-l border-white/10 pl-2.5">
                  <span className="text-xs text-zinc-200 font-medium">{tech}</span>
                  <span className="text-[10px] font-mono-tech text-teal-400">Applied ML</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="relative pl-5 border-l border-white/10 space-y-4">
            <div className="absolute left-[-27px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
            <h3 className="text-base font-semibold text-white mb-4">Data & Cloud</h3>
            <div className="space-y-3">
              {["PostgreSQL", "MongoDB", "Appwrite", "Git", "Vercel"].map((tech) => (
                <div key={tech} className="flex flex-col gap-0.5 border-l border-white/10 pl-2.5">
                  <span className="text-xs text-zinc-200 font-medium">{tech}</span>
                  <span className="text-[10px] font-mono-tech text-teal-400">Database</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}