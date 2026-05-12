"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";

export function CTA() {
  return (
    <section className="py-64 bg-viiu-graphite text-viiu-stone overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#a8a29e_0%,transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="text-[10px] tracking-[0.8em] uppercase font-bold text-viiu-aluminum mb-12 block">Secure the Future</span>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter mb-16 leading-[0.9]">
            The New Standard in <br />
            <span className="italic serif text-viiu-aluminum">High-Performance</span> <br />
            Operations.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-24">
             <div className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-viiu-aluminum/40" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-viiu-aluminum/60">SOC2 Type II Certified</span>
             </div>
             <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-viiu-aluminum/40" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-viiu-aluminum/60">Global Supply Cloud</span>
             </div>
             <div className="flex items-center gap-4">
                <Zap className="w-5 h-5 text-viiu-aluminum/40" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-viiu-aluminum/60">Real-time Telemetry</span>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-16 py-7 bg-white text-viiu-graphite text-[10px] tracking-[0.4em] uppercase font-black hover:bg-viiu-stone transition-all rounded-sm shadow-2xl group flex items-center gap-4">
              Request Executive Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-16 py-7 border border-white/10 text-white text-[10px] tracking-[0.4em] uppercase font-black hover:bg-white/5 transition-all rounded-sm">
              View Security Briefing
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.6em] uppercase text-white/5 font-black">
         ESTABLISHED MMXVI • BUILT FOR THE NEXT CENTURY
      </div>
    </section>
  );
}
