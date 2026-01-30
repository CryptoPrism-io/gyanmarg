import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, Monitor, Share, Plus } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  // Detect if already installed
  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
  }, []);

  // Listen for beforeinstallprompt event
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Show prompt after a delay (don't interrupt user immediately)
      const dismissed = localStorage.getItem('pwa-prompt-dismissed');
      const lastDismissed = dismissed ? parseInt(dismissed) : 0;
      const daysSinceDismissed = (Date.now() - lastDismissed) / (1000 * 60 * 60 * 24);

      if (daysSinceDismissed > 7) {
        setTimeout(() => setShowPrompt(true), 30000); // Show after 30 seconds
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Detect iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setShowIOSInstructions(false);
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
  };

  const handleShowIOSInstructions = () => {
    setShowIOSInstructions(true);
  };

  if (isInstalled) return null;

  return (
    <>
      {/* Floating Install Button (always visible on supported browsers) */}
      {(deferredPrompt || (isIOS && isSafari)) && !showPrompt && !showIOSInstructions && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => isIOS ? handleShowIOSInstructions() : setShowPrompt(true)}
          className="fixed bottom-24 right-4 z-50 w-14 h-14 bg-amber-500 hover:bg-amber-400 text-black rounded-full shadow-lg shadow-amber-500/30 flex items-center justify-center transition-colors"
          title="Install App"
        >
          <Download size={24} />
        </motion.button>
      )}

      {/* Install Prompt Modal */}
      <AnimatePresence>
        {showPrompt && deferredPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleDismiss}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-[#111113] border border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="relative p-6 pb-4">
                <button
                  onClick={handleDismiss}
                  className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">ज्ञ</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Install Polymind</h3>
                    <p className="text-white/60 text-sm">Add to your home screen</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="px-6 pb-4 space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <Smartphone size={18} className="text-amber-500" />
                  <span className="text-sm">Works offline - learn anywhere</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Monitor size={18} className="text-amber-500" />
                  <span className="text-sm">Full-screen experience</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Download size={18} className="text-amber-500" />
                  <span className="text-sm">Quick access from home screen</span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 bg-white/5 flex gap-3">
                <button
                  onClick={handleDismiss}
                  className="flex-1 py-3 px-4 text-white/70 hover:text-white border border-white/10 rounded-xl transition-colors"
                >
                  Not Now
                </button>
                <button
                  onClick={handleInstall}
                  className="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Install
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* iOS Instructions Modal */}
        {showIOSInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleDismiss}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-[#111113] border border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="relative p-6 pb-4">
                <button
                  onClick={handleDismiss}
                  className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">ज्ञ</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Install on iPhone</h3>
                    <p className="text-white/60 text-sm">Follow these steps</p>
                  </div>
                </div>
              </div>

              {/* iOS Instructions */}
              <div className="px-6 pb-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 font-semibold">1</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Tap the Share button</p>
                    <p className="text-white/60 text-sm flex items-center gap-2 mt-1">
                      <Share size={16} /> at the bottom of Safari
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 font-semibold">2</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Scroll down and tap</p>
                    <p className="text-white/60 text-sm flex items-center gap-2 mt-1">
                      <Plus size={16} /> "Add to Home Screen"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 font-semibold">3</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Tap "Add"</p>
                    <p className="text-white/60 text-sm mt-1">
                      Polymind will appear on your home screen
                    </p>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <div className="p-4 bg-white/5">
                <button
                  onClick={handleDismiss}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-colors"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PWAInstallPrompt;
