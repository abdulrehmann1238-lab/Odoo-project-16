"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  UserCheck, 
  Clock, 
  MapPin, 
  Activity,
  Plus,
  Search,
  Filter,
  MoreVertical,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";

const crews = [
  { id: "T-101", name: "Alpha Installation", lead: "Tom Hardy", members: 4, site: "Oakville Estate", status: "On-Site", performance: 98 },
  { id: "T-102", name: "Bravo Elite", lead: "Sarah Jenkins", members: 6, site: "Waterfront Condo", status: "On-Site", performance: 94 },
  { id: "T-103", name: "Service & Support", lead: "Mike Ross", members: 2, site: "Various", status: "In Transit", performance: 100 },
  { id: "T-104", name: "Quebec Site Team", lead: "Jean-Pierre", members: 4, site: "Montreal Hub", status: "Active", performance: 88 },
];

export default function CrewsPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Field Force Management
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Service Crews Hub
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white border border-viiu-slate/5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-stone transition-colors rounded-sm flex items-center gap-2">
            <Filter className="w-4 h-4 text-viiu-slate/40" />
            Filter Teams
          </button>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2 shadow-2xl">
            <Plus className="w-4 h-4" />
            Assemble Crew
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Field Units", value: "24", sub: "8 Teams", icon: Users },
          { label: "Safety Compliance", value: "100%", sub: "Last 365 Days", icon: ShieldCheck },
          { label: "Regional Coverage", value: "GTA/MTL", sub: "Active Corridors", icon: MapPin },
          { label: "Resource Efficiency", value: "94.2%", sub: "Util. Rate", icon: Activity },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-viiu-stone rounded-sm">
                <stat.icon className="w-4 h-4 text-viiu-graphite" />
              </div>
            </div>
            <p className="text-[9px] tracking-widest uppercase font-bold text-viiu-slate/40 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-light text-viiu-graphite">{stat.value}</h3>
            <p className="text-[8px] tracking-widest uppercase text-viiu-slate/20 mt-1 font-bold">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-viiu-slate/5 rounded-sm overflow-hidden shadow-sm">
               <div className="p-8 border-b border-viiu-slate/5 bg-viiu-stone/30 flex justify-between items-center">
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Crew Directory</h2>
                  <div className="relative group">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-viiu-slate/30" />
                     <input type="text" placeholder="Search crews..." className="h-10 bg-white border border-viiu-slate/10 rounded-sm pl-10 pr-4 text-[10px] tracking-widest uppercase outline-none focus:border-viiu-graphite transition-all" />
                  </div>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-viiu-slate/5">
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Crew Name</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Field Site</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Utilization</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Status</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        {crews.map((crew, i) => (
                           <tr key={i} className="border-b border-viiu-slate/5 last:border-b-0 hover:bg-viiu-stone/20 transition-all group">
                              <td className="px-8 py-6">
                                 <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-viiu-graphite text-viiu-stone flex items-center justify-center text-[10px] font-bold rounded-sm">
                                       {crew.name[0]}
                                    </div>
                                    <div>
                                       <p className="text-sm font-medium text-viiu-graphite">{crew.name}</p>
                                       <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40 font-bold mt-1">Lead: {crew.lead}</p>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-8 py-6">
                                 <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3 text-viiu-slate/20" />
                                    <span className="text-[10px] tracking-widest uppercase font-bold text-viiu-graphite">{crew.site}</span>
                                 </div>
                              </td>
                              <td className="px-8 py-6">
                                 <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold text-viiu-graphite">{crew.performance}%</span>
                                    <div className="w-16 h-1 bg-viiu-stone rounded-full overflow-hidden">
                                       <motion.div initial={{ width: 0 }} animate={{ width: `${crew.performance}%` }} className="h-full bg-viiu-graphite" />
                                    </div>
                                 </div>
                              </td>
                              <td className="px-8 py-6">
                                 <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${crew.status === 'On-Site' ? 'bg-green-500' : 'bg-blue-500'}`} />
                                    <span className="text-[9px] tracking-widest uppercase font-black text-viiu-graphite">{crew.status}</span>
                                 </div>
                              </td>
                              <td className="px-8 py-6 text-right">
                                 <button className="p-2 hover:bg-viiu-stone rounded-sm"><MoreHorizontal className="w-4 h-4 text-viiu-slate/40" /></button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         <div className="space-y-8">
            <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm overflow-hidden group">
               <div className="flex items-center gap-4 mb-10">
                  <ShieldCheck className="w-6 h-6 text-viiu-aluminum" />
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum">Compliance Audit</h2>
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Health & Safety Certs", val: "Valid", alert: false },
                    { label: "Working at Heights", val: "2 Alerts", alert: true },
                    { label: "Equipment Insp.", val: "14/14", alert: false },
                  ].map((c, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] tracking-widest uppercase font-bold">
                       <span className="text-white/40">{c.label}</span>
                       <span className={c.alert ? 'text-red-500' : 'text-green-500'}>{c.val}</span>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-12 py-4 border border-white/10 text-[9px] tracking-[0.4em] uppercase font-black hover:bg-white/5 transition-all text-viiu-aluminum">
                  Launch Safety Audit
               </button>
            </div>

            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-10">Skill Matrix</h2>
               <div className="space-y-6">
                  {[
                    { skill: "Glass Handling", val: 95 },
                    { skill: "Precision Fitting", val: 88 },
                    { skill: "Site Surveying", val: 92 },
                    { skill: "Logistics Sync", val: 78 },
                  ].map((s, i) => (
                    <div key={i} className="space-y-3">
                       <div className="flex justify-between text-[9px] tracking-widest uppercase font-bold">
                          <span className="text-viiu-slate/40">{s.skill}</span>
                          <span className="text-viiu-graphite">{s.val}%</span>
                       </div>
                       <div className="w-full h-1 bg-viiu-stone rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${s.val}%` }} className="h-full bg-viiu-graphite" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
