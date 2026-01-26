import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type CardVariant = 'default' | 'glass' | 'elevated' | 'accent' | 'outlined';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  hover?: boolean;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  animate?: boolean;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
  xl: 'p-8',
};

const variantStyles: Record<CardVariant, string> = {
  default: `
    bg-elevated/90
    border border-white/[0.08]
    shadow-md
    backdrop-blur-sm
  `,
  glass: `
    bg-elevated/80 backdrop-blur-xl
    border border-white/[0.1]
    shadow-lg shadow-black/20
  `,
  elevated: `
    bg-surface/90
    border border-white/[0.1]
    shadow-lg
    backdrop-blur-sm
  `,
  accent: `
    bg-elevated/70 backdrop-blur-xl
    border border-sunrise/25
    shadow-glow
  `,
  outlined: `
    bg-base/50
    border border-white/10
    backdrop-blur-sm
  `,
};

export function Card({
  children,
  className = '',
  variant = 'default',
  hover = false,
  onClick,
  padding = 'md',
  glow = false,
  animate = true,
}: CardProps) {
  const isInteractive = onClick || hover;
  const Component = isInteractive && animate ? motion.div : 'div';

  const interactiveProps = isInteractive && animate
    ? {
        whileHover: {
          y: -2,
          scale: 1.01,
          transition: { type: 'spring', stiffness: 400, damping: 17 },
        },
        whileTap: onClick ? { scale: 0.99 } : {},
      }
    : {};

  return (
    <Component
      className={`
        rounded-2xl
        transition-all duration-200
        ${variantStyles[variant]}
        ${onClick ? 'cursor-pointer' : ''}
        ${isInteractive ? 'hover:border-white/[0.12] hover:shadow-lg' : ''}
        ${glow ? 'shadow-glow animate-pulse-glow' : ''}
        ${paddingStyles[padding]}
        ${className}
      `}
      onClick={onClick}
      {...interactiveProps}
    >
      {children}
    </Component>
  );
}

// Card Header - Premium styling
interface CardHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
  iconColor?: 'sunrise' | 'golden' | 'sage' | 'lavender' | 'coral' | 'sky';
}

const iconColorStyles: Record<string, string> = {
  sunrise: 'bg-sunrise/10 text-sunrise border-sunrise/20',
  golden: 'bg-golden/10 text-golden border-golden/20',
  sage: 'bg-sage/10 text-sage border-sage/20',
  lavender: 'bg-lavender/10 text-lavender border-lavender/20',
  coral: 'bg-coral/10 text-coral border-coral/20',
  sky: 'bg-sky/10 text-sky border-sky/20',
};

export function CardHeader({
  title,
  subtitle,
  icon,
  action,
  className = '',
  iconColor = 'sunrise',
}: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`
              w-11 h-11 rounded-xl border
              flex items-center justify-center
              ${iconColorStyles[iconColor]}
            `}
          >
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-display font-semibold text-text-text-primary">{title}</h3>
          {subtitle && (
            <p className="text-sm text-text-secondary mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

// Glass Card variant - Shorthand
export function GlassCard({
  children,
  className = '',
  ...props
}: Omit<CardProps, 'variant'>) {
  return (
    <Card variant="glass" className={className} {...props}>
      {children}
    </Card>
  );
}

// Accent Card variant - For highlighting important content
export function AccentCard({
  children,
  className = '',
  ...props
}: Omit<CardProps, 'variant'>) {
  return (
    <Card variant="accent" className={className} {...props}>
      {children}
    </Card>
  );
}

// Feature Card - For showcasing features/modules
interface FeatureCardProps extends Omit<CardProps, 'variant'> {
  icon: ReactNode;
  title: string;
  description?: string;
  iconColor?: 'sunrise' | 'golden' | 'sage' | 'lavender' | 'coral' | 'sky';
  badge?: ReactNode;
}

export function FeatureCard({
  icon,
  title,
  description,
  iconColor = 'sunrise',
  badge,
  children,
  className = '',
  ...props
}: FeatureCardProps) {
  return (
    <Card
      variant="glass"
      hover
      className={`group ${className}`}
      {...props}
    >
      <div className="flex items-start gap-4">
        <div
          className={`
            w-12 h-12 rounded-xl border shrink-0
            flex items-center justify-center
            transition-transform duration-300 group-hover:scale-110
            ${iconColorStyles[iconColor]}
          `}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-semibold text-text-text-primary truncate">
              {title}
            </h3>
            {badge}
          </div>
          {description && (
            <p className="text-sm text-text-secondary mt-1 line-clamp-2">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </Card>
  );
}

// Stat Card - For displaying metrics
interface StatCardProps extends Omit<CardProps, 'variant'> {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: { value: number; isPositive: boolean };
  iconColor?: 'sunrise' | 'golden' | 'sage' | 'lavender' | 'coral' | 'sky';
}

export function StatCard({
  label,
  value,
  icon,
  trend,
  iconColor = 'sunrise',
  className = '',
  ...props
}: StatCardProps) {
  return (
    <Card variant="glass" className={className} {...props}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-text-muted font-medium">{label}</p>
          <p className="text-2xl font-display font-bold text-text-text-primary mt-1">
            {value}
          </p>
          {trend && (
            <div
              className={`
                flex items-center gap-1 mt-2 text-sm font-medium
                ${trend.isPositive ? 'text-sage' : 'text-coral'}
              `}
            >
              <span>{trend.isPositive ? '↑' : '↓'}</span>
              <span>{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        {icon && (
          <div
            className={`
              w-10 h-10 rounded-lg border
              flex items-center justify-center
              ${iconColorStyles[iconColor]}
            `}
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export default Card;
