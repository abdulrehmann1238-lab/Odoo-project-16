"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Search, 
  Plus, 
  Folder, 
  File, 
  ExternalLink, 
  Clock, 
  ShieldCheck,
  Download,
  Share2,
  Trash2,
  Filter,
  Layers,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";

const recentFiles = [
  { name: "Yorkville_Phase2_Final.dwg", type: "CAD", size: "14.2 MB", author: "Julian T.", date: "2h ago" },
  { name: "AluPro_Spec_Sheet_V4.pdf", type: "PDF", size: "1.8 MB", author: "Sarah C.", date: "5h ago" },
  { name: "Site_Survey_Photos.zip", type: "ZIP", size: "45.1 MB", author: "Marcus V.", date: "Yesterday" },
  { name: "Financial_Forecast_Q2.xlsx", type: "XLSX", size: "4.2 MB", author: "Frankie V.", date: "2 days ago" },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Digital Asset Repository
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Document Vault
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white border border-viiu-slate/5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-stone transition-colors rounded-sm flex items-center gap-2">
            <Folder className="w-4 h-4" />
            New Folder
          </button>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2 shadow-2xl">
            <Plus className="w-4 h-4" />
            Upload Assets
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Assets", value: "2.4k", icon: FileText },
          { label: "CAD Repos", value: "142", icon: Layers },
          { label: "Encrypted Files", value: "100%", icon: ShieldCheck },
          { label: "Storage Used", value: "1.2 TB", icon: Database },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-viiu-slate/5 rounded-sm overflow-hidden shadow-sm">
               <div className="p-8 border-b border-viiu-slate/5 bg-viiu-stone/30 flex justify-between items-center">
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Active Repository</h2>
                  <div className="relative group">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-viiu-slate/30" />
                     <input type="text" placeholder="Search files..." className="h-10 bg-white border border-viiu-slate/10 rounded-sm pl-10 pr-4 text-[10px] tracking-widest uppercase outline-none focus:border-viiu-graphite transition-all" />
                  </div>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-viiu-slate/5">
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">File Name</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Type</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Size</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Author</th>
                           <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        {recentFiles.map((file, i) => (
                           <tr key={i} className="border-b border-viiu-slate/5 last:border-b-0 hover:bg-viiu-stone/20 transition-all group">
                              <td className="px-8 py-6">
                                 <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-viiu-stone flex items-center justify-center rounded-sm">
                                       <File className="w-4 h-4 text-viiu-slate/40 group-hover:text-viiu-graphite transition-colors" />
                                    </div>
                                    <span className="text-sm font-medium text-viiu-graphite">{file.name}</span>
                                 </div>
                              </td>
                              <td className="px-8 py-6">
                                 <span className="text-[10px] tracking-widest uppercase font-black text-viiu-slate/40">{file.type}</span>
                              </td>
                              <td className="px-8 py-6">
                                 <span className="text-[10px] font-bold text-viiu-slate/40">{file.size}</span>
                              </td>
                              <td className="px-8 py-6">
                                 <span className="text-sm text-viiu-graphite">{file.author}</span>
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
            <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm overflow-hidden group">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum mb-10">Smart Tags</h2>
               <div className="flex flex-wrap gap-3">
                  {['High-Rise', 'Aluminum 6063', 'Toronto Waterfront', 'Shop Drawings', 'Specifications', 'Contracts', 'Invoices'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/5 text-[9px] tracking-widest uppercase font-bold hover:bg-white/10 transition-all cursor-pointer">
                       {tag}
                    </span>
                  ))}
               </div>
               <button className="w-full mt-12 py-4 bg-white/5 border border-white/10 text-[9px] tracking-[0.4em] uppercase font-black hover:bg-white/10 transition-all text-viiu-aluminum">
                  Manage Metadata
               </button>
            </div>

            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-10">Version History</h2>
               <div className="space-y-8">
                  {[
                    { file: "Yorkville_Ph2", version: "V4.2", author: "Julian T.", time: "2h ago" },
                    { file: "AluPro_Spec", version: "V1.8", author: "Sarah C.", time: "5h ago" },
                    { file: "Site_Survey", version: "V2.0", author: "Marcus V.", time: "Yesterday" },
                  ].map((v, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-10 h-10 bg-viiu-stone rounded-sm flex items-center justify-center text-[8px] font-black">{v.version}</div>
                       <div>
                          <p className="text-sm font-bold text-viiu-graphite">{v.file}</p>
                          <p className="text-[9px] tracking-widest uppercase text-viiu-slate/40 font-bold mt-1">By {v.author} • {v.time}</p>
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
