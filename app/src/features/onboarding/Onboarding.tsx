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
  TrendingUp,
  Network,
} from 'lucide-react';
import { useUserStore, useOnboardingProgress } from '@/store/userStore';
import { OnboardingLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Button } from '@/components/atoms';

// Import AI-generated images
import imgForgetting from '@/assets/ai-images/onboarding/onboarding-01-forgetting.png';
import imgBreakthrough from '@/assets/ai-images/onboarding/onboarding-02-breakthrough.png';
import imgPolymind from '@/assets/ai-images/onboarding/onboarding-03-polymind.png';

// Why are you building your Polymind?
const goals = [
  { id: 'career', label: 'Advance My Career', desc: 'Get promoted, lead better, earn more', icon: Target, color: 'sunrise' },
  { id: 'curiosity', label: 'Intellectual Curiosity', desc: 'I love learning across many fields', icon: Brain, color: 'lavender' },
  { id: 'mastery', label: 'Personal Mastery', desc: 'Optimize mind, body, and habits', icon: Sparkles, color: 'sage' },
  { id: 'skills', label: 'Build Specific Skills', desc: 'AI, coding, investing, writing', icon: Zap, color: 'golden' },
  { id: 'wisdom', label: 'Seek Deeper Wisdom', desc: 'Philosophy, psychology, meaning', icon: Heart, color: 'coral' },
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

// Knowledge Domains - pick 3-5 to start building your Polymind
const knowledgeDomains = [
  { id: 'psychology', label: '🧠 Psychology', desc: 'Kahneman, Cialdini, Ariely', color: 'lavender' },
  { id: 'ai', label: '🤖 AI & Technology', desc: 'Machine learning, future of tech', color: 'sunrise' },
  { id: 'wealth', label: '💰 Wealth & Investing', desc: 'Buffett, Dalio, Graham', color: 'golden' },
  { id: 'productivity', label: '⚡ Productivity', desc: 'Deep work, habits, focus', color: 'sage' },
  { id: 'health', label: '💪 Health & Longevity', desc: 'Attia, Huberman, biohacking', color: 'coral' },
  { id: 'leadership', label: '👥 Leadership', desc: 'Management, influence, teams', color: 'sunrise' },
  { id: 'philosophy', label: '🧘 Philosophy', desc: 'Stoicism, meaning, wisdom', color: 'lavender' },
  { id: 'writing', label: '✍️ Writing & Communication', desc: 'Storytelling, persuasion', color: 'golden' },
  { id: 'science', label: '🔬 Science', desc: 'Physics, biology, neuroscience', color: 'sage' },
  { id: 'creativity', label: '🎨 Creativity', desc: 'Innovation, design thinking', color: 'coral' },
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
  selectedDomains: string[];
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
    selectedDomains: savedProgress?.data?.selectedDomains ?? [],
  });

  const totalSteps = 8; // Added 3 educational story slides

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
      case 1: // Story: The Problem
      case 2: // Story: The Science
      case 3: // Story: The Polymind Way
        return true; // Educational slides always proceed
      case 4:
        return userData.primaryGoal !== '';
      case 5:
        return userData.learningStyle !== '';
      case 6:
        return userData.dailyTime > 0;
      case 7:
        return userData.selectedDomains.length >= 3; // Must pick at least 3 domains
      default:
        return true;
    }
  };

  const toggleDomain = (id: string) => {
    setUserData((prev) => ({
      ...prev,
      selectedDomains: prev.selectedDomains.includes(id)
        ? prev.selectedDomains.filter((d) => d !== id)
        : [...prev.selectedDomains, id],
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
                    1000+ bestselling authors across 50+ domains —
                    all retained forever using proven learning science.
                  </p>
                </div>
              </GlassCard>
            </div>
          )}

          {/* ===== STORY SLIDE 1: The Problem ===== */}
          {step === 1 && (
            <div className="space-y-6">
              {/* AI Generated Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full aspect-video rounded-2xl overflow-hidden border border-coral/20"
              >
                <img
                  src={imgForgetting}
                  alt="Memory fading visualization"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  Here's the hard truth...
                </h1>
              </div>

              <div className="space-y-3">
                <GlassCard className="border-coral/30 p-4">
                  <p className="text-base text-text-primary leading-relaxed">
                    You've probably read <span className="text-coral font-semibold">dozens of books</span>.
                    Maybe even hundreds.
                  </p>
                </GlassCard>

                <GlassCard className="border-white/10 p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-coral">90%</div>
                    <p className="text-text-secondary text-sm">
                      of what we read is <span className="text-coral">forgotten within 7 days</span> —
                      unless we do something different.
                    </p>
                  </div>
                </GlassCard>
              </div>

              <p className="text-center text-text-muted text-sm">
                This isn't your fault. It's how human memory works.
              </p>
            </div>
          )}

          {/* ===== STORY SLIDE 2: The Science ===== */}
          {step === 2 && (
            <div className="space-y-6">
              {/* AI Generated Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full aspect-video rounded-2xl overflow-hidden border border-lavender/20"
              >
                <img
                  src={imgBreakthrough}
                  alt="Neural breakthrough visualization"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  But there's a breakthrough...
                </h1>
              </div>

              <div className="space-y-3">
                <GlassCard className="border-lavender/30 p-4">
                  <p className="text-base text-text-primary leading-relaxed">
                    In 1885, psychologist Hermann Ebbinghaus discovered the
                    <span className="text-lavender font-semibold"> "Forgetting Curve"</span> —
                    memory decays predictably over time.
                  </p>
                </GlassCard>

                <GlassCard className="border-sage/30 p-4">
                  <p className="text-base text-text-primary leading-relaxed">
                    But here's the key: <span className="text-sage font-semibold">review at the right moment</span>,
                    and the curve flattens. Each review makes the memory stronger.
                  </p>
                </GlassCard>

                <GlassCard className="border-sunrise/30 p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sunrise/20 flex items-center justify-center shrink-0">
                      <Brain className="w-5 h-5 text-sunrise" />
                    </div>
                    <div>
                      <p className="font-semibold text-sunrise text-sm">Spaced Repetition</p>
                      <p className="text-text-secondary text-xs mt-0.5">
                        Used by medical students & memory champions.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          )}

          {/* ===== STORY SLIDE 3: The Polymind Way ===== */}
          {step === 3 && (
            <div className="space-y-6">
              {/* AI Generated Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full aspect-video rounded-2xl overflow-hidden border border-sunrise/20"
              >
                <img
                  src={imgPolymind}
                  alt="Polymind transformation visualization"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  This is the Polymind way
                </h1>
                <p className="text-text-secondary mt-1 text-sm">
                  Four forces that make knowledge permanent
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <GlassCard className="border-lavender/30 p-3">
                  <Brain className="w-6 h-6 text-lavender mb-1" />
                  <p className="font-semibold text-text-primary text-xs">Spaced Repetition</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Review at the perfect moment</p>
                </GlassCard>

                <GlassCard className="border-sunrise/30 p-3">
                  <Target className="w-6 h-6 text-sunrise mb-1" />
                  <p className="font-semibold text-text-primary text-xs">Active Recall</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Quiz yourself, don't just re-read</p>
                </GlassCard>

                <GlassCard className="border-sage/30 p-3">
                  <Network className="w-6 h-6 text-sage mb-1" />
                  <p className="font-semibold text-text-primary text-xs">Cross-Domain Links</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Connect ideas across fields</p>
                </GlassCard>

                <GlassCard className="border-golden/30 p-3">
                  <Zap className="w-6 h-6 text-golden mb-1" />
                  <p className="font-semibold text-text-primary text-xs">Gamification</p>
                  <p className="text-[10px] text-text-muted mt-0.5">XP, streaks & achievements</p>
                </GlassCard>
              </div>

              <GlassCard className="border-sunrise/30 p-3">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-sunrise shrink-0" />
                  <p className="text-text-primary text-sm">
                    Retain <span className="text-sunrise font-bold">92%</span> of what you learn — vs 10% from passive reading.
                  </p>
                </div>
              </GlassCard>
            </div>
          )}

          {/* ===== STEP 4: Primary Goal ===== */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  Why are you building your Polymind?
                </h1>
                <p className="text-text-secondary mt-2">
                  This shapes your personalized learning journey
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

          {step === 5 && (
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

          {step === 6 && (
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
                    Consistency beats intensity. Even 5 minutes daily builds
                    a powerful Polymind over time.
                  </p>
                </div>
              </GlassCard>
            </div>
          )}

          {step === 7 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                  Pick your starting domains
                </h1>
                <p className="text-text-secondary mt-2">
                  Choose at least 3 — we'll build your Polymind from here
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {knowledgeDomains.map((domain) => {
                  const colors = colorStyles[domain.color as keyof typeof colorStyles];
                  const isSelected = userData.selectedDomains.includes(domain.id);

                  return (
                    <motion.button
                      key={domain.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleDomain(domain.id)}
                      className={`p-4 rounded-xl text-left transition-all border backdrop-blur-sm ${
                        isSelected
                          ? `${colors.activeBg} ${colors.activeBorder}`
                          : `glass-light border-white/10 hover:border-white/20`
                      }`}
                    >
                      <p className={`font-medium text-base ${isSelected ? colors.text : 'text-text-primary'}`}>
                        {domain.label}
                      </p>
                      <p className="text-xs text-text-muted mt-1">{domain.desc}</p>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`mt-2 w-5 h-5 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center`}
                        >
                          <Check className={`w-3 h-3 ${colors.text}`} />
                        </motion.div>
                      )}
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
                    Your Polymind connects knowledge across domains —
                    that's where the real insights emerge.
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
                Build My Polymind
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
