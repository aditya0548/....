"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function FinalCtaSection() {
  return (
    <section className="relative py-40 overflow-hidden bg-black border-t border-white/5">
      {/* Immersive background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Build Beyond <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
              Templates
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
            Stop assembling generic blocks. Start generating cinematic, premium digital experiences tailored exactly to your vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" magnetic>
              Start Creating
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
