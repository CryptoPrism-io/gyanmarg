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
} from 'lucide-react';
import { useUserStore, useOnboardingProgress } from '@/store/userStore';
import { OnboardingLayout } from '@/components/templates';

const goals = [
  { id: 'habits', label: 'Build Better Habits', desc: 'Create lasting positive routines' },
  { id: 'focus', label: 'Improve Focus', desc: 'Deep work and concentration' },
  { id: 'purpose', label: 'Find My Purpose', desc: 'Meaning and direction in life' },
  { id: 'productivity', label: 'Be More Productive', desc: 'Get more done, stress less' },
  { id: 'growth', label: 'Personal Growth', desc: 'Become my best self' },
];

const learningStyles = [
  { id: 'reader', label: 'Deep Reader', desc: 'I like to read and reflect deeply' },
  { id: 'doer', label: 'Learn by Doing', desc: 'I prefer hands-on exercises' },
  { id: 'visual', label: 'Visual Learner', desc: 'I learn best with visuals' },
  { id: 'quick', label: 'Quick Bites', desc: 'Short lessons, frequent review' },
];

const timeCommitments = [
  { id: 5, label: '5 min/day', desc: 'Micro-learning' },
  { id: 15, label: '15 min/day', desc: 'Quick sessions' },
  { id: 30, label: '30 min/day', desc: 'Solid practice' },
  { id: 60, label: '60+ min/day', desc: 'Deep immersion' },
];

const focusAreas = [
  { id: 'atomic', label: 'Atomic Habits', book: 'James Clear' },
  { id: 'deepwork', label: 'Deep Work', book: 'Cal Newport' },
  { id: 'futureself', label: 'Future Self', book: 'Benjamin Hardy' },
  { id: 'meaning', label: 'Meaning & Purpose', book: 'Viktor Frankl' },
  { id: 'values', label: 'Values & Priorities', book: 'Mark Manson' },
];

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
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-semibold text-primary tracking-tight">
                  Welcome to Gyanmarg
                </h1>
                <p className="text-secondary mt-2">
                  Your path to personal mastery begins here
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-secondary">
                  What should we call you?
                </label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="w-full bg-secondary border border-border rounded-xl px-5 py-4 text-primary text-lg placeholder-muted focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="Enter your name"
                  autoFocus
                />
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
                <p className="text-accent text-sm leading-relaxed">
                  You're about to learn from 5 transformational books,
                  synthesized into an interactive learning experience.
                </p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-primary tracking-tight">
                  What's your primary goal?
                </h1>
                <p className="text-secondary mt-2">
                  This helps us personalize your learning path
                </p>
              </div>

              <div className="space-y-3">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() =>
                      setUserData({ ...userData, primaryGoal: goal.id })
                    }
                    className={`w-full p-5 rounded-xl flex items-center justify-between transition-all border ${
                      userData.primaryGoal === goal.id
                        ? 'bg-accent/10 border-accent/50'
                        : 'bg-secondary border-border hover:border-muted'
                    }`}
                  >
                    <div className="text-left">
                      <p
                        className={`font-medium ${
                          userData.primaryGoal === goal.id
                            ? 'text-accent'
                            : 'text-primary'
                        }`}
                      >
                        {goal.label}
                      </p>
                      <p className="text-sm text-muted mt-0.5">{goal.desc}</p>
                    </div>
                    {userData.primaryGoal === goal.id && (
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-primary tracking-tight">
                  How do you learn best?
                </h1>
                <p className="text-secondary mt-2">
                  We'll adapt the content to your style
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {learningStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() =>
                      setUserData({ ...userData, learningStyle: style.id })
                    }
                    className={`p-5 rounded-xl text-left transition-all border ${
                      userData.learningStyle === style.id
                        ? 'bg-purple-500/10 border-purple-500/50'
                        : 'bg-secondary border-border hover:border-muted'
                    }`}
                  >
                    <p
                      className={`font-medium ${
                        userData.learningStyle === style.id
                          ? 'text-purple-400'
                          : 'text-primary'
                      }`}
                    >
                      {style.label}
                    </p>
                    <p className="text-xs text-muted mt-1">{style.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-primary tracking-tight">
                  How much time can you commit?
                </h1>
                <p className="text-secondary mt-2">Consistency beats intensity</p>
              </div>

              <div className="space-y-3">
                {timeCommitments.map((time) => (
                  <button
                    key={time.id}
                    onClick={() =>
                      setUserData({ ...userData, dailyTime: time.id })
                    }
                    className={`w-full p-5 rounded-xl flex items-center justify-between transition-all border ${
                      userData.dailyTime === time.id
                        ? 'bg-accent/10 border-accent/50'
                        : 'bg-secondary border-border hover:border-muted'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Clock
                        className={`w-5 h-5 ${
                          userData.dailyTime === time.id
                            ? 'text-accent'
                            : 'text-muted'
                        }`}
                      />
                      <div className="text-left">
                        <p
                          className={`font-medium ${
                            userData.dailyTime === time.id
                              ? 'text-accent'
                              : 'text-primary'
                          }`}
                        >
                          {time.label}
                        </p>
                        <p className="text-sm text-muted">{time.desc}</p>
                      </div>
                    </div>
                    {userData.dailyTime === time.id && (
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="bg-success/10 border border-success/20 rounded-xl p-4">
                <p className="text-success text-sm">
                  From Atomic Habits: "The 2-minute rule - make it so easy you
                  can't say no."
                </p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-primary tracking-tight">
                  What interests you most?
                </h1>
                <p className="text-secondary mt-2">
                  Select all that apply - you can explore everything
                </p>
              </div>

              <div className="space-y-3">
                {focusAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => toggleFocusArea(area.id)}
                    className={`w-full p-5 rounded-xl flex items-center justify-between transition-all border ${
                      userData.focusAreas.includes(area.id)
                        ? 'bg-success/10 border-success/50'
                        : 'bg-secondary border-border hover:border-muted'
                    }`}
                  >
                    <div className="text-left">
                      <p
                        className={`font-medium ${
                          userData.focusAreas.includes(area.id)
                            ? 'text-success'
                            : 'text-primary'
                        }`}
                      >
                        {area.label}
                      </p>
                      <p className="text-sm text-muted">{area.book}</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        userData.focusAreas.includes(area.id)
                          ? 'bg-success border-success'
                          : 'border-muted'
                      }`}
                    >
                      {userData.focusAreas.includes(area.id) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                <p className="text-purple-400 text-sm">
                  All 5 books work together - concepts reinforce each other.
                </p>
              </div>
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
            <button
              onClick={handleBack}
              className="px-6 py-4 bg-secondary text-secondary rounded-xl hover:bg-elevated transition-colors flex items-center gap-2 font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex-1 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
              canProceed()
                ? 'bg-accent text-white hover:bg-accent/90'
                : 'bg-secondary text-muted cursor-not-allowed'
            }`}
          >
            {step === totalSteps - 1 ? (
              <>
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                Continue
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      }
    >
      {renderStep()}
    </OnboardingLayout>
  );
}

export default Onboarding;
