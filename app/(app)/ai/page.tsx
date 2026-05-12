"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  BrainCircuit, 
  Activity, 
  Target, 
  Cpu, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Search,
  MessageSquare,
  Bot
} from "lucide-react";

export default function AIPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Neural Operations
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            System Intelligence
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.4em] uppercase font-bold rounded-sm flex items-center gap-3">
             <div className="w-2 h-2 bg-viiu-aluminum rounded-full animate-pulse" />
             AI Engine Active
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-1000">
                  <BrainCircuit className="w-64 h-64" />
               </div>
               
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-12">
                     <Sparkles className="w-6 h-6 text-viiu-aluminum" />
                     <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Active Neural Forecasts</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div className="space-y-6">
                        <p className="text-[10px] tracking-widest uppercase font-bold text-viiu-slate/40">Throughput Optimization</p>
                        <p className="text-lg font-light text-viiu-graphite leading-relaxed">
                           Current fabrication load across CNC units is unbalanced. AI recommends batching <span className="font-bold">Project P-7721</span> and <span className="font-bold">P-7730</span> to reduce tool changeover time by <span className="text-green-600 font-bold">14.2%</span>.
                        </p>
                        <button className="flex items-center gap-3 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-graphite hover:text-viiu-aluminum transition-colors">
                           Apply Optimization
                           <ArrowUpRight className="w-4 h-4" />
                        </button>
                     </div>
                     <div className="space-y-6">
                        <p className="text-[10px] tracking-widest uppercase font-bold text-viiu-slate/40">Anomaly Detection</p>
                        <p className="text-lg font-light text-viiu-graphite leading-relaxed">
                           Vibration patterns on <span className="font-bold">WC-102 (Stürtz)</span> indicate potential bearing failure within 48-72 operating hours. Pre-emptive maintenance recommended.
                        </p>
                        <button className="flex items-center gap-3 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-graphite hover:text-viiu-aluminum transition-colors">
                           Schedule Maintenance
                           <ArrowUpRight className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm">
               <div className="flex items-center gap-4 mb-12">
                  <Bot className="w-6 h-6 text-viiu-aluminum" />
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum">Viiu AI Assistant</h2>
               </div>
               <div className="space-y-6 max-w-2xl">
                  <div className="p-6 bg-white/5 border border-white/5 rounded-sm">
                     <p className="text-sm font-light leading-relaxed text-white/60 italic">
                        "Analyze our current installation crew efficiency in the GTA region for Q2 vs Q1."
                     </p>
                  </div>
                  <div className="p-8 bg-white/10 rounded-sm border-l-4 border-viiu-aluminum">
                     <p className="text-sm font-light leading-relaxed mb-6">
                        Crew efficiency in GTA has increased by <span className="text-white font-bold">8.4%</span> since the implementation of route optimization. However, site readiness delays in <span className="text-white font-bold">Toronto Waterfront</span> are currently impacting overall profitability by $12k/week.
                     </p>
                     <div className="flex gap-4">
                        <button className="px-6 py-2 bg-white/10 text-[9px] tracking-widest uppercase font-bold hover:bg-white/20 transition-all">View Details</button>
                        <button className="px-6 py-2 bg-white/10 text-[9px] tracking-widest uppercase font-bold hover:bg-white/20 transition-all">Draft Report</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="space-y-8">
            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-10">Model Health</h2>
               <div className="space-y-8">
                  {[
                    { label: "Fabrication Predictor", health: 99.2 },
                    { label: "Logistics Router", health: 98.4 },
                    { label: "Revenue Forecaster", health: 94.1 },
                  ].map((m, i) => (
                    <div key={i} className="space-y-3">
                       <div className="flex justify-between text-[9px] tracking-widest uppercase font-bold">
                          <span className="text-viiu-slate/40">{m.label}</span>
                          <span className="text-green-600">Active</span>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="flex-1 h-1 bg-viiu-stone rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} animate={{ width: `${m.health}%` }} className="h-full bg-viiu-graphite" />
                          </div>
                          <span className="text-[10px] font-bold">{m.health}%</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-10 bg-viiu-stone rounded-sm">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-10">AI Insights Feed</h2>
               <div className="space-y-8">
                  {[
                    { title: "Supply Chain Risk", msg: "Potential aluminum delay from AluPro due to logistics strike in BC.", time: "10m ago" },
                    { title: "Efficiency Peak", msg: "WC-101 reached all-time high efficiency during shift B.", time: "2h ago" },
                  ].map((insight, i) => (
                    <div key={i} className="space-y-2">
                       <p className="text-[10px] font-black tracking-widest uppercase text-viiu-graphite">{insight.title}</p>
                       <p className="text-[11px] text-viiu-slate/40 leading-relaxed font-light">{insight.msg}</p>
                       <span className="text-[8px] tracking-widest uppercase text-viiu-slate/20 block mt-2">{insight.time}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
