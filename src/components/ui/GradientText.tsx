"use client";

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'white' | 'silver';
}

export function GradientText({
  className,
  children,
  variant = 'blue',
  ...props
}: GradientTextProps) {
  const variants = {
    blue: 'bg-gradient-to-r from-blue-400 via-blue-200 to-white',
    purple: 'bg-gradient-to-r from-purple-400 via-blue-400 to-blue-200',
    white: 'bg-gradient-to-r from-white via-white/80 to-white/50',
    silver: 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600',
  };

  return (
    <span
      className={cn(
        'bg-clip-text text-transparent inline-block',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
