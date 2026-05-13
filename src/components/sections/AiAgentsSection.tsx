"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { Brain, Palette, Code2, LineChart, Server } from 'lucide-react';

const AGENTS = [
  {
    id: 'design',
    name: 'Design Agent',
    icon: Palette,
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-400',
    delay: 0,
    yOffset: 20
  },
  {
    id: 'animation',
    name: 'Animation Agent',
    icon: Code2,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    delay: 0.2,
    yOffset: -20
  },
  {
    id: 'seo',
    name: 'SEO Agent',
    icon: LineChart,
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400',
    delay: 0.4,
    yOffset: 30
  },
  {
    id: 'deployment',
    name: 'Deploy Agent',
    icon: Server,
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    delay: 0.6,
    yOffset: -10
  }
];

export function AiAgentsSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-black border-y border-white/5">
      {/* Background Neural Mesh Effect (Simplified for CSS) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Multi-Agent System</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              A specialized team of <GradientText variant="blue">AI experts</GradientText> working for you.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl max-w-xl"
            >
              VELTRIX operates using a swarm of specialized AI agents. While the Design Agent crafts the UI, the Animation Engine applies physics, and the SEO Agent optimizes structure—all simultaneously.
            </motion.p>
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-2 gap-6 relative">
              {AGENTS.map((agent) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: agent.yOffset + 50 }}
                  whileInView={{ opacity: 1, y: agent.yOffset }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: agent.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  animate={{
                    y: [agent.yOffset, agent.yOffset - 15, agent.yOffset],
                  }}
                  className={`w-48 h-48 rounded-2xl bg-gradient-to-br ${agent.color} border ${agent.borderColor} backdrop-blur-xl p-6 flex flex-col items-center justify-center gap-4 shadow-2xl relative group`}
                >
                  <div className={`absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-md pointer-events-none`} />
                  <agent.icon className={`w-10 h-10 ${agent.textColor}`} />
                  <span className="font-semibold text-white/90 text-center">{agent.name}</span>

                  {/* Activity Indicator */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    <motion.div
                      className={`w-1.5 h-1.5 rounded-full ${agent.textColor.replace('text-', 'bg-')}`}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Central Hub Connection Lines (Abstract Representation) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center z-20">
              <Brain className="w-8 h-8 text-white/80" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
