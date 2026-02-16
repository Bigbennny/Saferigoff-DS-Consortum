import React from 'react';
import { 
  Shield, Globe, Zap, Layers, Target, Users, 
  Scale, Gavel, Briefcase, Lightbulb, Search, 
  Settings, Workflow, Lock, Landmark, TrendingUp,
  Activity, Cpu, Fingerprint, Rocket, Server, 
  Terminal, Database, Key, Box, GitBranch
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-16 bg-slate-50 border-t border-slate-200 text-slate-500 relative overflow-hidden">
      {/* 
          Denser Scattered Watermark Background - 26 Unique Icons.
          Strategically positioned to fill the space without any overlap.
          Opacity kept at 0.04 for subtle professionalism.
      */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.04]">
        {/* Row 1 - Approx 5-15% top */}
        <Shield className="absolute top-[5%] left-[2%] w-24 h-24 text-slate-900 rotate-12" />
        <Globe className="absolute top-[8%] left-[18%] w-20 h-20 text-slate-900 -rotate-6" />
        <Zap className="absolute top-[4%] left-[34%] w-18 h-18 text-slate-900 rotate-45" />
        <Layers className="absolute top-[7%] left-[50%] w-28 h-28 text-slate-900 -rotate-12" />
        <Activity className="absolute top-[5%] left-[66%] w-20 h-20 text-slate-900 rotate-12" />
        <Cpu className="absolute top-[9%] left-[82%] w-24 h-24 text-slate-900 -rotate-45" />
        <Fingerprint className="absolute top-[3%] left-[94%] w-16 h-16 text-slate-900 rotate-[30deg]" />
        
        {/* Row 2 - Approx 25-40% top */}
        <Target className="absolute top-[28%] left-[5%] w-32 h-32 text-slate-900" />
        <Users className="absolute top-[32%] left-[22%] w-24 h-24 text-slate-900 rotate-12" />
        <Scale className="absolute top-[27%] left-[38%] w-28 h-28 text-slate-900 -rotate-45" />
        <Gavel className="absolute top-[31%] left-[54%] w-24 h-24 text-slate-900 rotate-[30deg]" />
        <Rocket className="absolute top-[26%] left-[70%] w-30 h-30 text-slate-900 -rotate-12" />
        <Server className="absolute top-[33%] left-[86%] w-26 h-26 text-slate-900 rotate-12" />
        
        {/* Row 3 - Approx 50-65% top */}
        <Briefcase className="absolute top-[52%] left-[2%] w-32 h-32 text-slate-900 -rotate-12" />
        <Lightbulb className="absolute top-[58%] left-[18%] w-22 h-22 text-slate-900 rotate-12" />
        <Search className="absolute top-[53%] left-[34%] w-18 h-18 text-slate-900 -rotate-6" />
        <Settings className="absolute top-[57%] left-[50%] w-36 h-36 text-slate-900 rotate-45" />
        <Terminal className="absolute top-[51%] left-[66%] w-24 h-24 text-slate-900 -rotate-12" />
        <Database className="absolute top-[59%] left-[82%] w-26 h-26 text-slate-900 rotate-12" />
        <Key className="absolute top-[54%] left-[94%] w-20 h-20 text-slate-900 -rotate-45" />
        
        {/* Row 4 - Approx 75-90% top */}
        <Workflow className="absolute top-[78%] left-[8%] w-28 h-28 text-slate-900 -rotate-12" />
        <Lock className="absolute top-[83%] left-[26%] w-24 h-24 text-slate-900 rotate-12" />
        <Landmark className="absolute top-[79%] left-[44%] w-26 h-26 text-slate-900 -rotate-45" />
        <TrendingUp className="absolute top-[84%] left-[62%] w-20 h-20 text-slate-900 rotate-[30deg]" />
        <Box className="absolute top-[77%] left-[80%] w-32 h-32 text-slate-900 rotate-12" />
        <GitBranch className="absolute top-[82%] left-[92%] w-22 h-22 text-slate-900 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-bold tracking-tighter text-slate-900 text-2xl uppercase">SAFERIGOFF-DIGITAL SOLUTIONS</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c5a059]">CONSORTIUM</span>
            </div>
            <p className="text-sm max-w-md leading-relaxed text-slate-600">
              An independent consulting partnership focused on innovation strategy, digital product ideation, and enterprise-grade system design for global clients.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Consortium Partners</h4>
            <ul className="text-sm space-y-3 text-slate-600">
              <li>Saferigoff Consulting Nigeria Ltd</li>
              <li>Digital-Tech Solutions Nigeria Ltd</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="text-sm space-y-3 text-slate-600">
              <li>info@saferigoff.com</li>
              <li>United States | International</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase text-slate-400 mb-2">Legal Notice:</p>
              <p className="text-[11px] leading-relaxed italic text-slate-500">
                This website is for general information only. No content on this site constitutes an offer, proposal, or disclosure of proprietary concepts. All consulting engagements are subject to formal agreement. All substantive innovation concepts are shared only after formal engagement or mutual NDA is in place.
              </p>
            </div>
            <div className="text-[11px] flex flex-col items-end justify-center text-slate-500">
              <p>© {new Date().getFullYear()} Saferigoff-Digital Solutions Consortium. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};