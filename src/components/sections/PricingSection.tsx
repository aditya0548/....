"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import { Check, Sparkles } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for exploring the capabilities of AI generation.',
    features: [
      '3 Projects',
      'Limited AI generations',
      'Veltrix branding',
      'Community support',
      'Standard templates'
    ],
    buttonText: 'Start for free',
    buttonVariant: 'outline' as const,
  },
  {
    name: 'Creator Pro',
    price: '$24',
    period: '/month',
    description: 'For professional creators building multiple projects.',
    features: [
      'Unlimited projects',
      'Premium templates',
      'AI Animation Engine',
      'Custom domains',
      'Export raw code',
      'Priority generation queue'
    ],
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Studio',
    price: '$79',
    period: '/month',
    description: 'For agencies and teams managing client projects.',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Advanced AI agents (SEO, Copy)',
      'White-label export',
      'Analytics dashboard',
      'Dedicated support'
    ],
    buttonText: 'Get Studio',
    buttonVariant: 'secondary' as const,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom infrastructure and dedicated AI models.',
    features: [
      'Everything in Studio',
      'Custom AI model training',
      'SSO & Advanced Security',
      'SLA guarantee',
      'Dedicated success manager'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'ghost' as const,
  }
];

export function PricingSection() {
  return (
    <section className="py-32 relative bg-black border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Simple, <GradientText variant="blue">Transparent</GradientText> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Choose the perfect plan for your needs. Upgrade anytime as your projects grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-900/20 to-black border border-blue-500/30'
                  : 'bg-white/[0.02] border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <Sparkles className="w-3 h-3" /> MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium text-white/90 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-white/50">{plan.period}</span>}
                </div>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-5 h-5 text-blue-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.buttonVariant}
                className={`w-full ${plan.popular ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : ''}`}
                magnetic={plan.popular}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
