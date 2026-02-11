import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { INDUSTRIES } from '../constants';
import { Check } from 'lucide-react';

export const Industries = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 font-medium text-slate-800 transition-shadow hover:shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  {industry}
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
            <div className="aspect-square bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl group">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="Digital Innovation" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-2xl font-light italic leading-relaxed"
                >
                  "Our work is designed to scale across regions, jurisdictions, and markets — bridging strategic vision with operational reality."
                </motion.p>
              </div>
            </div>
            {/* Subtle floating accent elements */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#c5a059] rounded-3xl -z-10 rotate-12"
            ></motion.div>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};