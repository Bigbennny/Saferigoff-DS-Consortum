import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Advisory', href: '#advisory' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  const textColor = scrolled ? 'text-slate-600' : 'text-slate-200';
  const brandColor = scrolled ? 'text-slate-900' : 'text-white';
  const buttonClass = scrolled 
    ? 'bg-slate-900 text-white hover:bg-[#c5a059]' 
    : 'bg-[#c5a059] text-slate-900 hover:bg-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-medium tracking-tighter text-xl transition-colors duration-300 ${brandColor}`}>
            SAFERIGOFF
          </span>
          <span className={`text-[10px] uppercase tracking-widest font-normal transition-colors duration-300 ${scrolled ? 'text-slate-500' : 'text-slate-400'}`}>
            Digital Solutions Consortium
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-light transition-colors duration-300 ${textColor} hover:text-[#c5a059]`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg ${buttonClass}`}
          >
            Inquire
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden px-6 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-light text-slate-600 hover:text-[#c5a059]"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-slate-900 text-white text-center py-4 rounded-xl font-medium"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};