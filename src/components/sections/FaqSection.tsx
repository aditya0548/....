"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "Can I export the code?",
    answer: "Yes, users on the Creator Pro plan and above can export the fully functional, clean Next.js/React and Tailwind CSS codebase. The code is structured professionally, mimicking human-written architecture."
  },
  {
    question: "Is hosting included?",
    answer: "Yes, all generated websites are automatically deployed to our global edge network powered by Vercel. You get instant previews and blazing fast load times worldwide."
  },
  {
    question: "Does it support custom domains?",
    answer: "Absolutely. Creator Pro and Studio plans allow you to connect your own custom domains with automatic SSL certificate provisioning."
  },
  {
    question: "Are the generated websites mobile responsive?",
    answer: "100%. Our AI engine automatically builds fluid, responsive layouts that adapt perfectly to mobile, tablet, and desktop viewports using modern CSS techniques."
  },
  {
    question: "Can teams collaborate on projects?",
    answer: "Yes, the Studio plan is designed specifically for teams. You get shared workspaces, granular permission controls, and real-time multiplayer editing capabilities."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white/90">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/50"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
