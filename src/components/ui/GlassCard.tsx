"use client";

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xValue = useMotionValue(0);
  const yValue = useMotionValue(0);

  const rotateX = useSpring(useTransform(yValue, [-1, 1], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(xValue, [-1, 1], [-5, 5]), { stiffness: 150, damping: 20 });

  function handleMouseMove({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();

    // For glow
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // For 3D tilt
    const xPct = (clientX - left - width / 2) / (width / 2);
    const yPct = (clientY - top - height / 2) / (height / 2);
    xValue.set(xPct);
    yValue.set(yPct);
  }

  function handleMouseLeave() {
    xValue.set(0);
    yValue.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      animate={
        interactive
          ? {
              y: [0, -5, 0],
            }
          : undefined
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
        y: interactive ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined,
      }}
      style={{
        perspective: 1000,
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'group relative rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50',
        interactive && 'hover:bg-white/[0.04] transition-colors duration-500 hover:border-white/20',
        className
      )}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
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
