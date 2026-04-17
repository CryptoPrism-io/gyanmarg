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
} from 'lucide-react';
import { useUserStore, useOnboardingProgress } from '@/store/userStore';
import { OnboardingLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Button } from '@/components/atoms';
import { Icon } from '@/components/atoms/Icon';
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

const TOTAL_STEPS = 3;

export function Onboarding() {
  const navigate = useNavigate();
  const completeOnboarding = useUserStore((state) => state.completeOnboarding);
  const setOnboardingStep = useUserStore((state) => state.setOnboardingStep);
  const savedProgress = useOnboardingProgress();

  const [step, setStep] = useState(savedProgress?.currentStep ?? 0);
  const [name, setName] = useState<string>(savedProgress?.data?.name ?? '');
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>(
    savedProgress?.data?.freeModules ?? []
  );

  // Persist progress on step/data change
  useEffect(() => {
    setOnboardingStep(step, { name, freeModules: selectedModuleIds });
  }, [step, name, selectedModuleIds, setOnboardingStep]);

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
        return name.trim().length > 0;
      case 1:
        return selectedModuleIds.length === 2;
      case 2:
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
          {/* ===== STEP 1: Welcome + Name ===== */}
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

          {/* ===== STEP 2: Pick 2 Free Modules ===== */}
          {step === 1 && (
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
                                <Icon
                                  name={mod.icon}
                                  size={16}
                                  className={isSelected ? 'text-sunrise' : 'text-text-muted'}
                                />
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
          {step === 2 && (
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
                        <Icon name={mod.icon} size={22} className="text-sunrise" />
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
