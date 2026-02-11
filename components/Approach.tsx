import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { PHASES } from '../constants';

export const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading subtitle="Our Methodology" title="A Disciplined Consulting Approach" centered />
          <p className="text-slate-600 text-lg">
            We provide the missing structure necessary for high-stakes innovation. Our 4-step process ensures strategic clarity before any technical resources are committed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PHASES.map((phase, idx) => (
            <motion.div 
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative z-10 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-900 text-[#c5a059] flex items-center justify-center rounded-2xl font-bold text-xl mb-6 shadow-xl">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{phase.title}</h3>
              <ul className="space-y-3 flex-grow">
                {phase.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                    <CheckCircle className="w-4 h-4 text-[#c5a059] mt-0.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-12 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-medium mb-6">Confidentiality Protocol</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                To protect both parties, all substantive innovation concepts and proprietary ideas are shared only after a formal consulting engagement or mutual NDA is in place.
              </p>
              <div className="h-1 w-20 bg-[#c5a059] mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};