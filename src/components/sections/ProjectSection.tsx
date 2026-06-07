'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

interface ProjectSectionProps {
  project: 'the-last-tear' | 'divine-conquerors'
  title: string
  subtitle: string
  description: string
  status: string
  ctaLabel: string
  ctaLink?: string
  colors: {
    bg: string
    text: string
    accent: string
  }
  side?: 'left' | 'right'
}

export default function ProjectSection({
  project,
  title,
  subtitle,
  description,
  status,
  ctaLabel,
  ctaLink,
  colors,
  side = 'left',
}: ProjectSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Use scrollYProgress from useScroll for modern Framer Motion
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section
      ref={ref}
      className="h-screen flex items-center justify-between px-16 relative overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y }}
      />

      {/* Text Content */}
      <motion.div
        className={`max-w-2xl z-10 ${side === 'right' ? 'ml-auto' : ''}`}
        style={{ scale }}
        initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          {project.replace('-', ' ')}
        </p>

        <h2 className="text-7xl font-bold text-white mb-4 font-playfair">
          {title}
        </h2>

        <p className="text-xl text-gray-300 italic mb-6 font-lora">
          {subtitle}
        </p>

        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>

        <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
          Status: {status}
        </p>

        {ctaLink ? (
          <a
            href={ctaLink}
            className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            {ctaLabel} →
          </a>
        ) : (
          <button
            disabled
            className="inline-block px-8 py-3 border border-gray-500 text-gray-500 cursor-not-allowed"
          >
            {ctaLabel}
          </button>
        )}
      </motion.div>

      {/* Right side (empty for images) */}
      <div className="flex-1 h-full relative" />
    </section>
  )
}
