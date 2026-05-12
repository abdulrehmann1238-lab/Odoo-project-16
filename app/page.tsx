"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CinematicLoader } from "@/components/ui/loader";
import { Navbar } from "@/components/layout/navbar";
import { Storytelling } from "@/components/landing/storytelling";
import { ShowcaseGrid } from "@/components/landing/showcase-grid";
import { CTA } from "@/components/landing/cta";
import { ChevronDown, ArrowRight, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        // Hero Parallax
        gsap.to(".hero-visual", {
          y: 200,
          scale: 1.1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        // Text Reveals
        gsap.from(".hero-text", {
          opacity: 0,
          y: 60,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.5
        });
      }, heroRef);

      return () => ctx.revert();
    }
  }, [loading]);

  return (
    <main className="relative bg-viiu-stone min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <CinematicLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            
            {/* Massive Cinematic Hero */}
            <section ref={heroRef} className="relative h-[120vh] flex flex-col justify-center items-center overflow-hidden bg-viiu-stone">
              <div className="z-10 text-center px-8 max-w-7xl">
                <div className="overflow-hidden mb-8">
                  <span className="hero-text inline-block text-[10px] tracking-[0.6em] uppercase font-bold text-viiu-aluminum">
                    The Definitive Operating System
                  </span>
                </div>
                
                <h1 className="hero-text text-7xl md:text-[10rem] font-light tracking-tighter text-viiu-graphite leading-[0.85] mb-12">
                  Operational <br />
                  <span className="italic serif text-viiu-slate/40">Excellence.</span>
                </h1>

                <p className="hero-text text-xl md:text-2xl text-viiu-slate/60 font-light max-w-2xl mx-auto leading-relaxed mb-16">
                  Viiu OS integrates the entire luxury window manufacturing lifecycle into a single, high-fidelity ecosystem. From architectural lead to white-glove site delivery.
                </p>

                <div className="hero-text flex flex-col sm:flex-row gap-8 justify-center items-center">
                  <button className="group relative px-12 py-6 bg-viiu-graphite text-viiu-stone overflow-hidden rounded-sm transition-all shadow-2xl">
                    <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-bold">Request Briefing</span>
                    <div className="absolute inset-0 bg-viiu-slate scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                  </button>
                  <button className="flex items-center gap-4 group">
                    <div className="w-16 h-16 rounded-full border border-viiu-graphite/10 flex items-center justify-center group-hover:bg-viiu-graphite group-hover:text-viiu-stone transition-all duration-500">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-viiu-graphite">View Experience</span>
                  </button>
                </div>
              </div>

              {/* Parallax Background Visual */}
              <div className="hero-visual absolute bottom-[-20%] w-[90%] h-[70%] z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-viiu-stone via-transparent to-transparent z-10" />
                <div className="w-full h-full border-[0.5px] border-viiu-slate/10 grid grid-cols-12 grid-rows-8 opacity-20">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-viiu-slate/5" />
                  ))}
                </div>
                {/* Floating Architectural Plane */}
                <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-viiu-aluminum/20 bg-white/5 backdrop-blur-3xl rotate-[5deg] skew-x-[-10deg]" />
              </div>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-viiu-slate/20" />
              </div>
            </section>

            {/* Immersive Sections */}
            <Storytelling />
            
            <section className="py-64 bg-viiu-stone px-8">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div>
                  <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-8 block">Architecture-Grade CRM</span>
                  <h2 className="text-5xl md:text-6xl font-light tracking-tight text-viiu-graphite mb-12">
                    Relationships <br />
                    built on <span className="italic serif text-viiu-slate/40">precision.</span>
                  </h2>
                  <p className="text-lg text-viiu-slate/60 font-light leading-relaxed mb-12">
                    Manage the complex relationship between architects, developers, and homeowners. Viiu OS captures every specification detail, ensuring nothing is lost from quote to shop drawing.
                  </p>
                  <div className="space-y-6">
                    {["Lead Intelligence", "Specification Parsing", "Pipeline Visualization"].map((feat, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-8 h-8 rounded-full border border-viiu-slate/10 flex items-center justify-center group-hover:bg-viiu-graphite group-hover:text-viiu-stone transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-viiu-graphite/40 group-hover:text-viiu-graphite transition-colors">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video bg-white rounded-sm shadow-2xl overflow-hidden border border-viiu-slate/5">
                  {/* Dashboard Preview Mock */}
                  <div className="absolute inset-0 bg-viiu-stone/30 flex items-center justify-center">
                     <div className="w-3/4 h-2/3 border border-viiu-graphite/5 bg-white shadow-lg p-6">
                        <div className="w-1/2 h-4 bg-viiu-stone mb-4" />
                        <div className="grid grid-cols-3 gap-4">
                           <div className="aspect-square bg-viiu-stone/50" />
                           <div className="aspect-square bg-viiu-stone/50" />
                           <div className="aspect-square bg-viiu-stone/50" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </section>

            <ShowcaseGrid />

            {/* Mobile Installer View Showcase */}
            <section className="py-64 bg-viiu-graphite text-viiu-stone px-8 overflow-hidden relative">
               <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-32">
                  <div className="flex-1 space-y-12 relative z-10">
                     <span className="text-[10px] tracking-[0.6em] uppercase font-bold text-viiu-aluminum/40 block">Field Force Mobility</span>
                     <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
                        Precision in the <br />
                        <span className="italic serif text-viiu-aluminum">Palm of their hand.</span>
                     </h2>
                     <p className="text-xl text-viiu-stone/40 font-light leading-relaxed max-w-xl">
                        Viiu Mobile empowers installers with real-time site specs, barcode scanning, and instant quality reporting. Direct site-to-office telemetry for zero-deficiency handovers.
                     </p>
                     <div className="grid grid-cols-2 gap-12 pt-8">
                        <div>
                           <span className="text-2xl font-light block mb-2">99.8%</span>
                           <span className="text-[9px] tracking-widest uppercase font-bold text-viiu-aluminum/40">Data Accuracy</span>
                        </div>
                        <div>
                           <span className="text-2xl font-light block mb-2">Real-time</span>
                           <span className="text-[9px] tracking-widest uppercase font-bold text-viiu-aluminum/40">Site Telemetry</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex-1 relative">
                     {/* Floating Phone Mock */}
                     <div className="w-80 h-[600px] bg-viiu-stone rounded-[3rem] border-[8px] border-white/5 relative shadow-2xl rotate-[10deg] hover:rotate-0 transition-transform duration-1000">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-viiu-graphite rounded-b-xl" />
                        <div className="p-8 pt-12 space-y-8">
                           <div className="h-6 w-1/2 bg-viiu-graphite/10" />
                           <div className="aspect-square bg-viiu-graphite/5 rounded-sm" />
                           <div className="space-y-3">
                              <div className="h-2 w-full bg-viiu-graphite/10" />
                              <div className="h-2 w-2/3 bg-viiu-graphite/10" />
                           </div>
                           <div className="h-12 w-full bg-viiu-graphite rounded-sm" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* AI Insights & Executive Analytics */}
            <section className="py-64 bg-white px-8">
               <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-48">
                     <span className="text-[10px] tracking-[0.6em] uppercase font-bold text-viiu-aluminum mb-8 block">Cognitive Operations</span>
                     <h2 className="text-5xl md:text-7xl font-light tracking-tight text-viiu-graphite">
                        Artificial Intelligence <br />
                        <span className="italic serif text-viiu-slate/40">Engineered for Profit.</span>
                     </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                     {[
                       { title: "Anomaly Detection", detail: "Real-time fabrication telemetry detects machine wear before failure occurs." },
                       { title: "Waste Optimization", detail: "Advanced linear nesting reduces aluminum extrusion scrap by up to 14.2%." },
                       { title: "Route Logistics", detail: "Dynamic site routing based on real-time traffic and crew utilization patterns." },
                     ].map((ai, i) => (
                       <div key={i} className="space-y-8 p-12 border border-viiu-slate/5 rounded-sm hover:border-viiu-graphite transition-all duration-700">
                          <div className="w-12 h-12 bg-viiu-stone rounded-sm flex items-center justify-center">
                             <Zap className="w-5 h-5 text-viiu-graphite" />
                          </div>
                          <h3 className="text-2xl font-light text-viiu-graphite">{ai.title}</h3>
                          <p className="text-sm text-viiu-slate/40 font-light leading-relaxed">{ai.detail}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Case Studies / Luxury Proof */}
            <section className="py-64 bg-viiu-stone px-8">
               <div className="max-w-7xl mx-auto">
                  <div className="flex justify-between items-end mb-32">
                     <h2 className="text-5xl md:text-6xl font-light tracking-tight text-viiu-graphite">
                        Deployed in the <br />
                        <span className="italic serif text-viiu-slate/40">Greatest Residences.</span>
                     </h2>
                     <button className="text-[10px] tracking-[0.4em] uppercase font-black text-viiu-aluminum hover:text-viiu-graphite transition-colors flex items-center gap-3">
                        All Case Studies
                        <ArrowUpRight className="w-4 h-4" />
                     </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                     {[
                       { name: "Yorkville Penthouse", location: "Toronto, CA", scope: "Custom Slim-Line Facade" },
                       { name: "Lakeshore Retreat", location: "Oakville, CA", scope: "Ultra-Large Sliding Systems" },
                     ].map((cs, i) => (
                       <div key={i} className="group cursor-pointer">
                          <div className="aspect-[16/10] bg-viiu-graphite/5 rounded-sm mb-10 overflow-hidden relative">
                             <div className="absolute inset-0 bg-viiu-slate/10 group-hover:bg-transparent transition-all duration-1000" />
                             <div className="absolute inset-0 border border-viiu-slate/5" />
                          </div>
                          <h4 className="text-2xl font-light text-viiu-graphite mb-2">{cs.name}</h4>
                          <p className="text-[10px] tracking-widest uppercase font-bold text-viiu-slate/40">{cs.location} • {cs.scope}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            <CTA />

            <footer className="py-24 px-8 border-t border-viiu-slate/10 bg-white">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="space-y-8">
                  <span className="text-2xl font-light tracking-[0.3em] uppercase">Viiu OS</span>
                  <p className="text-sm text-viiu-slate/40 max-w-xs font-light leading-relaxed">
                    The world's most advanced operational ecosystem for luxury aluminum fenestration manufacturing.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                  <div className="space-y-6">
                    <h5 className="text-[10px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Platform</h5>
                    <ul className="space-y-4 text-[10px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40">
                      <li><a href="#" className="hover:text-viiu-graphite transition-colors">CRM Pipeline</a></li>
                      <li><a href="#" className="hover:text-viiu-graphite transition-colors">Manufacturing</a></li>
                      <li><a href="#" className="hover:text-viiu-graphite transition-colors">Logistics</a></li>
                      <li><a href="#" className="hover:text-viiu-graphite transition-colors">Client Portal</a></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h5 className="text-[10px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Company</h5>
                    <ul className="space-y-4 text-[10px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40">
                      <li><a href="#" className="hover:text-viiu-graphite transition-colors">About</a></li>
                      <li><a href="#" className="hover:text-viiu-graphite transition-colors">Careers</a></li>
                      <li><a href="#" className="hover:text-viiu-graphite transition-colors">Briefing</a></li>
                      <li><a href="#" className="hover:text-viiu-graphite transition-colors">Legal</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-viiu-slate/5 flex justify-between items-center text-[8px] tracking-[0.5em] uppercase font-bold text-viiu-slate/20">
                <span>© 2026 Viiu Systems Inc.</span>
                <span>Designed for Excellence</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
