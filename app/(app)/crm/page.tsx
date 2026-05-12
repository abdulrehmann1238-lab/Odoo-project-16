"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  MessageSquare,
  Calendar,
  Clock,
  Circle,
  LayoutGrid,
  List,
  ChevronRight,
  TrendingUp,
  Target,
  FileText,
  User,
  Building,
  DollarSign
} from "lucide-react";

const leads = [
  { id: "L-2201", name: "Modern Lakehouse", contact: "Julian Thorne", value: "$240k", stage: "Specification", status: "Hot", date: "2d ago", prob: 85 },
  { id: "L-2205", name: "High-Rise Lobby", contact: "Sarah Chen", value: "$1.2M", stage: "Quoting", status: "Active", date: "5d ago", prob: 60 },
  { id: "L-2208", name: "Rosedale Residence", contact: "Robert Blake", value: "$85k", stage: "Discovery", status: "New", date: "1h ago", prob: 20 },
  { id: "L-2210", name: "Burlington Estate", contact: "Emma Watson", value: "$420k", stage: "Proposal", status: "Warm", date: "1w ago", prob: 45 },
];

export default function CRMPage() {
  const [selectedLead, setSelectedLead] = useState<any>(null);

  return (
    <div className="space-y-12 pb-24 relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Growth Intelligence
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Relationship Pipeline
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-white border border-viiu-slate/5 rounded-sm flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Weighted Pipeline</span>
              <span className="text-sm font-bold text-viiu-graphite">$2.42M</span>
            </div>
            <div className="w-[1px] h-8 bg-viiu-slate/10" />
            <div className="flex flex-col">
              <span className="text-[8px] tracking-widest uppercase text-viiu-slate/40">Goal Tracking</span>
              <span className="text-sm font-bold text-green-600">112%</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Opportunity
          </button>
        </div>
      </div>

      {/* CRM Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Deals", value: "42", icon: Target },
          { label: "Win Rate", value: "64%", icon: TrendingUp },
          { label: "Avg. Cycle", value: "24 Days", icon: Clock },
          { label: "Lead Velocity", value: "+12.5%", icon: Zap },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white border border-viiu-slate/5 rounded-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-viiu-stone rounded-sm">
                <stat.icon className="w-4 h-4 text-viiu-graphite" />
              </div>
            </div>
            <p className="text-[9px] tracking-widest uppercase font-bold text-viiu-slate/40 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-light text-viiu-graphite">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {['Discovery', 'Specification', 'Quoting', 'Proposal'].map((stage, i) => (
          <div key={stage} className="space-y-8">
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.3em] uppercase font-black text-viiu-graphite">{stage}</span>
                <span className="text-[10px] text-viiu-slate/20 font-bold">({leads.filter(l => l.stage === stage).length})</span>
              </div>
              <div className="w-12 h-[1px] bg-viiu-slate/5" />
            </div>
            
            <div className="space-y-4">
              {leads.filter(l => l.stage === stage).map((lead, idx) => (
                <motion.div
                  key={lead.id}
                  layoutId={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 bg-white border border-viiu-slate/5 rounded-sm hover:border-viiu-aluminum/40 transition-all cursor-pointer group shadow-sm hover:shadow-2xl hover:translate-y-[-4px] duration-500"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className={`text-[8px] px-3 py-1 rounded-full tracking-widest font-black uppercase ${
                      lead.status === 'Hot' ? 'bg-orange-100 text-orange-600' :
                      lead.status === 'New' ? 'bg-blue-100 text-blue-600' :
                      'bg-viiu-stone text-viiu-slate/40'
                    }`}>
                      {lead.status}
                    </span>
                    <span className="text-sm font-bold text-viiu-graphite">{lead.value}</span>
                  </div>
                  
                  <h4 className="text-lg font-light text-viiu-graphite group-hover:text-viiu-aluminum transition-colors mb-2">{lead.name}</h4>
                  <p className="text-[11px] text-viiu-slate/40 mb-6">{lead.contact}</p>
                  
                  <div className="space-y-3">
                     <div className="flex justify-between text-[8px] tracking-widest uppercase font-bold text-viiu-slate/30">
                        <span>Win Probability</span>
                        <span>{lead.prob}%</span>
                     </div>
                     <div className="w-full h-[2px] bg-viiu-stone rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${lead.prob}%` }}
                           className="h-full bg-viiu-graphite"
                        />
                     </div>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-viiu-slate/5">
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full bg-viiu-graphite border-4 border-white flex items-center justify-center text-[8px] font-bold text-white">MV</div>
                      <div className="w-8 h-8 rounded-full bg-viiu-stone border-4 border-white flex items-center justify-center text-[8px] font-bold">JW</div>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] text-viiu-slate/30 font-bold tracking-widest uppercase">
                      <Clock className="w-3 h-3" />
                      {lead.date}
                    </div>
                  </div>
                </motion.div>
              ))}
              <button className="w-full py-6 border-2 border-dashed border-viiu-slate/5 rounded-sm text-viiu-slate/20 hover:border-viiu-slate/20 hover:text-viiu-slate/40 transition-all flex items-center justify-center gap-3">
                <Plus className="w-4 h-4" />
                <span className="text-[9px] tracking-[0.3em] uppercase font-black">Add Opportunity</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Detail Drawer (Overlay) */}
      <AnimatePresence>
        {selectedLead && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="fixed inset-0 bg-viiu-graphite/40 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl z-[101] overflow-y-auto custom-scrollbar"
            >
              <div className="p-12">
                <div className="flex justify-between items-start mb-16">
                   <button 
                    onClick={() => setSelectedLead(null)}
                    className="p-3 hover:bg-viiu-stone rounded-sm transition-colors"
                   >
                     <ChevronRight className="w-5 h-5 rotate-180" />
                   </button>
                   <div className="flex gap-4">
                      <button className="p-3 hover:bg-viiu-stone rounded-sm"><Mail className="w-5 h-5" /></button>
                      <button className="p-3 hover:bg-viiu-stone rounded-sm"><Phone className="w-5 h-5" /></button>
                      <button className="px-6 py-3 bg-viiu-graphite text-white text-[10px] tracking-widest uppercase font-bold rounded-sm">Generate Proposal</button>
                   </div>
                </div>

                <div className="space-y-12">
                   <div>
                      <div className="flex items-center gap-4 mb-4">
                        <Building className="w-6 h-6 text-viiu-aluminum" />
                        <span className="text-[10px] tracking-[0.4em] uppercase font-black text-viiu-aluminum">Lead Record</span>
                      </div>
                      <h2 className="text-5xl font-light tracking-tight text-viiu-graphite mb-4">{selectedLead.name}</h2>
                      <p className="text-xl text-viiu-slate/40 font-light">Lead Specification Phase</p>
                   </div>

                   <div className="grid grid-cols-3 gap-8 py-10 border-y border-viiu-slate/5">
                      <div>
                        <p className="text-[9px] tracking-widest uppercase font-bold text-viiu-slate/40 mb-2">Deal Value</p>
                        <p className="text-2xl font-light text-viiu-graphite">{selectedLead.value}</p>
                      </div>
                      <div>
                        <p className="text-[9px] tracking-widest uppercase font-bold text-viiu-slate/40 mb-2">Win Probability</p>
                        <p className="text-2xl font-light text-viiu-graphite">{selectedLead.prob}%</p>
                      </div>
                      <div>
                        <p className="text-[9px] tracking-widest uppercase font-bold text-viiu-slate/40 mb-2">Sales Rep</p>
                        <p className="text-2xl font-light text-viiu-graphite">Marcus V.</p>
                      </div>
                   </div>

                   <div className="space-y-8">
                      <h3 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Activity Timeline</h3>
                      <div className="relative space-y-12">
                        <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-viiu-stone" />
                        {[
                          { type: 'spec', title: 'Architectural Spec Received', date: 'Yesterday, 2:14 PM', note: 'Aluminum 6063 T6 requirements confirmed.' },
                          { type: 'call', title: 'Preliminary Briefing', date: '2 days ago', note: 'Discussed high-rise window ventilation logic.' },
                          { type: 'quote', title: 'Initial Budget Quote', date: '3 days ago', note: 'Quote #QT-9921 sent for $240k.' },
                        ].map((act, i) => (
                          <div key={i} className="relative pl-12">
                            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border border-viiu-graphite flex items-center justify-center z-10">
                              <div className="w-2 h-2 bg-viiu-graphite rounded-full" />
                            </div>
                            <div>
                               <div className="flex justify-between items-center mb-2">
                                  <h4 className="text-sm font-bold text-viiu-graphite">{act.title}</h4>
                                  <span className="text-[9px] tracking-widest uppercase font-bold text-viiu-slate/30">{act.date}</span>
                               </div>
                               <p className="text-sm text-viiu-slate/40 font-light leading-relaxed">{act.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
