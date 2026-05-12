"use client";

import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle2,
  AlertTriangle,
  MoreVertical,
  Calendar as CalendarIcon,
  Truck,
  CloudRain,
  Wind,
  Navigation
} from "lucide-react";

const crews = [
  { id: "C-1", name: "Alpha Installation Team", Lead: "Tom Hardy", capacity: 85, color: "bg-viiu-graphite", status: "Active" },
  { id: "C-2", name: "Bravo Elite Crew", Lead: "Sarah Jenkins", capacity: 110, color: "bg-viiu-slate", status: "Overloaded" },
  { id: "C-3", name: "Service & Support", Lead: "Mike Ross", capacity: 40, color: "bg-viiu-aluminum", status: "Active" },
];

const schedule = [
  { id: 1, crew: "C-1", project: "Oakville Estate - Ph 2", days: [1, 2], status: "Confirmed", progress: 60, units: 12 },
  { id: 2, crew: "C-1", project: "Burlington Villa", days: [4, 5], status: "Pending", progress: 0, units: 8 },
  { id: 3, crew: "C-2", project: "Yorkville Penthouse", days: [1, 2, 3], status: "In-Progress", progress: 25, units: 45 },
  { id: 4, crew: "C-2", project: "Forest Hill Residence", days: [5], status: "Tentative", progress: 0, units: 6 },
  { id: 5, crew: "C-3", project: "Muskoka Retreat", days: [2, 3, 4], status: "Confirmed", progress: 10, units: 4 },
];

const days = ["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16", "Sat 17", "Sun 18"];

