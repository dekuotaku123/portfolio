// app/page.tsx
import { SideRail } from "@/components/ui/SideRail";
import { InteractiveGraphCanvas } from "@/components/ui/InteractiveGraphCanvas";
import { MarqueeBanner } from "@/components/ui/MarqueeBanner";
import { IntroSection } from "@/components/sections/IntroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ArsenalSection } from "@/components/sections/ArsenalSection";
import { BackgroundSection } from "@/components/sections/BackgroundSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Portfolio() {
  return (
    <>
      <SideRail />
      <InteractiveGraphCanvas />
      
      <main className="max-w-6xl mx-auto relative px-6 md:px-12 flex flex-col items-center text-center">
        <IntroSection />
      </main>

      {/* Full-Bleed Marquee Banner */}
      <MarqueeBanner 
        items={[
          "Full-Stack Architecture",
          "Static Analysis & DAGs",
          "LLM Fine-Tuning",
          "Autonomous QA Agents",
          "Python & TypeScript",
          "Distributed Systems"
        ]} 
        speed={30}
      />

      <main className="max-w-6xl mx-auto relative px-6 md:px-12 flex flex-col items-center text-center">
        <AboutSection />
        <WorkSection />
        <ArsenalSection />
        <BackgroundSection />
        <ContactSection />
      </main>
      
      <footer className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono-tech text-zinc-600 border-t border-white/5 text-center">
        <span>© 2026 Sourav Ram Mani. All rights reserved.</span>
        <span>Systematically engineered in Kolkata.</span>
      </footer>
    </>
  );
}