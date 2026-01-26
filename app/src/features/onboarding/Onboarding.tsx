import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Clock,
  Check,
  ArrowRight,
  Target,
  BookOpen,
  Zap,
  Brain,
  Heart,
} from 'lucide-react';
import { useUserStore, useOnboardingProgress } from '@/store/userStore';
import { OnboardingLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Button } from '@/components/atoms';

const goals = [
  { id: 'habits', label: 'Build Better Habits', desc: 'Create lasting positive routines', icon: Target, color: 'sunrise' },
  { id: 'focus', label: 'Improve Focus', desc: 'Deep work and concentration', icon: Brain, color: 'lavender' },
  { id: 'purpose', label: 'Find My Purpose', desc: 'Meaning and direction in life', icon: Heart, color: 'coral' },
  { id: 'productivity', label: 'Be More Productive', desc: 'Get more done, stress less', icon: Zap, color: 'golden' },
  { id: 'growth', label: 'Personal Growth', desc: 'Become my best self', icon: Sparkles, color: 'sage' },
];

const learningStyles = [
  { id: 'reader', label: 'Deep Reader', desc: 'I like to read and reflect deeply', color: 'lavender' },
  { id: 'doer', label: 'Learn by Doing', desc: 'I prefer hands-on exercises', color: 'sunrise' },
  { id: 'visual', label: 'Visual Learner', desc: 'I learn best with visuals', color: 'sage' },
  { id: 'quick', label: 'Quick Bites', desc: 'Short lessons, frequent review', color: 'golden' },
];

const timeCommitments = [
  { id: 5, label: '5 min/day', desc: 'Micro-learning', color: 'sage' },
  { id: 15, label: '15 min/day', desc: 'Quick sessions', color: 'sunrise' },
  { id: 30, label: '30 min/day', desc: 'Solid practice', color: 'lavender' },
  { id: 60, label: '60+ min/day', desc: 'Deep immersion', color: 'golden' },
];

const focusAreas = [
  { id: 'atomic', label: 'Atomic Habits', book: 'James Clear', color: 'sunrise' },
  { id: 'deepwork', label: 'Deep Work', book: 'Cal Newport', color: 'lavender' },
  { id: 'futureself', label: 'Future Self', book: 'Benjamin Hardy', color: 'sage' },
  { id: 'meaning', label: 'Meaning & Purpose', book: 'Viktor Frankl', color: 'coral' },
  { id: 'values', label: 'Values & Priorities', book: 'Mark Manson', color: 'golden' },
];

const colorStyles = {
  sunrise: {
    bg: 'bg-sunrise/10',
    border: 'border-sunrise/30',
    text: 'text-sunrise',
    activeBg: 'bg-sunrise/20',
    activeBorder: 'border-sunrise/50',
  },
  golden: {
    bg: 'bg-golden/10',
    border: 'border-golden/30',
    text: 'text-golden',
    activeBg: 'bg-golden/20',
    activeBorder: 'border-golden/50',
  },
  coral: {
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    text: 'text-coral',
    activeBg: 'bg-coral/20',
    activeBorder: 'border-coral/50',
  },
  sage: {
    bg: 'bg-sage/10',
    border: 'border-sage/30',
    text: 'text-sage',
    activeBg: 'bg-sage/20',
    activeBorder: 'border-sage/50',
  },
  lavender: {
    bg: 'bg-lavender/10',
    border: 'border-lavender/30',
    text: 'text-lavender',
    activeBg: 'bg-lavender/20',
    activeBorder: 'border-lavender/50',
  },
};

interface UserData {
  name: string;
  primaryGoal: string;
  learningStyle: string;
  dailyTime: number;
  focusAreas: string[];
}

