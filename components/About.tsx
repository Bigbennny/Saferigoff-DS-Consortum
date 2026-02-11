import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Globe } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { LEADERSHIP, DIFFERENTIATORS } from '../constants';

export const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-24 bg-white scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeading subtitle="Who We Are" title="A Collaboration of Strategy & Engineering" />
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Saferigoff Digital Solutions Consulting Consortium is a professional alliance between <strong>Saferigoff Consulting Nigeria Limited</strong> (Strategy, Innovation Design, Product Ideation) and <strong>Digital Solutions</strong> (Software Architecture, Systems Engineering, Application Development).
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              The consortium was formed to deliver complex innovation consulting that requires both strategic clarity and technical depth. We work with organizations seeking to create new value, not merely optimize existing operations.
            </p>
            
            <div className="space-y-6">
              {DIFFERENTIATORS.map((item, i) => (
                <motion.div 
                  key={i} 
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
                alt="Consulting" 
                className="rounded-2xl h-64 object-cover w-full shadow-lg" 
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
                alt="Office" 
                className="rounded-2xl h-64 object-cover w-full mt-8 shadow-lg" 
              />
            </div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Scale className="w-24 h-24" />
               </div>
               <h4 className="text-[#c5a059] font-bold uppercase tracking-widest text-xs mb-4">Legal & Structural Status</h4>
               <p className="text-slate-300 text-sm leading-relaxed mb-4">
                The consortium is structured to operate internationally. Registration in the United States is in progress to support U.S.-based client engagements. 
               </p>
               <p className="text-slate-300 text-sm leading-relaxed">
                Where required, engagements may also be executed through existing registered entities, supported by appropriate legal representation and cross-border consulting agreements.
               </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle="Leadership" title="Expert Domain Guidance" centered />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {LEADERSHIP.map((leader, idx) => (
            <motion.div 
              key={leader.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <motion.img 
                  whileHover={{ rotate: 3 }}
                  src={leader.image} 
                  alt={leader.altText || leader.name} 
                  className="w-24 h-24 rounded-2xl object-cover shadow-lg group-hover:shadow-[#c5a059]/10 transition-shadow" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-[#c5a059] font-semibold mb-4 text-sm tracking-wide">{leader.role}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {leader.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};