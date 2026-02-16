import React from 'react';
import { Lock, ShieldCheck, Zap, Gavel } from 'lucide-react';

export const LegalSection = () => {
  const points = [
    "No unsolicited creative content or story submissions",
    "No assumption of IP ownership without formal agreement",
    "No disclosure of proprietary concepts beyond agreed scope",
    "Confidentiality aligned with U.S. and international standards"
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <Gavel className="absolute -top-24 -right-24 w-[400px] h-[400px] text-slate-900 opacity-[0.02]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Lock className="w-10 h-10 text-slate-800" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">Legal Posture</h2>
              <p className="text-slate-500 text-sm font-medium">We engage with organizations under strict professional protocols.</p>
            </div>
            <div className="md:w-2/3">
              <div className="grid sm:grid-cols-2 gap-6">
                {points.map((p, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                    <ShieldCheck className="w-6 h-6 text-[#c5a059] flex-shrink-0" />
                    <p className="text-sm font-medium text-slate-700">{p}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-slate-600 text-sm font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#c5a059]" /> All substantive ideas are shared only after formal engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};