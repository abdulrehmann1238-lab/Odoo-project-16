"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  Clock, 
  FileText, 
  MessageSquare, 
  CreditCard,
  ChevronRight,
  CheckCircle2,
  Box,
  MapPin,
  Camera,
  Layers,
  ArrowUpRight
} from "lucide-react";

export default function ClientPortalPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Executive Client Experience
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Project Workspace
          </h1>
        </div>
        <div className="flex items-center gap-6 p-4 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
          <div className="w-12 h-12 bg-viiu-stone rounded-sm flex items-center justify-center">
            <Home className="w-6 h-6 text-viiu-graphite" />
          </div>
          <div>
            <p className="text-sm font-bold text-viiu-graphite">Oakville Estate - Phase 2</p>
            <p className="text-[10px] tracking-widest uppercase text-viiu-slate/40 font-bold mt-1">Reference: P-7721</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="p-12 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
            <div className="flex justify-between items-center mb-16">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Operational Milestones</h2>
               <span className="text-[10px] tracking-widest uppercase font-bold text-viiu-aluminum">Live Status: Fabrication</span>
            </div>
            <div className="relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-[1px] bg-viiu-stone" />
              <div className="space-y-16">
                {[
                  { title: "Architectural Specification Review", date: "April 12, 2026", status: "Completed", note: "All shop drawings approved for production." },
                  { title: "Precision Material Fabrication", date: "May 05, 2026", status: "In-Progress", note: "CNC cutting of main frame sections complete." },
                  { title: "Glazing & Final Quality Assembly", date: "Est. May 20, 2026", status: "Pending", note: "Waiting for material release from station 04." },
                  { title: "White-Glove Site Installation", date: "Est. June 02, 2026", status: "Pending", note: "Scheduled with Alpha Team supervisor." },
                ].map((m, i) => (
                  <div key={i} className="relative flex items-start gap-12 pl-12 group">
                    <div className={`absolute left-0 top-1 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center z-10 transition-all duration-700 ${m.status === 'Completed' ? 'bg-green-500 shadow-lg' : m.status === 'In-Progress' ? 'bg-viiu-graphite animate-pulse shadow-xl' : 'bg-viiu-stone'}`}>
                      {m.status === 'Completed' && <CheckCircle2 className="w-5 h-5 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                         <h4 className={`text-xl font-light ${m.status === 'Pending' ? 'text-viiu-slate/20' : 'text-viiu-graphite'}`}>{m.title}</h4>
                         <span className="text-[10px] tracking-widest uppercase text-viiu-slate/40 mt-1 font-bold">{m.date}</span>
                      </div>
                      <p className="text-sm text-viiu-slate/40 font-light leading-relaxed max-w-xl">{m.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm hover:border-viiu-aluminum/20 transition-all cursor-pointer group shadow-sm">
              <div className="flex justify-between items-start mb-10">
                <div className="p-3 bg-viiu-stone rounded-sm group-hover:bg-viiu-graphite group-hover:text-white transition-all">
                  <FileText className="w-6 h-6 stroke-[1.2]" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-viiu-slate/10 group-hover:text-viiu-graphite transition-all" />
              </div>
              <h3 className="text-sm font-black text-viiu-graphite tracking-[0.2em] uppercase mb-2">Digital Asset Hub</h3>
              <p className="text-[11px] text-viiu-slate/40 font-light">12 Files • Shop Drawings, Material Certs</p>
            </div>
            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm hover:border-viiu-aluminum/20 transition-all cursor-pointer group shadow-sm">
              <div className="flex justify-between items-start mb-10">
                 <div className="p-3 bg-viiu-stone rounded-sm group-hover:bg-viiu-graphite group-hover:text-white transition-all">
                  <CreditCard className="w-6 h-6 stroke-[1.2]" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-viiu-slate/10 group-hover:text-viiu-graphite transition-all" />
              </div>
              <h3 className="text-sm font-black text-viiu-graphite tracking-[0.2em] uppercase mb-2">Billing & Invoices</h3>
              <p className="text-[11px] text-viiu-slate/40 font-light">Status: Current • Next Payment: June 1</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Camera className="w-32 h-32" />
            </div>
            <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum mb-10 relative z-10">Live Site Feed</h2>
            <div className="space-y-8 relative z-10">
               <div className="aspect-video bg-white/5 rounded-sm border border-white/5 flex items-center justify-center group cursor-pointer overflow-hidden relative">
                  <div className="absolute inset-0 bg-viiu-stone/10 group-hover:bg-transparent transition-all" />
                  <span className="text-[9px] tracking-widest uppercase font-bold text-white/40 group-hover:text-white transition-colors">Connect To Site Camera 01</span>
               </div>
               <div className="space-y-6">
                 {[
                   { msg: "Main Entrance fabrication completed.", time: "2h ago" },
                   { msg: "Quality inspection for East Wing passed.", time: "5h ago" },
                   { msg: "Site readiness survey confirmed.", time: "Yesterday" },
                 ].map((update, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="w-1.5 h-1.5 rounded-full bg-viiu-aluminum mt-2 flex-none" />
                     <div>
                       <p className="text-[11px] text-white/60 leading-relaxed font-light">{update.msg}</p>
                       <span className="text-[8px] tracking-widest uppercase text-white/20 mt-2 block font-bold">{update.time}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
            <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-10">Dedicated Support</h2>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-viiu-stone rounded-sm flex items-center justify-center text-[10px] font-black">MV</div>
               <div>
                  <p className="text-sm font-bold text-viiu-graphite">Marcus Viiu</p>
                  <p className="text-[10px] tracking-widest uppercase text-viiu-slate/40 font-bold mt-1">Project Director</p>
               </div>
            </div>
            <p className="text-sm text-viiu-slate/40 mb-10 font-light leading-relaxed">
              Your dedicated project team is available for any technical specifications or scheduling adjustments.
            </p>
            <button className="w-full py-5 bg-viiu-stone text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-viiu-graphite hover:text-white transition-all rounded-sm flex items-center justify-center gap-3">
              <MessageSquare className="w-4 h-4" />
              Direct Message
            </button>
          </div>

          <div className="p-10 bg-viiu-stone/30 rounded-sm">
            <div className="flex items-center gap-4 mb-8">
              <Layers className="w-5 h-5 text-viiu-slate/20" />
              <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Site Logistics</h2>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-viiu-slate/40 mt-1" />
              <div>
                <p className="text-sm font-bold text-viiu-graphite">124 Lakeshore Rd E</p>
                <p className="text-[11px] text-viiu-slate/40 mt-1 font-bold">Oakville, ON L6J 1H4</p>
                <a href="#" className="inline-block mt-4 text-[9px] tracking-widest uppercase font-black text-viiu-aluminum hover:text-viiu-graphite transition-colors">View Site Access Specs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
