import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassVisualizationProps {
  children: ReactNode;
  className?: string;
}

export function GlassVisualization({ children, className = '' }: GlassVisualizationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden rounded-2xl p-4 md:p-6
        bg-gradient-to-br from-black/80 via-black/60 to-black/40
        backdrop-blur-xl
        border border-white/[0.08]
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.4)]
        ${className}
      `}
    >
      {/* Top highlight edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-purple-500/[0.02] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default GlassVisualization;
