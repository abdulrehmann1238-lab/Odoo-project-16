"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Shield, Lock, User, Building2, ArrowRight, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate luxury auth transition
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-viiu-graphite flex items-center justify-center p-6 overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#a8a29e_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#57534e_0%,transparent_50%)]" />
      </div>

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="login-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full max-w-md relative z-10"
          >
            <div className="bg-white p-12 rounded-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-viiu-slate/10 mb-8">
                  <Shield className="w-8 h-8 text-viiu-graphite stroke-[1]" />
                </div>
                <h1 className="text-2xl font-light tracking-[0.2em] uppercase text-viiu-graphite mb-2">Viiu OS</h1>
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-viiu-slate/40">Secure Enterprise Access</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-6">
                  <div className="relative group">
                    <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40 mb-2 block transition-colors group-focus-within:text-viiu-graphite">
                      Company Context
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-viiu-slate/20" />
                      <input 
                        type="text" 
                        readOnly 
                        value="Viiu Windows & Doors" 
                        className="w-full bg-transparent border-b border-viiu-slate/10 py-3 pl-8 text-sm text-viiu-graphite outline-none cursor-default font-medium"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40 mb-2 block transition-colors group-focus-within:text-viiu-graphite">
                      Identity
                    </label>
                    <div className="relative">
                      <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-viiu-slate/20" />
                      <input 
                        type="text" 
                        readOnly 
                        value="frankie@viiu.os" 
                        className="w-full bg-transparent border-b border-viiu-slate/10 py-3 pl-8 text-sm text-viiu-graphite outline-none cursor-default font-medium"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40 mb-2 block transition-colors group-focus-within:text-viiu-graphite">
                      Access Credential
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-viiu-slate/20" />
                      <input 
                        type="password" 
                        readOnly 
                        value="••••••••••••" 
                        className="w-full bg-transparent border-b border-viiu-slate/10 py-3 pl-8 text-sm text-viiu-graphite outline-none cursor-default font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-viiu-slate/20 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-viiu-graphite" />
                    </div>
                    <span className="text-[9px] tracking-widest uppercase font-bold text-viiu-slate/40">Trust this workstation</span>
                  </div>
                  <a href="#" className="text-[9px] tracking-widest uppercase font-bold text-viiu-aluminum hover:text-viiu-graphite transition-colors">Request Reset</a>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-16 bg-viiu-graphite text-viiu-stone relative overflow-hidden group disabled:opacity-80 transition-all"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Initialize Session</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-viiu-slate scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
              </form>
            </div>

            <div className="mt-12 flex justify-between items-center text-[8px] tracking-[0.5em] uppercase font-bold text-viiu-stone/20">
              <span>Security Node: ON-772</span>
              <div className="w-12 h-[1px] bg-white/10" />
              <span>TLS 1.3 Encryption</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-12 text-viiu-stone relative z-10"
          >
            <div className="relative w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-viiu-stone stroke-[1]">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  d="M20,20 L80,20 L80,80 L20,80 Z"
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  d="M30,50 L45,65 L70,35"
                />
              </svg>
            </div>
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-light tracking-[0.3em] uppercase">Authenticated</h2>
              <p className="text-[10px] tracking-[0.4em] uppercase text-viiu-aluminum font-bold">Initializing Executive Workspace...</p>
            </div>
            <div className="w-64 h-0.5 bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-viiu-aluminum"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
