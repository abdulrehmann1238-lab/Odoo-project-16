"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Search, 
  Filter, 
  Plus, 
  ExternalLink,
  ChevronRight,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Package,
  Globe,
  Truck
} from "lucide-react";

const pos = [
  { id: "PO-7721", supplier: "AluPro Systems", items: "Aluminum 6063 T6", value: "$42,400", status: "Delivered", date: "May 10" },
  { id: "PO-7728", supplier: "Guardian Glass", items: "Laminated Double Glaze", value: "$18,500", status: "In Transit", date: "May 14" },
  { id: "PO-7735", supplier: "Assa Abloy", items: "Stainless Hinge Sets", value: "$8,200", status: "Processing", date: "May 18" },
  { id: "PO-7740", supplier: "Sika Canada", items: "Structural Sealants", value: "$4,100", status: "Pending", date: "May 22" },
];

export default function SuppliersPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Supply Chain Intelligence
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Suppliers & POs
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white border border-viiu-slate/5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-stone transition-colors rounded-sm flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Audit Log
          </button>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Purchase Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { label: "Total PO Value (MTD)", value: "$142.4k", icon: FileText },
          { label: "Active Suppliers", value: "24", icon: Building2 },
          { label: "Average Lead Time", value: "14 Days", icon: Clock },
          { label: "On-Time Delivery", value: "94.2%", icon: Truck },
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

      <div className="bg-white border border-viiu-slate/5 rounded-sm overflow-hidden shadow-sm">
         <div className="p-8 border-b border-viiu-slate/5 bg-viiu-stone/30 flex justify-between items-center">
            <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Purchase Order Register</h2>
            <div className="flex gap-4">
               <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-viiu-slate/30" />
                  <input type="text" placeholder="PO ID..." className="h-10 bg-white border border-viiu-slate/10 rounded-sm pl-10 pr-4 text-[10px] tracking-widest uppercase outline-none focus:border-viiu-graphite transition-all" />
               </div>
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-viiu-slate/5">
                     <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Reference</th>
                     <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Supplier</th>
                     <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Item Description</th>
                     <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Value</th>
                     <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Status</th>
                     <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40 text-right">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {pos.map((po, i) => (
                     <tr key={i} className="border-b border-viiu-slate/5 last:border-b-0 hover:bg-viiu-stone/20 transition-all group">
                        <td className="px-8 py-6">
                           <span className="text-[11px] font-black tracking-widest text-viiu-graphite">{po.id}</span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-viiu-stone rounded-sm flex items-center justify-center">
                                 <Building2 className="w-4 h-4 text-viiu-slate/30" />
                              </div>
                              <span className="text-sm font-medium text-viiu-graphite">{po.supplier}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-[11px] text-viiu-slate/40">{po.items}</span>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-sm font-bold text-viiu-graphite">{po.value}</span>
                        </td>
                        <td className="px-8 py-6">
                           <span className={`px-3 py-1 rounded-full text-[8px] tracking-widest uppercase font-black ${
                              po.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                              po.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                              'bg-viiu-stone text-viiu-slate/40'
                           }`}>
                              {po.status}
                           </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                           <button className="p-2 hover:bg-viiu-graphite hover:text-white rounded-sm transition-all">
                              <ExternalLink className="w-4 h-4" />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm">
            <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite mb-10">Strategic Suppliers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { name: "AluPro Systems", type: "Raw Materials", rating: 9.8, location: "Toronto, CA" },
                 { name: "Guardian Glass", type: "Glazing", rating: 9.4, location: "Global" },
               ].map((sup, i) => (
                  <div key={i} className="p-6 border border-viiu-slate/10 rounded-sm group hover:border-viiu-graphite transition-all">
                     <div className="flex justify-between items-start mb-4">
                        <Globe className="w-5 h-5 text-viiu-slate/20 group-hover:text-viiu-graphite transition-colors" />
                        <span className="text-xl font-light">{sup.rating}</span>
                     </div>
                     <h4 className="text-sm font-bold text-viiu-graphite mb-1">{sup.name}</h4>
                     <p className="text-[10px] tracking-widest uppercase text-viiu-slate/40">{sup.location}</p>
                  </div>
               ))}
            </div>
         </div>

         <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm">
            <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum mb-10">Inventory Alerts</h2>
            <div className="space-y-6">
               {[
                 { item: "Aluminum 6063-T6", status: "Critical", stock: "240m", reorder: "2000m" },
                 { item: "Double Glaze Units", status: "Low", stock: "45 Units", reorder: "100 Units" },
               ].map((alert, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-sm">
                     <div>
                        <p className="text-sm font-bold text-white mb-1">{alert.item}</p>
                        <p className="text-[9px] tracking-widest uppercase text-viiu-aluminum/40">Current: {alert.stock} • Target: {alert.reorder}</p>
                     </div>
                     <span className={`text-[8px] px-2 py-0.5 rounded-full uppercase font-black tracking-widest ${alert.status === 'Critical' ? 'bg-red-500 text-white' : 'bg-amber-500 text-viiu-graphite'}`}>
                        {alert.status}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
