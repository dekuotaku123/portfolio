// components/ui/HeroGraph.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const nodes = [
  { id: 0, cx: 60, cy: 180, r: 6, fill: "#f59e0b", pulse: true, label: "Core Agent" },
  { id: 1, cx: 150, cy: 90, r: 4, fill: "#2dd4bf", label: "AST Parser" },
  { id: 2, cx: 150, cy: 270, r: 4, fill: "#2dd4bf", label: "Ollama LLM" },
  { id: 3, cx: 250, cy: 60, r: 3, fill: "#2dd4bf", label: "React Flow" },
  { id: 4, cx: 250, cy: 150, r: 5, fill: "#f59e0b", pulse: true, label: "DAG Engine" },
  { id: 5, cx: 250, cy: 300, r: 3, fill: "#2dd4bf", label: "Browserbase" },
  { id: 6, cx: 350, cy: 110, r: 3, fill: "#2dd4bf", label: "FastAPI" },
  { id: 7, cx: 350, cy: 200, r: 3, fill: "#2dd4bf", label: "PyTorch" },
  { id: 8, cx: 350, cy: 320, r: 3, fill: "#2dd4bf", label: "PostgreSQL" },
];

const lines = [
  { id: "0-1", source: 0, target: 1 },
  { id: "0-2", source: 0, target: 2 },
  { id: "1-3", source: 1, target: 3 },
  { id: "1-4", source: 1, target: 4 },
  { id: "2-4", source: 2, target: 4 },
  { id: "2-5", source: 2, target: 5 },
  { id: "4-6", source: 4, target: 6 },
  { id: "4-7", source: 4, target: 7 },
  { id: "5-8", source: 5, target: 8 },
];

export function HeroGraph() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <svg 
      viewBox="0 0 440 360" 
      fill="none" 
      className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[45%] max-w-[500px] opacity-90 pointer-events-none hidden lg:block -z-10"
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g strokeWidth="1.5">
        {lines.map((l, i) => {
          const sourceNode = nodes.find(n => n.id === l.source)!;
          const targetNode = nodes.find(n => n.id === l.target)!;
          
          const isHighlighted = hoveredNode === l.source || hoveredNode === l.target;
          const isDimmed = hoveredNode !== null && !isHighlighted;

          return (
            <motion.line 
              key={l.id} 
              x1={sourceNode.cx} y1={sourceNode.cy} 
              x2={targetNode.cx} y2={targetNode.cy}
              initial={{ pathLength: 0 }} 
              animate={{ 
                pathLength: 1,
                stroke: isHighlighted ? sourceNode.fill : "rgba(255,255,255,0.1)",
                opacity: isDimmed ? 0.1 : 1
              }} 
              transition={{ 
                pathLength: { duration: 1.2, delay: 0.5 + (i * 0.15), ease: [0.16, 1, 0.3, 1] },
                stroke: { duration: 0.3 },
                opacity: { duration: 0.3 }
              }} 
            />
          );
        })}
      </g>

      <g filter="url(#glow)">
        {nodes.map((n, i) => {
          const isHovered = hoveredNode === n.id;
          const isConnected = lines.some(l => (l.source === hoveredNode && l.target === n.id) || (l.target === hoveredNode && l.source === n.id));
          const isDimmed = hoveredNode !== null && !isHovered && !isConnected;

          return (
            <motion.circle 
              key={`visual-${n.id}`} 
              cx={n.cx} cy={n.cy} fill={n.fill}
              initial={{ r: 0, opacity: 0 }}
              animate={
                n.pulse && !isHovered
                  ? { r: [n.r, n.r + 2, n.r], opacity: isDimmed ? 0.2 : 1 } 
                  : { r: isHovered ? n.r * 1.8 : n.r, opacity: isDimmed ? 0.2 : 1 }
              }
              transition={
                n.pulse && !isHovered
                  ? { r: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }, opacity: { duration: 0.3 } }
                  : { r: { duration: 0.4, type: "spring" }, opacity: { duration: 0.3 } }
              }
            />
          );
        })}
      </g>

      <g>
        {nodes.map((n) => (
          <circle
            key={`hitbox-${n.id}`}
            cx={n.cx} cy={n.cy} 
            r={24}
            fill="transparent"
            className="pointer-events-auto cursor-crosshair"
            onMouseEnter={() => setHoveredNode(n.id)}
            onMouseLeave={() => setHoveredNode(null)}
          />
        ))}
      </g>

      <AnimatePresence>
        {hoveredNode !== null && (
          <motion.g
            key="tooltip"
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 4, filter: "blur(4px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {(() => {
              const node = nodes.find(n => n.id === hoveredNode)!;
              return (
                <>
                  <rect 
                    x={node.cx + 14} 
                    y={node.cy - 12} 
                    width={node.label.length * 7.5 + 16} 
                    height={24} 
                    rx={6} 
                    fill="#18181b" 
                    stroke="rgba(255,255,255,0.15)"
                  />
                  <text 
                    x={node.cx + 22} 
                    y={node.cy + 4} 
                    fill="#e4e4e7" 
                    fontSize="11" 
                    fontFamily="monospace"
                    letterSpacing="0.05em"
                  >
                    {node.label}
                  </text>
                </>
              );
            })()}
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}