// Google Sign In Button Component
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks';
import { useNavigate } from 'react-router-dom';

interface GoogleSignInButtonProps {
  /** Button variant */
  variant?: 'primary' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width button */
  fullWidth?: boolean;
  /** Custom class names */
  className?: string;
  /** Show text or icon only */
  iconOnly?: boolean;
  /** Custom label text */
  label?: string;
  /** Callback after successful sign in */
  onSignIn?: () => void;
}

// Google "G" Logo SVG
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function GoogleSignInButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  iconOnly = false,
  label = 'Sign in with Google',
  onSignIn,
}: GoogleSignInButtonProps) {
  const { signIn, isLoading: authLoading, isConfigured } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();

  const isLoading = authLoading || isSigningIn;

  const handleClick = async () => {
    if (!isConfigured) {
      console.warn('[GoogleSignIn] Firebase not configured');
      return;
    }

    setIsSigningIn(true);
    try {
      const result = await signIn();

      if (result.success) {
        // If onSignIn callback provided, let parent handle navigation
        if (onSignIn) {
          onSignIn();
        } else {
          // Default navigation behavior
          if (result.needsOnboarding) {
            navigate('/onboarding');
          } else {
            navigate('/dashboard');
          }
        }
      }
    } catch (error) {
      console.error('[GoogleSignIn] Error:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-2',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-3',
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300',
    outline: 'bg-transparent text-white hover:bg-white/10 border border-white/30',
  };

  // Don't render if Firebase isn't configured
  if (!isConfigured) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      disabled={isLoading}
      className={`
        inline-flex items-center justify-center font-medium rounded-xl
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {isLoading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className={`${iconSizeClasses[size]} border-2 border-gray-300 border-t-gray-600 rounded-full`}
        />
      ) : (
        <GoogleLogo className={iconSizeClasses[size]} />
      )}
      {!iconOnly && (
        <span>{isLoading ? 'Signing in...' : label}</span>
      )}
    </motion.button>
  );
}

export default GoogleSignInButton;
