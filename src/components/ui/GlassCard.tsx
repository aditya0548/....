"use client";

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { HTMLMotionProps } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  interactive?: boolean;
  glowColor?: string;
  delay?: number;
}

export function GlassCard({
  className,
  children,
  interactive = true,
  glowColor = 'rgba(59, 130, 246, 0.15)',
  delay = 0,
  ...props
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'group relative rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl overflow-hidden',
        interactive && 'hover:bg-white/[0.04] transition-colors duration-500',
        className
      )}
      onMouseMove={interactive ? handleMouseMove : undefined}
      {...props}
    >
      {interactive && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                ${glowColor},
                transparent 80%
              )
            `,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
