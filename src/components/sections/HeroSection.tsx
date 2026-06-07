'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-4">TIA STUDIO</h1>
        <p className="text-lg text-gray-400 italic">Mysteries unfold as you scroll.</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 text-gray-500"
      >
        ↓
      </motion.div>
    </section>
  )
}
