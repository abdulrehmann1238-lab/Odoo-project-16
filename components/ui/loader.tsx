"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      },
    });

    // Precision Percentage Counter
    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 3,
      ease: "power4.inOut",
      onUpdate: () => setPercent(Math.floor(counter.val)),
    });

    tl.to(".logo-path", {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power3.inOut",
      stagger: 0.2,
    })
      .to(".loader-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      }, "-=1.5")
      .to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.5,
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-viiu-graphite flex flex-col items-center justify-center text-viiu-stone overflow-hidden"
    >
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full border border-white/10 grid grid-cols-12 grid-rows-8" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-16 max-w-md w-full px-8">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-viiu-aluminum stroke-[0.5]">
            <motion.path
              className="logo-path"
              initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
              d="M10,10 L90,10 L90,90 L10,90 Z"
            />
            <motion.path
              className="logo-path"
              initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
              d="M50,10 L50,90"
            />
            <motion.path
              className="logo-path"
              initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
              d="M10,50 L90,50"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-[10px] tracking-[0.5em] font-black text-viiu-aluminum/40 uppercase">v4.2</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="loader-text opacity-0 translate-y-8 text-4xl font-light tracking-[0.3em] uppercase">
            Viiu OS
          </h1>
          <p className="loader-text opacity-0 translate-y-8 text-[10px] tracking-[0.6em] uppercase font-bold text-viiu-aluminum/40">
            System Initialization
          </p>
        </div>

        <div className="w-full space-y-4">
           <div className="flex justify-between items-end text-[8px] tracking-[0.5em] uppercase font-black text-viiu-aluminum/20">
              <span>Security Node: ON-772</span>
              <span>{percent}%</span>
           </div>
           <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-viiu-aluminum origin-left"
                style={{ scaleX: percent / 100 }}
              />
           </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 text-[8px] tracking-[0.5em] uppercase text-white/5 font-black">
         ARCHITECTURE • ENGINEERING • INTELLIGENCE
      </div>
    </div>
  );
}
