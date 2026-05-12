"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  Box, 
  Factory, 
  Calendar, 
  FileText, 
  CreditCard, 
  Warehouse,
  UserCheck,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "CRM Pipeline", href: "/crm" },
  { icon: Box, label: "Projects", href: "/projects" },
  { icon: Factory, label: "Manufacturing", href: "/manufacturing" },
  { icon: Calendar, label: "Installation", href: "/installation" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: CreditCard, label: "Finance", href: "/finance" },
  { icon: Warehouse, label: "Inventory", href: "/inventory" },
  { icon: UserCheck, label: "HR / Teams", href: "/hr" },
];

export function AppSidebar({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: isOpen ? 280 : 80 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="h-screen bg-viiu-graphite text-viiu-stone flex flex-col relative z-50 overflow-hidden"
    >
      <div className="h-20 flex items-center px-6 border-b border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 border border-viiu-aluminum flex items-center justify-center">
            <span className="text-[10px] font-light">V</span>
          </div>
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-light tracking-[0.2em] uppercase"
            >
              Viiu OS
            </motion.span>
          )}
        </Link>
      </div>

      <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`
                relative flex items-center h-12 rounded-sm transition-all duration-300 group
                ${isActive ? 'bg-white/5 text-white' : 'text-viiu-stone/40 hover:text-viiu-stone hover:bg-white/5'}
              `}
            >
              <div className="w-12 h-12 flex items-center justify-center flex-none">
                <item.icon className={`w-5 h-5 ${isActive ? 'stroke-[2px]' : 'stroke-[1.2px]'}`} />
              </div>
              {isOpen && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[11px] tracking-[0.2em] uppercase font-bold"
                >
                  {item.label}
                </motion.span>
              )}
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute left-0 w-1 h-6 bg-viiu-aluminum rounded-r-full"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <Link 
          href="/settings"
          className="flex items-center h-12 text-viiu-stone/40 hover:text-viiu-stone group transition-colors"
        >
          <div className="w-12 h-12 flex items-center justify-center flex-none">
            <Settings className="w-5 h-5 stroke-[1.2px]" />
          </div>
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] tracking-[0.2em] uppercase font-bold"
            >
              Settings
            </motion.span>
          )}
        </Link>
        
        <button 
          onClick={toggle}
          className="mt-4 w-full h-8 flex items-center justify-center hover:bg-white/5 transition-colors rounded-sm text-viiu-stone/20"
        >
          {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
    </motion.aside>
  );
}
