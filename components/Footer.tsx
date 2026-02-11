import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-16 bg-slate-50 border-t border-slate-200 text-slate-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-bold tracking-tighter text-slate-900 text-2xl uppercase">SAFERIGOFF</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c5a059]">Digital Solutions Consortium</span>
            </div>
            <p className="text-sm max-w-md leading-relaxed">
              An independent consulting partnership focused on innovation strategy, digital product ideation, and enterprise-grade system design for global clients.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Consortium Partners</h4>
            <ul className="text-sm space-y-3">
              <li>Saferigoff Consulting Nigeria Ltd</li>
              <li>Digital Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="text-sm space-y-3">
              <li>info@saferigoff.com</li>
              <li>United States | International</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase text-slate-400 mb-2">Legal Notice:</p>
              <p className="text-[11px] leading-relaxed italic">
                This website is for general information only. No content on this site constitutes an offer, proposal, or disclosure of proprietary concepts. All consulting engagements are subject to formal agreement. All substantive innovation concepts are shared only after formal engagement or mutual NDA is in place.
              </p>
            </div>
            <div className="text-[11px] flex flex-col items-end justify-center">
              <p>© {new Date().getFullYear()} Safferigoff Digital Solutions Consulting Consortium. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};