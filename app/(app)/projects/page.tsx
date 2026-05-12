"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Search, 
  Plus, 
  MapPin, 
  Clock, 
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  FileText,
  Users,
  Building2,
  Calendar,
  Layers,
  ArrowUpRight
} from "lucide-react";

const projects = [
  { id: "P-7721", name: "Oakville Estate - Phase 2", client: "Sterling Homes", location: "Oakville, ON", status: "In Fabrication", progress: 65, readiness: 90, items: 42, value: "$240k" },
  { id: "P-7724", name: "Toronto Waterfront Condo", client: "Tridel Group", location: "Toronto, ON", status: "Material Prep", progress: 30, readiness: 45, items: 124, value: "$1.2M" },
  { id: "P-7728", name: "Muskoka Retreat", client: "Private Client", location: "Muskoka, ON", status: "Quality Check", progress: 95, readiness: 100, items: 8, value: "$85k" },
  { id: "P-7730", name: "Vaughan Business Center", client: "Vaughan Corp", location: "Vaughan, ON", status: "Lead Intake", progress: 10, readiness: 20, items: 56, value: "$450k" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Portfolio Management
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Active Projects Hub
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-white border border-viiu-slate/5 rounded-sm flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Active Projects</span>
              <span className="text-sm font-bold text-viiu-graphite">24 Projects</span>
            </div>
            <div className="w-[1px] h-8 bg-viiu-slate/10" />
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Portfolio Value</span>
              <span className="text-sm font-bold text-viiu-graphite">$8.4M</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Initiate Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-10 bg-white border border-viiu-slate/5 rounded-sm group hover:border-viiu-aluminum/40 transition-all duration-700 shadow-sm hover:shadow-2xl"
          >
            <div className="flex justify-between items-start mb-12">
               <div>
                  <div className="flex items-center gap-3 mb-3">
                     <span className="text-[10px] font-black tracking-widest text-viiu-graphite">{project.id}</span>
                     <span className="text-[8px] px-2 py-0.5 bg-viiu-stone rounded-full tracking-widest uppercase font-bold text-viiu-slate/40">Residential</span>
                  </div>
                  <h3 className="text-3xl font-light text-viiu-graphite group-hover:text-viiu-aluminum transition-colors leading-tight">{project.name}</h3>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-viiu-slate/40 mt-3">{project.client}</p>
               </div>
               <div className="text-right">
                  <p className="text-2xl font-light text-viiu-graphite">{project.value}</p>
                  <p className="text-[8px] tracking-widest uppercase text-viiu-slate/40 font-bold">Est. Value</p>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-8 py-10 border-y border-viiu-slate/5 mb-10">
               <div>
                  <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40 font-black mb-2">Location</p>
                  <div className="flex items-center gap-2">
                     <MapPin className="w-3 h-3 text-viiu-aluminum" />
                     <span className="text-[10px] font-bold tracking-widest uppercase">{project.location}</span>
                  </div>
               </div>
               <div>
                  <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40 font-black mb-2">Items</p>
                  <div className="flex items-center gap-2">
                     <Layers className="w-3 h-3 text-viiu-aluminum" />
                     <span className="text-[10px] font-bold tracking-widest uppercase">{project.items} Units</span>
                  </div>
               </div>
               <div>
                  <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40 font-black mb-2">Timeline</p>
                  <div className="flex items-center gap-2">
                     <Clock className="w-3 h-3 text-viiu-aluminum" />
                     <span className="text-[10px] font-bold tracking-widest uppercase">12 Weeks</span>
                  </div>
               </div>
            </div>

            <div className="space-y-8">
               <div className="space-y-3">
                  <div className="flex justify-between text-[10px] tracking-widest uppercase font-black">
                     <span className="text-viiu-slate/20">Overall Progress</span>
                     <span className="text-viiu-graphite">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-viiu-stone rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} animate={{ width: `${project.progress}%` }} className="h-full bg-viiu-graphite" />
                  </div>
               </div>

               <div className="space-y-3">
                  <div className="flex justify-between text-[10px] tracking-widest uppercase font-black">
                     <span className="text-viiu-slate/20">Site Readiness</span>
                     <span className={project.readiness < 50 ? 'text-red-600' : 'text-viiu-graphite'}>{project.readiness}%</span>
                  </div>
                  <div className="w-full h-1 bg-viiu-stone rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: `${project.readiness}%` }} 
                        className={`h-full ${project.readiness < 50 ? 'bg-red-500' : 'bg-viiu-aluminum'}`} 
                     />
                  </div>
               </div>
            </div>

            <div className="mt-12 pt-10 border-t border-viiu-slate/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                     <FileText className="w-4 h-4 text-viiu-slate/20" />
                     <span className="text-[9px] font-bold tracking-widest uppercase">14 Docs</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Users className="w-4 h-4 text-viiu-slate/20" />
                     <span className="text-[9px] font-bold tracking-widest uppercase">3 Teams</span>
                  </div>
               </div>
               <button className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-black text-viiu-graphite group/btn">
                  Open Project Space
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
