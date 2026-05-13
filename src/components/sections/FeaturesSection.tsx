"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import {
  Sparkles,
  Smartphone,
  Video,
  Rocket,
  Globe2,
  Search,
  PenTool,
  LayoutGrid
} from 'lucide-react';

const FEATURES = [
  {
    title: "AI Website Generation",
    description: "Describe your vision, and our neural engine builds a complete, production-ready site in seconds.",
    icon: Sparkles,
  },
  {
    title: "Automatic Responsiveness",
    description: "Every layout perfectly adapts to desktop, tablet, and mobile automatically. No media queries needed.",
    icon: Smartphone,
  },
  {
    title: "AI Animation Engine",
    description: "Intelligent application of physics-based animations and scroll effects that feel cinematic.",
    icon: Video,
  },
  {
    title: "One-Click Deployment",
    description: "Push to global edge networks instantly. Zero configuration required.",
    icon: Rocket,
  },
  {
    title: "Custom Domains",
    description: "Connect your own premium domains with automatic SSL certification.",
    icon: Globe2,
  },
  {
    title: "AI SEO Optimization",
    description: "Auto-generated meta tags, semantic HTML, and lightning-fast load times for top rankings.",
    icon: Search,
  },
  {
    title: "Realtime Editing",
    description: "Tweak layouts, copy, and styling in real-time with an intuitive visual canvas.",
    icon: PenTool,
  },
  {
    title: "Smart Layout System",
    description: "CSS Grid and Flexbox layouts generated dynamically based on content structure.",
    icon: LayoutGrid,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 relative z-10 bg-black">
      <div className="container mx-auto px-6">

        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <LayoutGrid className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Advanced Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Engineered for <GradientText variant="purple">Excellence</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            A comprehensive suite of tools designed to replace traditional development workflows with intelligent automation.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: 'spring', bounce: 0.2, duration: 0.8 }
                }
              }}
            >
              <GlassCard className="p-8 h-full group/icon">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-colors duration-500 group-hover/icon:bg-blue-500/20 group-hover/icon:border-blue-500/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
                  <feature.icon className="w-6 h-6 text-white/80 relative z-10 group-hover/icon:text-blue-300 transition-colors duration-300 group-hover/icon:scale-110 transform" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm group-hover/icon:text-white/70 transition-colors duration-300">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
