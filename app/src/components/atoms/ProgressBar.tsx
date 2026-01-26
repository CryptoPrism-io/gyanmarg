import { motion } from 'framer-motion';

type ProgressVariant = 'default' | 'gradient' | 'xp' | 'streak' | 'success' | 'warning';
type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';

interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  glow?: boolean;
  className?: string;
}

const variantStyles: Record<ProgressVariant, { bg: string; fill: string; glow: string }> = {
  default: {
    bg: 'bg-surface',
    fill: 'bg-sunrise',
    glow: 'shadow-[0_0_12px_rgba(255,155,113,0.4)]',
  },
  gradient: {
    bg: 'bg-surface',
    fill: 'bg-gradient-to-r from-sunrise to-golden',
    glow: 'shadow-[0_0_12px_rgba(255,155,113,0.4)]',
  },
  xp: {
    bg: 'bg-surface',
    fill: 'bg-gradient-to-r from-golden via-sunrise to-golden',
    glow: 'shadow-[0_0_16px_rgba(247,201,72,0.5)]',
  },
  streak: {
    bg: 'bg-surface',
    fill: 'bg-gradient-to-r from-coral to-sunrise',
    glow: 'shadow-[0_0_12px_rgba(255,107,107,0.4)]',
  },
  success: {
    bg: 'bg-surface',
    fill: 'bg-gradient-to-r from-sage to-sage',
    glow: 'shadow-[0_0_12px_rgba(124,182,157,0.4)]',
  },
  warning: {
    bg: 'bg-surface',
    fill: 'bg-golden',
    glow: 'shadow-[0_0_12px_rgba(247,201,72,0.4)]',
  },
};

const sizeStyles: Record<ProgressSize, { height: string; radius: string }> = {
  xs: { height: 'h-1', radius: 'rounded-full' },
  sm: { height: 'h-1.5', radius: 'rounded-full' },
  md: { height: 'h-2', radius: 'rounded-full' },
  lg: { height: 'h-3', radius: 'rounded-lg' },
};

export function ProgressBar({
  value,
  max = 100,
  variant = 'gradient',
  size = 'md',
  showLabel = false,
  label,
  animated = true,
  glow = false,
  className = '',
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const styles = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <div className={`w-full ${className}`}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-sm font-medium text-text-secondary">{label}</span>
          )}
          {showLabel && (
            <span className="text-sm font-medium text-text-primary">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        className={`
          w-full overflow-hidden
          ${styles.bg}
          ${sizeStyle.height}
          ${sizeStyle.radius}
        `}
      >
        <motion.div
          initial={animated ? { width: 0 } : { width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: animated ? 0.8 : 0,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={`
            h-full relative
            ${styles.fill}
            ${sizeStyle.radius}
            ${glow && percentage > 0 ? styles.glow : ''}
          `}
        >
          {animated && percentage > 0 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}

// XP Progress Bar
interface XPProgressBarProps {
  currentXP: number;
  maxXP: number;
  level: number;
  showLevel?: boolean;
  className?: string;
}

export function XPProgressBar({
  currentXP,
  maxXP,
  level,
  showLevel = true,
  className = '',
}: XPProgressBarProps) {
  const percentage = (currentXP / maxXP) * 100;

  return (
    <div className={className}>
      {showLevel && (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <span className="font-display font-semibold text-text-primary">
              Level {level}
            </span>
          </div>
          <span className="text-sm text-text-secondary">
            {currentXP.toLocaleString()} / {maxXP.toLocaleString()} XP
          </span>
        </div>
      )}
      <ProgressBar
        value={currentXP}
        max={maxXP}
        variant="xp"
        size="md"
        glow={percentage > 50}
      />
    </div>
  );
}

export default ProgressBar;
