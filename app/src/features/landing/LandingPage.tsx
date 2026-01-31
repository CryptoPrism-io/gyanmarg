import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Brain,
  Target,
  Trophy,
  Menu,
  X,
  Download,
  Share,
  Plus,
  Smartphone,
  CheckCircle2,
  XCircle,
  Clock,
  BookOpen,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { GoogleSignInButton } from '@/components/molecules';
import { useAuth } from '@/hooks';

// Import AI-generated images
import heroMain from '@/assets/ai-images/landing/hero-main.png';
import heroBooksTransform from '@/assets/ai-images/landing/hero-books-transform.png';
import featureSpacedRepetition from '@/assets/ai-images/landing/feature-spaced-repetition.png';
import featureVisualLearning from '@/assets/ai-images/landing/feature-visual-learning.png';
import featureGamification from '@/assets/ai-images/landing/feature-gamification.png';
import ctaSectionBg from '@/assets/ai-images/landing/cta-section-bg.png';

// Domain images
import domainPsychology from '@/assets/ai-images/domains/domain-psychology.png';
import domainAI from '@/assets/ai-images/domains/domain-ai.png';
import domainWealth from '@/assets/ai-images/domains/domain-wealth.png';
import domainProductivity from '@/assets/ai-images/domains/domain-productivity.png';
import domainHealth from '@/assets/ai-images/domains/domain-health.png';
import domainLeadership from '@/assets/ai-images/domains/domain-leadership.png';
import domainPhilosophy from '@/assets/ai-images/domains/domain-philosophy.png';
import domainWriting from '@/assets/ai-images/domains/domain-writing.png';
import domainScience from '@/assets/ai-images/domains/domain-science.png';
import domainCreativity from '@/assets/ai-images/domains/domain-creativity.png';

// Extend window for PWA functions
declare global {
  interface Window {
    deferredInstallPrompt: Event | null;
    triggerPWAInstall: () => Promise<{ success: boolean; reason: string }>;
  }
}

// PWA Install Hook
function useInstallPrompt() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    const checkPrompt = () => {
      const hasPrompt = !!window.deferredInstallPrompt;
      setCanInstall(hasPrompt);
    };

    checkPrompt();

    const onReady = () => setCanInstall(true);
    const onInstalled = () => {
      setIsInstalled(true);
      setCanInstall(false);
    };

    window.addEventListener('pwainstallready', onReady);
    window.addEventListener('pwainstalled', onInstalled);

    const interval = setInterval(checkPrompt, 1000);

    return () => {
      window.removeEventListener('pwainstallready', onReady);
      window.removeEventListener('pwainstalled', onInstalled);
      clearInterval(interval);
    };
  }, []);

  const install = async (): Promise<boolean> => {
    if (typeof window.triggerPWAInstall === 'function') {
      const result = await window.triggerPWAInstall();
      if (result.success) {
        setIsInstalled(true);
        setCanInstall(false);
      }
      return result.success;
    }
    return false;
  };

  return { canInstall, isInstalled, isIOS, install };
}

// ===== POLYMIND STORYBRAND DATA =====

// The 3-Step Plan
const thePlan = [
  {
    step: 1,
    title: 'Choose Your Domains',
    description: 'Psychology, AI, Wealth, Philosophy, Health — pick any of 50+ knowledge domains.',
    icon: Target,
  },
  {
    step: 2,
    title: 'Learn in Swipeable Cards',
    description: 'Bite-sized concepts from 1000+ authors. Quiz yourself as you go.',
    icon: BookOpen,
  },
  {
    step: 3,
    title: 'Retain Forever',
    description: 'Smart reviews at perfect intervals. Your Polymind never forgets.',
    icon: Brain,
  },
];

// Guide Authority Stats
const authorityStats = [
  { value: '1000+', label: 'Authors' },
  { value: '10K+', label: 'Polyminds' },
  { value: '50+', label: 'Domains' },
  { value: '92%', label: 'Retention' },
];

