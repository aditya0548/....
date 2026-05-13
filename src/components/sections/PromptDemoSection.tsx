"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Palette, Zap, CheckCircle2 } from 'lucide-react';

const GENERATION_STEPS = [
  { icon: Palette, text: "Analyzing design intent..." },
  { icon: Layout, text: "Structuring cinematic layout..." },
  { icon: Code, text: "Generating responsive components..." },
  { icon: Zap, text: "Applying motion physics..." },
  { icon: CheckCircle2, text: "Finalizing premium experience" },
];

export function PromptDemoSection() {
  const [step, setStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGenerating) {
      interval = setInterval(() => {
        setStep((prev) => {
          if (prev >= GENERATION_STEPS.length - 1) {
            clearInterval(interval);
            setTimeout(() => setIsGenerating(false), 2000);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  // Simulate hover to trigger generation for demo purposes
  const handleMouseEnter = () => {
    if (!isGenerating && step === 0) {
      setIsGenerating(true);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            From Prompt to <span className="text-gradient">Production</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Watch as our advanced AI engine dissects your intent and builds a fully functional, premium website in seconds.
          </motion.p>
        </div>

        <div
          className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden shadow-2xl relative"
          onMouseEnter={handleMouseEnter}
        >
          {/* Mock Browser Header */}
          <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="mx-auto bg-black/50 border border-white/10 rounded-md px-32 py-1 text-xs text-white/40 font-mono">
              veltrix.ai/preview
            </div>
          </div>

          <div className="p-8 md:p-12 min-h-[500px] flex flex-col relative">

            {/* Prompt input simulation */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 max-w-2xl mx-auto w-full relative z-20"
              initial={{ y: 0 }}
              animate={{ y: isGenerating || step > 0 ? -20 : 0, opacity: isGenerating || step > 0 ? 0.5 : 1 }}
            >
              <div className="text-white/80 font-mono text-sm">
                &gt; Create a dark-mode portfolio for a 3D artist with a glassmorphism hero section and horizontal scroll gallery.
              </div>
            </motion.div>

            {/* Generation UI */}
            <div className="flex-1 relative flex items-center justify-center">

              <AnimatePresence>
                {isGenerating && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <div className="relative w-24 h-24 mb-8">
                      <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin" />
                      <div className="absolute inset-2 rounded-full border-r-2 border-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>

                    <div className="h-8 relative w-64 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={step}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center gap-2 text-white/80"
                        >
                          {React.createElement(GENERATION_STEPS[step].icon, { className: "w-5 h-5 text-blue-400" })}
                          <span>{GENERATION_STEPS[step].text}</span>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="w-64 h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((step + 1) / GENERATION_STEPS.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Fake Website Preview */}
              <AnimatePresence>
                {!isGenerating && step >= GENERATION_STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 bg-black/80 rounded-xl overflow-hidden border border-white/10 flex flex-col"
                  >
                    {/* Mock Website Header */}
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                      <div className="text-xl font-bold tracking-widest text-white">STUDIO X</div>
                      <div className="flex gap-6 text-sm text-white/60">
                        <span>Work</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>
                    </div>
                    {/* Mock Website Body */}
                    <div className="flex-1 p-8 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />

                      <div className="text-center z-10">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs mb-6 text-white/80">
                          Digital Artist & Director
                        </div>
                        <h1 className="text-5xl font-bold mb-6 tracking-tighter">
                          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital</span> Realities
                        </h1>
                        <div className="w-32 h-10 mx-auto rounded-full bg-white text-black flex items-center justify-center text-sm font-medium">
                          View Work
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
