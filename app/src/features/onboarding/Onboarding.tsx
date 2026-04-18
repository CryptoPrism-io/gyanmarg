import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  BookOpen,
  Check,
  LogIn,
} from 'lucide-react';
import { useUserStore, useOnboardingProgress } from '@/store/userStore';
import { useAuthContext } from '@/contexts/AuthContext';
import { OnboardingLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Button } from '@/components/atoms';
import { modules } from '@/data/modules';
import { moduleCategories } from '@/data/categories';

// Build a lookup: moduleId → category name + emoji icon
const moduleCategoryMap = new Map<string, { name: string; icon: string }>();
for (const cat of moduleCategories) {
  for (const moduleId of cat.moduleIds) {
    moduleCategoryMap.set(moduleId, { name: cat.name, icon: cat.icon });
  }
}

// Only show available modules in the picker
const availableModules = modules.filter((m) => m.isAvailable);

// Step 0 = login/skip, Step 1 = name, Step 2 = modules, Step 3 = confirm
const TOTAL_STEPS = 4;

export function Onboarding() {
  const navigate = useNavigate();
  const completeOnboarding = useUserStore((state) => state.completeOnboarding);
  const setOnboardingStep = useUserStore((state) => state.setOnboardingStep);
  const savedProgress = useOnboardingProgress();
  const { signIn, isLoading: authLoading } = useAuthContext();

  const [step, setStep] = useState(savedProgress?.currentStep ?? 0);
  const [name, setName] = useState<string>(savedProgress?.data?.name ?? '');
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>(
    savedProgress?.data?.freeModules ?? []
  );
  const [googleError, setGoogleError] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);

  // Persist progress on step/data change
  useEffect(() => {
    setOnboardingStep(step, { name, freeModules: selectedModuleIds });
  }, [step, name, selectedModuleIds, setOnboardingStep]);

  const handleGoogleSignIn = async () => {
    setGoogleError(null);
    setSigningIn(true);
    const result = await signIn();
    setSigningIn(false);
    if (!result.success) {
      setGoogleError(result.error ?? 'Sign-in failed. Try again.');
      return;
    }
    if (!result.needsOnboarding) {
      // Existing user — all data restored from Firestore, go straight to app
      navigate('/dashboard');
    } else {
      // New Google user — proceed to name step, pre-fill from Google display name
      setStep(1);
    }
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    } else {
      completeOnboarding({
        name,
        freeModules: selectedModuleIds,
        completed: true,
        completedAt: new Date().toISOString(),
      });
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return true; // login step — "Continue" always available
      case 1:
        return name.trim().length > 0;
      case 2:
        return selectedModuleIds.length === 2;
      case 3:
        return true;
      default:
        return true;
    }
  };

  const toggleModule = (id: string) => {
    setSelectedModuleIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((m) => m !== id);
      }
      if (prev.length >= 2) return prev; // Cap at 2
      return [...prev, id];
    });
  };

  // Group available modules by category for display
  const groupedModules = moduleCategories
    .map((cat) => ({
      category: cat,
      items: availableModules.filter((m) => cat.moduleIds.includes(m.id)),
    }))
    .filter((g) => g.items.length > 0);

  // Get selected module configs for step 3 display
  const selectedModules = selectedModuleIds
    .map((id) => availableModules.find((m) => m.id === id))
    .filter(Boolean) as typeof availableModules;

  return (
    <OnboardingLayout
      step={step}
      totalSteps={TOTAL_STEPS}
      footer={
        <div className="flex gap-3">
          {step > 0 && (
            <Button variant="glass" onClick={handleBack} className="px-6">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </Button>
          )}
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex-1"
            glow={canProceed()}
          >
            {step === TOTAL_STEPS - 1 ? (
              <>
                Enter the Library
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            ) : step === 0 ? (
              <>
                I&apos;m new here
                <ChevronRight className="w-5 h-5 ml-1" />
              </>
            ) : (
              <>
                Continue
                <ChevronRight className="w-5 h-5 ml-1" />
              </>
            )}
          </Button>
        </div>
      }
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* ===== STEP 0: Sign In or Continue ===== */}
          {step === 0 && (
            <div className="space-y-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sunrise to-golden flex items-center justify-center shadow-sunrise"
                >
                  <Sparkles className="w-10 h-10 text-base" />
                </motion.div>
                <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
                  Welcome to Polymind
                </h1>
                <p className="text-text-secondary mt-2">
                  The infinite library for curious minds
                </p>
              </div>

              <div className="space-y-3">
                {/* Google sign-in — for returning users */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleSignIn}
                  disabled={signingIn || authLoading}
                  className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-xl border border-white/15 glass text-text-primary font-medium transition-all hover:border-white/30 disabled:opacity-60"
                >
                  {signingIn ? (
                    <div className="w-5 h-5 border-2 border-text-muted border-t-sunrise rounded-full animate-spin" />
                  ) : (
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  )}
                  {signingIn ? 'Signing in…' : 'Continue with Google'}
                </motion.button>

                {googleError && (
                  <p className="text-red-400 text-sm text-center">{googleError}</p>
                )}

                <div className="flex items-center gap-3 text-text-muted text-xs">
                  <div className="flex-1 h-px bg-white/10" />
                  <span>or</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
              </div>

              <GlassCard className="border-sunrise/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sunrise/10 border border-sunrise/20 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-sunrise" />
                  </div>
                  <p className="text-sunrise text-sm leading-relaxed">
                    1000+ bestselling authors across 76 domains —
                    curated into immersive reading journeys for the curious mind.
                  </p>
                </div>
              </GlassCard>
            </div>
          )}

          {/* ===== STEP 1: Name ===== */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sunrise to-golden flex items-center justify-center shadow-sunrise"
                >
                  <LogIn className="w-10 h-10 text-base" />
                </motion.div>
                <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
                  What's your name?
                </h1>
                <p className="text-text-secondary mt-2">
                  Your path to personal mastery begins here
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-text-secondary font-medium">
                  What should we call you?
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && canProceed()) handleNext();
                  }}
                  className="w-full glass border border-white/10 rounded-xl px-5 py-4 text-text-primary text-lg placeholder-text-muted focus:border-sunrise/50 focus:ring-2 focus:ring-sunrise/20 transition-all bg-transparent"
                  placeholder="Enter your name"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* ===== STEP 2: Pick 2 Free Modules ===== */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  Choose 2 free modules
                </h1>
                <p className="text-text-secondary mt-2 text-sm">
                  You'll have full access to these — forever free
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunrise/10 border border-sunrise/20">
                  <span className={`text-sm font-semibold ${selectedModuleIds.length === 2 ? 'text-sunrise' : 'text-text-muted'}`}>
                    {selectedModuleIds.length}/2 selected
                  </span>
                  {selectedModuleIds.length === 2 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 rounded-full bg-sunrise/20 border border-sunrise/40 flex items-center justify-center"
                    >
                      <Check className="w-2.5 h-2.5 text-sunrise" />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Scrollable module list grouped by category */}
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                {groupedModules.map(({ category, items }) => (
                  <div key={category.id}>
                    <div className="flex items-center gap-1.5 mb-2 px-1">
                      <span className="text-base">{category.icon}</span>
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        {category.name}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {items.map((mod) => {
                        const isSelected = selectedModuleIds.includes(mod.id);
                        const isDisabled =
                          !isSelected && selectedModuleIds.length >= 2;

                        return (
                          <motion.button
                            key={mod.id}
                            whileTap={isDisabled ? {} : { scale: 0.97 }}
                            onClick={() => !isDisabled && toggleModule(mod.id)}
                            className={`
                              relative p-3 rounded-xl text-left transition-all border backdrop-blur-sm
                              ${isSelected
                                ? 'bg-sunrise/15 border-sunrise/50 ring-1 ring-sunrise/30'
                                : isDisabled
                                  ? 'glass-light border-white/5 opacity-40 cursor-not-allowed'
                                  : 'glass-light border-white/10 hover:border-white/25 cursor-pointer'
                              }
                            `}
                          >
                            <div className="flex items-start gap-2">
                              <div className={`
                                w-8 h-8 rounded-lg flex items-center justify-center shrink-0
                                ${isSelected ? 'bg-sunrise/20 border border-sunrise/40' : 'bg-white/5 border border-white/10'}
                              `}>
                                <span className="text-sm leading-none">
                                  {moduleCategoryMap.get(mod.id)?.icon ?? '📚'}
                                </span>
                              </div>
                              <div className="min-w-0">
                                <p className={`text-xs font-semibold leading-tight ${isSelected ? 'text-sunrise' : 'text-text-primary'}`}>
                                  {mod.title}
                                </p>
                                <p className="text-[10px] text-text-muted mt-0.5 leading-tight">
                                  {mod.subtitle}
                                </p>
                              </div>
                            </div>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-sunrise flex items-center justify-center"
                              >
                                <Check className="w-2.5 h-2.5 text-base" />
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== STEP 3: You're Ready ===== */}
          {step === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 280, delay: 0.15 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sage to-cyan-500 flex items-center justify-center"
                >
                  <span className="text-4xl">📚</span>
                </motion.div>
                <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
                  You're all set, {name.trim()}!
                </h1>
                <p className="text-text-secondary mt-2">
                  Your free modules are ready to explore
                </p>
              </div>

              {/* Show the 2 selected modules */}
              <div className="space-y-3">
                {selectedModules.map((mod, i) => {
                  const catInfo = moduleCategoryMap.get(mod.id);
                  return (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-sunrise/10 border border-sunrise/25"
                    >
                      <div className="w-12 h-12 rounded-xl bg-sunrise/20 border border-sunrise/30 flex items-center justify-center shrink-0">
                        <span className="text-2xl leading-none">
                          {moduleCategoryMap.get(mod.id)?.icon ?? '📚'}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">{mod.title}</p>
                        <p className="text-sm text-text-muted mt-0.5">
                          {catInfo ? `${catInfo.icon} ${catInfo.name}` : mod.subtitle}
                        </p>
                      </div>
                      <div className="ml-auto w-6 h-6 rounded-full bg-sunrise flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-base" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <GlassCard className="border-amber-500/20">
                <div className="flex items-start gap-3">
                  <div className="text-2xl shrink-0">🎯</div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    You can unlock more modules as you progress. The Infinite Library has
                    <span className="text-amber-400 font-semibold"> 76 worlds of knowledge</span> waiting for you.
                  </p>
                </div>
              </GlassCard>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </OnboardingLayout>
  );
}

export default Onboarding;
