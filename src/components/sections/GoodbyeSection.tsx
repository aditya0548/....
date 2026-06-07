'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const goodbyeLines = [
  "Some stories end with answers.",
  "Some end with questions.",
  "",
  "This one is still being written.",
  "",
  "Follow the journey.",
]

export default function GoodbyeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
      <motion.div
        className="max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {goodbyeLines.map((line, i) => (
          <motion.p
            key={i}
            variants={itemVariants}
            className={`text-2xl mb-4 ${
              line === '' ? 'h-6' : 'text-gray-300 font-inter'
            }`}
          >
            {line}
          </motion.p>
        ))}

        <motion.div
          variants={itemVariants}
          className="mt-12 space-y-4"
        >
          <a
            href="https://www.youtube.com/@TheIntrovertAnimates"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-105"
          >
            YouTube: The Introvert Animates
          </a>
          <a
            href="https://www.instagram.com/theintrovertanimates"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-105"
          >
            Instagram: @theintrovertanimates
          </a>
          <a
            href="mailto:theintrovertanimates@gmail.com"
            className="block text-sm text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-105"
          >
            Email: theintrovertanimates@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
