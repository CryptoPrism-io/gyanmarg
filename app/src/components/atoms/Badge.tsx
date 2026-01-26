import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'premium' | 'outline';
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  glow?: boolean;
  pulse?: boolean;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface/80 text-text-secondary border-white/5',
  primary: 'bg-sunrise/10 text-sunrise border-sunrise/20',
  success: 'bg-sage/10 text-sage border-sage/20',
  warning: 'bg-golden/10 text-golden border-golden/20',
  error: 'bg-coral/10 text-coral border-coral/20',
  info: 'bg-sky/10 text-sky border-sky/20',
  premium: 'bg-lavender/10 text-lavender border-lavender/20',
  outline: 'bg-transparent text-text-secondary border-white/10',
};

const glowStyles: Record<BadgeVariant, string> = {
  default: '',
  primary: 'shadow-[0_0_12px_rgba(255,155,113,0.3)]',
  success: 'shadow-[0_0_12px_rgba(124,182,157,0.3)]',
  warning: 'shadow-[0_0_12px_rgba(247,201,72,0.3)]',
  error: 'shadow-[0_0_12px_rgba(255,107,107,0.3)]',
  info: 'shadow-[0_0_12px_rgba(110,198,255,0.3)]',
  premium: 'shadow-[0_0_12px_rgba(155,143,232,0.3)]',
  outline: '',
};

const dotStyles: Record<BadgeVariant, string> = {
  default: 'bg-text-muted',
  primary: 'bg-sunrise',
  success: 'bg-sage',
  warning: 'bg-golden',
  error: 'bg-coral',
  info: 'bg-sky',
  premium: 'bg-lavender',
  outline: 'bg-text-muted',
};

const sizeStyles: Record<BadgeSize, string> = {
  xs: 'px-1.5 py-0.5 text-[10px] gap-1',
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-2.5 py-1 text-xs gap-1.5',
  lg: 'px-3 py-1.5 text-sm gap-2',
};

export function Badge({
  variant = 'default',
  size = 'sm',
  icon,
  children,
  className = '',
  glow = false,
  pulse = false,
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full border
        backdrop-blur-sm
        transition-all duration-200
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${glow ? glowStyles[variant] : ''}
        ${className}
      `}
    >
      {dot && (
        <motion.span
          animate={pulse ? { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className={`w-1.5 h-1.5 rounded-full ${dotStyles[variant]}`}
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

// XP Badge - Special badge for experience points
interface XPBadgeProps {
  xp: number;
  size?: BadgeSize;
  className?: string;
  showIcon?: boolean;
}

export function XPBadge({
  xp,
  size = 'sm',
  className = '',
  showIcon = true,
}: XPBadgeProps) {
  return (
    <Badge
      variant="warning"
      size={size}
      glow
      className={className}
      icon={showIcon ? <span className="text-golden">+</span> : undefined}
    >
      {xp} XP
    </Badge>
  );
}

// Level Badge - For displaying user level
interface LevelBadgeProps {
  level: number;
  size?: BadgeSize;
  className?: string;
}

export function LevelBadge({
  level,
  size = 'sm',
  className = '',
}: LevelBadgeProps) {
  return (
    <Badge
      variant="premium"
      size={size}
      glow
      className={className}
      icon={<span>⭐</span>}
    >
      Level {level}
    </Badge>
  );
}

// Streak Badge - For displaying streaks
interface StreakBadgeProps {
  streak: number;
  size?: BadgeSize;
  className?: string;
}

export function StreakBadge({
  streak,
  size = 'sm',
  className = '',
}: StreakBadgeProps) {
  return (
    <Badge
      variant="error"
      size={size}
      glow={streak >= 7}
      className={className}
      icon={<span>🔥</span>}
    >
      {streak} day{streak !== 1 ? 's' : ''}
    </Badge>
  );
}

// Status Badge - For completion states
type StatusType = 'completed' | 'in-progress' | 'locked' | 'new';

interface StatusBadgeProps {
  status: StatusType;
  size?: BadgeSize;
  className?: string;
}

const statusConfig: Record<StatusType, { variant: BadgeVariant; label: string; icon: string }> = {
  completed: { variant: 'success', label: 'Completed', icon: '✓' },
  'in-progress': { variant: 'primary', label: 'In Progress', icon: '→' },
  locked: { variant: 'default', label: 'Locked', icon: '🔒' },
  new: { variant: 'info', label: 'New', icon: '✨' },
};

export function StatusBadge({
  status,
  size = 'sm',
  className = '',
}: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge
      variant={config.variant}
      size={size}
      className={className}
      dot={status === 'in-progress'}
      pulse={status === 'in-progress'}
    >
      {config.icon} {config.label}
    </Badge>
  );
}

export default Badge;
