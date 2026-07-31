import { Link } from 'react-router-dom';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Brain,
  Target,
  Trophy,
  Menu,
  X,

  CheckCircle2,
  XCircle,
  Clock,
  BookOpen,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { UserAvatar } from '@/components/molecules';
import { useAuth } from '@/hooks';
import { PolymindLogo } from '@/components/brand';

// Preload hero image as soon as this module loads
const _preloadHero = (src: string) => {
  if (typeof document === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  // If already in the viewport on mount, render the final value immediately
  // (no "0" flash for above-fold stats). Below-fold stats still animate on scroll.
  const spring = useSpring(isInView ? value : 0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

// Import AI-generated images (WebP for better performance)
import heroMain from '@/assets/ai-images/landing/hero-main.webp';
import heroBooksTransform from '@/assets/ai-images/landing/hero-books-transform.webp';
import featureSpacedRepetition from '@/assets/ai-images/landing/feature-spaced-repetition.webp';
import featureVisualLearning from '@/assets/ai-images/landing/feature-visual-learning.webp';
import featureGamification from '@/assets/ai-images/landing/feature-gamification.webp';
import ctaSectionBg from '@/assets/ai-images/landing/cta-section-bg.webp';

// Preload hero/hero images at module load time (before React render)
_preloadHero(heroMain);
_preloadHero(heroBooksTransform);

// Domain images
import domainPsychology from '@/assets/ai-images/domains/domain-psychology.webp';
import domainAI from '@/assets/ai-images/domains/domain-ai.webp';
import domainWealth from '@/assets/ai-images/domains/domain-wealth.webp';
import domainProductivity from '@/assets/ai-images/domains/domain-productivity.webp';
import domainHealth from '@/assets/ai-images/domains/domain-health.webp';
import domainLeadership from '@/assets/ai-images/domains/domain-leadership.webp';
import domainPhilosophy from '@/assets/ai-images/domains/domain-philosophy.webp';
import domainWriting from '@/assets/ai-images/domains/domain-writing.webp';
import domainScience from '@/assets/ai-images/domains/domain-science.webp';
import domainCreativity from '@/assets/ai-images/domains/domain-creativity.webp';

// ===== POLYMIND STORYBRAND DATA =====

// The 3-Step Plan
const thePlan = [
  {
    step: 1,
    title: 'Pick a World',
    description: 'Psychology, Quantum Physics, Ancient Wisdom, Creative Writing — 76 curated domains await. Start anywhere your curiosity leads.',
    icon: Target,
  },
  {
    step: 2,
    title: 'Read Immersively',
    description: 'Beautiful lessons distilled from the world\'s best authors. Not summaries. Not flashcards. Real depth, at your own pace.',
    icon: BookOpen,
  },
  {
    step: 3,
    title: 'Become a Polymath',
    description: 'As you explore more worlds, your Polymind grows. See connections between Stoic philosophy and AI, between neuroscience and leadership.',
    icon: Brain,
  },
];

// Guide Authority Stats
const authorityStats = [
  { value: 76, suffix: '', label: 'Domains', detail: 'From philosophy to quantum physics' },
  { value: 4700, suffix: '+', label: 'Lessons', detail: 'Immersive reading journeys' },
  { value: 1000, suffix: '+', label: 'Authors', detail: 'Bestselling books distilled' },
  { value: 14, suffix: '', label: 'Categories', detail: 'Every corner of human knowledge' },
];

// Success Transformations (Testimonials with transformation focus)
const transformations = [
  {
    before: 'I only read business books. Same authors, same ideas, stuck in my lane.',
    after: 'Yesterday I read about Stoic philosophy. Today, quantum mechanics. Tomorrow, Vedic wisdom. My thinking has completely transformed.',
    name: 'Arjun Kumar',
    role: 'Software Engineer @ Google',
    initials: 'AK',
    color: '#F59E0B',
    metric: '42 domains explored',
  },
  {
    before: 'I wanted to learn broadly but didn\'t know where to start with each topic.',
    after: 'Polymind gives me curated paths through every domain. I\'ve read more in 3 months than the past 3 years.',
    name: 'Priya Sharma',
    role: 'Product Manager @ Stripe',
    initials: 'PS',
    color: '#8B5CF6',
    metric: '12 domains mastered',
    featured: true,
  },
  {
    before: 'I\'d buy books on new topics but never finish them. Too dense, too slow.',
    after: 'The bite-sized lessons are perfect. I can explore game theory in the morning and neuroscience at lunch.',
    name: 'Rahul Verma',
    role: 'Founder @ TechStartup',
    initials: 'RV',
    color: '#22C55E',
    metric: '500+ lessons read',
  },
];

// Failure Stakes (What happens if they don't act)
const failureStakes = [
  { icon: XCircle, text: 'Stuck reading the same types of books, same narrow topics' },
  { icon: Clock, text: 'Life is too short to read 1000+ books cover to cover' },
  { icon: TrendingUp, text: 'Missing connections that only cross-domain thinking reveals' },
];

// Success Benefits (The transformation)
const successBenefits = [
  { icon: CheckCircle2, text: 'Explore 76 domains — from ancient wisdom to cutting-edge science' },
  { icon: Sparkles, text: 'Read the essence of 1000+ authors in immersive, bite-sized lessons' },
  { icon: Trophy, text: 'See patterns across fields that specialists miss entirely' },
];

// Knowledge Domains with AI images + deep-linked module
const domainCards = [
  { title: 'Psychology', subtitle: 'Kahneman, Cialdini, Ariely', image: domainPsychology, moduleId: 'psychology' },
  { title: 'AI & Technology', subtitle: 'Machine learning, future of tech', image: domainAI, moduleId: 'ai-ml' },
  { title: 'Wealth Building', subtitle: 'Buffett, Dalio, Graham', image: domainWealth, moduleId: 'wealth-building' },
  { title: 'Productivity', subtitle: 'Deep work, habits, focus', image: domainProductivity, moduleId: 'productivity-systems' },
  { title: 'Health & Longevity', subtitle: 'Attia, Huberman, biohacking', image: domainHealth, moduleId: 'body-longevity' },
  { title: 'Leadership', subtitle: 'Management, influence, teams', image: domainLeadership, moduleId: 'leadership' },
  { title: 'Philosophy', subtitle: 'Stoicism, meaning, wisdom', image: domainPhilosophy, moduleId: 'stoicism' },
  { title: 'Writing', subtitle: 'Storytelling, persuasion', image: domainWriting, moduleId: 'writing-storytelling' },
  { title: 'Science', subtitle: 'Physics, biology, neuroscience', image: domainScience, moduleId: 'physics-engineering' },
  { title: 'Creativity', subtitle: 'Innovation, design thinking', image: domainCreativity, moduleId: 'creative-writing' },
];

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { user } = useAuth();

  // Track scroll position for parallax effect on multilingual text
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-base text-white overflow-x-hidden relative">
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

      {/* ===== HEADER - Floating Glass Navbar ===== */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-base/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="px-4 sm:px-6 h-14 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <PolymindLogo size="xs" variant="simple" />
              <span className="polymind-brand-text font-display text-base font-bold tracking-wider hidden sm:inline">POLYMIND</span>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            </Link>

            {/* Center Nav - Desktop */}
            <nav className="hidden md:flex items-center">
              {/* Page sections */}
              <div className="flex items-center bg-white/[0.03] rounded-xl px-1 py-1">
                <a href="#problem" className="px-3 py-1.5 text-xs font-medium text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition-all">Why</a>
                <a href="#what" className="px-3 py-1.5 text-xs font-medium text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition-all">What</a>
                <a href="#solution" className="px-3 py-1.5 text-xs font-medium text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition-all">How</a>
                <a href="#results" className="px-3 py-1.5 text-xs font-medium text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition-all">Results</a>
              </div>

              {/* Divider */}
              <div className="w-px h-5 bg-white/10 mx-4" />

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition rounded-lg hover:bg-white/5">
                  Resources
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-elevated/95 border border-white/10 rounded-xl py-2 min-w-[160px] shadow-2xl backdrop-blur-xl">
                    <a href="/blog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle transition">
                      <span className="w-1 h-1 rounded-full bg-accent/50" />
                      Blog
                    </a>
                    <a href="/science" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle transition">
                      <span className="w-1 h-1 rounded-full bg-accent/50" />
                      Research
                    </a>
                    <a href="/how-to" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle transition">
                      <span className="w-1 h-1 rounded-full bg-accent/50" />
                      How-To Guide
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  <UserAvatar size="xs" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link
                  to="/dashboard"
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  Get Started
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 -mr-2 text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide Down */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-base/95 backdrop-blur-xl border-t border-white/5 rounded-b-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {/* Page sections */}
              <div className="grid grid-cols-4 gap-1 mb-3">
                <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-center px-2 py-2 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition">Why</a>
                <a href="#what" onClick={() => setMobileMenuOpen(false)} className="text-center px-2 py-2 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition">What</a>
                <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="text-center px-2 py-2 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition">How</a>
                <a href="#results" onClick={() => setMobileMenuOpen(false)} className="text-center px-2 py-2 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition">Results</a>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5 my-2" />

              {/* Resources */}
              <div className="space-y-1">
                <p className="text-[10px] text-text-muted uppercase tracking-wider px-2 mb-2">Resources</p>
                <a href="/blog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 py-2 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition">
                  <span className="w-1 h-1 rounded-full bg-accent/50" />
                  Blog
                </a>
                <a href="/science" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 py-2 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition">
                  <span className="w-1 h-1 rounded-full bg-accent/50" />
                  Research
                </a>
                <a href="/how-to" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 py-2 text-xs text-text-muted hover:text-accent hover:bg-accent-subtle rounded-lg transition">
                  <span className="w-1 h-1 rounded-full bg-accent/50" />
                  How-To Guide
                </a>
              </div>

              {/* CTA */}
              <div className="pt-3 mt-2">
                {user ? (
                  <Link
                    to="/dashboard"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-semibold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  >
                    <UserAvatar size="xs" />
                    <span>Dashboard</span>
                  </Link>
                ) : (
                  <Link
                    to="/dashboard"
                    className="block w-full px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-center text-xs font-semibold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  >
                    Get Started
                  </Link>
                )}
              </div>
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
            className="inline-flex items-center text-[15px] font-medium tracking-wider opacity-[0.08] whitespace-nowrap"
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
            className="inline-flex items-center text-[15px] font-medium tracking-wider opacity-[0.08] whitespace-nowrap flex-row-reverse"
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
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src={heroMain}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Problem-aware badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs md:text-sm text-amber-400 font-medium">76 worlds of knowledge await</span>
          </motion.div>

          {/* Hero Headline: Dramatic Zen Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative mb-8"
          >
            <span className="block text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-white/90 tracking-tight">
              Read{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Everything
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
              Under the{' '}
              <span className="text-white/70">Sun</span>
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
              <span className="inline-block">76 curated domains.</span>
              <span className="inline-block mx-2 text-amber-500/50">·</span>
              <span className="inline-block">4,700+ immersive lessons.</span>
            </p>
            <p className="text-lg md:text-xl text-white mt-3 font-light">
              The entire spectrum of human wisdom, in <span className="font-medium text-amber-500">one beautiful reader</span>.
            </p>
          </motion.div>

          {/* CTA: Single strong primary action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <Link
              to="/dashboard"
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-lg font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(245,158,11,0.3)' }}
            >
              Enter the Library — Free
              <ArrowRight size={20} />
            </Link>
            <a href="#solution" className="text-sm text-gray-500 hover:text-amber-400 transition flex items-center gap-1.5">
              <Play size={14} />
              See how it works
            </a>
          </motion.div>

          {/* Social Proof Teaser */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm mt-8 flex items-center justify-center gap-2"
          >
            <Users size={16} className="text-amber-500/70" />
            <span>Join <span className="text-amber-500/90 font-medium">10,000+</span> curious minds exploring every domain of knowledge</span>
          </motion.p>
        </div>
      </section>

      {/* ===== THE PROBLEM: Stakes Section ===== */}
      <section id="problem" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-400 font-medium tracking-wider mb-6">
              THE OPPORTUNITY
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
                loading="lazy"
              />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="block text-white/90">The World's Best Ideas Are</span>
              <span className="block mt-2">
                <span className="text-amber-400">Scattered Across </span>
                <span className="relative inline-block">
                  <span className="text-6xl md:text-7xl font-bold text-amber-500/90">1000+</span>
                </span>
                <span className="text-amber-400"> Books.</span>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Life is too short to read them all. We distilled the wisdom of 1000+ bestselling authors into immersive, bite-sized reading journeys — across every domain imaginable.
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
                className="glass-light border border-amber-500/20 rounded-xl p-6 text-center"
              >
                <stake.icon className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <p className="text-gray-400">{stake.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Empathy Statement */}
          <div className="glass border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
            <p className="text-xl md:text-2xl text-gray-200 font-serif italic mb-4 relative">
              "I wanted to understand psychology, philosophy, AI, history — everything.
              <span className="text-amber-500/80"> Polymind made it actually possible.</span>"
            </p>
            <p className="text-gray-400 relative">— The curious mind's dream</p>
          </div>
        </div>
      </section>

      {/* ===== THE GUIDE: Authority + Empathy ===== */}
      <section id="what" className="py-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-500 font-medium tracking-wider mb-6">
              THE INFINITE LIBRARY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="font-light text-white/80">76 Worlds.</span>
              <span className="block mt-1 relative">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-semibold">
                  One Reader.
                </span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Every domain of human knowledge, curated into immersive reading journeys. From Stoic philosophy to quantum physics — explore it all.
            </p>
          </div>

          {/* Authority Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {authorityStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 glass-light rounded-xl"
              >
                <div className="font-mono text-3xl font-bold text-amber-500 mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-gray-300 mb-0.5">{stat.label}</div>
                <div className="text-[11px] text-gray-500 leading-tight">{stat.detail}</div>
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
                <img src={featureSpacedRepetition} alt="Spaced Repetition" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center mb-4 -mt-10 relative z-10 border-4 border-default">
                  <Brain size={20} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Immersive Reading</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Deep, beautifully crafted lessons from the world's best authors. Not summaries. Not bullet points. Real depth, real understanding.
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
                <img src={featureVisualLearning} alt="Visual Learning" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-elevated flex items-center justify-center mb-4 -mt-10 relative z-10 border-4 border-default shadow-lg">
                  <Target size={20} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cross-Domain Discovery</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Jump from Stoic philosophy to AI ethics to Vedic wisdom. See patterns that only polymaths see — connections across every field.
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
                <img src={featureGamification} alt="Gamification" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-elevated flex items-center justify-center mb-4 -mt-10 relative z-10 border-4 border-default shadow-lg">
                  <Trophy size={20} className="text-lavender" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Your Pace, Your Path</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Five-minute reads or hour-long deep dives. 76 domains to explore. The library adapts to your curiosity, not the other way around.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== THE PLAN: 3 Simple Steps ===== */}
      <section id="solution" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-sage/10 border border-sage/20 rounded-full text-xs text-sage font-medium tracking-wider mb-6">
              YOUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-7xl md:text-8xl font-bold text-sage/20 block -mb-8 md:-mb-10">3</span>
              <span className="relative z-10 block">Steps to Knowing</span>
              <span className="relative z-10 block text-sage font-medium">Everything</span>
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
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sage to-sage-light text-black font-semibold rounded-xl hover:opacity-90 transition"
            >
              Start Exploring — Free
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DOMAINS: Knowledge Domains - Clean Grid ===== */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-lavender/10 border border-lavender/20 rounded-full text-xs text-lavender font-medium tracking-wider mb-6">
              76 KNOWLEDGE DOMAINS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif">
              <span className="text-white/80">Explore the </span>
              <span className="text-lavender">Infinite Library</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              From the Bhagavad Gita to Game Theory. From Neuroscience to Creative Writing. <span className="text-amber-500/80">Every corner of human wisdom</span>, curated for the curious mind.
            </p>
          </div>

          {/* Clean responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {domainCards.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <Link to={`/pathway/${domain.moduleId}`} className="block">
                  <div className="bg-elevated border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5">
                    <div className="aspect-[4/3] overflow-hidden bg-base relative">
                      <img
                        src={domain.image}
                        alt={domain.title}
                        className="w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-125"
                        loading="lazy"
                      />
                      {/* Hover overlay with explore affordance */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-xs font-medium text-white bg-amber-500/80 px-3 py-1.5 rounded-full">Explore</span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-white text-sm group-hover:text-amber-400 transition-colors">{domain.title}</h3>
                      <p className="text-sm text-gray-400 mt-0.5">{domain.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
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
                <span className="mx-2 italic">Narrow Reader</span>
              </span>
              <span className="block mt-1">
                <span className="text-gray-500 font-light">To</span>
                <span className="ml-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-semibold">
                  Renaissance Polymath
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
                  t.featured ? 'border-2 border-amber-500/30 shadow-lg shadow-amber-500/10' : 'border border-default'
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
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src={ctaSectionBg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-elevated via-elevated/50 to-elevated" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            <span className="block text-white/60 font-light">The world's knowledge is waiting.</span>
            <span className="block mt-2 relative">
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent font-semibold">
                Step Into the Library.
              </span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            76 worlds of wisdom. 4,700+ immersive lessons.
            Join 10,000+ curious minds who read everything.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(245,158,11,0.3)' }}
          >
            Enter the Library — Free
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-4">
                <PolymindLogo size="sm" variant="simple" />
                <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed">
                Read everything. Know everything.<br />
                76 worlds of wisdom await.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-medium text-sm mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
                <li><Link to="/pathway" className="hover:text-white transition">Library</Link></li>
                <li><Link to="/review" className="hover:text-white transition">Quick Review</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition">Get Started</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-medium text-sm mb-4 text-white">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link to="/science" className="hover:text-white transition">Research</Link></li>
                <li><Link to="/how-to" className="hover:text-white transition">How-To Guide</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium text-sm mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Polymind. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://twitter.com/polymind" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="https://github.com/polymind-app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a>
              <a href="https://linkedin.com/company/polymind" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
