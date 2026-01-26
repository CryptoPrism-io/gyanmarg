import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  color?: 'accent' | 'success' | 'warning' | 'error' | 'purple' | 'amber';
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  className?: string;
}

const colorStyles = {
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
  },
  success: {
    bg: 'bg-success/10',
    text: 'text-success',
  },
  warning: {
    bg: 'bg-warning/10',
    text: 'text-warning',
  },
  error: {
    bg: 'bg-error/10',
    text: 'text-error',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-500',
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-500',
  },
};

export function StatCard({
  icon,
  label,
  value,
  color = 'accent',
  trend,
  className = '',
}: StatCardProps) {
  const colors = colorStyles[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        ${colors.bg} rounded-xl p-4 border border-border/30
        ${className}
      `}
    >
      <div className={`${colors.text} mb-3`}>{icon}</div>
      <motion.p
        className="text-2xl font-semibold text-text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {value}
      </motion.p>
      <div className="flex items-center justify-between mt-1">
        <p className="text-xs text-muted">{label}</p>
        {trend && (
          <span
            className={`text-xs font-medium ${
              trend.direction === 'up' ? 'text-success' : 'text-error'
            }`}
          >
            {trend.direction === 'up' ? '+' : '-'}
            {trend.value}%
          </span>
        )}
      </div>
    </motion.div>
  );
}

// Compact stat for inline displays
interface CompactStatProps {
  icon: ReactNode;
  value: string | number;
  label?: string;
  color?: string;
}

export function CompactStat({ icon, value, label, color = 'text-accent' }: CompactStatProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={color}>{icon}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
      {label && <span className="text-muted text-sm">{label}</span>}
    </div>
  );
}

export default StatCard;
