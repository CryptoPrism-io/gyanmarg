import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className = '',
  hover = false,
  onClick,
  padding = 'md',
}: CardProps) {
  const Component = onClick || hover ? motion.div : 'div';
  const interactiveProps = onClick || hover
    ? {
        whileHover: { y: -2, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' },
        whileTap: onClick ? { scale: 0.99 } : {},
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={`
        bg-card rounded-2xl border border-border shadow-sm
        transition-colors duration-200
        ${onClick ? 'cursor-pointer' : ''}
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

// Card Header
interface CardHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function CardHeader({
  title,
  subtitle,
  icon,
  action,
  className = '',
}: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-primary">{title}</h3>
          {subtitle && <p className="text-sm text-secondary">{subtitle}</p>}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

// Glass Card variant
export function GlassCard({
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <Card
      className={`
        bg-card/60 backdrop-blur-xl
        border-white/10
        ${className}
      `}
      {...props}
    >
      {children}
    </Card>
  );
}

export default Card;
