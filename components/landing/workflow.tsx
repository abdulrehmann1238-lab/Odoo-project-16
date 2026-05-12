"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Project Intake",
    detail: "Architectural drawings uploaded and parsed with precision.",
  },
  {
    num: "02",
    title: "Production Optimization",
    detail: "Aluminum extrusion and glass allocation optimized for minimum waste.",
  },
  {
    num: "03",
    title: "Fabrication Lifecycle",
    detail: "Real-time tracking through fabrication, hardware fitting, and assembly.",
  },
  {
    num: "04",
    title: "Deployment",
    detail: "White-glove installation and site sign-off with digital documentation.",
  },
];

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section id="workflow" ref={containerRef} className="py-32 px-8 bg-viiu-stone relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-6 block">
            Operational Lifecycle
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-viiu-graphite">
            The Viiu Methodology
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Path Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-viiu-slate/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-viiu-graphite -translate-x-1/2 origin-top hidden md:block"
            style={{ scaleY: pathLength }}
          />

          <div className="flex flex-col gap-32 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left px-8">
                  <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                    <span className="text-5xl font-light text-viiu-graphite/10 mb-4">{step.num}</span>
                    <h3 className="text-2xl font-light tracking-tight text-viiu-graphite mb-4">{step.title}</h3>
                    <p className="text-viiu-slate/60 text-sm max-w-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
                
                <div className="relative flex-none">
                  <div className="w-4 h-4 rounded-full bg-viiu-graphite z-10 relative" />
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-viiu-graphite/20 animate-ping" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
