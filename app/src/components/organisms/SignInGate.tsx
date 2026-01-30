// Sign In Gate - Modal that requires authentication before accessing features
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Brain, Zap, Shield } from 'lucide-react';
import { GoogleSignInButton } from '@/components/molecules';

interface SignInGateProps {
  isOpen: boolean;
  onClose?: () => void;
  onSignIn?: () => void;
}

export function SignInGate({ isOpen, onClose, onSignIn }: SignInGateProps) {
  const features = [
    { icon: Brain, text: 'Personalized learning path' },
    { icon: Zap, text: 'Track your progress & XP' },
    { icon: Sparkles, text: 'Sync across all devices' },
    { icon: Shield, text: 'Your data, securely saved' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md glass border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            {/* Close button (optional - only if onClose provided) */}
            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition rounded-lg hover:bg-white/10"
              >
                <X size={20} />
              </button>
            )}

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4">
                <Sparkles className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Sign in to continue
              </h2>
              <p className="text-gray-400 text-sm">
                Create your free account to unlock all features
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <feature.icon size={16} className="text-amber-500" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Sign in button */}
            <GoogleSignInButton
              variant="primary"
              size="lg"
              fullWidth
              label="Continue with Google"
              onSignIn={onSignIn}
            />

            {/* Footer */}
            <p className="text-center text-xs text-gray-500 mt-6">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SignInGate;
