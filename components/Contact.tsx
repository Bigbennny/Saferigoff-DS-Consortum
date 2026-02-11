import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative shadow-2xl"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-64 h-64 bg-[#c5a059] rounded-full blur-3xl"
          ></motion.div>
          
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <SectionHeading subtitle="Connect" title="Engage With the Consortium" />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-slate-400 text-lg mb-10 leading-relaxed"
              >
                If your organization is exploring complex digital engagement, innovation strategy, or audience-driven initiatives and would benefit from structured advisory support, we welcome an initial conversation.
              </motion.p>
              
              <div className="space-y-8">
                {[
                  { icon: <Mail />, title: "Email Inquiry", val: "info@saferigoff.com", link: "mailto:info@saferigoff.com" },
                  { icon: <MapPin />, title: "Location", val: "United States", sub: "With international advisory capability" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-[#c5a059]">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-1">{item.title}</span>
                      {item.link ? (
                        <a href={item.link} className="text-xl font-bold hover:text-[#c5a059] transition-colors">{item.val}</a>
                      ) : (
                        <>
                          <p className="text-xl font-bold">{item.val}</p>
                          {item.sub && <p className="text-slate-400 text-sm">{item.sub}</p>}
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] text-slate-900 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Initial Discussion Request</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Organization</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Focus Area</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] transition-all">
                    <option>Digital Engagement</option>
                    <option>Innovation Governance</option>
                    <option>Product Architecture</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] transition-all"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-[#c5a059] hover:text-slate-900 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Send Inquiry <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};