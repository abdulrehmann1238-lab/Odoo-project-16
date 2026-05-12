"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  ChevronRight, 
  PieChart, 
  BarChart, 
  TrendingUp,
  ShieldCheck,
  Calendar,
  Share2,
  Mail,
  MoreHorizontal
} from "lucide-react";

const reports = [
  { id: "REP-2026-Q2-01", name: "Quarterly Revenue Forecast", category: "Financial", author: "Frankie V.", date: "May 12, 2026", status: "Published" },
  { id: "REP-2026-Q2-02", name: "Manufacturing Yield Audit", category: "Operations", author: "Sarah J.", date: "May 10, 2026", status: "Published" },
  { id: "REP-2026-Q2-03", name: "Installation Efficiency - GTA", category: "Field Force", author: "John W.", date: "May 08, 2026", status: "Archived" },
  { id: "REP-2026-Q2-04", name: "Lead Attribution Analysis", category: "Sales", author: "Marcus V.", date: "May 05, 2026", status: "Draft" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Enterprise Reporting
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Executive Reports Hub
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white border border-viiu-slate/5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-stone transition-colors rounded-sm flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule Report
          </button>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2 shadow-2xl">
            <PieChart className="w-4 h-4" />
            Generate New Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-viiu-slate/5 rounded-sm overflow-hidden shadow-sm">
               <div className="p-8 border-b border-viiu-slate/5 bg-viiu-stone/30 flex justify-between items-center">
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Report Inventory</h2>
                  <div className="flex gap-4">
                     <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-viiu-slate/30" />
                        <input type="text" placeholder="Search reports..." className="h-10 bg-white border border-viiu-slate/10 rounded-sm pl-10 pr-4 text-[10px] tracking-widest uppercase outline-none focus:border-viiu-graphite transition-all" />
                     </div>
                  </div>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-viiu-slate/5">
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Report Name</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Category</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Author</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Date</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        {reports.map((rep, i) => (
                           <tr key={i} className="border-b border-viiu-slate/5 last:border-b-0 hover:bg-viiu-stone/20 transition-all group">
                              <td className="px-8 py-6">
                                 <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-viiu-stone flex items-center justify-center rounded-sm">
                                       <FileText className="w-4 h-4 text-viiu-slate/40 group-hover:text-viiu-graphite transition-colors" />
                                    </div>
                                    <div>
                                       <span className="text-sm font-medium text-viiu-graphite">{rep.name}</span>
                                       <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40 font-bold mt-1">{rep.id}</p>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-8 py-6">
                                 <span className="text-[10px] tracking-widest uppercase font-black text-viiu-slate/40">{rep.category}</span>
                              </td>
                              <td className="px-8 py-6">
                                 <span className="text-sm text-viiu-graphite">{rep.author}</span>
                              </td>
                              <td className="px-8 py-6">
                                 <span className="text-[10px] font-bold text-viiu-slate/40">{rep.date}</span>
                              </td>
                              <td className="px-8 py-6 text-right">
                                 <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 hover:bg-viiu-stone rounded-sm"><Download className="w-4 h-4 text-viiu-slate/40" /></button>
                                    <button className="p-2 hover:bg-viiu-stone rounded-sm"><Share2 className="w-4 h-4 text-viiu-slate/40" /></button>
                                    <button className="p-2 hover:bg-viiu-stone rounded-sm"><MoreHorizontal className="w-4 h-4 text-viiu-slate/40" /></button>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         <div className="space-y-8">
            <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm overflow-hidden group shadow-2xl">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum mb-10">Automated Briefings</h2>
               <div className="space-y-8">
                  {[
                    { title: "Weekly Ops Brief", time: "Every Monday, 8:00 AM", status: "Active" },
                    { title: "Quarterly Board Report", time: "Last Friday of Quarter", status: "Active" },
                  ].map((b, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-sm">
                       <p className="text-[10px] font-black tracking-widest uppercase text-white mb-2">{b.title}</p>
                       <p className="text-[11px] text-white/40 leading-relaxed font-light">{b.time}</p>
                       <div className="flex items-center gap-2 mt-4">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span className="text-[8px] tracking-widest uppercase font-bold text-viiu-aluminum">{b.status}</span>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-12 py-4 bg-white/5 border border-white/10 text-[9px] tracking-[0.4em] uppercase font-black hover:bg-white/10 transition-all text-viiu-aluminum">
                  Configure Briefings
               </button>
            </div>

            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
               <div className="flex items-center gap-4 mb-10">
                  <ShieldCheck className="w-6 h-6 text-viiu-aluminum" />
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Audit Compliance</h2>
               </div>
               <div className="space-y-8">
                  <div className="p-6 bg-viiu-stone/30 rounded-sm">
                     <p className="text-[10px] font-black tracking-widest uppercase text-viiu-graphite mb-2">SOC2 Type II</p>
                     <p className="text-[11px] text-viiu-slate/40 leading-relaxed">System logs verified and archived. Next audit in 142 days.</p>
                  </div>
                  <div className="p-6 bg-viiu-stone/30 rounded-sm">
                     <p className="text-[10px] font-black tracking-widest uppercase text-viiu-graphite mb-2">ISO 9001:2015</p>
                     <p className="text-[11px] text-viiu-slate/40 leading-relaxed">Quality management system reporting active across all fabrication nodes.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
