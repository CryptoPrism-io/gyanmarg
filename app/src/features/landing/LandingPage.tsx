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
  Smartphone
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Extend window for PWA functions
declare global {
  interface Window {
    deferredInstallPrompt: Event | null;
    triggerPWAInstall: () => Promise<{ success: boolean; reason: string }>;
  }
}

// PWA Install Hook - uses global functions from index.html
function useInstallPrompt() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    // Check if already installed (running as standalone PWA)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if install prompt is available
    const checkPrompt = () => {
      const hasPrompt = !!window.deferredInstallPrompt;
      console.log('[PWA Hook] Checking prompt:', hasPrompt);
      setCanInstall(hasPrompt);
    };

    // Check immediately
    checkPrompt();

    // Listen for custom events from index.html script
    const onReady = () => {
      console.log('[PWA Hook] Install ready event received');
      setCanInstall(true);
    };
    const onInstalled = () => {
      console.log('[PWA Hook] Installed event received');
      setIsInstalled(true);
      setCanInstall(false);
    };

    window.addEventListener('pwainstallready', onReady);
    window.addEventListener('pwainstalled', onInstalled);

    // Also check periodically as backup
    const interval = setInterval(checkPrompt, 1000);

    return () => {
      window.removeEventListener('pwainstallready', onReady);
      window.removeEventListener('pwainstalled', onInstalled);
      clearInterval(interval);
    };
  }, []);

  const install = async (): Promise<boolean> => {
    console.log('[PWA Hook] Install triggered');

    // Use the global helper function
    if (typeof window.triggerPWAInstall === 'function') {
      const result = await window.triggerPWAInstall();
      console.log('[PWA Hook] Install result:', result);

      if (result.success) {
        setIsInstalled(true);
        setCanInstall(false);
      }
      return result.success;
    }

    console.log('[PWA Hook] triggerPWAInstall not available');
    return false;
  };

  return { canInstall, isInstalled, isIOS, install };
}

// Stats data
const stats = [
  { value: '45+', label: 'Curated Ebooks', highlight: false },
  { value: '10', label: 'Learning Modules', highlight: false },
  { value: '500+', label: 'Concepts to Master', highlight: true },
  { value: '∞', label: 'Knowledge Unlocked', highlight: false },
];

// Features data
const features = [
  {
    icon: Brain,
    title: 'Spaced Repetition',
    description: 'SM-2 algorithm flashcards that optimize your review schedule. Learn once, remember forever.',
    gradient: true,
  },
  {
    icon: Target,
    title: 'Active Recall',
    description: 'Quizzes and challenges that force retrieval from memory. The struggle makes knowledge stick.',
    color: '#F59E0B',
  },
  {
    icon: Trophy,
    title: 'Gamification',
    description: 'XP, levels, achievements, and streaks that make learning addictive. Turn knowledge into a game.',
    color: '#8B5CF6',
  },
];

// Modules data
const modules = [
  { emoji: '🧠', title: 'Personal Development', highlight: false },
  { emoji: '🤖', title: 'AI & Machine Learning', highlight: false },
  { emoji: '💰', title: 'Wealth Building', highlight: false },
  { emoji: '🥋', title: 'Bruce Lee Philosophy', highlight: false },
  { emoji: '🔗', title: 'Blockchain & Web3', highlight: false },
  { emoji: '🧬', title: 'Psychology & Decisions', highlight: false },
  { emoji: '🐍', title: 'Python & Data Science', highlight: false },
  { emoji: '🕉️', title: 'Master Synthesis', highlight: true },
];

