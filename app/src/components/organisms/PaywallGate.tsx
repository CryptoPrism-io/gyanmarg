// PaywallGate - Modal presenting ₹99/module or ₹999/lifetime purchase options
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Shield, Star } from 'lucide-react';

interface PaywallGateProps {
  moduleId: string | null;     // null = generic lifetime upsell only
  moduleName?: string;         // display name for the specific module
  onClose: () => void;
  onPurchaseModule?: (moduleId: string) => void;   // ₹99 single module
  onPurchaseLifetime?: () => void;                  // ₹999 lifetime
}

export function PaywallGate({
  moduleId,
  moduleName,
  onClose,
  onPurchaseModule,
  onPurchaseLifetime,
}: PaywallGateProps) {
  const displayName = moduleName ?? 'This Module';

  function handlePurchaseModule() {
    if (moduleId && onPurchaseModule) {
      onPurchaseModule(moduleId);
    }
  }

  function handlePurchaseLifetime() {
    if (onPurchaseLifetime) {
      onPurchaseLifetime();
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        key="paywall-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Modal card — stop propagation so clicks inside don't close */}
        <motion.div
          key="paywall-modal"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-[#111113] border border-white/10 rounded-2xl p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition rounded-lg hover:bg-white/10"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-5">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4">
              <Lock className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-1">
              Unlock to Continue
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              {moduleId
                ? `Get full access to ${displayName} — all lessons, quizzes, and insights.`
                : 'Unlock all 76 modules with a one-time lifetime pass.'}
            </p>
          </div>

          {/* 21-day money-back guarantee badge */}
          <div className="flex items-center justify-center mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              <Shield size={12} />
              21-Day Money-Back Guarantee — No questions asked
            </span>
          </div>

          {/* Purchase option cards */}
          <div className={`grid gap-3 mb-5 ${moduleId ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {/* Single module — only shown when moduleId is set */}
            {moduleId && (
              <div className="flex flex-col items-center p-4 rounded-xl border border-white/10 bg-white/5 hover:border-amber-500/30 transition-colors">
                <span className="text-xs text-gray-400 mb-1">This Module</span>
                <span className="text-3xl font-bold text-white mb-1">₹99</span>
                <p className="text-xs text-gray-400 text-center mb-4 leading-relaxed">
                  Unlock {displayName} forever
                </p>
                <button
                  onClick={handlePurchaseModule}
                  className="w-full py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold transition-colors"
                >
                  Unlock for ₹99
                </button>
              </div>
            )}

            {/* Lifetime access */}
            <div className="flex flex-col items-center p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 relative">
              {/* Best value badge */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wide">
                <Star size={9} fill="currentColor" />
                Best Value
              </span>
              <span className="text-xs text-amber-400 mb-1 mt-1">Lifetime Access</span>
              <span className="text-3xl font-bold text-white mb-1">₹999</span>
              <p className="text-xs text-gray-400 text-center mb-4 leading-relaxed">
                All 76 modules forever
              </p>
              <button
                onClick={handlePurchaseLifetime}
                className="w-full py-2 px-3 rounded-lg bg-white hover:bg-gray-100 text-black text-sm font-semibold transition-colors"
              >
                Get Lifetime ₹999
              </button>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-[11px] text-gray-500">
            Payments secured by Razorpay · UPI · Cards · Net Banking
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PaywallGate;
