import React from 'react';
import { Shield, Target, Layers, Users, Globe, Zap, Scale, Cpu } from 'lucide-react';
import { Leader, Phase } from './types';

export const COLORS = {
  primary: '#0f172a', // Deep Navy
  secondary: '#334155', // Slate
  accent: '#c5a059', // Professional Gold
  background: '#f8fafc', // Light Slate
};

export const LEADERSHIP: Leader[] = [
  {
    name: "Matthew Onyekwere Okorie",
    role: "Founder & Chief Innovation Director",
    description: "Matthew leads strategy and innovation design for the consortium. He has extensive experience across telecommunications, oil & gas, the stock market, and enterprise digital systems. He focuses on helping organizations navigate complex product ideation and governance frameworks.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
    altText: "Matthew Onyekwere Okorie"
  },
  {
    name: "Chukwuemeka Reuben Ogbuani",
    role: "CEO & Chief Systems Architect",
    description: "Chukwuemeka is a senior software engineer with leadership experience in the aviation sector and international institutional environments, including the United Nations. He leads the technical architecture and systems engineering arm of the consortium.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    altText: "Chukwuemeka Reuben Ogbuani"
  }
];

export const PHASES: Phase[] = [
  {
    title: "Step 1: Strategic Exploration",
    points: ["Business goal alignment", "Operational constraints mapping", "Ambition definition", "Initial risk profiling"]
  },
  {
    title: "Step 2: Concept Design",
    points: ["Structured innovation concepts", "Defensible logic models", "Engagement strategy", "Intellectual asset framing"]
  },
  {
    title: "Step 3: System Architecture",
    points: ["Implementation-ready frameworks", "High-level technical design", "Data governance mapping", "Scalability planning"]
  },
  {
    title: "Step 4: Engagement Structuring",
    points: ["Pilot program design", "Partnership advisory", "Commercial model structuring", "Governance handoff"]
  }
];

export const DIFFERENTIATORS = [
  { 
    icon: <Shield className="w-6 h-6 text-[#c5a059]" />, 
    title: "Governance-First Innovation",
    text: "Every idea is designed with legal, regulatory, and operational realities in mind from day one."
  },
  { 
    icon: <Zap className="w-6 h-6 text-[#c5a059]" />, 
    title: "Concept Ownership Discipline",
    text: "We treat ideas as strategic intellectual assets — not mere marketing experiments."
  },
  { 
    icon: <Globe className="w-6 h-6 text-[#c5a059]" />, 
    title: "Global Operating Mindset",
    text: "Our work is architected to scale across diverse regions, jurisdictions, and international markets."
  }
];

export const PILLARS = [
  { icon: <Target className="w-6 h-6 text-[#c5a059]" />, label: "Strategy" },
  { icon: <Layers className="w-6 h-6 text-[#c5a059]" />, label: "Product Architecture" },
  { icon: <Shield className="w-6 h-6 text-[#c5a059]" />, label: "Governance & Risk" },
  { icon: <Users className="w-6 h-6 text-[#c5a059]" />, label: "Digital Engagement" }
];

export const INDUSTRIES = [
  "Media & Entertainment",
  "Sports & Fan Engagement",
  "Telecommunications",
  "Aviation & Transportation",
  "Energy & Infrastructure",
  "Platform-Based Businesses"
];