"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Target, 
  Briefcase, 
  Hammer, 
  Truck, 
  FileText, 
  Database, 
  DollarSign, 
  Users, 
  BarChart3, 
  Bell, 
  MessageSquare, 
  Calendar, 
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Building2,
  Search,
  MoreHorizontal
} from "lucide-react";

const navigation = [
  { group: "Strategic", items: [
    { name: "Executive Hub", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Global Analytics", icon: BarChart3, href: "/analytics" },
    { name: "Intelligence", icon: Zap, href: "/ai" },
  ]},
  { group: "Operations", items: [
    { name: "CRM Pipeline", icon: Target, href: "/crm" },
    { name: "Projects Hub", icon: Briefcase, href: "/projects" },
    { name: "Manufacturing", icon: Hammer, href: "/manufacturing" },
    { name: "Installation", icon: Truck, href: "/installation" },
    { name: "Service Crews", icon: Users, href: "/crews" },
  ]},
  { group: "Resources", items: [
    { name: "Inventory", icon: Database, href: "/inventory" },
    { name: "Suppliers & POs", icon: Building2, href: "/suppliers" },
    { name: "Document Vault", icon: FileText, href: "/documents" },
  ]},
  { group: "Enterprise", items: [
    { name: "Financials", icon: DollarSign, href: "/finance" },
    { name: "Team & HR", icon: Users, href: "/hr" },
    { name: "Client Portal", icon: HelpCircle, href: "/portal" },
  ]}
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-viiu-stone overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 300 }}
        className="bg-viiu-graphite text-viiu-stone flex flex-col relative z-50 shadow-2xl"
      >
        <div className="h-24 flex items-center px-8 border-b border-white/5">
          <AnimatePresence mode="wait">
            {!collapsed ? (
              <motion.div
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 border border-viiu-aluminum/20 flex items-center justify-center">
                   <div className="w-2 h-2 bg-viiu-aluminum" />
                </div>
                <span className="text-xl font-light tracking-[0.2em] uppercase">Viiu OS</span>
              </motion.div>
            ) : (
              <motion.div key="logo-small" className="w-8 h-8 border border-viiu-aluminum/20 flex items-center justify-center mx-auto">
                 <div className="w-2 h-2 bg-viiu-aluminum" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar py-8 px-4 space-y-8">
          {navigation.map((group, i) => (
            <div key={i} className="space-y-2">
              {!collapsed && (
                <span className="px-4 text-[9px] tracking-[0.4em] uppercase font-black text-viiu-aluminum/20 mb-4 block">
                  {group.group}
                </span>
              )}
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-4 h-12 px-4 rounded-sm transition-all relative group ${
                      active ? 'bg-white/5 text-white' : 'text-viiu-stone/30 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 stroke-[1.5] ${active ? 'text-viiu-aluminum' : ''}`} />
                    {!collapsed && (
                      <span className="text-[10px] tracking-widest uppercase font-bold">{item.name}</span>
                    )}
                    {active && (
                      <motion.div 
                        layoutId="nav-active" 
                        className="absolute left-0 w-1 h-1/2 bg-viiu-aluminum"
                      />
                    )}
                    {collapsed && (
                       <div className="absolute left-20 bg-viiu-graphite px-4 py-2 text-[10px] tracking-widest uppercase font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-2xl border border-white/5">
                          {item.name}
                       </div>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="p-4 space-y-2 border-t border-white/5">
           <button className="w-full flex items-center gap-4 h-12 px-4 text-viiu-stone/30 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
              {!collapsed && <span className="text-[10px] tracking-widest uppercase font-bold">Settings</span>}
           </button>
           <button 
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center gap-4 h-12 px-4 text-viiu-stone/30 hover:text-white transition-colors"
           >
              {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              {!collapsed && <span className="text-[10px] tracking-widest uppercase font-bold">Collapse Menu</span>}
           </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-24 bg-white border-b border-viiu-slate/5 px-12 flex items-center justify-between relative z-40">
           <div className="flex items-center gap-8 flex-1">
              <div className="relative w-96 group">
                 <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-viiu-slate/20 transition-colors group-focus-within:text-viiu-graphite" />
                 <input 
                  type="text" 
                  placeholder="COMMAND + K TO SEARCH..." 
                  className="w-full bg-transparent py-2 pl-8 text-[10px] tracking-[0.3em] uppercase font-bold text-viiu-graphite outline-none"
                 />
              </div>
           </div>

           <div className="flex items-center gap-8">
              <div className="flex items-center gap-6 pr-8 border-r border-viiu-slate/5">
                 <div className="relative group">
                    <button className="relative p-2 text-viiu-slate/40 hover:text-viiu-graphite transition-colors">
                       <Bell className="w-5 h-5" />
                       <span className="absolute top-1 right-1 w-2 h-2 bg-viiu-graphite rounded-full border-2 border-white" />
                    </button>
                    {/* Floating Notification Peek */}
                    <div className="absolute top-12 right-0 w-80 bg-white border border-viiu-slate/10 shadow-2xl p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none group-hover:pointer-events-auto">
                       <h5 className="text-[10px] tracking-[0.3em] uppercase font-black text-viiu-graphite mb-6">Recent Alerts</h5>
                       <div className="space-y-6">
                          <div className="flex gap-4">
                             <div className="w-1.5 h-1.5 bg-viiu-graphite rounded-full mt-1.5" />
                             <p className="text-[11px] text-viiu-slate/40 leading-relaxed"><span className="text-viiu-graphite font-bold">Material Shortage:</span> Aluminum 6063-T6 under critical levels.</p>
                          </div>
                          <div className="flex gap-4">
                             <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5" />
                             <p className="text-[11px] text-viiu-slate/40 leading-relaxed"><span className="text-viiu-graphite font-bold">Site Update:</span> Yorkville site weather delay detected.</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <button className="p-2 text-viiu-slate/40 hover:text-viiu-graphite transition-colors">
                    <MessageSquare className="w-5 h-5" />
                 </button>
                 <button className="p-2 text-viiu-slate/40 hover:text-viiu-graphite transition-colors">
                    <Calendar className="w-5 h-5" />
                 </button>
              </div>

              <div className="flex items-center gap-4 pl-4 group cursor-pointer">
                 <div className="text-right">
                    <p className="text-[11px] font-black text-viiu-graphite uppercase tracking-tighter">Frankie Viiu</p>
                    <p className="text-[9px] text-viiu-slate/40 uppercase tracking-widest font-bold">Operations Director</p>
                 </div>
                 <div className="w-10 h-10 bg-viiu-graphite rounded-sm flex items-center justify-center text-viiu-stone text-xs font-bold ring-4 ring-viiu-stone group-hover:ring-viiu-aluminum/10 transition-all">
                    FV
                 </div>
              </div>
           </div>
        </header>

        {/* Viewport */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-viiu-stone p-12 relative">
           {/* Abstract Watermark */}
           <div className="fixed bottom-12 right-12 text-[10px] tracking-[0.8em] uppercase font-black text-viiu-slate/5 pointer-events-none">
              VIIU SYSTEMS • ENTERPRISE NODE ON-772
           </div>
           
           <div className="max-w-[1600px] mx-auto">
              {children}
           </div>
        </main>
      </div>
    </div>
  );
}
