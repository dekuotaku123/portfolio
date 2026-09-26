// components/sections/ContactSection.tsx
"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 border-t border-white/10 w-full flex flex-col items-center">
      <Reveal>
        <div className="flex items-center justify-center gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-zinc-400 mb-6">
          <span className="w-6 h-px bg-zinc-600" />
          05 — Contact
          <span className="w-6 h-px bg-zinc-600" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-editorial font-normal tracking-tight text-white mb-4 leading-[1.2]">
          Let's build <span className="italic font-light text-zinc-300">something together.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-zinc-400 text-sm max-w-lg mb-16">
          Open to internships and software engineering roles, particularly anything touching developer tools, AI systems, or applied ML.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-xl text-center">
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail className="text-teal-400" size={16} />
              <span className="text-xs font-mono-tech text-zinc-500 uppercase tracking-widest">Email</span>
            </div>
            <a href="mailto:srm.deku.ug@gmail.com" className="text-sm text-white hover:text-teal-400 transition-colors">srm.deku.ug@gmail.com</a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="text-teal-400" size={16} />
              <span className="text-xs font-mono-tech text-zinc-500 uppercase tracking-widest">Phone</span>
            </div>
            <a href="tel:+917001315516" className="text-sm text-white hover:text-teal-400 transition-colors">+91 70013 15516</a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FiGithub className="text-teal-400" size={16} />
              <span className="text-xs font-mono-tech text-zinc-500 uppercase tracking-widest">Github</span>
            </div>
            <a href="https://github.com/dekuotaku123" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-teal-400 transition-colors">@dekuotaku123</a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FiLinkedin className="text-teal-400" size={16} />
              <span className="text-xs font-mono-tech text-zinc-500 uppercase tracking-widest">Linkedin</span>
            </div>
            <a href="https://linkedin.com/in/souravrammani" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-teal-400 transition-colors">/in/souravrammani</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}