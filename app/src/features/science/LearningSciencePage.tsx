import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brain, Target, Shuffle, Trophy, TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { PolymindLogo } from '@/components/brand';

// AI Images (WebP for better performance)
import imgForgetting from '@/assets/ai-images/onboarding/onboarding-01-forgetting.webp';
import imgBreakthrough from '@/assets/ai-images/onboarding/onboarding-02-breakthrough.webp';
import imgSpacedRepetition from '@/assets/ai-images/landing/feature-spaced-repetition.webp';
import imgVisualLearning from '@/assets/ai-images/landing/feature-visual-learning.webp';
import imgGamification from '@/assets/ai-images/landing/feature-gamification.webp';
import imgHeroMain from '@/assets/ai-images/landing/hero-main.webp';

// Forgetting curve data points (available for future use)
const _forgettingCurveData = [
  { day: 0, withoutReview: 100, withReview: 100 },
  { day: 1, withoutReview: 40, withReview: 90 },
  { day: 3, withoutReview: 25, withReview: 85 },
  { day: 7, withoutReview: 15, withReview: 80 },
  { day: 14, withoutReview: 10, withReview: 78 },
  { day: 30, withoutReview: 5, withReview: 75 },
];
void _forgettingCurveData;

// Map technique images
const techniqueImages: Record<string, string> = {
  'cross-domain': imgBreakthrough,
  'immersive-reading': imgSpacedRepetition,
  'neuroplasticity': imgVisualLearning,
  'curiosity-driven': imgGamification,
};

const techniques = [
  {
    id: 'cross-domain',
    icon: Shuffle,
    title: 'Cross-Domain Reading',
    subtitle: 'The polymath advantage',
    color: 'amber',
    description: 'Reading across multiple domains creates richer neural networks. When you connect Stoic philosophy to AI ethics, or neuroscience to leadership, your brain builds stronger, more flexible knowledge structures.',
    stats: [
      { value: '43%', label: 'Better problem solving' },
      { value: '3x', label: 'Better knowledge transfer' },
    ],
    howItWorks: [
      'Read psychology for 20 minutes',
      'Switch to AI or science concepts',
      'Then explore philosophy or history',
      'Return to psychology with fresh eyes',
      'Connections form naturally across domains',
    ],
  },
  {
    id: 'immersive-reading',
    icon: Brain,
    title: 'Immersive Reading',
    subtitle: 'Depth, not summaries',
    color: 'sage',
    description: 'Unlike book summaries that strip away nuance, immersive reading preserves the depth of ideas. Each lesson feels like reading the best chapters of the best books — distilled, not diluted.',
    stats: [
      { value: '76', label: 'Domains to explore' },
      { value: '4700+', label: 'Immersive lessons' },
    ],
    howItWorks: [
      'Choose a domain that interests you',
      'Read curated lessons from top authors',
      'Engage with quizzes that test understanding',
      'See key takeaways crystallized',
      'Move to a new domain or go deeper',
    ],
  },
  {
    id: 'neuroplasticity',
    icon: Target,
    title: 'Neuroplasticity',
    subtitle: 'Your brain grows by reading',
    color: 'lavender',
    description: 'Every time you explore a new domain, your brain physically rewires. Neuroscience shows that diverse intellectual stimulation increases gray matter density and creates new neural pathways that enhance all thinking.',
    stats: [
      { value: '14', label: 'Knowledge categories' },
      { value: '1000+', label: 'Authors distilled' },
    ],
    howItWorks: [
      'New domains activate new brain regions',
      'Diverse reading builds cognitive flexibility',
      'Cross-domain patterns strengthen connections',
      'Regular reading compounds brain growth',
      'Over time, thinking becomes richer and faster',
    ],
  },
  {
    id: 'curiosity-driven',
    icon: Trophy,
    title: 'Curiosity-Driven Learning',
    subtitle: 'Follow your interests',
    color: 'coral',
    description: 'Research shows that curiosity activates the brain\'s reward system and enhances memory formation. When you read what genuinely interests you — across any domain — you absorb and retain far more.',
    stats: [
      { value: '89%', label: 'Higher engagement' },
      { value: '5x', label: 'More consistent readers' },
    ],
    howItWorks: [
      'Browse 76 domains freely',
      'Start wherever curiosity leads',
      'Read at your own pace — no pressure',
      'Track your exploration journey',
      'Celebrate breadth of knowledge',
    ],
  },
];

