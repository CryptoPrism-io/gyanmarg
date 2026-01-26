import { forwardRef, type InputHTMLAttributes, type ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type InputVariant = 'default' | 'glass' | 'filled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  variant?: InputVariant;
}

const variantStyles: Record<InputVariant, string> = {
  default: `
    bg-surface/80
    border-white/10
    hover:border-white/15
    focus:border-sunrise focus:ring-2 focus:ring-sunrise/15
  `,
  glass: `
    bg-glass-light backdrop-blur-md
    border-white/[0.08]
    hover:border-white/[0.12]
    focus:border-sunrise/50 focus:ring-2 focus:ring-sunrise/10
  `,
  filled: `
    bg-elevated
    border-transparent
    hover:bg-surface
    focus:bg-surface focus:border-sunrise/30 focus:ring-2 focus:ring-sunrise/10
  `,
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      fullWidth = true,
      variant = 'default',
      className = '',
      id,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <motion.label
            htmlFor={inputId}
            initial={false}
            animate={{ color: isFocused ? 'rgb(255, 155, 113)' : 'rgb(196, 187, 176)' }}
            className="block text-sm font-medium mb-2 transition-colors"
          >
            {label}
          </motion.label>
        )}
        <div className="relative">
          {leftIcon && (
            <div
              className={`
                absolute left-3.5 top-1/2 -translate-y-1/2
                transition-colors duration-200
                ${isFocused ? 'text-sunrise' : 'text-muted'}
              `}
            >
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`
              w-full px-4 py-3 rounded-xl
              text-text-primary placeholder-muted/60
              border
              transition-all duration-200 ease-out
              focus:outline-none
              disabled:opacity-40 disabled:cursor-not-allowed
              ${variantStyles[variant]}
              ${leftIcon ? 'pl-11' : ''}
              ${rightIcon ? 'pr-11' : ''}
              ${error ? 'border-coral focus:border-coral focus:ring-coral/20' : ''}
              ${className}
            `}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {rightIcon && (
            <div
              className={`
                absolute right-3.5 top-1/2 -translate-y-1/2
                transition-colors duration-200
                ${isFocused ? 'text-sunrise' : 'text-muted'}
              `}
            >
              {rightIcon}
            </div>
          )}
        </div>
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-2 text-sm text-coral flex items-center gap-1.5"
            >
              <span className="shrink-0">!</span>
              {error}
            </motion.p>
          )}
          {hint && !error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm text-muted"
            >
              {hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';

// Search Input - Specialized for search functionality
interface SearchInputProps extends Omit<InputProps, 'leftIcon' | 'type'> {
  onSearch?: (value: string) => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, className = '', ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="search"
        variant="glass"
        placeholder="Search..."
        leftIcon={
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        }
        className={className}
        onChange={(e) => onSearch?.(e.target.value)}
        {...props}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';

// Textarea - Multi-line input
interface TextareaProps extends Omit<InputProps, 'rightIcon'> {
  rows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      fullWidth = true,
      variant = 'default',
      className = '',
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <motion.label
            htmlFor={textareaId}
            initial={false}
            animate={{ color: isFocused ? 'rgb(255, 155, 113)' : 'rgb(196, 187, 176)' }}
            className="block text-sm font-medium mb-2 transition-colors"
          >
            {label}
          </motion.label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3.5 top-3.5 text-muted">
              {leftIcon}
            </div>
          )}
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            className={`
              w-full px-4 py-3 rounded-xl
              text-text-primary placeholder-muted/60
              border resize-none
              transition-all duration-200 ease-out
              focus:outline-none
              disabled:opacity-40 disabled:cursor-not-allowed
              ${variantStyles[variant]}
              ${leftIcon ? 'pl-11' : ''}
              ${error ? 'border-coral focus:border-coral focus:ring-coral/20' : ''}
              ${className}
            `}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        </div>
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-2 text-sm text-coral"
            >
              {error}
            </motion.p>
          )}
          {hint && !error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm text-muted"
            >
              {hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Input;
