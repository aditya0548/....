"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';

const CATEGORIES = ['All', 'Luxury', 'Portfolio', 'SaaS', 'AI Startup', 'Cinematic'];

const PROJECTS = [
  {
    id: 1,
    title: 'Aethel Luxury',
    category: 'Luxury',
    description: 'High-end fashion editorial experience.',
    imageClass: 'from-zinc-800 to-zinc-900',
  },
  {
    id: 2,
    title: 'Nova Dynamics',
    category: 'AI Startup',
    description: 'B2B platform with interactive 3D elements.',
    imageClass: 'from-blue-900 to-black',
  },
  {
    id: 3,
    title: 'Director\'s Cut',
    category: 'Cinematic',
    description: 'Immersive portfolio for a film director.',
    imageClass: 'from-neutral-800 to-stone-900',
  },
  {
    id: 4,
    title: 'SyncFlow',
    category: 'SaaS',
    description: 'Modern product landing page.',
    imageClass: 'from-indigo-900 to-slate-900',
  },
  {
    id: 5,
    title: 'Studio AR',
    category: 'Portfolio',
    description: 'Minimalist gallery for a 3D artist.',
    imageClass: 'from-gray-800 to-black',
  },
  {
    id: 6,
    title: 'Aura',
    category: 'Luxury',
    description: 'Boutique fragrance brand online store.',
    imageClass: 'from-rose-950 to-black',
  }
];

export function ProjectShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-32 relative bg-black">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Born from <GradientText variant="white">Prompts</GradientText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg"
            >
              Explore a curated selection of premium digital experiences generated entirely by our AI engine. No templates used.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl shadow-black/50 transform-gpu"
              >
                {/* Mock Image Area with parallax feel */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.imageClass} relative overflow-hidden`}>
                  {/* Fake cinematic image element */}
                  <motion.div
                    className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />

                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Hover Overlay with cinematic reveal */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* Dynamic cinematic lighting on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-500" />
                </div>

                <div className="p-6 relative z-10 bg-black/50 backdrop-blur-md border-t border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">{project.title}</h3>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <p className="text-sm text-white/50 mb-4">{project.description}</p>
                  <div className="inline-block px-2 py-1 rounded text-xs font-medium bg-white/10 text-white/70 backdrop-blur-md border border-white/5">
                    {project.category}
                  </div>
                </div>

                {/* Glow border effect on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
