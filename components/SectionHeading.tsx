
import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

export const SectionHeading = ({ subtitle, title, centered = false }: SectionHeadingProps) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <span className="text-[#c5a059] font-bold uppercase tracking-widest text-sm mb-2 block">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
  </div>
);