// Success Transformations (Testimonials with transformation focus)
const transformations = [
  {
    before: "I read 30+ books a year but couldn't recall key insights when I needed them.",
    after: "Now I reference Kahneman, Dalio, and Seneca in the same conversation. It's all in my Polymind.",
    name: 'Arjun Kumar',
    role: 'Software Engineer @ Google',
    initials: 'AK',
    color: '#F59E0B',
    metric: '180-day streak',
  },
  {
    before: "Learning felt like pouring water into a leaky bucket.",
    after: "Built a Polymind I can actually access. The gamification makes me want to come back daily.",
    name: 'Priya Sharma',
    role: 'Product Manager @ Stripe',
    initials: 'PS',
    color: '#8B5CF6',
    metric: '12 domains mastered',
    featured: true,
  },
  {
    before: "I'd highlight books, take notes, then never look at them again.",
    after: "My Polymind connects psychology to negotiation to AI. I finally think like a polymath.",
    name: 'Rahul Verma',
    role: 'Founder @ TechStartup',
    initials: 'RV',
    color: '#22C55E',
    metric: '2000+ XP earned',
  },
];

// Failure Stakes (What happens if they don't act)
const failureStakes = [
  { icon: XCircle, text: 'Keep forgetting 90% of what you read within weeks' },
  { icon: Clock, text: 'Waste hours reading books that don\'t stick' },
  { icon: TrendingUp, text: 'Watch others advance while you stay stuck' },
];

// Success Benefits (The transformation)
const successBenefits = [
  { icon: CheckCircle2, text: 'Recall insights from 1000+ authors on demand' },
  { icon: Sparkles, text: 'Build unshakeable expertise across 50+ domains' },
  { icon: Trophy, text: 'Join 10,000+ Polyminds who never forget what they learn' },
];

