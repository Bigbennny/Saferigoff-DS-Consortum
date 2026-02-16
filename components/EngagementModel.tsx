import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Gavel, TrendingUp, Handshake, 
  Shield, Zap, Globe, Layers, Target, 
  Activity, Cpu, Lock, Scale 
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const EngagementModel = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Gold Side Gradient */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/3 h-full bg-[#c5a059]/5 skew-x-12 z-0"
      ></motion.div>

      {/* Gold Scattered Watermark Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.05]">
        {/* Top Region */}
        <Shield className="absolute top-[5%] left-[5%] w-32 h-32 text-[#c5a059] rotate-12" />
        <Globe className="absolute top-[12%] left-[25%] w-24 h-24 text-[#c5a059] -rotate-6" />
        <Zap className="absolute top-[8%] left-[45%] w-20 h-20 text-[#c5a059] rotate-45" />
        <Layers className="absolute top-[15%] left-[65%] w-36 h-36 text-[#c5a059] -rotate-12" />
        <Activity className="absolute top-[5%] left-[85%] w-24 h-24 text-[#c5a059] rotate-12" />
        
        {/* Middle Region */}
        <Target className="absolute top-[40%] left-[10%] w-40 h-40 text-[#c5a059] opacity-40" />
        <Briefcase className="absolute top-[35%] left-[30%] w-28 h-28 text-[#c5a059] rotate-12" />
        <Handshake className="absolute top-[45%] left-[50%] w-32 h-32 text-[#c5a059] -rotate-12" />
        <TrendingUp className="absolute top-[38%] left-[75%] w-26 h-26 text-[#c5a059] rotate-[30deg]" />
        <Cpu className="absolute top-[42%] left-[92%] w-20 h-20 text-[#c5a059] -rotate-45" />
        
        {/* Bottom Region */}
        <Scale className="absolute bottom-[10%] left-[5%] w-32 h-32 text-[#c5a059] -rotate-12" />
        <Gavel className="absolute bottom-[15%] left-[25%] w-28 h-28 text-[#c5a059] rotate-[20deg]" />
        <Lock className="absolute bottom-[8%] left-[48%] w-24 h-24 text-[#c5a059] rotate-12" />
        <Shield className="absolute bottom-[12%] left-[70%] w-36 h-36 text-[#c5a059] -rotate-45" />
        <Target className="absolute bottom-[5%] left-[90%] w-22 h-22 text-[#c5a059] rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading subtitle="Engagement" title="Aligning Incentives for Success" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Pricing Model Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="bg-slate-800/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-slate-700/50 group"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-14 h-14 bg-[#c5a059] text-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl"
            >
              <Briefcase className="w-7 h-7" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-6">Our Pricing Model</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our engagements are structured to align our success with yours, ensuring a fair and transparent partnership throughout the consulting lifecycle.
            </p>
            <ul className="space-y-6">
              {[
                { icon: <TrendingUp />, title: "Retainer Fee", desc: "A modest pre-engagement or monthly retainer to cover research, coordination, and international operations." },
                { icon: <Handshake />, title: "Success-Linked Fee", desc: "A results-oriented or revenue-linked consulting fee, agreed transparently to incentivize meaningful innovation output." }
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.2) }}
                  className="flex gap-4"
                >
                  <div className="text-[#c5a059] flex-shrink-0">{item.icon}</div>
                  <div>
                    <span className="font-bold block text-white">{item.title}</span>
                    <span className="text-sm text-slate-400">{item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & IP Integrity Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="bg-white text-slate-900 p-10 rounded-[2.5rem] flex flex-col justify-center border border-transparent hover:border-[#c5a059]/30 transition-all shadow-2xl"
          >
            <div className="w-14 h-14 bg-[#c5a059]/10 text-[#c5a059] rounded-2xl flex items-center justify-center mb-8 border border-[#c5a059]/20">
              <Gavel className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Legal & IP Integrity</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              For U.S.-based and international engagements, the consortium works with dedicated legal counsel to ensure proper contracting, intellectual property protection, and regulatory compliance.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-[#c5a059]/5 rounded-2xl border-l-4 border-[#c5a059]"
            >
              <p className="text-sm font-semibold text-slate-700 italic">
                "We provide professional peace of mind, ensuring that innovation concepts are legally defensible and structurally sound across all relevant jurisdictions."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};