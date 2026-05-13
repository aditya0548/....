"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

const TESTIMONIALS = [
  {
    quote: "VELTRIX fundamentally changed how our agency operates. We can now iterate on concepts in minutes instead of weeks, without sacrificing the premium feel our luxury clients expect.",
    author: "Elena Rostova",
    role: "Creative Director, Studio Nexus",
    avatar: "ER"
  },
  {
    quote: "The physics-based animation engine is pure magic. It applies GSAP-level motion interactions automatically, something that used to take our lead developer days to perfect.",
    author: "Marcus Chen",
    role: "Founder, Frame Interactive",
    avatar: "MC"
  },
  {
    quote: "I was skeptical about AI-generated websites, but the code output is cleaner than what most junior developers write. It uses semantic HTML and modern CSS architectures perfectly.",
    author: "Sarah Jenkins",
    role: "Lead Engineer, TechFlow",
    avatar: "SJ"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Visionaries</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-8 flex flex-col h-full relative group">
              <div className="absolute top-8 right-8 text-6xl text-white/5 font-serif leading-none group-hover:text-blue-500/10 transition-colors duration-500">
                &quot;
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-8 flex-1 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-white font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
