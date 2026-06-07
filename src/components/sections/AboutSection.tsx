'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const aboutText = [
  "I make stories because I have to.",
  "",
  "Not to impress. Not for money. Not for anything external.",
  "Because somewhere along the way, I realized this is what I'm meant to do.",
  "And maybe, just maybe, it will change something for people who need it.",
  "",
  "The Last Tear exists because one day the feeling hit me.",
  "Being lost. Trying. Still failing.",
  "Winning doesn't always happen in normal life.",
  "So I wrote about that. About what it feels like when you lose.",
  "And it became this thing. This film.",
  "",
  "Divine Conquerors though—",
  "It means everything. More than I can put into words.",
  "It's the closest thing to my soul right now.",
  "",
  "People measure success by money. By position. By what they can show.",
  "I'll measure mine by finishing DC.",
  "By proving that normal people can become legends.",
  "That success isn't a number. It's a feeling you can't define but you know when it's real.",
  "",
  "This portfolio isn't about showing you what I've done.",
  "It's about showing you what I'm becoming.",
]

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="min-h-screen py-24 flex items-center justify-center bg-black px-8">
      <motion.div
        className="max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {aboutText.map((line, i) => (
          <motion.p
            key={i}
            variants={itemVariants}
            className={`text-lg leading-relaxed mb-2 ${
              line === '' ? 'h-4' : 'text-gray-300 font-lora'
            }`}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}