const colorClasses = {
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-500',
    gradient: 'from-amber-500 to-amber-400',
  },
  sage: {
    bg: 'bg-sage/10',
    border: 'border-sage/30',
    text: 'text-sage',
    gradient: 'from-sage to-sage',
  },
  lavender: {
    bg: 'bg-lavender/10',
    border: 'border-lavender/30',
    text: 'text-lavender',
    gradient: 'from-lavender to-lavender',
  },
  coral: {
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    text: 'text-coral',
    gradient: 'from-coral to-coral',
  },
};

export function LearningSciencePage() {
  return (
    <div className="min-h-screen bg-base text-white relative">
      {/* ===== ANIMATED GRADIENT BACKGROUND ===== */}
      <div className="animated-gradient-bg">
        <div className="wave-orb wave-orb-1" />
        <div className="wave-orb wave-orb-2" />
        <div className="wave-orb wave-orb-3" />
        <div className="wave-orb wave-orb-4" />
        {/* Particle dots */}
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </Link>
          <Link to="/" className="flex items-center gap-2.5">
            <PolymindLogo size="xs" variant="simple" />
            <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          </Link>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden z-10">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src={imgHeroMain} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8"
          >
            <Brain size={16} className="text-amber-500" />
            <span className="text-xs text-amber-500 font-medium tracking-wider">THE SCIENCE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            <span className="block text-white/90">Why Reading Broadly</span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Makes You Smarter
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            The neuroscience behind polymathic thinking — and why
            <span className="text-white"> reading across every domain</span> is
            the most powerful way to grow your mind.
          </motion.p>
        </div>
      </section>

      {/* The Forgetting Curve */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-400 font-medium tracking-wider mb-6">
              THE BRAIN SCIENCE
            </span>

            {/* Forgetting Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm mx-auto aspect-video rounded-2xl overflow-hidden border border-amber-500/20 mb-8"
            >
              <img src={imgForgetting} alt="Memory fading" className="w-full h-full object-cover" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="block">Your Brain on</span>
              <span className="block text-amber-400">Cross-Domain Reading</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Neuroscience research reveals that reading across multiple domains
              builds richer, more connected knowledge networks than narrow expertise.
            </p>
          </div>

          {/* Visual Curve */}
          <div className="glass border border-white/10 rounded-2xl p-8 mb-8">
            <div className="relative h-64 md:h-80">
              {/* Y-axis */}
              <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-gray-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Chart area */}
              <div className="absolute left-14 right-0 top-0 bottom-8">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Grid lines */}
                  {[0, 50, 100, 150, 200].map((y) => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#333" strokeWidth="1" />
                  ))}

                  {/* Without review curve (red/coral) */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    d="M 0,0 C 50,120 100,160 150,175 S 300,190 400,195"
                    fill="none"
                    stroke="#F87171"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* With review curve (green/sage) */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                    d="M 0,0 C 20,10 40,20 60,20 S 100,25 140,30 S 200,35 260,40 S 350,45 400,50"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Review points */}
                  {[60, 140, 260].map((x, i) => (
                    <motion.circle
                      key={x}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + i * 0.2 }}
                      cx={x}
                      cy={20 + i * 10}
                      r="6"
                      fill="#F59E0B"
                    />
                  ))}
                </svg>
              </div>

              {/* X-axis */}
              <div className="absolute left-14 right-0 bottom-0 flex justify-between text-xs text-gray-500">
                <span>Day 1</span>
                <span>Day 7</span>
                <span>Day 14</span>
                <span>Day 30</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <span className="text-sm text-gray-400">Narrow reading (one domain)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sage" />
                <span className="text-sm text-gray-400">Cross-domain reading</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-sm text-gray-400">Domain connections</span>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-light border border-coral/20 rounded-2xl p-6">
              <TrendingDown className="w-8 h-8 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-coral mb-2">Narrow Reading</h3>
              <p className="text-gray-400">
                Reading only in your field creates <span className="text-coral font-semibold">isolated knowledge silos</span>.
                Ideas don't connect. Thinking becomes rigid and predictable.
              </p>
            </div>
            <div className="glass-light border border-sage/20 rounded-2xl p-6">
              <TrendingUp className="w-8 h-8 text-sage mb-4" />
              <h3 className="text-xl font-semibold text-sage mb-2">Cross-Domain Reading</h3>
              <p className="text-gray-400">
                Reading across <span className="text-sage font-semibold">76 domains creates rich neural networks</span>.
                Ideas compound. Thinking becomes flexible and creative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Techniques */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-500 font-medium tracking-wider mb-6">
              THE FOUR PILLARS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-6xl md:text-7xl font-bold text-amber-500/20 block -mb-6">4</span>
              <span className="relative z-10 block">Pillars of Polymathic Reading</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Why the greatest thinkers in history read across every domain.
            </p>
          </div>

          <div className="space-y-12">
            {techniques.map((tech, index) => {
              const colors = colorClasses[tech.color as keyof typeof colorClasses];
              const Icon = tech.icon;

              const techImage = techniqueImages[tech.id];

              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${colors.bg} border ${colors.border} rounded-2xl overflow-hidden`}
                >
                  {/* Technique Image */}
                  <div className="h-48 overflow-hidden">
                    <img src={techImage} alt={tech.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Description */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-semibold ${colors.text}`}>{tech.title}</h3>
                          <p className="text-sm text-gray-400">{tech.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6">{tech.description}</p>

                      {/* Stats */}
                      <div className="flex gap-6">
                        {tech.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className={`text-2xl font-bold ${colors.text}`}>{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: How it works */}
                    <div className="glass-light rounded-xl p-6">
                      <h4 className="text-sm font-medium text-gray-400 mb-4 tracking-wider">HOW IT WORKS</h4>
                      <ol className="space-y-3">
                        {tech.howItWorks.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className={`w-6 h-6 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center text-xs ${colors.text} flex-shrink-0`}>
                              {i + 1}
                            </span>
                            <span className="text-gray-300 text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Polymind Difference */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-500 font-medium tracking-wider mb-6">
            THE POLYMIND WAY
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            <span className="block font-light text-white/80">All Four Pillars</span>
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-semibold">
              Working Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            Most reading apps focus on one domain or one method. Polymind opens all 76 worlds
            and lets you explore them with science-backed reading principles.
          </p>

          <div className="glass-accent border border-amber-500/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {techniques.map((tech) => {
                const colors = colorClasses[tech.color as keyof typeof colorClasses];
                const Icon = tech.icon;
                return (
                  <div key={tech.id} className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <p className={`text-sm font-medium ${colors.text}`}>{tech.title}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>Combined into one powerful system</span>
            </div>

            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">76</div>
            <p className="text-gray-400">Domains of human knowledge — all in one reader</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to Read Everything?
          </h2>
          <p className="text-gray-400 mb-8">
            Step into the library. 76 worlds of knowledge await.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
          >
            Enter the Library — Free
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2.5 mb-3">
                <PolymindLogo size="sm" variant="simple" />
                <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              </Link>
              <p className="text-sm text-gray-500">Read everything. Know everything.</p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-medium text-sm mb-3 text-gray-300">Product</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link to="/dashboard" className="hover:text-white transition">Get Started</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-3 text-gray-300">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/science" className="hover:text-amber-500 transition text-amber-500/70">Learning Science</Link></li>
                  <li><Link to="/books" className="hover:text-white transition">Book List</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <p className="text-sm text-gray-600">© 2025 Polymind</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="https://twitter.com/polymind" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
              <a href="https://github.com/polymind-app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LearningSciencePage;