export default function InstallationPage() {
  return (
    <div className="space-y-12 pb-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Field Operations & Logistics
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Deployment Board
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-6 bg-white px-8 py-3 border border-viiu-slate/5 rounded-sm">
             <div className="flex items-center gap-2">
                <CloudRain className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] tracking-widest uppercase font-bold">GTA: 14°C</span>
             </div>
             <div className="w-[1px] h-6 bg-viiu-slate/10" />
             <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] tracking-widest uppercase font-bold text-amber-600">Wind Alert: 45km/h</span>
             </div>
          </div>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2">
            <Navigation className="w-4 h-4" />
            Route Optimize
          </button>
        </div>
      </div>

      {/* Main Scheduling Board */}
      <div className="bg-white border border-viiu-slate/5 rounded-sm overflow-hidden shadow-2xl">
        <div className="grid grid-cols-[320px_1fr] border-b border-viiu-slate/5 bg-viiu-stone/30">
          <div className="p-8 border-r border-viiu-slate/5">
            <span className="text-[10px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Operational Resources</span>
          </div>
          <div className="grid grid-cols-7">
            {days.map((day, i) => (
              <div key={i} className={`p-8 text-center border-r border-viiu-slate/5 last:border-r-0 ${i > 4 ? 'bg-viiu-stone/10' : ''}`}>
                <span className="text-[10px] tracking-[0.3em] uppercase font-black text-viiu-graphite">{day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {crews.map((crew) => (
            <div key={crew.id} className="grid grid-cols-[320px_1fr] border-b border-viiu-slate/5 last:border-b-0 min-h-[160px]">
              <div className="p-10 border-r border-viiu-slate/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                     <h4 className="text-lg font-light text-viiu-graphite">{crew.name}</h4>
                     <span className={`text-[7px] px-2 py-0.5 rounded-full uppercase font-black tracking-widest ${crew.status === 'Overloaded' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>{crew.status}</span>
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-viiu-slate/40 mt-1">Lead: {crew.Lead}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[9px] tracking-widest uppercase font-black">
                    <span className="text-viiu-slate/20">Team Capacity</span>
                    <span className={crew.capacity > 100 ? 'text-red-600' : 'text-viiu-graphite'}>{crew.capacity}%</span>
                  </div>
                  <div className="w-full h-1 bg-viiu-stone rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(crew.capacity, 100)}%` }}
                      className={`h-full ${crew.capacity > 100 ? 'bg-red-500' : 'bg-viiu-graphite'}`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-7 relative">
                {days.map((_, i) => (
                  <div key={i} className={`border-r border-viiu-slate/5 last:border-r-0 h-full ${i > 4 ? 'bg-viiu-stone/10' : ''}`} />
                ))}

                {/* Drag-and-drop Schedule Blocks */}
                {schedule.filter(s => s.crew === crew.id).map((item) => {
                  const start = item.days[0];
                  const span = item.days.length;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{
                        left: `${(start * 100) / 7}%`,
                        width: `${(span * 100) / 7 - 1}%`,
                      }}
                      className={`absolute top-6 bottom-6 z-10 p-6 rounded-sm border border-black/5 flex flex-col justify-between group cursor-grab active:cursor-grabbing shadow-lg hover:shadow-2xl transition-all duration-500 ${crew.color} text-viiu-stone`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-[11px] font-black tracking-[0.2em] uppercase mb-1">{item.project}</h5>
                          <p className="text-[8px] tracking-widest uppercase text-white/40">{item.status} • {item.units} Units</p>
                        </div>
                        <MoreVertical className="w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {item.progress > 0 && (
                        <div className="space-y-2">
                          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.progress}%` }}
                              className="h-full bg-viiu-aluminum"
                            />
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-[7px] tracking-widest uppercase text-white/40">{item.progress}% Complete</span>
                             <div className="flex -space-x-2">
                                {[1,2].map(u => <div key={u} className="w-4 h-4 rounded-full border border-white/20 bg-viiu-graphite" />)}
                             </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logistics & Intelligence Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm">
           <div className="flex items-center gap-4 mb-12">
              <Truck className="w-6 h-6 text-viiu-aluminum" />
              <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Fleet Intelligence</h2>
           </div>
           <div className="space-y-8">
              {[
                { id: "TRK-01", dest: "Oakville", status: "Unloading", load: 85 },
                { id: "TRK-04", dest: "Yorkville", status: "In Transit", load: 100 },
                { id: "TRK-09", dest: "Forest Hill", status: "At Facility", load: 0 },
              ].map((truck, i) => (
                <div key={i} className="flex items-center justify-between group">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-viiu-stone rounded-sm flex items-center justify-center">
                         <span className="text-[10px] font-black">{truck.id.split('-')[1]}</span>
                      </div>
                      <div>
                         <p className="text-sm font-bold text-viiu-graphite">{truck.dest}</p>
                         <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40">{truck.status}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-sm font-black text-viiu-graphite">{truck.load}%</p>
                      <p className="text-[8px] tracking-widest uppercase text-viiu-slate/20">Capacity</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-2 p-10 bg-viiu-graphite text-viiu-stone rounded-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
              <MapPin className="w-48 h-48" />
           </div>
           <div className="relative z-10">
              <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum mb-12">Regional Deployment Heatmap</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                 <div>
                    <span className="text-[10px] tracking-widest uppercase text-viiu-aluminum/40 block mb-2">Greater Toronto</span>
                    <span className="text-3xl font-light">124 Units</span>
                 </div>
                 <div>
                    <span className="text-[10px] tracking-widest uppercase text-viiu-aluminum/40 block mb-2">Oakville / Burl.</span>
                    <span className="text-3xl font-light">42 Units</span>
                 </div>
                 <div>
                    <span className="text-[10px] tracking-widest uppercase text-viiu-aluminum/40 block mb-2">Muskoka Hub</span>
                    <span className="text-3xl font-light">18 Units</span>
                 </div>
                 <div>
                    <span className="text-[10px] tracking-widest uppercase text-viiu-aluminum/40 block mb-2">Total Load</span>
                    <span className="text-3xl font-light">184 Units</span>
                 </div>
              </div>
              <button className="px-12 py-5 bg-white text-viiu-graphite text-[10px] tracking-[0.4em] uppercase font-black hover:bg-viiu-aluminum transition-colors">
                 Open Logistics Console
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
