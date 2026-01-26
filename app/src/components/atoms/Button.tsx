import { forwardRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'glass';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  glow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-sunrise to-golden
    text-base font-semibold
    shadow-sunrise hover:shadow-sunrise-lg
    hover:brightness-110
    border border-sunrise/20
  `,
  secondary: `
    bg-elevated/80 backdrop-blur-sm
    text-text-primary
    border border-white/10
    hover:bg-surface hover:border-white/15
    shadow-md hover:shadow-lg
  `,
  ghost: `
    bg-transparent
    text-text-secondary hover:text-text-primary
    hover:bg-glass-light
    border border-transparent hover:border-white/5
  `,
  danger: `
    bg-coral/90 backdrop-blur-sm
    text-white font-semibold
    border border-coral/30
    shadow-coral hover:shadow-lg
    hover:bg-coral
  `,
  success: `
    bg-sage/90 backdrop-blur-sm
    text-base font-semibold
    border border-sage/30
    shadow-sage hover:shadow-lg
    hover:bg-sage
  `,
  glass: `
    bg-glass-medium backdrop-blur-md
    text-text-primary
    border border-white/10
    hover:bg-glass-heavy hover:border-white/15
    shadow-glass
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5 rounded-lg',
  md: 'px-4 py-2.5 text-sm gap-2 rounded-xl',
  lg: 'px-6 py-3 text-base gap-2.5 rounded-xl',
  xl: 'px-8 py-4 text-lg gap-3 rounded-2xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      loading = false,
      fullWidth = false,
      children,
      className = '',
      disabled,
      onClick,
      type = 'button',
      glow = false,
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        whileHover={isDisabled ? {} : { scale: 1.02, y: -1 }}
        whileTap={isDisabled ? {} : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`
          relative inline-flex items-center justify-center font-medium
          transition-all duration-200 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:ring-offset-2 focus-visible:ring-offset-base
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${glow && variant === 'primary' ? 'animate-pulse-glow' : ''}
          ${className}
        `}
        disabled={isDisabled}
        onClick={onClick}
        type={type}
      >
        {/* Gradient overlay for primary buttons */}
        {variant === 'primary' && (
          <span className="absolute inset-0 rounded-inherit bg-gradient-to-t from-black/10 to-white/10 pointer-events-none" />
        )}

        {/* Content */}
        <span className="relative inline-flex items-center justify-center gap-inherit">
          {loading ? (
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <>
              {icon && iconPosition === 'left' && (
                <span className="shrink-0 -ml-0.5">{icon}</span>
              )}
              {children && <span>{children}</span>}
              {icon && iconPosition === 'right' && (
                <span className="shrink-0 -mr-0.5">{icon}</span>
              )}
            </>
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
