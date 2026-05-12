"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        scale: 1.1,
        y: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-viiu-stone pt-20">
      <div className="z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
        >
          <span className="inline-block text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-6">
            The Future of Luxury Manufacturing
          </span>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-viiu-graphite mb-8 leading-[0.9]">
            Architectural <br />
            <span className="italic serif text-viiu-slate/40">Excellence</span>, <br />
            Digitally Engineered.
          </h1>
          <p className="text-lg text-viiu-slate/60 max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Viiu OS is the definitive operational system for luxury aluminum window and door manufacturers. Precision control from lead to installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-10 py-5 bg-viiu-graphite text-viiu-stone overflow-hidden rounded-sm transition-all">
              <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase font-bold">Request Demo</span>
              <div className="absolute inset-0 bg-viiu-slate scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
            <button className="px-10 py-5 border border-viiu-graphite/10 text-viiu-graphite text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-viiu-graphite/5 transition-all rounded-sm">
              Explore Modules
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Visualization / Background Element */}
      <div 
        ref={videoRef}
        className="absolute bottom-[-10%] w-full h-[60%] z-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-viiu-stone via-transparent to-transparent z-10" />
        <div className="relative w-full h-full opacity-30 flex items-center justify-center">
          {/* Abstract architectural grid/blueprint animation placeholder */}
          <div className="w-[120%] h-[120%] border-[0.5px] border-viiu-slate/10 grid grid-cols-12 grid-rows-6 rotate-[-15deg] scale-150">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-viiu-slate/5" />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-8 flex flex-col gap-1">
        <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Coordinates</span>
        <span className="text-[10px] tracking-widest uppercase font-mono text-viiu-slate/60">43.6532° N, 79.3832° W (Ontario)</span>
      </div>

      <div className="absolute bottom-12 right-8 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-viiu-slate/20" />
        <span className="text-[8px] tracking-[0.3em] uppercase text-viiu-slate/40">Scroll to Explore</span>
      </div>
    </section>
  );
}
