"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Truck, 
  Users, 
  Zap, 
  Factory,
  Globe,
  Database
} from "lucide-react";

const showcaseItems = [
  {
    title: "Executive Intelligence",
    detail: "Cinematic KPI tracking with live data streaming for high-level operational oversight.",
    icon: BarChart3,
    metric: "$14.2M",
    label: "Portfolio Value"
  },
  {
    title: "Fabrication Command",
    detail: "Real-time CNC allocation and assembly bay tracking with sub-millimeter precision.",
    icon: Factory,
    metric: "98.4%",
    label: "Production Efficiency"
  },
  {
    title: "Field Deployment",
    detail: "Intelligent multi-crew scheduling with route optimization and site readiness tracking.",
    icon: Truck,
    metric: "12 Sites",
    label: "Active Installs"
  },
  {
    title: "Asset Intelligence",
    detail: "Automated inventory movement and raw material optimization with waste reduction AI.",
    icon: Database,
    metric: "-12%",
    label: "Waste Reduction"
  }
];

export function ShowcaseGrid() {
  return (
    <section className="py-64 px-8 bg-viiu-graphite text-viiu-stone overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#a8a29e_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum/40 mb-8 block">The Module Ecosystem</span>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
              Deep-dive intelligence <br />
              for every <span className="italic serif text-viiu-aluminum">department.</span>
            </h2>
          </div>
          <p className="text-viiu-stone/40 text-lg font-light max-w-sm pb-2">
            Viiu OS isn't just a dashboard. It's a deeply integrated operational brain that understands your entire manufacturing lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="group p-12 bg-white/5 border border-white/10 rounded-sm hover:border-white/20 transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-white/10 rounded-sm group-hover:bg-white group-hover:text-viiu-graphite transition-all duration-700">
                  <item.icon className="w-6 h-6 stroke-[1.2]" />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-light tracking-tight block mb-1">{item.metric}</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-viiu-aluminum/40">{item.label}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-viiu-aluminum transition-colors">
                {item.title}
              </h3>
              <p className="text-viiu-stone/40 text-sm font-light leading-relaxed max-w-xs">
                {item.detail}
              </p>

              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-white transition-all duration-700" />
                <span className="text-[8px] tracking-[0.4em] uppercase font-bold text-viiu-aluminum/40 group-hover:text-white transition-colors">Explorer Module</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
