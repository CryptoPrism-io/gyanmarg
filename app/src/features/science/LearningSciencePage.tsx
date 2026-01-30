import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brain, Target, Shuffle, Trophy, TrendingDown, TrendingUp, Zap } from 'lucide-react';

// AI Images
import imgForgetting from '@/assets/ai-images/onboarding/onboarding-01-forgetting.png';
import imgBreakthrough from '@/assets/ai-images/onboarding/onboarding-02-breakthrough.png';
import imgSpacedRepetition from '@/assets/ai-images/landing/feature-spaced-repetition.png';
import imgVisualLearning from '@/assets/ai-images/landing/feature-visual-learning.png';
import imgGamification from '@/assets/ai-images/landing/feature-gamification.png';
import imgHeroMain from '@/assets/ai-images/landing/hero-main.png';

// Forgetting curve data points
const forgettingCurveData = [
  { day: 0, withoutReview: 100, withReview: 100 },
  { day: 1, withoutReview: 40, withReview: 90 },
  { day: 3, withoutReview: 25, withReview: 85 },
  { day: 7, withoutReview: 15, withReview: 80 },
  { day: 14, withoutReview: 10, withReview: 78 },
  { day: 30, withoutReview: 5, withReview: 75 },
];

// Map technique images
const techniqueImages: Record<string, string> = {
  'spaced-repetition': imgSpacedRepetition,
  'active-recall': imgVisualLearning,
  'interleaving': imgBreakthrough,
  'gamification': imgGamification,
};

const techniques = [
  {
    id: 'spaced-repetition',
    icon: Brain,
    title: 'Spaced Repetition',
    subtitle: 'Review at the perfect moment',
    color: 'amber',
    description: 'The SM-2 algorithm calculates exactly when you\'re about to forget something and schedules a review right before that happens. Each successful review extends the interval.',
    stats: [
      { value: '200%', label: 'Retention boost' },
      { value: '70%', label: 'Med students use it' },
    ],
    howItWorks: [
      'Learn a concept for the first time',
      'Review after 1 day',
      'If correct, review after 3 days',
      'Then 7 days, 14 days, 30 days...',
      'Intervals grow exponentially',
    ],
  },
  {
    id: 'active-recall',
    icon: Target,
    title: 'Active Recall',
    subtitle: 'Test yourself, don\'t just re-read',
    color: 'sage',
    description: 'Being asked a question and trying to remember the answer is far more effective than passive reading. The struggle to retrieve information strengthens neural pathways.',
    stats: [
      { value: '50%', label: 'More effective than re-reading' },
      { value: '2x', label: 'Stronger memory traces' },
    ],
    howItWorks: [
      'Read or learn new material',
      'Close the book / hide notes',
      'Ask yourself: "What did I just learn?"',
      'Struggle to recall the answer',
      'Check and correct if needed',
    ],
  },
  {
    id: 'interleaving',
    icon: Shuffle,
    title: 'Interleaving',
    subtitle: 'Mix topics for deeper learning',
    color: 'lavender',
    description: 'Instead of studying one topic exhaustively before moving on, mixing different topics creates stronger, more flexible knowledge that transfers better to new situations.',
    stats: [
      { value: '43%', label: 'Better problem solving' },
      { value: '3x', label: 'Better transfer' },
    ],
    howItWorks: [
      'Study psychology for 20 minutes',
      'Switch to AI concepts',
      'Then philosophy',
      'Return to psychology with fresh eyes',
      'Connections form naturally',
    ],
  },
  {
    id: 'gamification',
    icon: Trophy,
    title: 'Gamification',
    subtitle: 'Make learning addictive',
    color: 'coral',
    description: 'XP, streaks, levels, and achievements tap into our brain\'s reward system. The dopamine hit from progress makes you actually want to come back and learn more.',
    stats: [
      { value: '89%', label: 'Higher engagement' },
      { value: '5x', label: 'More consistent' },
    ],
    howItWorks: [
      'Earn XP for each lesson completed',
      'Build daily streaks',
      'Level up as you progress',
      'Unlock achievements',
      'Compete with yourself',
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
    <div className="min-h-screen bg-[#0A0A0B] text-white relative">
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
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-lg font-semibold tracking-wider">POLYMIND</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
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
            <span className="block text-white/90">Why You Forget</span>
            <span className="block mt-2">
              <span className="text-gray-500 font-light">&</span>
              <span className="ml-3 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                How to Remember Forever
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            The techniques behind Polymind aren't new. They're backed by
            <span className="text-white"> 140+ years of cognitive science research</span>.
            Here's how they work.
          </motion.p>
        </div>
      </section>

      {/* The Forgetting Curve */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-coral/10 border border-coral/20 rounded-full text-xs text-coral font-medium tracking-wider mb-6">
              THE PROBLEM
            </span>

            {/* Forgetting Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm mx-auto aspect-video rounded-2xl overflow-hidden border border-coral/20 mb-8"
            >
              <img src={imgForgetting} alt="Memory fading" className="w-full h-full object-cover" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="block">The Ebbinghaus</span>
              <span className="block text-coral">Forgetting Curve</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              In 1885, German psychologist Hermann Ebbinghaus discovered that memory
              decays predictably over time — unless you intervene.
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
                <span className="text-sm text-gray-400">Without review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sage" />
                <span className="text-sm text-gray-400">With spaced reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-sm text-gray-400">Review points</span>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-light border border-coral/20 rounded-2xl p-6">
              <TrendingDown className="w-8 h-8 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-coral mb-2">Without Intervention</h3>
              <p className="text-gray-400">
                You forget <span className="text-coral font-semibold">90% of what you learn within 7 days</span>.
                All that reading, all those highlights — gone.
              </p>
            </div>
            <div className="glass-light border border-sage/20 rounded-2xl p-6">
              <TrendingUp className="w-8 h-8 text-sage mb-4" />
              <h3 className="text-xl font-semibold text-sage mb-2">With Spaced Repetition</h3>
              <p className="text-gray-400">
                Strategic reviews at the right moments can boost retention to
                <span className="text-sage font-semibold"> 90%+ permanently</span>.
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
              THE SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-6xl md:text-7xl font-bold text-amber-500/20 block -mb-6">4</span>
              <span className="relative z-10 block">Evidence-Based Techniques</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Polymind combines four proven learning methods into one system.
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
            <span className="block font-light text-white/80">All Four Techniques</span>
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-semibold">
              Working Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            Most apps use one technique. Polymind weaves all four into a seamless experience
            that makes learning both effective and enjoyable.
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

            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">92%</div>
            <p className="text-gray-400">Average retention rate for Polymind users</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to Never Forget?
          </h2>
          <p className="text-gray-400 mb-8">
            Start building your Polymind with science-backed learning.
          </p>
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
          >
            Build Your Polymind — Free
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-3">
                <span className="font-mono text-lg font-semibold tracking-wider">POLYMIND</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </Link>
              <p className="text-sm text-gray-500">Your mind, unlimited.</p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-medium text-sm mb-3 text-gray-300">Product</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link to="/onboarding" className="hover:text-white transition">Get Started</Link></li>
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
