"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  Activity, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Download,
  Share2,
  Maximize2,
  Minimize2
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Executive Intelligence
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Global Analytics Hub
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-white border border-viiu-slate/5 rounded-sm flex items-center gap-4">
            <Calendar className="w-4 h-4 text-viiu-slate/30" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-viiu-graphite">Q2 2026: APR - JUN</span>
          </div>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2 shadow-2xl">
            <Download className="w-4 h-4" />
            Executive Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Throughput Chart */}
         <div className="lg:col-span-2 p-10 bg-white border border-viiu-slate/5 rounded-sm h-[600px] flex flex-col">
            <div className="flex justify-between items-center mb-12">
               <div>
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-2">Throughput Volatility</h2>
                  <p className="text-[10px] text-viiu-slate/40 tracking-widest uppercase">Units fabricated vs target capacity</p>
               </div>
               <div className="flex gap-4">
                  {['Daily', 'Weekly', 'Monthly'].map(p => (
                     <button key={p} className="text-[9px] tracking-widest uppercase font-black text-viiu-slate/20 hover:text-viiu-graphite transition-colors">{p}</button>
                  ))}
               </div>
            </div>
            
            <div className="flex-1 flex items-end gap-4 pb-12 relative">
               {/* Simplified Chart Bars */}
               {Array.from({ length: 12 }).map((_, i) => {
                  const h = 40 + Math.random() * 50;
                  return (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-3 group">
                       <div className="relative flex flex-col justify-end h-full">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                            className="w-full bg-viiu-stone group-hover:bg-viiu-graphite transition-all duration-700 rounded-t-sm"
                          />
                          <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-[9px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
                             {Math.round(h * 1.5)}
                          </div>
                       </div>
                       <span className="text-[8px] text-center text-viiu-slate/20 uppercase font-black">W{i+1}</span>
                    </div>
                  );
               })}
               <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-viiu-slate/5 border-dashed border-t" />
            </div>
         </div>

         <div className="space-y-8">
            <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm">
               <div className="flex justify-between items-center mb-10">
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum">Metric Focus</h2>
                  <Target className="w-4 h-4 text-viiu-aluminum/40" />
               </div>
               <div className="space-y-10">
                  {[
                    { label: "Fabrication Accuracy", val: "99.8%", change: "+0.2%" },
                    { label: "Material Utilization", val: "84.2%", change: "+1.4%" },
                    { label: "On-Time Completion", val: "92.4%", change: "-0.5%" },
                  ].map((m, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[9px] tracking-widest uppercase font-bold">
                          <span className="text-white/40">{m.label}</span>
                          <span className={m.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>{m.change}</span>
                       </div>
                       <p className="text-3xl font-light">{m.val}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-10">Department Efficiency</h2>
               <div className="space-y-8">
                  {[
                    { dep: "Sales", eff: 94 },
                    { dep: "Engineering", eff: 88 },
                    { dep: "Fabrication", eff: 92 },
                    { dep: "Installation", eff: 76 },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center gap-6">
                       <span className="text-[10px] font-black tracking-widest uppercase text-viiu-graphite w-24">{d.dep}</span>
                       <div className="flex-1 h-1 bg-viiu-stone rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: `${d.eff}%` }} 
                            className={`h-full ${d.eff < 80 ? 'bg-amber-500' : 'bg-viiu-graphite'}`} 
                          />
                       </div>
                       <span className="text-[10px] font-bold text-viiu-slate/40">{d.eff}%</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm">
            <h3 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-8">Lead Attribution</h3>
            <div className="aspect-square flex items-center justify-center relative">
               <div className="w-48 h-48 rounded-full border-[12px] border-viiu-stone relative">
                  <div className="absolute inset-0 rounded-full border-[12px] border-viiu-graphite border-l-transparent border-t-transparent border-b-transparent rotate-45" />
               </div>
               <div className="absolute text-center">
                  <span className="text-2xl font-light">64%</span>
                  <p className="text-[8px] tracking-widest uppercase text-viiu-slate/40 font-bold">Referral</p>
               </div>
            </div>
         </div>
         <div className="md:col-span-2 p-10 bg-white border border-viiu-slate/5 rounded-sm">
            <h3 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-8">Performance Heatmap</h3>
            <div className="grid grid-cols-12 gap-2">
               {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className={`aspect-square rounded-sm ${i % 7 === 0 ? 'bg-viiu-graphite' : i % 5 === 0 ? 'bg-viiu-aluminum' : 'bg-viiu-stone'}`} />
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
