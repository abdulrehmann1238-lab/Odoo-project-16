"use client";

import { motion } from "framer-motion";
import { Box, Layers, Cpu, Shield, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    title: "CRM Pipeline",
    description: "Intelligent lead management tailored for luxury architectural specification.",
    icon: Layers,
    tag: "Intelligence",
  },
  {
    title: "Production OS",
    description: "Real-time manufacturing command center with machine allocation logic.",
    icon: Cpu,
    tag: "Control",
  },
  {
    title: "Precision Scheduling",
    description: "Multi-week installation timelines with route and crew optimization.",
    icon: Clock,
    tag: "Logistics",
  },
  {
    title: "Asset Intelligence",
    description: "Live inventory tracking with automated material movement logs.",
    icon: Box,
    tag: "Efficiency",
  },
  {
    title: "Executive Insights",
    description: "Cinematic data visualization for high-level operational oversight.",
    icon: BarChart3,
    tag: "Analytics",
  },
  {
    title: "Client Portal",
    description: "Ultra-premium interface for project approvals and progress tracking.",
    icon: Shield,
    tag: "Experience",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-6 block">
              Core Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-viiu-graphite">
              Every stage of your operation, <br />
              refined into a single interface.
            </h2>
          </div>
          <div className="text-viiu-slate/40 text-sm tracking-widest uppercase">
            [ Modules 01 - 06 ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-viiu-slate/10 border border-viiu-slate/10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative p-12 bg-white hover:bg-viiu-stone transition-colors duration-500"
            >
              <div className="mb-12 flex justify-between items-start">
                <div className="p-4 bg-viiu-stone rounded-sm group-hover:bg-white transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-viiu-graphite stroke-[1.2]" />
                </div>
                <span className="text-[8px] tracking-[0.3em] uppercase font-bold text-viiu-aluminum group-hover:text-viiu-graphite">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-xl font-light tracking-tight text-viiu-graphite mb-4">
                {feature.title}
              </h3>
              <p className="text-viiu-slate/60 text-sm leading-relaxed mb-8">
                {feature.description}
              </p>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-viiu-graphite/40 group-hover:text-viiu-graphite transition-colors">
                <span>View Details</span>
                <div className="w-0 group-hover:w-8 h-[1px] bg-viiu-graphite transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
