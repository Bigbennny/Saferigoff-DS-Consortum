
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { INDUSTRIES } from '../constants';
import { Check, Globe } from 'lucide-react';

export const Industries = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <Globe className="absolute top-0 right-0 w-[800px] h-[800px] text-slate-900 opacity-[0.015] -mr-48 -mt-24" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading subtitle="Focus Sectors" title="Industries We Serve" />
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We work across diverse sectors where digital engagement, scale, and innovative interaction models are critical to competitive advantage.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {INDUSTRIES.map((industry, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50/80 backdrop-blur-sm border border-slate-100 font-medium text-slate-800 transition-shadow hover:shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <span className="text-sm">{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl group border border-white/10">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
                alt="Global Digital Infrastructure" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-[#c5a059]/10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <p className="text-2xl font-light italic leading-relaxed mb-6">
                    "Our work is designed to scale across regions, jurisdictions, and markets — bridging strategic vision with operational reality."
                  </p>
                  <div className="h-0.5 w-12 bg-[#c5a059] mx-auto"></div>
                </motion.div>
              </div>
            </div>
            {/* Subtle floating accent elements */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#c5a059] rounded-3xl -z-10 rotate-12 shadow-xl"
            ></motion.div>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10 shadow-lg"
            ></motion.div>
          {/* Added missing closing motion.div and corrected div nesting */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