export function Onboarding() {
  const navigate = useNavigate();
  const completeOnboarding = useUserStore((state) => state.completeOnboarding);
  const setOnboardingStep = useUserStore((state) => state.setOnboardingStep);
  const savedProgress = useOnboardingProgress();

  const [step, setStep] = useState(savedProgress?.currentStep ?? 0);
  const [userData, setUserData] = useState<UserData>({
    name: savedProgress?.data?.name ?? '',
    primaryGoal: savedProgress?.data?.primaryGoal ?? '',
    learningStyle: savedProgress?.data?.learningStyle ?? '',
    dailyTime: savedProgress?.data?.dailyTime ?? 15,
    focusAreas: savedProgress?.data?.focusAreas ?? [],
  });

  const totalSteps = 5;

  // Persist progress on step/data change
  useEffect(() => {
    setOnboardingStep(step, userData);
  }, [step, userData, setOnboardingStep]);

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      completeOnboarding({
        ...userData,
        completed: true,
        completedAt: new Date().toISOString(),
      });
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return userData.name.trim().length > 0;
      case 1:
        return userData.primaryGoal !== '';
      case 2:
        return userData.learningStyle !== '';
      case 3:
        return userData.dailyTime > 0;
      case 4:
        return userData.focusAreas.length > 0;
      default:
        return true;
    }
  };

  const toggleFocusArea = (id: string) => {
    setUserData((prev) => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(id)
        ? prev.focusAreas.filter((f) => f !== id)
        : [...prev.focusAreas, id],
    }));
  };

  const renderStep = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
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
                  Welcome to Gyanmarg
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
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
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
                    You're about to learn from 5 transformational books,
                    synthesized into an interactive learning experience.
                  </p>
                </div>
              </GlassCard>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  What's your primary goal?
                </h1>
                <p className="text-text-secondary mt-2">
                  This helps us personalize your learning path
                </p>
              </div>

              <div className="space-y-3">
                {goals.map((goal) => {
                  const Icon = goal.icon;
                  const colors = colorStyles[goal.color as keyof typeof colorStyles];
                  const isSelected = userData.primaryGoal === goal.id;

                  return (
                    <motion.button
                      key={goal.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setUserData({ ...userData, primaryGoal: goal.id })
                      }
                      className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all border backdrop-blur-sm ${
                        isSelected
                          ? `${colors.activeBg} ${colors.activeBorder}`
                          : `glass-light border-white/10 hover:border-white/20`
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.bg} border ${colors.border}`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="text-left flex-1">
                        <p className={`font-medium ${isSelected ? colors.text : 'text-text-primary'}`}>
                          {goal.label}
                        </p>
                        <p className="text-sm text-text-muted mt-0.5">{goal.desc}</p>
                      </div>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`w-6 h-6 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center`}
                        >
                          <Check className={`w-4 h-4 ${colors.text}`} />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  How do you learn best?
                </h1>
                <p className="text-text-secondary mt-2">
                  We'll adapt the content to your style
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {learningStyles.map((style) => {
                  const colors = colorStyles[style.color as keyof typeof colorStyles];
                  const isSelected = userData.learningStyle === style.id;

                  return (
                    <motion.button
                      key={style.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setUserData({ ...userData, learningStyle: style.id })
                      }
                      className={`p-5 rounded-xl text-left transition-all border backdrop-blur-sm ${
                        isSelected
                          ? `${colors.activeBg} ${colors.activeBorder}`
                          : `glass-light border-white/10 hover:border-white/20`
                      }`}
                    >
                      <p className={`font-medium ${isSelected ? colors.text : 'text-text-primary'}`}>
                        {style.label}
                      </p>
                      <p className="text-xs text-text-muted mt-1">{style.desc}</p>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`mt-3 w-5 h-5 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center`}
                        >
                          <Check className={`w-3 h-3 ${colors.text}`} />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  How much time can you commit?
                </h1>
                <p className="text-text-secondary mt-2">Consistency beats intensity</p>
              </div>

              <div className="space-y-3">
                {timeCommitments.map((time) => {
                  const colors = colorStyles[time.color as keyof typeof colorStyles];
                  const isSelected = userData.dailyTime === time.id;

                  return (
                    <motion.button
                      key={time.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setUserData({ ...userData, dailyTime: time.id })
                      }
                      className={`w-full p-4 rounded-xl flex items-center justify-between transition-all border backdrop-blur-sm ${
                        isSelected
                          ? `${colors.activeBg} ${colors.activeBorder}`
                          : `glass-light border-white/10 hover:border-white/20`
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.bg} border ${colors.border}`}>
                          <Clock className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <div className="text-left">
                          <p className={`font-medium ${isSelected ? colors.text : 'text-text-primary'}`}>
                            {time.label}
                          </p>
                          <p className="text-sm text-text-muted">{time.desc}</p>
                        </div>
                      </div>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`w-6 h-6 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center`}
                        >
                          <Check className={`w-4 h-4 ${colors.text}`} />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              <GlassCard className="border-sage/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage/10 border border-sage/20 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-sage" />
                  </div>
                  <p className="text-sage text-sm leading-relaxed">
                    From Atomic Habits: "The 2-minute rule - make it so easy you
                    can't say no."
                  </p>
                </div>
              </GlassCard>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  What interests you most?
                </h1>
                <p className="text-text-secondary mt-2">
                  Select all that apply - you can explore everything
                </p>
              </div>

              <div className="space-y-3">
                {focusAreas.map((area) => {
                  const colors = colorStyles[area.color as keyof typeof colorStyles];
                  const isSelected = userData.focusAreas.includes(area.id);

                  return (
                    <motion.button
                      key={area.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleFocusArea(area.id)}
                      className={`w-full p-4 rounded-xl flex items-center justify-between transition-all border backdrop-blur-sm ${
                        isSelected
                          ? `${colors.activeBg} ${colors.activeBorder}`
                          : `glass-light border-white/10 hover:border-white/20`
                      }`}
                    >
                      <div className="text-left">
                        <p className={`font-medium ${isSelected ? colors.text : 'text-text-primary'}`}>
                          {area.label}
                        </p>
                        <p className="text-sm text-text-muted">{area.book}</p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? `${colors.bg} ${colors.activeBorder}`
                            : 'border-text-muted'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          >
                            <Check className={`w-4 h-4 ${colors.text}`} />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <GlassCard className="border-lavender/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5 text-lavender" />
                  </div>
                  <p className="text-lavender text-sm leading-relaxed">
                    All 5 books work together - concepts reinforce each other.
                  </p>
                </div>
              </GlassCard>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <OnboardingLayout
      step={step}
      totalSteps={totalSteps}
      footer={
        <div className="flex gap-3">
          {step > 0 && (
            <Button
              variant="glass"
              onClick={handleBack}
              className="px-6"
            >
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
            {step === totalSteps - 1 ? (
              <>
                Start Learning
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
      {renderStep()}
    </OnboardingLayout>
  );
}

export default Onboarding;
