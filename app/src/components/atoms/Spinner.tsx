import { motion } from 'framer-motion';

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
type SpinnerVariant = 'sunrise' | 'golden' | 'lavender' | 'sage' | 'white';

interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  className?: string;
}

const sizeStyles: Record<SpinnerSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

const variantStyles: Record<SpinnerVariant, string> = {
  sunrise: 'text-sunrise',
  golden: 'text-golden',
  lavender: 'text-lavender',
  sage: 'text-sage',
  white: 'text-white',
};

export function Spinner({ size = 'md', variant = 'sunrise', className = '' }: SpinnerProps) {
  return (
    <svg
      className={`animate-spin ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
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
  );
}

// Animated dots loader for inline loading states
export function DotsLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-sunrise"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}

// Premium loading overlay with glassmorphism
export function LoadingOverlay({
  message = 'Loading...',
  submessage,
}: {
  message?: string;
  submessage?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-base/80 backdrop-blur-xl flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-white/10 text-center max-w-xs"
      >
        {/* Animated gradient ring */}
        <div className="relative w-16 h-16 mx-auto mb-5">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sunrise via-golden to-coral opacity-30 blur-lg animate-pulse" />
          <div className="relative w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center">
            <Spinner size="lg" variant="sunrise" />
          </div>
        </div>

        <p className="font-display font-semibold text-text-primary mb-1">{message}</p>
        {submessage && (
          <p className="text-sm text-text-muted">{submessage}</p>
        )}
      </motion.div>
    </motion.div>
  );
}

// Inline loading button state
export function ButtonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Spinner size="sm" variant="white" />
      <span>Loading...</span>
    </div>
  );
}

export default Spinner;
