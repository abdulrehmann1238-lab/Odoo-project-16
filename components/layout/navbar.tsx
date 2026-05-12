"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 h-20 bg-viiu-stone/80 backdrop-blur-md border-b border-viiu-slate/5"
    >
      <div className="flex items-center gap-12">
        <Link href="/" className="text-xl font-light tracking-[0.2em] uppercase">
          Viiu OS
        </Link>
        <div className="hidden md:flex gap-8 text-[10px] tracking-[0.3em] uppercase font-semibold text-viiu-slate/60">
          <a href="#workflow" className="hover:text-viiu-graphite transition-colors">Workflow</a>
          <a href="#features" className="hover:text-viiu-graphite transition-colors">Intelligence</a>
          <a href="#modules" className="hover:text-viiu-graphite transition-colors">Modules</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link 
          href="/auth/login"
          className="px-6 py-2 border border-viiu-graphite/10 text-viiu-graphite text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-viiu-graphite/5 transition-all rounded-sm"
        >
          Partner Login
        </Link>
        <Link 
          href="/dashboard"
          className="px-6 py-2 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-viiu-slate transition-all rounded-sm"
        >
          Launch Platform
        </Link>
      </div>
    </motion.nav>
  );
}
