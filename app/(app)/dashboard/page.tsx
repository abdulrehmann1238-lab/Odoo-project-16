"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Package, 
  Hammer, 
  Truck, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Activity,
  DollarSign,
  Calendar,
  Layers,
  ChevronRight,
  Target,
  Clock,
  ShieldCheck,
  Container
} from "lucide-react";

const stats = [
  { label: "Revenue Pipeline", value: "$12.4M", change: "+14.2%", icon: DollarSign, positive: true, spark: [30, 45, 40, 60, 55, 70, 65, 80] },
  { label: "Fabrication Load", value: "94.2%", change: "+2.1%", icon: Hammer, positive: false, spark: [60, 70, 75, 80, 85, 90, 92, 94] },
  { label: "On-Site Crews", value: "18/20", change: "Steady", icon: Truck, positive: true, spark: [10, 12, 14, 14, 16, 18, 18, 18] },
  { label: "Yield Efficiency", value: "99.2%", change: "+0.4%", icon: Zap, positive: true, spark: [95, 96, 97, 98, 98, 99, 99, 99] },
];

export default function DashboardPage() {
  return (
    <div className="space-y-12 pb-24">
      {/* Executive Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Executive Command Console
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Operational Intelligence
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-white border border-viiu-slate/5 rounded-sm flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Market Node</span>
              <span className="text-sm font-bold text-viiu-graphite">Ontario Central</span>
            </div>
            <div className="w-[1px] h-8 bg-viiu-slate/10" />
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Session ID</span>
              <span className="text-sm font-mono text-viiu-aluminum">FRK-0199</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2 shadow-2xl">
            <ShieldCheck className="w-4 h-4" />
            System Reports
          </button>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-white border border-viiu-slate/5 rounded-sm group hover:border-viiu-aluminum/20 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-10">
              <div className="p-3 bg-viiu-stone rounded-sm">
                <stat.icon className="w-5 h-5 text-viiu-graphite stroke-[1.5]" />
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-black tracking-widest uppercase ${stat.positive ? 'text-green-600' : 'text-amber-600'}`}>
                {stat.change}
                {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40 mb-1">{stat.label}</p>
            <h3 className="text-4xl font-light text-viiu-graphite mb-8 tracking-tighter">{stat.value}</h3>
            
            {/* Sparkline */}
            <div className="h-12 flex items-end gap-1">
               {stat.spark.map((h, i) => (
                  <div key={i} className="flex-1 bg-viiu-stone/30 relative">
                     <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: index * 0.2 + i * 0.05 }}
                        className={`absolute bottom-0 left-0 right-0 ${stat.positive ? 'bg-viiu-graphite/10 group-hover:bg-viiu-graphite' : 'bg-amber-500/10 group-hover:bg-amber-500'} transition-colors duration-500`}
                     />
                  </div>
               ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Central Operations Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Real-time Project Map/Board */}
          <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm">
             <div className="flex justify-between items-center mb-12">
                <div>
                   <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-2">High-Value Projects</h2>
                   <p className="text-[10px] text-viiu-slate/40 tracking-widest uppercase">Active deployment and fabrication tracking</p>
                </div>
                <button className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-black text-viiu-aluminum hover:text-viiu-graphite transition-colors">
                   Global Map View
                   <ArrowUpRight className="w-4 h-4" />
                </button>
             </div>

             <div className="space-y-4">
                {[
                  { name: "Oakville Estate - Phase 2", status: "Fabrication", progress: 75, risk: "Low", value: "$420k" },
                  { name: "Toronto Waterfront Condo", status: "Installation", progress: 40, risk: "High", value: "$1.2M" },
                  { name: "Muskoka Retreat", status: "QC Review", progress: 95, risk: "Low", value: "$185k" },
                  { name: "Burlington Plaza", status: "Material Prep", progress: 12, risk: "Medium", value: "$850k" },
                ].map((project, i) => (
                  <div key={i} className="p-6 bg-viiu-stone/20 rounded-sm flex items-center justify-between group hover:bg-viiu-stone transition-all cursor-pointer">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white flex items-center justify-center border border-viiu-slate/5 group-hover:border-viiu-graphite/20 transition-all">
                           <Layers className="w-5 h-5 text-viiu-slate/20 group-hover:text-viiu-graphite" />
                        </div>
                        <div>
                           <h4 className="text-sm font-bold text-viiu-graphite">{project.name}</h4>
                           <div className="flex items-center gap-3 mt-1">
                              <span className="text-[9px] tracking-widest uppercase font-black text-viiu-slate/40">{project.status}</span>
                              <div className="w-1 h-1 rounded-full bg-viiu-slate/20" />
                              <span className={`text-[8px] px-2 py-0.5 rounded-full uppercase font-bold tracking-widest ${
                                 project.risk === 'High' ? 'bg-red-100 text-red-600' :
                                 project.risk === 'Medium' ? 'bg-amber-100 text-amber-600' :
                                 'bg-green-100 text-green-600'
                              }`}>Risk: {project.risk}</span>
                           </div>
                        </div>
                     </div>
                     <div className="flex items-center gap-12">
                        <div className="text-right min-w-[100px]">
                           <span className="text-[10px] font-black tracking-widest text-viiu-graphite">{project.value}</span>
                           <div className="w-24 h-1 bg-viiu-slate/5 rounded-full mt-2 overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: `${project.progress}%` }} className="h-full bg-viiu-graphite" />
                           </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-viiu-slate/20 group-hover:text-viiu-graphite transition-all" />
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-8 bg-white border border-viiu-slate/5 rounded-sm">
                <h3 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-8">System Alerts</h3>
                <div className="space-y-6">
                   {[
                     { title: "Material Shortage", msg: "Aluminum 6063-T6 (Black) under critical levels.", time: "2h ago", type: "error" },
                     { title: "Installation Delayed", msg: "Muskoka site weather delay (Wind > 45km/h).", time: "5h ago", type: "warning" },
                   ].map((alert, i) => (
                     <div key={i} className="flex gap-4 border-l-2 border-viiu-slate/5 pl-4 py-1">
                        <div className={`w-2 h-2 rounded-full mt-1 ${alert.type === 'error' ? 'bg-red-500' : 'bg-amber-500'}`} />
                        <div>
                           <p className="text-[10px] font-black tracking-widest uppercase">{alert.title}</p>
                           <p className="text-[11px] text-viiu-slate/40 mt-1 leading-relaxed">{alert.msg}</p>
                           <span className="text-[8px] tracking-widest uppercase font-bold text-viiu-slate/20 mt-2 block">{alert.time}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="p-8 bg-viiu-graphite text-viiu-stone rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Zap className="w-24 h-24 stroke-[1]" />
                </div>
                <h3 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum mb-8 relative z-10">AI Operational Insights</h3>
                <div className="space-y-6 relative z-10">
                   <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
                      <p className="text-[10px] text-white/60 leading-relaxed font-light">
                         <span className="text-viiu-aluminum font-bold">Optimization Opportunity:</span> Batching JOB-7721 and JOB-7728 could reduce scrap waste by 14.2% across CNC-01.
                      </p>
                   </div>
                   <button className="w-full py-4 border border-white/10 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-aluminum hover:bg-white/5 transition-all">
                      Review Suggestions
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-8">
           <div className="p-8 bg-white border border-viiu-slate/5 rounded-sm">
              <div className="flex items-center gap-3 mb-10">
                 <Container className="w-5 h-5 text-viiu-aluminum" />
                 <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Global Logistics</h2>
              </div>
              <div className="space-y-8">
                 <div className="relative h-40 bg-viiu-stone/30 rounded-sm overflow-hidden">
                    {/* Abstract Map Placeholder */}
                    <div className="absolute inset-0 opacity-10">
                       <div className="w-full h-full border border-viiu-slate/20 grid grid-cols-6 grid-rows-4" />
                    </div>
                    <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-viiu-graphite rounded-full shadow-2xl animate-pulse" />
                    <div className="absolute top-1/4 left-2/3 w-2 h-2 bg-viiu-aluminum rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-viiu-aluminum rounded-full" />
                 </div>
                 <div className="space-y-4">
                    {[
                      { item: "Container C-992", status: "Customs Clear", eta: "4h" },
                      { item: "Fleet Unit #14", status: "In Transit", eta: "12m" },
                    ].map((log, i) => (
                       <div key={i} className="flex justify-between items-center text-[11px]">
                          <span className="font-bold text-viiu-graphite uppercase tracking-widest">{log.item}</span>
                          <span className="text-viiu-slate/40">{log.status} • {log.eta}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="p-8 bg-white border border-viiu-slate/5 rounded-sm">
              <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-8">Weekly Fabrication Load</h2>
              <div className="space-y-6">
                 {[
                   { center: "CNC Center 01", load: 92 },
                   { center: "CNC Center 02", load: 45 },
                   { center: "Milling Station", load: 78 },
                   { center: "Glazing Bay", load: 30 },
                 ].map((load, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[9px] tracking-widest uppercase font-bold">
                          <span className="text-viiu-slate/40">{load.center}</span>
                          <span className="text-viiu-graphite">{load.load}%</span>
                       </div>
                       <div className="w-full h-1 bg-viiu-stone rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${load.load}%` }} className="h-full bg-viiu-graphite" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="p-8 bg-viiu-stone text-viiu-graphite rounded-sm">
              <div className="flex items-center gap-3 mb-8">
                 <Calendar className="w-5 h-5 text-viiu-aluminum" />
                 <h2 className="text-[11px] tracking-[0.4em] uppercase font-black">Upcoming Installs</h2>
              </div>
              <div className="space-y-6">
                 {[
                   { date: "May 14", site: "Yorkville P.", crew: "Alpha Team" },
                   { date: "May 15", site: "Muskoka R.", crew: "Bravo Team" },
                 ].map((ins, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-12 h-12 bg-white flex flex-col items-center justify-center border border-viiu-slate/5">
                          <span className="text-[8px] tracking-widest uppercase font-bold text-viiu-slate/40">{ins.date.split(' ')[0]}</span>
                          <span className="text-sm font-bold">{ins.date.split(' ')[1]}</span>
                       </div>
                       <div>
                          <p className="text-sm font-bold">{ins.site}</p>
                          <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40">{ins.crew}</p>
                       </div>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-4 bg-viiu-graphite text-white text-[9px] tracking-[0.3em] uppercase font-bold rounded-sm">
                 Full Schedule
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
