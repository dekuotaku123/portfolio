// components/sections/WorkSection.tsx
"use client";

import { Reveal } from "@/components/ui/Reveal";

export function WorkSection() {
  return (
    <section id="work" className="py-32 border-t border-white/10 w-full flex flex-col items-center">
      <Reveal>
        <div className="flex items-center justify-center gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-zinc-400 mb-6">
          <span className="w-6 h-px bg-zinc-600" />
          02 — Work
          <span className="w-6 h-px bg-zinc-600" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-editorial font-normal tracking-tight text-white mb-4 leading-[1.2]">
          Systems that map, <span className="italic font-light text-zinc-300">test, and review.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-zinc-400 text-sm max-w-lg mb-20">
          Selected engineering work focusing on developer tooling, static analysis parsers, fine-tuned LLMs, and autonomous browser-testing infrastructure.
        </p>
      </Reveal>
      
      <div className="flex flex-col gap-24 w-full max-w-3xl items-center text-center">
        
        {/* Project 1 */}
        <Reveal delay={0.1} className="w-full">
          <div className="flex flex-col items-center border-b border-white/10 pb-16">
            <h3 className="text-2xl font-semibold text-white mb-2">
              CodeImpact-Graph
            </h3>
            <p className="text-xs font-mono-tech text-zinc-400 mb-4">
              Python • FastAPI • React Flow • Dagre • Ollama
            </p>
            <a href="https://github.com/dekuotaku123" target="_blank" rel="noopener noreferrer" className="text-xs font-mono-tech text-teal-400 hover:underline mb-8">
              GitHub →
            </a>
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed max-w-2xl mx-auto">
              <p>• Engineered a local-first static analysis tool using Python and React to recursively map repository dependencies into interactive Directed Acyclic Graphs (DAG), streamlining complex refactoring workflows.</p>
              <p>• Designed a custom AST parser with stateful traversal to deterministically resolve OOP self. method references to their true class origins, eliminating orphaned nodes in the dependency tree.</p>
              <p>• Optimized frontend rendering for massive codebases (1,000+ nodes) utilizing Dagre for headless layout routing and React Flow, featuring real-time node search and injected source-code inspection.</p>
              <p>• Integrated local LLMs (Qwen 3) via Ollama for hallucination-free risk audits and contextual Q&A, engineering strict context-window throttling to prevent CUDA memory overruns on 6GB VRAM hardware.</p>
            </div>
          </div>
        </Reveal>

        {/* Project 2 */}
        <Reveal delay={0.2} className="w-full">
          <div className="flex flex-col items-center border-b border-white/10 pb-16">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Style-Aligned Code Review Assistant
            </h3>
            <p className="text-xs font-mono-tech text-zinc-400 mb-4">
              Qwen • QLoRA • DPO • Unsloth • PyTorch
            </p>
            <a href="https://github.com/dekuotaku123" target="_blank" rel="noopener noreferrer" className="text-xs font-mono-tech text-teal-400 hover:underline mb-8">
              GitHub →
            </a>
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed max-w-2xl mx-auto">
              <p>• Fine-tuned Qwen-4B using QLoRA and Unsloth to systematically enforce corporate style guides during code reviews.</p>
              <p>• Implemented Direct Preference Optimization (DPO) on 1,500 preference triplets to align model tone and feedback style.</p>
              <p>• Quantized the model to 4-bit GGUF format for low-latency local deployment.</p>
            </div>
          </div>
        </Reveal>

        {/* Project 3 */}
        <Reveal delay={0.3} className="w-full">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-2">
              AI Testing Automation Agent
            </h3>
            <p className="text-xs font-mono-tech text-zinc-400 mb-4">
              Next.js • React • PostgreSQL • Browserbase
            </p>
            <a href="https://github.com/dekuotaku123" target="_blank" rel="noopener noreferrer" className="text-xs font-mono-tech text-teal-400 hover:underline mb-8">
              GitHub →
            </a>
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed max-w-2xl mx-auto">
              <p>• Built an AI QA platform that analyzes GitHub codebases to dynamically synthesize production-ready end-to-end test suites.</p>
              <p>• Automated real cloud browser execution using the Browserbase SDK for reliable headless testing.</p>
              <p>• Designed a scalable SaaS backend utilizing Clerk auth, Neon PostgreSQL, and Stripe webhooks.</p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}