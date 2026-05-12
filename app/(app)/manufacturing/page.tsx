"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings2, 
  Play, 
  Pause, 
  RefreshCcw, 
  Maximize2,
  Cpu,
  Activity,
  Layers,
  Thermometer,
  Zap,
  CheckCircle2,
  Clock,
  ScanLine,
  GanttChart,
  Container,
  AlertTriangle,
  History,
  Box,
  Truck
} from "lucide-react";

const workCenters = [
  { id: "WC-101", name: "CNC Cutting Station", machine: "Elumatec SBZ 151", status: "Running", load: 85, temp: "42°C", efficiency: 98, job: "JOB-7721", color: "bg-green-500" },
  { id: "WC-102", name: "Milling Center", machine: "Stürtz LSN", status: "Running", load: 92, temp: "38°C", efficiency: 94, job: "JOB-7724", color: "bg-green-500" },
  { id: "WC-103", name: "Crimping Bay", machine: "Pressta-Eisele", status: "Idle", load: 0, temp: "22°C", efficiency: 0, job: "Waiting", color: "bg-viiu-aluminum" },
  { id: "WC-104", name: "Glazing Station", machine: "Ashton Industrial", status: "Warning", load: 40, temp: "45°C", efficiency: 82, job: "JOB-7690", color: "bg-amber-500" },
];

