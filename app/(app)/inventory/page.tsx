"use client";

import { motion } from "framer-motion";
import { 
  Box, 
  Search, 
  Plus, 
  ArrowRight, 
  Package, 
  Truck, 
  AlertCircle,
  Warehouse,
  BarChart,
  History,
  Scan
} from "lucide-react";

const inventory = [
  { id: "MAT-101", name: "Aluminum Extrusion - 6063 T6", category: "Raw Material", stock: 1240, unit: "m", status: "Low Stock", reorder: 2000 },
  { id: "GLS-404", name: "Insulated Glass (Double Glaze)", category: "Glass", stock: 320, unit: "Units", status: "Optimal", reorder: 500 },
  { id: "HDW-701", name: "Concealed Hinge System", category: "Hardware", stock: 840, unit: "Pcs", status: "Optimal", reorder: 1000 },
  { id: "SLR-202", name: "Structural Silicone (Black)", category: "Consumables", stock: 12, unit: "Cases", status: "Critical", reorder: 50 },
];

export default function InventoryPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Asset Intelligence
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Inventory Ecosystem
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white border border-viiu-slate/10 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-stone transition-colors rounded-sm flex items-center gap-2">
            <Scan className="w-4 h-4" />
            Barcode Mode
          </button>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Receive Stock
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Asset Value", value: "$1.4M", icon: Warehouse, color: "text-viiu-graphite" },
          { label: "Active SKUs", value: "842", icon: Package, color: "text-viiu-graphite" },
          { label: "In-Transit", value: "12 Orders", icon: Truck, color: "text-blue-500" },
          { label: "Critical Shortage", value: "4 Items", icon: AlertCircle, color: "text-red-500" },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white border border-viiu-slate/5 rounded-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-viiu-stone rounded-sm">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-light text-viiu-graphite">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white border border-viiu-slate/5 rounded-sm overflow-hidden">
        <div className="p-6 border-b border-viiu-slate/5 bg-viiu-stone/30 flex justify-between items-center">
          <h2 className="text-[11px] tracking-[0.3em] uppercase font-black text-viiu-graphite">Stock Register</h2>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-viiu-slate/30" />
            <input type="text" placeholder="Search SKU..." className="h-9 bg-white border border-viiu-slate/10 rounded-sm pl-9 pr-4 text-[10px] tracking-widest uppercase outline-none focus:ring-1 focus:ring-viiu-graphite" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-viiu-slate/5">
                <th className="px-8 py-4 text-[9px] tracking-[0.2em] uppercase font-black text-viiu-slate/40">SKU</th>
                <th className="px-8 py-4 text-[9px] tracking-[0.2em] uppercase font-black text-viiu-slate/40">Description</th>
                <th className="px-8 py-4 text-[9px] tracking-[0.2em] uppercase font-black text-viiu-slate/40">Category</th>
                <th className="px-8 py-4 text-[9px] tracking-[0.2em] uppercase font-black text-viiu-slate/40">Stock Level</th>
                <th className="px-8 py-4 text-[9px] tracking-[0.2em] uppercase font-black text-viiu-slate/40">Status</th>
                <th className="px-8 py-4 text-[9px] tracking-[0.2em] uppercase font-black text-viiu-slate/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, i) => (
                <tr key={i} className="border-b border-viiu-slate/5 last:border-b-0 hover:bg-viiu-stone/20 transition-colors">
                  <td className="px-8 py-6 text-[10px] font-bold tracking-widest text-viiu-graphite">{item.id}</td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-medium text-viiu-graphite">{item.name}</p>
                  </td>
                  <td className="px-8 py-6 text-[10px] tracking-widest uppercase text-viiu-slate/40">{item.category}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-viiu-graphite">{item.stock} {item.unit}</span>
                      <div className="w-24 h-1 bg-viiu-slate/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.stock / item.reorder) * 100}%` }}
                          className={`h-full ${item.status === 'Critical' ? 'bg-red-500' : item.status === 'Low Stock' ? 'bg-amber-500' : 'bg-viiu-graphite'}`}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[8px] tracking-widest uppercase font-black ${
                      item.status === 'Optimal' ? 'bg-green-100 text-green-700' :
                      item.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-[9px] tracking-widest uppercase font-black text-viiu-graphite hover:text-viiu-aluminum transition-colors">Adjust</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-viiu-slate/5 rounded-sm">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-5 h-5 text-viiu-aluminum" />
            <h2 className="text-[11px] tracking-[0.3em] uppercase font-bold text-viiu-graphite">Movement History</h2>
          </div>
          <div className="space-y-6">
            {[
              { type: 'Receive', item: 'ALU-6063 T6', qty: '+500m', time: '1h ago', user: 'System' },
              { type: 'Allocation', item: 'GLS-404', qty: '-12 Units', time: '3h ago', user: 'CNC-01' },
              { type: 'Adjustment', item: 'SLR-202', qty: '-2 Cases', time: 'Yesterday', user: 'Marcus Viiu' },
            ].map((move, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-viiu-stone/20 rounded-sm">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${move.type === 'Receive' ? 'bg-green-500' : 'bg-viiu-slate'}`} />
                  <div>
                    <p className="text-[11px] font-bold text-viiu-graphite uppercase tracking-widest">{move.item}</p>
                    <p className="text-[9px] text-viiu-slate/40 mt-1">{move.type} by {move.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-bold ${move.type === 'Receive' ? 'text-green-600' : 'text-viiu-graphite'}`}>{move.qty}</p>
                  <p className="text-[8px] tracking-widest uppercase text-viiu-slate/40">{move.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-viiu-graphite text-viiu-stone rounded-sm">
          <div className="flex items-center gap-3 mb-8">
            <BarChart className="w-5 h-5 text-viiu-aluminum" />
            <h2 className="text-[11px] tracking-[0.3em] uppercase font-bold text-viiu-aluminum">Supply Optimization</h2>
          </div>
          <p className="text-sm font-light text-white/40 mb-8 leading-relaxed">
            AI-driven forecasting predicts a 15% increase in aluminum demand for Q3 based on active CRM quotes.
          </p>
          <div className="space-y-4">
            <button className="w-full py-4 bg-white/5 border border-white/10 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all text-viiu-stone">
              Generate Procurement Plan
            </button>
            <button className="w-full py-4 border border-white/5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/5 transition-all text-white/40">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
