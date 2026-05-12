"use client";

import { Bell, Search, User, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function AppTopbar() {
  return (
    <header className="h-20 bg-white border-b border-viiu-slate/5 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8 flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-viiu-slate/30 group-focus-within:text-viiu-graphite transition-colors" />
          <input 
            type="text" 
            placeholder="Search projects, fabrication orders, or documents..." 
            className="w-full h-11 bg-viiu-stone/50 border-none rounded-sm pl-12 text-[11px] tracking-widest uppercase font-medium focus:ring-1 focus:ring-viiu-graphite transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-viiu-stone rounded-sm">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-viiu-graphite">AI: Connected</span>
        </div>

        <button className="relative w-10 h-10 flex items-center justify-center hover:bg-viiu-stone transition-colors rounded-sm group">
          <Bell className="w-5 h-5 text-viiu-slate/60 group-hover:text-viiu-graphite transition-colors stroke-[1.5]" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-viiu-aluminum rounded-full border-2 border-white" />
        </button>

        <div className="w-[1px] h-8 bg-viiu-slate/10" />

        <div className="flex items-center gap-4 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-[11px] tracking-[0.1em] uppercase font-bold text-viiu-graphite">Marcus Viiu</p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-viiu-slate/40">Executive Admin</p>
          </div>
          <div className="w-10 h-10 bg-viiu-graphite rounded-sm flex items-center justify-center text-viiu-stone">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