export default function ManufacturingPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-12 pb-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Factory OS v4.2
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Manufacturing Control
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-white border border-viiu-slate/5 rounded-sm flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Throughput</span>
              <span className="text-sm font-bold text-viiu-graphite">142 Units/Day</span>
            </div>
            <div className="w-[1px] h-8 bg-viiu-slate/10" />
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Efficiency</span>
              <span className="text-sm font-bold text-green-600">99.4%</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2">
            <ScanLine className="w-4 h-4" />
            Barcode Mode
          </button>
        </div>
      </div>

      {/* Module Tabs */}
      <div className="flex gap-12 border-b border-viiu-slate/5">
        {["Overview", "Fabrication Gantt", "Machine Allocation", "Quality Control", "Shipments"].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`pb-4 text-[10px] tracking-[0.3em] uppercase font-bold transition-all relative ${
              activeTab === tab.toLowerCase() ? 'text-viiu-graphite' : 'text-viiu-slate/30 hover:text-viiu-slate/60'
            }`}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-viiu-graphite" />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "overview" && (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-12"
          >
            {/* Live Work Centers */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {workCenters.map((center, index) => (
                <div key={center.id} className="p-8 bg-white border border-viiu-slate/5 rounded-sm relative group overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full ${center.color}`} />
                  
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <p className="text-[9px] tracking-widest uppercase font-black text-viiu-slate/40 mb-1">{center.id}</p>
                      <h3 className="text-xl font-light text-viiu-graphite">{center.name}</h3>
                    </div>
                    <div className="p-2 bg-viiu-stone rounded-sm">
                      <Cpu className="w-4 h-4 text-viiu-slate/40" />
                    </div>
                  </div>

                  <div className="space-y-6 mb-10">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-viiu-slate/40">Load Utilization</span>
                        <span className="text-sm font-bold text-viiu-graphite">{center.load}%</span>
                      </div>
                      <div className="w-full h-1 bg-viiu-stone rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${center.load}%` }}
                          className={`h-full ${center.color}`}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-viiu-stone/30 rounded-sm">
                        <span className="text-[8px] tracking-widest uppercase font-bold text-viiu-slate/40 block mb-1">Temp</span>
                        <span className="text-sm font-medium text-viiu-graphite">{center.temp}</span>
                      </div>
                      <div className="p-3 bg-viiu-stone/30 rounded-sm">
                        <span className="text-[8px] tracking-widest uppercase font-bold text-viiu-slate/40 block mb-1">Efficiency</span>
                        <span className="text-sm font-medium text-viiu-graphite">{center.efficiency}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-viiu-slate/5 flex justify-between items-center">
                    <div>
                      <p className="text-[8px] tracking-widest uppercase text-viiu-slate/40 mb-1">Active Job</p>
                      <p className="text-[10px] font-black tracking-widest text-viiu-graphite">{center.job}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-sm bg-viiu-graphite text-white flex items-center justify-center hover:bg-viiu-slate transition-colors">
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 p-10 bg-white border border-viiu-slate/5 rounded-sm">
                <div className="flex justify-between items-center mb-12">
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Production Pipeline</h2>
                  <div className="flex gap-4">
                    <button className="p-2 hover:bg-viiu-stone rounded-sm transition-colors text-viiu-slate/40"><RefreshCcw className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="space-y-8">
                  {[
                    { id: "J-901", project: "Yorkville Penthouse", items: 12, stages: ["Design", "Cutting", "Milling", "Assembly", "QC"], current: 3, priority: "Urgent" },
                    { id: "J-904", project: "Vaughan Business Center", items: 45, stages: ["Design", "Cutting", "Milling", "Assembly", "QC"], current: 1, priority: "Standard" },
                    { id: "J-908", project: "Forest Hill Residence", items: 8, stages: ["Design", "Cutting", "Milling", "Assembly", "QC"], current: 4, priority: "Standard" },
                  ].map((job, i) => (
                    <div key={job.id} className="group relative p-8 bg-viiu-stone/20 border border-transparent hover:border-viiu-slate/10 transition-all rounded-sm">
                      <div className="flex justify-between items-start mb-10">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-black tracking-widest">{job.id}</span>
                            <span className={`text-[8px] px-2 py-0.5 rounded-full uppercase font-bold tracking-widest ${job.priority === 'Urgent' ? 'bg-red-100 text-red-600' : 'bg-viiu-aluminum/10 text-viiu-slate/40'}`}>{job.priority}</span>
                          </div>
                          <h4 className="text-xl font-light text-viiu-graphite">{job.project}</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-viiu-graphite">{job.items} Units</p>
                          <p className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Total Fabrication Volume</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex-1 flex justify-between relative px-2">
                          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-viiu-slate/10 -translate-y-1/2" />
                          {job.stages.map((stage, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center gap-3">
                              <div className={`w-4 h-4 rounded-full border-4 border-white transition-all duration-700 ${
                                idx < job.current ? 'bg-green-500' : 
                                idx === job.current ? 'bg-viiu-graphite scale-125 shadow-xl' : 
                                'bg-viiu-stone'
                              }`} />
                              <span className={`text-[8px] tracking-widest uppercase font-black transition-colors ${idx === job.current ? 'text-viiu-graphite' : 'text-viiu-slate/20'}`}>
                                {stage}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-viiu-graphite text-viiu-stone rounded-sm">
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum mb-10">Optimization Engine</h2>
                  <div className="space-y-8">
                    <div className="flex gap-4 p-5 bg-white/5 rounded-sm border border-white/5">
                      <Zap className="w-5 h-5 text-viiu-aluminum" />
                      <div>
                        <p className="text-[11px] font-bold tracking-widest uppercase">Linear Cut Waste</p>
                        <p className="text-2xl font-light mt-1">1.2%</p>
                        <p className="text-[9px] text-white/40 mt-1">Global optimization active</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-[10px] tracking-widest uppercase font-bold text-white/40">Raw Material Allocation</p>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-white/5 rounded-sm">
                            <span className="text-[8px] text-white/20 block mb-1 uppercase font-black">Aluminum</span>
                            <span className="text-sm font-medium">84.2% Yield</span>
                         </div>
                         <div className="p-4 bg-white/5 rounded-sm">
                            <span className="text-[8px] text-white/20 block mb-1 uppercase font-black">Glass</span>
                            <span className="text-sm font-medium">96.8% Yield</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white border border-viiu-slate/5 rounded-sm">
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-8">Active Shipments</h2>
                  <div className="space-y-6">
                    {[
                      { dest: "Vancouver Hub", id: "SHIP-102", status: "In Transit", eta: "2d" },
                      { dest: "London Project Site", id: "SHIP-105", status: "Loading", eta: "4h" },
                    ].map((ship, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-viiu-stone/30 rounded-sm group hover:bg-viiu-stone transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                          <Container className="w-5 h-5 text-viiu-slate/30 group-hover:text-viiu-graphite transition-colors" />
                          <div>
                            <p className="text-sm font-bold text-viiu-graphite">{ship.dest}</p>
                            <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40">{ship.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black tracking-widest text-viiu-graphite uppercase">{ship.status}</p>
                          <p className="text-[8px] tracking-widest uppercase text-viiu-slate/40">ETA: {ship.eta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 py-4 border border-viiu-slate/10 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40 hover:text-viiu-graphite transition-all">
                    View Fleet Map
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "fabrication gantt" && (
          <motion.div 
            key="gantt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-viiu-slate/5 rounded-sm p-10 min-h-[600px] flex flex-col items-center justify-center text-center"
          >
            <GanttChart className="w-16 h-16 text-viiu-slate/10 mb-8" />
            <h3 className="text-2xl font-light text-viiu-graphite mb-4">Interactive Fabrication Gantt</h3>
            <p className="text-viiu-slate/40 max-w-md mx-auto font-light leading-relaxed mb-8">
              Visualizing the complete production lifecycle across all work centers. Drag and drop to reschedule fabrication orders.
            </p>
            <div className="w-full max-w-4xl h-80 bg-viiu-stone/20 rounded-sm relative overflow-hidden">
               {/* Simplified Gantt Representation */}
               <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20">
                  {Array.from({ length: 72 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-viiu-slate/10" />
                  ))}
               </div>
               <div className="absolute top-10 left-10 w-1/3 h-12 bg-viiu-graphite rounded-sm" />
               <div className="absolute top-28 left-1/4 w-1/2 h-12 bg-viiu-slate rounded-sm" />
               <div className="absolute top-44 left-1/3 w-1/4 h-12 bg-viiu-aluminum rounded-sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
