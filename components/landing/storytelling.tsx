"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    id: "stage-1",
    title: "Client Acquisition",
    detail: "Luxury CRM manages high-value leads and architectural specifications with intelligent automation.",
    metrics: ["84% Conv. Rate", "AI Specification"],
    position: "left"
  },
  {
    id: "stage-2",
    title: "Precision Engineering",
    detail: "Shop drawings are converted into digital production data with sub-millimeter accuracy.",
    metrics: ["0.2mm Tolerance", "BOM Optimization"],
    position: "right"
  },
  {
    id: "stage-3",
    title: "Manufacturing Command",
    detail: "Real-time fabrication tracking across CNC centers and assembly bays.",
    metrics: ["98% Throughput", "Live Tracking"],
    position: "left"
  },
  {
    id: "stage-4",
    title: "White-Glove Deployment",
    detail: "Optimized installation scheduling and site management for premium residences.",
    metrics: ["Zero Deficiencies", "Route Optimization"],
    position: "right"
  }
];

export function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-section", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
        opacity: 0,
        y: 100,
        stagger: 0.5
      });

      // Animated Path following the scroll
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 2,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-64 px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-48">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.6em] uppercase font-bold text-viiu-aluminum mb-8 block"
          >
            The Ecosystem Loop
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-viiu-graphite">
            From Blueprint <br />
            <span className="italic serif text-viiu-slate/40">To Perfection.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Central Animated Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden lg:block">
            <svg width="2" height="100%" className="overflow-visible">
              <path 
                ref={pathRef}
                d="M 1 0 V 2000" 
                stroke="#1c1917" 
                strokeWidth="2" 
                strokeDasharray="2000" 
                strokeDashoffset="2000"
                className="opacity-20"
              />
            </svg>
          </div>

          <div className="space-y-64">
            {stages.map((stage, i) => (
              <div 
                key={stage.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 story-section ${
                  stage.position === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-8">
                  <div className={`flex flex-col ${stage.position === 'right' ? 'lg:items-end lg:text-right' : ''}`}>
                    <span className="text-6xl font-light text-viiu-graphite/5 mb-6">0{i+1}</span>
                    <h3 className="text-3xl font-light tracking-tight text-viiu-graphite mb-6">{stage.title}</h3>
                    <p className="text-viiu-slate/60 text-lg font-light leading-relaxed max-w-md">
                      {stage.detail}
                    </p>
                  </div>
                  
                  <div className={`flex gap-8 ${stage.position === 'right' ? 'lg:justify-end' : ''}`}>
                    {stage.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col gap-1 border-l border-viiu-slate/10 pl-4">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-viiu-aluminum">{metric.split(' ')[0]}</span>
                        <span className="text-[9px] tracking-[0.2em] uppercase font-black text-viiu-graphite">{metric.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 relative">
                  <div className="aspect-square bg-viiu-stone rounded-sm relative overflow-hidden group">
                    {/* Visual representation of the stage (Abstract) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2/3 h-2/3 border border-viiu-graphite/10 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-viiu-graphite/5" />
                    </div>
                    
                    {/* Floating precision nodes */}
                    <motion.div 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/4 right-1/4 w-12 h-12 border border-viiu-aluminum/40 flex items-center justify-center backdrop-blur-md"
                    >
                      <span className="text-[8px] font-mono text-viiu-aluminum">FIX_0{i}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
