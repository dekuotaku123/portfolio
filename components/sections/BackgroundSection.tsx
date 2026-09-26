// components/sections/BackgroundSection.tsx
"use client";

import { Reveal } from "@/components/ui/Reveal";

export function BackgroundSection() {
  return (
    <section id="background" className="py-32 border-t border-white/10 w-full flex flex-col items-center">
      <Reveal>
        <div className="flex items-center justify-center gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-zinc-400 mb-6">
          <span className="w-6 h-px bg-zinc-600" />
          04 — Background
          <span className="w-6 h-px bg-zinc-600" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-editorial font-normal tracking-tight text-white mb-4 leading-[1.2]">
          Academic roots & <span className="italic font-light text-zinc-300">certifications.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-zinc-400 text-sm max-w-lg mb-16">
          Continuous learning through formal university education and advanced machine learning certifications from premier institutions.
        </p>
      </Reveal>
      
      <Reveal delay={0.1} className="w-full max-w-2xl text-left">
        <div className="relative pl-6 ml-2 border-l border-white/10 space-y-12">
          
          <div className="relative">
            <div className="absolute left-[-29px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
            <h3 className="text-lg font-semibold text-white mb-1">B.Tech in Computer Science</h3>
            <p className="text-xs font-mono-tech text-teal-400 mb-3">University of Engineering and Management • 2023-2027</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 text-sm leading-relaxed pt-2">
              <li>Data Structures & Algorithms Analysis</li>
              <li>Software Methodology & Systems Programming</li>
              <li>Database Management Systems</li>
              <li>Artificial Intelligence & Machine Learning</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute left-[-29px] top-1.5 w-3.5 h-3.5 rounded-full bg-teal-400 ring-4 ring-teal-400/20" />
            <h3 className="text-lg font-semibold text-white mb-6">Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { name: "Introduction to Large Language Models", issuer: "NPTEL, IIT Delhi" },
                { name: "Deep Learning", issuer: "NPTEL, IIT Ropar" },
                { name: "Improving Deep Neural Networks", issuer: "DeepLearning.AI" },
                { name: "The Web Developer Bootcamp", issuer: "Colt Steele" }
              ].map((cert, cIdx) => (
                <div key={cIdx} className="flex flex-col justify-between gap-1 border-l border-white/10 pl-4">
                  <span className="text-xs text-zinc-200 font-medium">{cert.name}</span>
                  <span className="text-[11px] font-mono-tech text-teal-400">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}