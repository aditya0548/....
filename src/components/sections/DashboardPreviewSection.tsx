"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { Plus, MoreHorizontal, Activity, LayoutTemplate, Clock, Code2 } from 'lucide-react';

const PROJECTS = [
  { name: 'Cinematic Studio', status: 'Deployed', time: '2m ago', traffic: '+24%', type: 'Portfolio' },
  { name: 'Aura Commerce', status: 'Generating', time: 'Just now', traffic: '-', type: 'E-commerce' },
  { name: 'Nexus AI Landing', status: 'Draft', time: '1d ago', traffic: '-', type: 'SaaS' },
];

export function DashboardPreviewSection() {
  return (
    <section className="py-32 relative bg-black">
      <div className="container mx-auto px-6">

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Command <GradientText variant="silver">Center</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Manage your AI-generated empire from a centralized, high-performance dashboard designed for modern creators.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Dashboard Container */}
          <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Sidebar & Main Content Layout */}
            <div className="flex h-[600px]">

              {/* Sidebar */}
              <div className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col gap-8 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="font-bold text-blue-400">V</span>
                  </div>
                  <span className="font-semibold text-white/90">Workspace</span>
                </div>

                <nav className="flex flex-col gap-2">
                  {['Projects', 'Analytics', 'Templates', 'Domains', 'Settings'].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="text-xs text-white/50 mb-2">Generations Used</div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-white/90">24 / 100</span>
                      <span className="text-blue-400">Pro</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-1/4 h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 flex flex-col min-w-0 bg-black/40">
                {/* Header */}
                <header className="h-16 border-b border-white/10 px-8 flex items-center justify-between">
                  <h3 className="font-semibold text-white/90 text-lg">Projects</h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
                    <Plus className="w-4 h-4" /> New Site
                  </button>
                </header>

                {/* Content Grid */}
                <div className="p-8 flex-1 overflow-y-auto">

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: 'Total Views', value: '124.5K', icon: Activity, trend: '+12%' },
                      { label: 'Avg. Load Time', value: '0.8s', icon: Clock, trend: '-0.2s' },
                      { label: 'Active Sites', value: '12', icon: LayoutTemplate, trend: '+2' },
                    ].map((stat, i) => (
                      <div key={i} className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                        <div className="flex items-center justify-between mb-4">
                          <stat.icon className="w-5 h-5 text-white/50" />
                          <span className="text-xs font-medium text-green-400">{stat.trend}</span>
                        </div>
                        <div className="text-2xl font-bold text-white/90 mb-1">{stat.value}</div>
                        <div className="text-sm text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Project List */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-xs font-medium text-white/50">
                      <div className="col-span-5">Name</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">Updated</div>
                      <div className="col-span-1"></div>
                    </div>

                    <div className="divide-y divide-white/5">
                      {PROJECTS.map((project, i) => (
                        <div key={i} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group cursor-pointer">
                          <div className="col-span-5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/5 flex items-center justify-center">
                              <Code2 className="w-4 h-4 text-white/70" />
                            </div>
                            <span className="font-medium text-white/90">{project.name}</span>
                          </div>
                          <div className="col-span-2">
                            <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium border
                              ${project.status === 'Deployed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                project.status === 'Generating' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                'bg-white/5 text-white/60 border-white/10'}`}
                            >
                              {project.status === 'Generating' && <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                              {project.status === 'Deployed' && <div className="w-1.5 h-1.5 rounded-full bg-green-400" />}
                              {project.status}
                            </span>
                          </div>
                          <div className="col-span-2 text-sm text-white/60">{project.type}</div>
                          <div className="col-span-2 text-sm text-white/60">{project.time}</div>
                          <div className="col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1.5 hover:bg-white/10 rounded-md text-white/50 hover:text-white">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
