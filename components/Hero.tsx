import React from 'react';
// Added Variants import to fix type inference errors
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PILLARS } from '../constants';

export const Hero = () => {
  // Added Variants type to ensure property compatibility
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Added Variants type and cast custom ease array to any to resolve easing type mismatch
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as any },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-900 text-white">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 grayscale-[0.2]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-3 py-1 bg-[#c5a059]/20 text-[#c5a059] text-[10px] font-medium uppercase tracking-[0.2em] rounded-full mb-8 border border-[#c5a059]/30"
          >
            Saferigoff-Digital Solutions Consortium
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-snug md:leading-tight lg:leading-[0.95] mb-10 tracking-wide"
          >
            Strategic Innovation & Digital Product Consulting for <span className="text-[#c5a059]">Global Enterprises</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light max-w-4xl"
          >
            We help organizations conceive, structure, and operationalize new digital products, engagement models, and revenue systems — from idea to execution-ready frameworks.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-20">
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-3 bg-[#c5a059] text-slate-900 px-10 py-5 rounded-xl text-lg font-medium hover:bg-[#b38f4d] transition-all shadow-xl hover:-translate-y-1"
            >
              Initiate a Consulting Conversation <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {PILLARS.map((pillar, idx) => (
              <div key={pillar.label} className="flex items-center gap-4">
                <div className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  {pillar.icon}
                </div>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-[0.15em] leading-tight">
                  {pillar.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
    </section>
  );
};