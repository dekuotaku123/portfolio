# ⚡ Sourav Ram Mani — Portfolio & Systems Architecture Hub

A modern, high-performance developer portfolio engineered with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Designed with an editorial aesthetic, interactive graph simulations, and a modular component architecture.

🔗 **Live Demo:** [View Live Portfolio](https://portfolio-mu-blue-25.vercel.app/) 

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js](https://next.js5) (React Server & Client Components)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion)
- **Icons:** `lucide-react`, `react-icons`
- **Language:** TypeScript

---

## 📂 Project Structure (Modular Layout)

The project follows a clean modular design pattern, separating UI primitives from page sections for easy maintenance and updates:

```text
my-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                # Central orchestrator rendering section components
├── components/
│   ├── sections/               # Modularized portfolio sections
│   │   ├── AboutSection.tsx
│   │   ├── ArsenalSection.tsx
│   │   ├── BackgroundSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── IntroSection.tsx
│   │   └── WorkSection.tsx
│   └── ui/                     # Reusable design system components
│       ├── HeroGraph.tsx
│       ├── InteractiveGraphCanvas.tsx
│       ├── MagneticButton.tsx
│       ├── MarqueeBanner.tsx
│       ├── Reveal.tsx
│       ├── SideRail.tsx
│       └── SpotlightCard.tsx
├── public/
└── README.md
