import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Lightbulb, Box, Landmark } from 'lucide-react';

export const AdvisoryFocus = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const focuses = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation & Product Ideation",
      description: "Developing new digital product concepts, innovative engagement and monetization models, and ecosystem-level thinking designed for competitive market entry."
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Digital Strategy & Architecture",
      description: "Defining high-level system designs and data/analytics frameworks. We translate visionary ideas into scalable platform concepts ready for engineering transition."
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Enterprise Advisory",
      description: "Providing deep-dive feasibility and risk analysis, pilot program design, validation strategies, and robust governance/control frameworks for highly regulated environments."
    }
  ];

  return (
    <section id="advisory" className="py-24 bg-slate-900 text-white overflow-hidden relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <span className="text-[#c5a059] font-medium uppercase tracking-widest text-[10px] mb-4 block">Core Consulting Services</span>
          <h2 className="text-4xl font-medium mb-12 tracking-tight">How We Deliver Value</h2>
          
          <div className="space-y-6 text-left">
            {focuses.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  openIndex === i ? 'bg-slate-800 border-[#c5a059]/40 shadow-2xl shadow-black/50' : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <motion.div 
                      animate={{ scale: openIndex === i ? 1.1 : 1 }}
                      className={`p-3 rounded-xl transition-colors ${openIndex === i ? 'bg-[#c5a059] text-slate-900' : 'bg-slate-700 text-slate-400'}`}
                    >
                      {item.icon}
                    </motion.div>
                    <span className={`font-semibold text-xl pr-4 transition-colors ${openIndex === i ? 'text-white' : 'text-slate-300'}`}>
                      {item.title}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: openIndex === i ? 0 : -90 }}>
                    {openIndex === i ? (
                      <ChevronDown className="w-6 h-6 text-[#c5a059] flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-slate-500 flex-shrink-0" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 pt-0">
                        <motion.p 
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          className="text-slate-300 text-lg font-light leading-relaxed border-t border-slate-700/50 pt-6 ml-14"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};