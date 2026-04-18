// FreeTrialGate — 3-state modal: no trial / trial active (auto-close) / trial expired
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { PaywallGate } from '@/components/organisms/PaywallGate';

interface FreeTrialGateProps {
  onClose: () => void;
  moduleId?: string | null;   // context hint (which module triggered it), optional
  moduleName?: string;
}

export function FreeTrialGate({ onClose, moduleId, moduleName }: FreeTrialGateProps) {
  const trialStartDate = useUserStore(s => s.trialStartDate);
  const isTrialActive = useUserStore(s => s.isTrialActive);
  const isTrialExpired = useUserStore(s => s.isTrialExpired);
  const startTrial = useUserStore(s => s.startTrial);
  const purchaseModule = useUserStore(s => s.purchaseModule);
  const activateLifetime = useUserStore(s => s.activateLifetime);

  // State 2 — Trial is already active: caller shouldn't show this, but auto-close as safety fallback
  useEffect(() => {
    if (isTrialActive()) {
      onClose();
    }
  }, [isTrialActive, onClose]);

  if (isTrialActive()) {
    return null;
  }

  // State 3 — Trial expired: delegate to PaywallGate
  if (isTrialExpired()) {
    if (moduleId) {
      return (
        <PaywallGate
          moduleId={moduleId}
          moduleName={moduleName}
          onClose={onClose}
          onPurchaseModule={(id) => { purchaseModule(id); onClose(); }}
          onPurchaseLifetime={() => { activateLifetime(); onClose(); }}
        />
      );
    }
    return (
      <PaywallGate
        moduleId={null}
        moduleName={moduleName}
        onClose={onClose}
        onPurchaseLifetime={() => { activateLifetime(); onClose(); }}
      />
    );
  }

  // State 1 — No trial yet: show trial offer
  if (!trialStartDate) {
    return (
      <AnimatePresence>
        <motion.div
          key="trial-gate-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="trial-gate-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl"
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
            <div className="flex flex-col items-center text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 mb-4">
                <Sparkles className="w-7 h-7 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Start Your 60-Day Free Trial
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Get full access to everything — completely free, no card required
              </p>
            </div>

            {/* Benefit bullets */}
            <ul className="space-y-3 mb-6">
              {[
                '76 modules · 4,716 lessons',
                '119 interactive visualizations',
                'Spaced repetition & flashcards',
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => { startTrial(); onClose(); }}
              className="w-full py-3 px-4 rounded-xl bg-green-500 hover:bg-green-400 text-black text-base font-semibold transition-colors mb-3"
            >
              Start Free Trial →
            </button>

            {/* Fine print */}
            <p className="text-center text-[11px] text-gray-500">
              No payment needed · Cancel anytime · Full access for 60 days
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Fallback: should not reach here in normal flow
  return null;
}

export default FreeTrialGate;
