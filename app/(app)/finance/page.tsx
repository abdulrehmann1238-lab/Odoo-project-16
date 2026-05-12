"use client";

import { motion } from "framer-motion";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  FileText, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  Filter,
  Search,
  Calendar,
  Wallet
} from "lucide-react";

const invoices = [
  { id: "INV-9921", client: "Sterling Homes", project: "Oakville Estate", amount: "$84,200", status: "Paid", date: "May 10" },
  { id: "INV-9925", client: "Tridel Group", project: "Waterfront Condo", amount: "$124,000", status: "Overdue", date: "May 02" },
  { id: "INV-9928", client: "Private Client", project: "Muskoka Retreat", amount: "$18,500", status: "Partial", date: "May 12" },
  { id: "INV-9930", client: "Vaughan Corp", project: "Business Center", amount: "$45,000", status: "Draft", date: "May 18" },
];

export default function FinancePage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Revenue Intelligence
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Financial Ledger
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white border border-viiu-slate/5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-stone transition-colors rounded-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export ERP Data
          </button>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2 shadow-xl">
            <PieChart className="w-4 h-4" />
            Revenue Forecast
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Total Revenue (Q2)", value: "$4.24M", change: "+12.4%", positive: true, icon: TrendingUp },
          { label: "Accounts Receivable", value: "$842k", change: "-2.1%", positive: false, icon: Clock },
          { label: "Cash on Hand", value: "$1.82M", change: "+4.5%", positive: true, icon: Wallet },
        ].map((stat, i) => (
          <div key={i} className="p-10 bg-white border border-viiu-slate/5 rounded-sm">
            <div className="flex justify-between items-start mb-10">
              <div className="p-3 bg-viiu-stone rounded-sm text-viiu-graphite">
                <stat.icon className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-black tracking-widest uppercase ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
                {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40 mb-1">{stat.label}</p>
            <h3 className="text-4xl font-light text-viiu-graphite">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 p-10 bg-white border border-viiu-slate/5 rounded-sm">
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Invoice Register</h2>
               <div className="flex gap-4">
                  <div className="relative group">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-viiu-slate/30" />
                     <input type="text" placeholder="Search Invoices..." className="h-10 bg-viiu-stone/30 border-none rounded-sm pl-10 pr-4 text-[10px] tracking-widest uppercase outline-none" />
                  </div>
               </div>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-viiu-slate/5">
                        <th className="px-4 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Invoice</th>
                        <th className="px-4 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Entity</th>
                        <th className="px-4 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Project</th>
                        <th className="px-4 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Amount</th>
                        <th className="px-4 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {invoices.map((inv, i) => (
                        <tr key={i} className="border-b border-viiu-slate/5 last:border-b-0 hover:bg-viiu-stone/20 transition-all">
                           <td className="px-4 py-6">
                              <span className="text-[11px] font-black tracking-widest text-viiu-graphite">{inv.id}</span>
                           </td>
                           <td className="px-4 py-6">
                              <span className="text-sm font-medium text-viiu-graphite">{inv.client}</span>
                           </td>
                           <td className="px-4 py-6">
                              <span className="text-[10px] tracking-widest uppercase text-viiu-slate/40">{inv.project}</span>
                           </td>
                           <td className="px-4 py-6">
                              <span className="text-sm font-bold text-viiu-graphite">{inv.amount}</span>
                           </td>
                           <td className="px-4 py-6">
                              <span className={`px-3 py-1 rounded-full text-[8px] tracking-widest uppercase font-black ${
                                 inv.status === 'Paid' ? 'bg-green-100 text-green-700' :
                                 inv.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                                 'bg-viiu-stone text-viiu-slate/40'
                              }`}>
                                 {inv.status}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         <div className="space-y-8">
            <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm overflow-hidden group">
               <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum mb-10">Cash Flow Forecast</h2>
               <div className="space-y-12">
                  {[
                    { label: "Expected Inflow (30d)", val: "$420,000", bar: 85 },
                    { label: "Projected Outflow (30d)", val: "$210,000", bar: 40 },
                  ].map((f, i) => (
                    <div key={i} className="space-y-4">
                       <div className="flex justify-between items-end">
                          <span className="text-[9px] tracking-widest uppercase text-white/40">{f.label}</span>
                          <span className="text-xl font-light">{f.val}</span>
                       </div>
                       <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${f.bar}%` }} className="h-full bg-viiu-aluminum" />
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-16 py-4 bg-white/5 border border-white/10 text-[9px] tracking-[0.4em] uppercase font-black hover:bg-white/10 transition-all text-viiu-aluminum">
                  Detailed Forecast
               </button>
            </div>

            <div className="p-10 bg-white border border-viiu-slate/5 rounded-sm">
               <div className="flex items-center gap-4 mb-8">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Financial Alerts</h2>
               </div>
               <div className="space-y-6">
                  <div className="p-5 bg-amber-50/50 border border-amber-100 rounded-sm">
                     <p className="text-[10px] font-black text-amber-800 uppercase tracking-widest mb-1">Aging Receivable</p>
                     <p className="text-[11px] text-amber-700 leading-relaxed">Tridel Group has 2 invoices older than 45 days. Total exposure: $242,000.</p>
                  </div>
                  <div className="p-5 bg-viiu-stone/30 rounded-sm">
                     <p className="text-[10px] font-black text-viiu-graphite uppercase tracking-widest mb-1">Tax Provisioning</p>
                     <p className="text-[11px] text-viiu-slate/40 leading-relaxed">Quarterly HST filing due in 12 days. Estimated provision: $84,200.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
