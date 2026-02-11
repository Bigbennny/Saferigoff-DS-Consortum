import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Activity } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const WorkAreas = () => {
  const areas = [
    "Structured fan engagement frameworks",
    "Audience signal interpretation models",
    "Digital recognition and participation systems",
    "Innovation governance for regulated brands",
    "Risk-aware digital monetization concepts"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=500&q=80" alt="Tech" className="rounded-2xl shadow-lg" />
                <div className="h-40 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <Globe className="w-16 h-16 text-[#c5a059] opacity-40" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-40 bg-slate-900 rounded-2xl flex items-center justify-center">
                  <Activity className="w-16 h-16 text-[#c5a059] opacity-40" />
                </div>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&h=500&q=80" alt="Work" className="rounded-2xl shadow-lg" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="Expertise" title="Sample Areas of Work" />
            <p className="text-slate-500 italic mb-8">Representative advisory domains, not client disclosures.</p>
            <div className="space-y-4">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border group-hover:border-[#c5a059] group-hover:text-[#c5a059] transition-colors">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-slate-700">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};