"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  UserCheck, 
  Clock, 
  MapPin, 
  Activity,
  Plus,
  Search,
  Filter,
  MoreVertical,
  ShieldCheck,
  Zap,
  Building2,
  Calendar,
  Briefcase
} from "lucide-react";

const teamMembers = [
  { id: "EMP-001", name: "Frankie Viiu", role: "Operations Director", status: "Active", location: "Headquarters", activity: "Executive Dashboard" },
  { id: "EMP-004", name: "John West", role: "Field Supervisor", status: "On-Site", location: "Oakville Estate", activity: "Site Survey" },
  { id: "EMP-009", name: "Sarah Jenkins", role: "Manufacturing Lead", status: "Active", location: "Facility A", activity: "Machine Calibration" },
  { id: "EMP-012", name: "Tom Hardy", role: "Lead Installer", status: "On-Site", location: "Burlington Villa", activity: "Glass Fitting" },
];

export default function HRPage() {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-viiu-aluminum mb-3 block">
            Human Capital Management
          </span>
          <h1 className="text-4xl font-light tracking-tight text-viiu-graphite">
            Teams & Activity
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white border border-viiu-slate/5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-stone transition-colors rounded-sm flex items-center gap-2">
            <Filter className="w-4 h-4 text-viiu-slate/40" />
            Filter Teams
          </button>
          <button className="px-6 py-3 bg-viiu-graphite text-viiu-stone text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-viiu-slate transition-colors rounded-sm flex items-center gap-2 shadow-2xl">
            <Plus className="w-4 h-4" />
            Add Member
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Personnel", value: "24", sub: "8 Teams", icon: Users },
          { label: "Attendance Rate", value: "98.2%", sub: "Last 30 Days", icon: UserCheck },
          { label: "Field Deployment", value: "12", sub: "Active Sites", icon: MapPin },
          { label: "Avg. Efficiency", value: "94%", sub: "Facility-wide", icon: Activity },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-viiu-stone rounded-sm">
                <stat.icon className="w-4 h-4 text-viiu-graphite" />
              </div>
            </div>
            <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-viiu-slate/40 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-light text-viiu-graphite">{stat.value}</h3>
            <p className="text-[8px] tracking-widest uppercase text-viiu-slate/20 mt-1 font-bold">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-viiu-slate/5 rounded-sm overflow-hidden shadow-sm">
        <div className="p-8 border-b border-viiu-slate/5 bg-viiu-stone/30 flex justify-between items-center">
          <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Member Directory</h2>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-viiu-slate/30" />
            <input type="text" placeholder="Search team..." className="h-10 bg-white border border-viiu-slate/10 rounded-sm pl-10 pr-4 text-[10px] tracking-widest uppercase outline-none focus:border-viiu-graphite transition-all" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-viiu-slate/5">
                <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Member</th>
                <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Role</th>
                <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Location</th>
                <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Current Activity</th>
                <th className="px-8 py-5 text-[9px] tracking-[0.3em] uppercase font-black text-viiu-slate/40">Status</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, i) => (
                <tr key={i} className="border-b border-viiu-slate/5 last:border-b-0 hover:bg-viiu-stone/20 transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-viiu-graphite rounded-sm flex items-center justify-center text-viiu-stone font-bold text-[10px]">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-viiu-graphite">{member.name}</p>
                        <p className="text-[9px] text-viiu-slate/40 mt-0.5 uppercase font-bold tracking-widest">{member.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-viiu-slate/60">{member.role}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-viiu-slate/40">
                      <MapPin className="w-3 h-3" />
                      {member.location}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm text-viiu-graphite">{member.activity}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${member.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'}`} />
                      <span className="text-[9px] tracking-widest uppercase font-black text-viiu-graphite">{member.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="p-10 bg-viiu-graphite text-viiu-stone rounded-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <Zap className="w-48 h-48" />
          </div>
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <Zap className="w-6 h-6 text-viiu-aluminum" />
            <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-aluminum">Skill Matrix</h2>
          </div>
          <div className="space-y-8 relative z-10">
            {[
              { skill: "Aluminum Fabrication", level: 92 },
              { skill: "Glazing & Sealing", level: 85 },
              { skill: "Site Deployment", level: 78 },
              { skill: "CAD/BOM Interpretation", level: 95 },
            ].map((skill, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[10px] tracking-widest uppercase font-bold">
                  <span className="text-white/40">{skill.skill}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} className="h-full bg-viiu-aluminum" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 p-10 bg-white border border-viiu-slate/5 rounded-sm shadow-sm">
          <div className="flex items-center gap-4 mb-12">
            <ShieldCheck className="w-6 h-6 text-green-500" />
            <h2 className="text-[11px] tracking-[0.4em] uppercase font-black text-viiu-graphite">Safety & Compliance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-viiu-stone/30 rounded-sm">
              <p className="text-[10px] tracking-widest uppercase font-black text-viiu-graphite mb-6">Certification Alerts</p>
              <div className="space-y-6">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-viiu-slate/60 font-bold">Working at Heights (John W.)</span>
                  <span className="text-red-600 font-bold uppercase tracking-widest text-[9px]">Expires in 12d</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-viiu-slate/60 font-bold">Crane Op License (Tom H.)</span>
                  <span className="text-green-600 font-bold uppercase tracking-widest text-[9px]">Valid</span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-viiu-stone/30 rounded-sm">
              <p className="text-[10px] tracking-widest uppercase font-black text-viiu-graphite mb-6">Incident Report</p>
              <div className="flex flex-col items-center justify-center py-4">
                <span className="text-5xl font-light text-viiu-graphite">242</span>
                <span className="text-[10px] tracking-widest uppercase text-viiu-slate/40 mt-3 font-bold">Days since last incident</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