// Knowledge Domains with AI images
const domainCards = [
  { title: 'Psychology', subtitle: 'Kahneman, Cialdini, Ariely', image: domainPsychology },
  { title: 'AI & Technology', subtitle: 'Machine learning, future of tech', image: domainAI },
  { title: 'Wealth Building', subtitle: 'Buffett, Dalio, Graham', image: domainWealth },
  { title: 'Productivity', subtitle: 'Deep work, habits, focus', image: domainProductivity },
  { title: 'Health & Longevity', subtitle: 'Attia, Huberman, biohacking', image: domainHealth },
  { title: 'Leadership', subtitle: 'Management, influence, teams', image: domainLeadership },
  { title: 'Philosophy', subtitle: 'Stoicism, meaning, wisdom', image: domainPhilosophy },
  { title: 'Writing', subtitle: 'Storytelling, persuasion', image: domainWriting },
  { title: 'Science', subtitle: 'Physics, biology, neuroscience', image: domainScience },
  { title: 'Creativity', subtitle: 'Innovation, design thinking', image: domainCreativity },
];

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { canInstall, isInstalled, isIOS, install } = useInstallPrompt();
  const { isConfigured } = useAuth();

  // Track scroll position for parallax effect on multilingual text
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSModal(true);
    } else if (canInstall) {
      const installed = await install();
      if (!installed) {
        setShowIOSModal(true);
      }
    } else {
      setShowIOSModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden relative">
      {/* ===== ANIMATED GRADIENT BACKGROUND ===== */}
      <div className="animated-gradient-bg">
        <div className="wave-orb wave-orb-1" />
        <div className="wave-orb wave-orb-2" />
        <div className="wave-orb wave-orb-3" />
        <div className="wave-orb wave-orb-4" />
        {/* Particle dots */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
              }}
            />
          ))}
        </div>
        {/* Wave lines */}
        <div className="wave-lines">
          <div className="wave-line wave-line-1" />
          <div className="wave-line wave-line-2" />
          <div className="wave-line wave-line-3" />
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-lg md:text-xl font-semibold tracking-wider">POLYMIND</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm text-gray-400 hover:text-white transition">The Problem</a>
            <a href="#solution" className="text-sm text-gray-400 hover:text-white transition">How It Works</a>
            <a href="#results" className="text-sm text-gray-400 hover:text-white transition">Results</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {!isInstalled && (
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-2 px-4 py-2 text-sm text-amber-500 border border-amber-500/30 rounded-lg hover:bg-amber-500/10 transition"
              >
                <Download size={16} />
                Install App
              </button>
            )}
            {isConfigured && (
              <GoogleSignInButton variant="outline" size="md" label="Sign in" />
            )}
            <Link
              to="/onboarding"
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-sm font-semibold rounded-lg hover:opacity-90 transition"
            >
              Build Your Polymind
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#111113] border-t border-white/5 px-6 py-4"
          >
            <nav className="flex flex-col gap-4">
              <a href="#problem" className="text-gray-400 hover:text-white">The Problem</a>
              <a href="#solution" className="text-gray-400 hover:text-white">How It Works</a>
              <a href="#results" className="text-gray-400 hover:text-white">Results</a>
              {!isInstalled && (
                <button
                  onClick={handleInstallClick}
                  className="flex items-center justify-center gap-2 px-5 py-3 text-amber-500 border border-amber-500/30 rounded-lg"
                >
                  <Download size={18} />
                  Install App
                </button>
              )}
              {isConfigured && (
                <GoogleSignInButton variant="outline" size="lg" fullWidth label="Sign in with Google" />
              )}
              <Link
                to="/onboarding"
                className="mt-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-center font-semibold rounded-lg"
              >
                Build Your Polymind
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      {/* ===== INFINITE SCROLLING MULTILINGUAL TEXT - Both Sides ===== */}
      <style>{`
        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Left Side */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0 z-40 pointer-events-none">
        {/* Rotated container - text reads bottom to top */}
        <div
          className="absolute bottom-0 left-12 origin-bottom-left -rotate-90 overflow-hidden pointer-events-auto"
          style={{ width: '100vh', height: '28px' }}
        >
          <div
            className="inline-flex items-center text-[15px] font-medium tracking-wider opacity-50 whitespace-nowrap"
            style={{
              animation: 'marqueeScrollLeft 33s linear infinite',
              transform: `translateX(${-scrollY * 0.3}px)`,
            }}
          >
            {/* First set - orange hues only */}
            <span className="text-orange-300 px-5">ज्ञानमार्ग</span>
            <span className="text-amber-400 px-5">知識の道</span>
            <span className="text-orange-400 px-5">知識之路</span>
            <span className="text-amber-500 px-5">지식의 길</span>
            <span className="text-orange-500 px-5">طريق المعرفة</span>
            <span className="text-amber-300 px-5">דרך הידע</span>
            <span className="text-orange-300 px-5">Οδός Γνώσης</span>
            <span className="text-amber-400 px-5">Via Scientiae</span>
            <span className="text-orange-400 px-5">அறிவின் பாதை</span>
            <span className="text-amber-500 px-5">ज्ञान का मार्ग</span>
            <span className="text-orange-500 px-5">Путь знаний</span>
            <span className="text-amber-300 px-5">Chemin du Savoir</span>
            {/* Duplicate for seamless loop */}
            <span className="text-orange-300 px-5">ज्ञानमार्ग</span>
            <span className="text-amber-400 px-5">知識の道</span>
            <span className="text-orange-400 px-5">知識之路</span>
            <span className="text-amber-500 px-5">지식의 길</span>
            <span className="text-orange-500 px-5">طريق المعرفة</span>
            <span className="text-amber-300 px-5">דרך הידע</span>
            <span className="text-orange-300 px-5">Οδός Γνώσης</span>
            <span className="text-amber-400 px-5">Via Scientiae</span>
            <span className="text-orange-400 px-5">அறிவின் பாதை</span>
            <span className="text-amber-500 px-5">ज्ञान का मार्ग</span>
            <span className="text-orange-500 px-5">Путь знаний</span>
            <span className="text-amber-300 px-5">Chemin du Savoir</span>
          </div>
        </div>
      </div>

      {/* Right Side - same direction (down to up) */}
      <div className="hidden lg:block fixed right-0 top-0 bottom-0 z-40 pointer-events-none">
        <div
          className="absolute bottom-0 right-12 origin-bottom-right rotate-90 overflow-hidden pointer-events-auto"
          style={{ width: '100vh', height: '28px' }}
        >
          <div
            className="inline-flex items-center text-[15px] font-medium tracking-wider opacity-50 whitespace-nowrap flex-row-reverse"
            style={{
              animation: 'marqueeScrollRight 33s linear infinite',
              transform: `translateX(${scrollY * 0.3}px)`,
            }}
          >
            {/* First set - orange hues only */}
            <span className="text-orange-300 px-5">ज्ञानमार्ग</span>
            <span className="text-amber-400 px-5">知識の道</span>
            <span className="text-orange-400 px-5">知識之路</span>
            <span className="text-amber-500 px-5">지식의 길</span>
            <span className="text-orange-500 px-5">طريق المعرفة</span>
            <span className="text-amber-300 px-5">דרך הידע</span>
            <span className="text-orange-300 px-5">Οδός Γνώσης</span>
            <span className="text-amber-400 px-5">Via Scientiae</span>
            <span className="text-orange-400 px-5">அறிவின் பாதை</span>
            <span className="text-amber-500 px-5">ज्ञान का मार्ग</span>
            <span className="text-orange-500 px-5">Путь знаний</span>
            <span className="text-amber-300 px-5">Chemin du Savoir</span>
            {/* Duplicate for seamless loop */}
            <span className="text-orange-300 px-5">ज्ञानमार्ग</span>
            <span className="text-amber-400 px-5">知識の道</span>
            <span className="text-orange-400 px-5">知識之路</span>
            <span className="text-amber-500 px-5">지식의 길</span>
            <span className="text-orange-500 px-5">طريق المعرفة</span>
            <span className="text-amber-300 px-5">דרך הידע</span>
            <span className="text-orange-300 px-5">Οδός Γνώσης</span>
            <span className="text-amber-400 px-5">Via Scientiae</span>
            <span className="text-orange-400 px-5">அறிவின் பாதை</span>
            <span className="text-amber-500 px-5">ज्ञान का मार्ग</span>
            <span className="text-orange-500 px-5">Путь знаний</span>
            <span className="text-amber-300 px-5">Chemin du Savoir</span>
          </div>
        </div>
      </div>

      {/* ===== HERO: Character's Desire + Direct CTA ===== */}
      <section className="pt-32 md:pt-40 pb-16 px-6 relative overflow-hidden z-10">
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src={heroMain}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Problem-aware badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 border border-coral/20 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            <span className="text-xs md:text-sm text-coral font-medium">Tired of forgetting what you read?</span>
          </motion.div>

          {/* Hero Headline: Dramatic Zen Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative mb-8"
          >
            <span className="block text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-white/90 tracking-tight">
              Finally{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Retain
                </span>
                {/* Brush stroke underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q25,2 50,6 T100,4" stroke="url(#brushGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-white/90 tracking-tight mt-2">
              Everything You{' '}
              <span className="font-light italic text-white/70">Learn</span>
            </span>
          </motion.h1>

          {/* Subheadline: Elegant spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed tracking-wide">
              <span className="inline-block">1000+ bestselling authors.</span>
              <span className="inline-block mx-2 text-amber-500/50">·</span>
              <span className="inline-block">The world's most powerful ideas.</span>
            </p>
            <p className="text-lg md:text-xl text-white mt-3 font-light">
              One system to make them <span className="font-medium text-amber-500">unforgettable</span>.
            </p>
          </motion.div>

          {/* CTAs: Direct + Transitional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/onboarding"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition shadow-lg shadow-amber-500/20"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(245,158,11,0.3)' }}
            >
              Build Your Polymind — Free
              <ArrowRight size={20} />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 border border-gray-700 rounded-xl flex items-center justify-center gap-2 hover:border-gray-500 hover:bg-white/5 transition">
              <Play size={18} className="text-amber-500" />
              <span>See How It Works</span>
            </button>
          </motion.div>

          {/* Social Proof Teaser */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm mt-8 flex items-center justify-center gap-2"
          >
            <Users size={16} className="text-amber-500/70" />
            <span>Join <span className="text-amber-500/90 font-medium">10,000+</span> Polyminds who never forget what they learn</span>
          </motion.p>
        </div>
      </section>

      {/* ===== THE PROBLEM: Stakes Section ===== */}
      <section id="problem" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-coral/10 border border-coral/20 rounded-full text-xs text-coral font-medium tracking-wider mb-6">
              THE PROBLEM
            </span>

            {/* Problem Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md mx-auto aspect-video rounded-2xl overflow-hidden border border-coral/20 mb-8"
            >
              <img
                src={heroBooksTransform}
                alt="Books dissolving into forgotten memories"
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="block text-white/90">You Read Great Books.</span>
              <span className="block mt-2">
                <span className="text-coral">Then Forget </span>
                <span className="relative inline-block">
                  <span className="text-6xl md:text-7xl font-bold text-coral/90">90%</span>
                  <span className="absolute -top-1 -right-4 text-xs text-coral/60 font-mono">*</span>
                </span>
                <span className="text-coral"> Within Weeks.</span>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Sound familiar? You're not alone. Most people lose the knowledge they work hard to gain.
            </p>
          </div>

          {/* Failure Stakes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {failureStakes.map((stake, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-light border border-coral/20 rounded-xl p-6 text-center"
              >
                <stake.icon className="w-8 h-8 text-coral mx-auto mb-4" />
                <p className="text-gray-400">{stake.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Empathy Statement */}
          <div className="glass border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
            <p className="text-xl md:text-2xl text-gray-200 font-serif italic mb-4 relative">
              "I used to highlight books, take notes, tell myself I'd review them...
              <span className="text-amber-500/80"> then never look at them again.</span>"
            </p>
            <p className="text-gray-400 relative">— Every knowledge seeker ever</p>
          </div>
        </div>
      </section>

      {/* ===== THE GUIDE: Authority + Empathy ===== */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-500 font-medium tracking-wider mb-6">
              THE POLYMIND SYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="font-light text-white/80">Built on the Science of</span>
              <span className="block mt-1 relative">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-semibold">
                  Permanent Memory
                </span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Your Polymind uses evidence-based techniques that top universities and researchers have proven work.
            </p>
          </div>

          {/* Authority Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {authorityStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 glass-light rounded-xl"
              >
                <div className="font-mono text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Science Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img src={featureSpacedRepetition} alt="Spaced Repetition" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center mb-4 -mt-10 relative z-10 border-4 border-[#111113]">
                  <Brain size={20} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Spaced Repetition</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  The SM-2 algorithm shows you content right before you'd forget it. Proven to boost retention by 200%.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img src={featureVisualLearning} alt="Visual Learning" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#252528] flex items-center justify-center mb-4 -mt-10 relative z-10 border-4 border-[#1A1A1D] shadow-lg">
                  <Target size={20} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Active Recall</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Quizzes force retrieval from memory. The struggle strengthens neural pathways — making knowledge stick.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img src={featureGamification} alt="Gamification" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#252528] flex items-center justify-center mb-4 -mt-10 relative z-10 border-4 border-[#1A1A1D] shadow-lg">
                  <Trophy size={20} className="text-lavender" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gamification</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  XP, levels, streaks, and achievements make learning addictive. You'll actually want to come back.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== THE PLAN: 3 Simple Steps ===== */}
      <section id="solution" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-sage/10 border border-sage/20 rounded-full text-xs text-sage font-medium tracking-wider mb-6">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-7xl md:text-8xl font-bold text-sage/20 block -mb-8 md:-mb-10">3</span>
              <span className="relative z-10 block">Steps to Building</span>
              <span className="relative z-10 block text-sage font-medium">Your Polymind</span>
            </h2>
          </div>

          <div className="space-y-8">
            {thePlan.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-sage to-sage-light flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">{item.step}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    {item.title}
                    <item.icon size={20} className="text-sage" />
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after plan */}
          <div className="text-center mt-12">
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sage to-sage-light text-black font-semibold rounded-xl hover:opacity-90 transition"
            >
              Start Building — Free
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DOMAINS: What You'll Learn - Bi-directional Infinite Carousel ===== */}
      <section className="py-20 overflow-hidden relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-lavender/10 border border-lavender/20 rounded-full text-xs text-lavender font-medium tracking-wider mb-6">
              50+ KNOWLEDGE DOMAINS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="block font-light text-white/80">Master Knowledge From</span>
              <span className="block mt-1">
                <span className="text-5xl md:text-6xl font-bold text-lavender/30">1000+</span>
                <span className="text-lavender ml-3">World-Class Authors</span>
              </span>
            </h2>
          </div>
        </div>

        {/* Row 1: Slow auto-animation + faster scroll-linked movement */}
        <div
          className="relative mb-6"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
        >
          <div
            className="flex gap-6 animate-drift-left"
            style={{ transform: `translateX(${-scrollY * 0.5}px)` }}
          >
            {/* Triple the cards for scroll range */}
            {[...domainCards, ...domainCards, ...domainCards].map((domain, i) => (
              <div
                key={`row1-${i}`}
                className="flex-shrink-0 w-64 group/card"
              >
                <div className="glass border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/10">
                  <div className="h-36 overflow-hidden">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-white text-sm mb-1">{domain.title}</h3>
                    <p className="text-xs text-gray-400">{domain.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Slow auto-animation (opposite) + faster scroll-linked movement */}
        <div
          className="relative"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
        >
          <div
            className="flex gap-6 animate-drift-right"
            style={{ transform: `translateX(${scrollY * 0.5 - 400}px)` }}
          >
            {/* Triple the cards reversed */}
            {[...domainCards.slice().reverse(), ...domainCards.slice().reverse(), ...domainCards.slice().reverse()].map((domain, i) => (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 w-64 group/card"
              >
                <div className="glass border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-lavender/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-lavender/10">
                  <div className="h-36 overflow-hidden">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-white text-sm mb-1">{domain.title}</h3>
                    <p className="text-xs text-gray-400">{domain.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes driftLeft {
            0% { margin-left: 0; }
            100% { margin-left: -33.333%; }
          }
          @keyframes driftRight {
            0% { margin-left: -33.333%; }
            100% { margin-left: 0; }
          }
          .animate-drift-left {
            animation: driftLeft 60s linear infinite;
          }
          .animate-drift-right {
            animation: driftRight 60s linear infinite;
          }
        `}</style>
      </section>

      {/* ===== SUCCESS: Transformation Testimonials ===== */}
      <section id="results" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-500 font-medium tracking-wider mb-6">
              REAL POLYMINDS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="block">
                <span className="text-gray-500 font-light">From</span>
                <span className="mx-2 italic">Forgetful Reader</span>
              </span>
              <span className="block mt-1">
                <span className="text-gray-500 font-light">To</span>
                <span className="ml-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-semibold">
                  Knowledge Powerhouse
                </span>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {transformations.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-2xl p-6 ${
                  t.featured ? 'border-2 border-amber-500/30 shadow-lg shadow-amber-500/10' : 'border border-gray-800'
                }`}
              >
                {/* Before state */}
                <div className="mb-4 p-4 bg-coral/5 border border-coral/20 rounded-xl">
                  <p className="text-xs text-coral font-medium mb-2">BEFORE</p>
                  <p className="text-sm text-gray-400 italic">"{t.before}"</p>
                </div>

                {/* After state */}
                <div className="mb-6 p-4 bg-sage/5 border border-sage/20 rounded-xl">
                  <p className="text-xs text-sage font-medium mb-2">AFTER</p>
                  <p className="text-sm text-gray-300">"{t.after}"</p>
                </div>

                {/* Person */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                      style={{ backgroundColor: `${t.color}20`, color: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.role}</div>
                    </div>
                  </div>
                  <div className="text-xs text-amber-500 font-medium">{t.metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS vs FAILURE Comparison ===== */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Polymind */}
            <div className="glass-light border border-coral/20 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-coral mb-6 flex items-center gap-2">
                <XCircle size={20} />
                Without Polymind
              </h3>
              <ul className="space-y-4">
                {failureStakes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <XCircle size={18} className="text-coral mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Polymind */}
            <div className="bg-gradient-to-br from-sage/10 to-transparent border border-sage/30 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-sage mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} />
                With Polymind
              </h3>
              <ul className="space-y-4">
                {successBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-sage mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 px-6 relative overflow-hidden z-10">
        {/* CTA Background Image */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img
            src={ctaSectionBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111113] via-transparent to-[#111113]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            <span className="block text-white/60 font-light line-through decoration-coral/40 decoration-2">Stop Forgetting.</span>
            <span className="block mt-2 relative">
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent font-semibold">
                Build Your Polymind.
              </span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Every day you wait is another book you'll forget.
            Join 10,000+ Polyminds who've transformed how they learn.
          </p>
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(245,158,11,0.3)' }}
          >
            Build Your Polymind — Free
            <ArrowRight size={20} />
          </Link>
          <p className="text-sm mt-6 text-gray-400">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                  No credit card required
                </span>
                <span className="mx-3 text-gray-600">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                  Works on any device
                </span>
              </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-lg font-semibold tracking-wider">POLYMIND</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your mind, unlimited.<br />
                1000+ authors. Unforgettable knowledge.
              </p>
            </div>

            <div className="flex gap-16">
              <div>
                <h4 className="font-medium text-sm mb-4">Product</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#problem" className="hover:text-white transition">The Problem</a></li>
                  <li><a href="#solution" className="hover:text-white transition">How It Works</a></li>
                  <li><a href="#results" className="hover:text-white transition">Results</a></li>
                  <li><Link to="/onboarding" className="hover:text-white transition">Get Started</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-4">Resources</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><Link to="/science" className="hover:text-white transition">Learning Science</Link></li>
                  <li><Link to="/books" className="hover:text-white transition">Book List</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 Polymind. Made with <span className="text-amber-500">❤️</span> for Polyminds everywhere.</p>
            <div className="flex gap-6">
              {/* TODO: Add real social links - see tasks #4, #5, #6 */}
              <a href="https://twitter.com/polymind" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="https://github.com/polymind-app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a>
              <a href="https://linkedin.com/company/polymind" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== iOS Install Modal ===== */}
      <AnimatePresence>
        {showIOSModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowIOSModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md glass-heavy border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="relative p-6 pb-4">
                <button
                  onClick={() => setShowIOSModal(false)}
                  className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                    <Smartphone size={28} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Install Polymind</h3>
                    <p className="text-white/60 text-sm">Add to your device</p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 space-y-4">
                {isIOS ? (
                  <>
                    <p className="text-white/70 text-sm mb-4">On iPhone/iPad (Safari only):</p>
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
                        <p className="text-white font-medium">Tap "Add to Home Screen"</p>
                        <p className="text-white/60 text-sm flex items-center gap-2 mt-1">
                          <Plus size={16} /> Scroll down to find it
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-500 font-semibold">3</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Tap "Add"</p>
                        <p className="text-white/60 text-sm mt-1">The app will appear on your home screen</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-white/70 text-sm mb-4">On Desktop (Chrome/Edge):</p>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-500 font-semibold">1</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Look for the install icon</p>
                        <p className="text-white/60 text-sm mt-1">In the address bar (right side) or browser menu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-500 font-semibold">2</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Click "Install" or menu → "Install app"</p>
                        <p className="text-white/60 text-sm mt-1">Chrome: ⋮ → "Install Polymind..."</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-500 font-semibold">3</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">On Android</p>
                        <p className="text-white/60 text-sm mt-1">Tap ⋮ → "Add to Home screen" or "Install app"</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-4 bg-white/5">
                <button
                  onClick={() => setShowIOSModal(false)}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-colors"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LandingPage;
