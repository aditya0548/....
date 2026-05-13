"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  magnetic?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  magnetic = false,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !magnetic) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.2);
    mouseY.set(y * 0.2);
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const variants = {
    primary: 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)]',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10',
    outline: 'border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'relative inline-flex items-center justify-center font-medium transition-colors duration-300 rounded-full overflow-hidden',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 hover:opacity-100 transition-opacity" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
