import React from 'react';
import { motion } from 'framer-motion';
import { Octagon, X, ShieldAlert } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Exclusions = () => {
  const excludes = [
    "We do not claim ownership of client businesses",
    "We do not operate client platforms long-term",
    "We do not monetize client IP without specific agreement",
    "We do not sell platforms or proprietary software",
    "We do not push generic third-party platforms"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <motion.div 
        animate={{ 
          rotate: [12, 15, 12],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <Octagon className="w-[600px] h-[600px] text-slate-50 opacity-[0.03]" strokeWidth={1} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <SectionHeading 
              subtitle="Engagement Philosophy" 
              title="Operational Boundaries & Trust" 
            />
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We design ideas, architect systems, and advise on execution — under clear professional terms. To maintain absolute objectivity, the consortium operates within strictly defined boundaries.
            </p>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-6 bg-red-50 rounded-2xl border border-red-100"
            >
              <ShieldAlert className="w-8 h-8 text-red-500 flex-shrink-0" />
              <p className="text-red-900 font-medium text-sm leading-snug">
                Our model builds trust immediately by ensuring we do not compete with your internal teams or operational control.
              </p>
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2 grid sm:grid-cols-1 gap-4 w-full">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 px-2"
            >
              Explicit Exclusions
            </motion.h3>
            {excludes.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 10, backgroundColor: "#fff" }}
                className="group flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 transition-all hover:shadow-lg hover:shadow-red-500/5"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                  <X className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <p className="text-slate-800 font-semibold leading-tight">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};