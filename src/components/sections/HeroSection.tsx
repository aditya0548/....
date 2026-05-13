"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import { HeroScene } from './HeroScene';
import { Sparkles, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const [prompt, setPrompt] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      <HeroScene />

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/80">Introducing VELTRIX AI 2.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            Generate Cinematic<br />
            <GradientText variant="blue">Websites with AI</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light"
          >
            Transform prompts into immersive digital experiences.
            The premium website builder for the next generation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl mx-auto relative mb-12"
          >
            <div className="relative group glow-border rounded-full">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A luxury portfolio for a cinematic photographer..."
                className="w-full bg-black/50 border border-white/10 rounded-full py-5 pl-8 pr-32 text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 backdrop-blur-xl transition-all"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Button size="sm" className="rounded-full px-6">
                  Generate <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-50" />
                </div>
              ))}
            </div>
            <div className="text-left text-sm text-white/60">
              <span className="text-white font-medium">10,000+</span> creators<br />
              building the future
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