// Testimonials data
const testimonials = [
  {
    quote: "Gyanmarg transformed how I learn. The spaced repetition actually works — I remember concepts months later.",
    name: 'Arjun Kumar',
    role: 'Software Engineer @ Google',
    initials: 'AK',
    color: '#F59E0B',
  },
  {
    quote: "The gamification keeps me coming back daily. Built a 90-day streak and finished 3 modules!",
    name: 'Priya Sharma',
    role: 'Product Manager @ Stripe',
    initials: 'PS',
    color: '#8B5CF6',
    featured: true,
  },
  {
    quote: "Finally, a way to actually retain what I read. The knowledge maps show connections I never saw before.",
    name: 'Rahul Verma',
    role: 'Founder @ TechStartup',
    initials: 'RV',
    color: '#22C55E',
  },
];

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const { canInstall, isInstalled, isIOS, install } = useInstallPrompt();

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSModal(true);
    } else if (canInstall) {
      // Directly trigger the browser's install dialog
      const installed = await install();
      if (!installed) {
        // If user dismissed, show manual instructions
        setShowIOSModal(true);
      }
    } else {
      // Fallback: show instructions
      setShowIOSModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-lg md:text-xl font-semibold tracking-wider">GYANMARG</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition">Features</a>
            <a href="#modules" className="text-sm text-gray-400 hover:text-white transition">Modules</a>
            <a href="#testimonials" className="text-sm text-gray-400 hover:text-white transition">Testimonials</a>
          </nav>

          {/* Desktop CTA */}
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
            <Link to="/onboarding" className="text-sm text-white hover:text-amber-500 transition">
              Log in
            </Link>
            <Link
              to="/onboarding"
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-sm font-semibold rounded-lg hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#111113] border-t border-white/5 px-6 py-4"
          >
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-gray-400 hover:text-white">Features</a>
              <a href="#modules" className="text-gray-400 hover:text-white">Modules</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a>
              {!isInstalled && (
                <button
                  onClick={handleInstallClick}
                  className="flex items-center justify-center gap-2 px-5 py-3 text-amber-500 border border-amber-500/30 rounded-lg"
                >
                  <Download size={18} />
                  Install App
                </button>
              )}
              <Link
                to="/onboarding"
                className="mt-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-center font-semibold rounded-lg"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs md:text-sm text-amber-500 font-medium">Transform Ebooks into Wisdom</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6"
          >
            <span className="block text-amber-500">ज्ञानमार्ग</span>
            <span className="block text-white/90">The Path of Knowledge</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transform 45+ ebooks into gamified, interactive learning experiences.
            Master personal development, AI, wealth building & more through evidence-based learning science.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/onboarding"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 border border-gray-700 rounded-xl flex items-center justify-center gap-2 hover:border-gray-600 transition">
              <Play size={18} className="text-gray-400" />
              Watch Demo
            </button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-[#111113] border border-amber-500/20 rounded-2xl p-4 md:p-8 shadow-2xl shadow-amber-500/5">
              <div className="aspect-video bg-gradient-to-br from-[#1A1A1D] to-[#111113] rounded-xl flex items-center justify-center">
                <span className="text-gray-600 text-sm">[ Dashboard Preview ]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs text-gray-600 tracking-wider mb-8">TRUSTED BY LEARNERS FROM</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['STANFORD', 'MIT', 'HARVARD', 'IIT', 'OXFORD'].map((logo) => (
              <span key={logo} className="font-mono text-sm md:text-base text-gray-700 tracking-wider">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#111113]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`font-mono text-4xl md:text-5xl font-medium mb-2 ${stat.highlight ? 'text-amber-500' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1A1A1D] rounded-full text-xs text-amber-500 font-medium tracking-wider mb-6">
              LEARNING SCIENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Learn Smarter. Remember Forever.</h2>
            <p className="text-gray-500 text-lg">Evidence-based techniques that actually work.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111113] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    feature.gradient
                      ? 'bg-gradient-to-br from-amber-500 to-amber-400'
                      : 'bg-[#1A1A1D]'
                  }`}
                >
                  <feature.icon size={24} color={feature.gradient ? '#000' : feature.color} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24 px-6 bg-[#111113]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1A1A1D] rounded-full text-xs text-amber-500 font-medium tracking-wider mb-6">
              10 MODULES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Your Learning Journey</h2>
            <p className="text-gray-500 text-lg">From personal mastery to technical expertise.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-5 rounded-xl flex items-center gap-4 ${
                  mod.highlight
                    ? 'bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/30'
                    : 'bg-[#1A1A1D]'
                }`}
              >
                <span className="text-2xl">{mod.emoji}</span>
                <span className={`font-medium ${mod.highlight ? 'text-amber-500' : 'text-white'}`}>
                  {mod.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1A1A1D] rounded-full text-xs text-amber-500 font-medium tracking-wider mb-6">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif">Loved by Learners</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-[#111113] rounded-2xl p-8 ${
                  t.featured ? 'border border-amber-500/30' : 'border border-gray-800'
                }`}
              >
                <p className="text-gray-400 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{ backgroundColor: `${t.color}20`, color: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0B] via-[#111113] to-[#0A0A0B]">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-3xl md:text-5xl font-serif text-amber-500 mb-4">
            "विद्या ददाति विनयम्"
          </blockquote>
          <p className="text-xl text-gray-500 mb-2">"Knowledge gives humility"</p>
          <p className="text-sm text-gray-600">— Sanskrit Proverb</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#111113] via-[#1A0F00] to-[#111113]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Begin Your Path Today</h2>
          <p className="text-gray-500 text-lg mb-10">
            1% better every day = 37x better in a year.<br />
            Join thousands of learners transforming knowledge into wisdom.
          </p>
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
          >
            Start Free — No Credit Card
            <ArrowRight size={20} />
          </Link>
          <p className="text-gray-600 text-sm mt-6">✨ Join 10,000+ learners on the path of knowledge</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-lg font-semibold tracking-wider">GYANMARG</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                The Path of Knowledge.<br />
                Transforming ebooks into wisdom.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-16">
              <div>
                <h4 className="font-medium text-sm mb-4">Product</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#features" className="hover:text-white transition">Features</a></li>
                  <li><a href="#modules" className="hover:text-white transition">Modules</a></li>
                  <li><Link to="/onboarding" className="hover:text-white transition">Get Started</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-4">Company</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2025 Gyanmarg. Made with ❤️ for lifelong learners.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-white transition">GitHub</a>
              <a href="#" className="text-gray-500 hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Install Instructions Modal */}
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
              className="w-full max-w-md bg-[#111113] border border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Header */}
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
                    <h3 className="text-xl font-semibold text-white">Install Gyanmarg</h3>
                    <p className="text-white/60 text-sm">Add to your device</p>
                  </div>
                </div>
              </div>

              {/* Instructions based on device */}
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
                        <p className="text-white/60 text-sm mt-1">
                          The app will appear on your home screen
                        </p>
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
                        <p className="text-white/60 text-sm mt-1">
                          In the address bar (right side) or browser menu
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-500 font-semibold">2</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Click "Install" or menu → "Install app"</p>
                        <p className="text-white/60 text-sm mt-1">
                          Chrome: ⋮ → "Install Gyanmarg..."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-500 font-semibold">3</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">On Android</p>
                        <p className="text-white/60 text-sm mt-1">
                          Tap ⋮ → "Add to Home screen" or "Install app"
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Close button */}
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
