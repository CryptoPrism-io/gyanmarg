import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, CreditCard, Network, Smartphone } from 'lucide-react';

/**
 * Lab Hub - Experimental Learning Modes Showcase
 *
 * Displays all experimental learning interfaces:
 * - Story Mode (cinematic scrolling)
 * - Knowledge Cards (Tinder-style swipe)
 * - Mind Map Explorer (spatial exploration)
 * - Reel Reader (TikTok-style vertical)
 */

interface ExperimentCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  route: string;
  status: 'beta' | 'experimental' | 'new';
  features: string[];
}

const experiments: ExperimentCard[] = [
  {
    id: 'story-mode',
    title: 'Story Mode',
    description: 'Immersive cinematic reading experience with typewriter reveals and ambient effects',
    icon: <BookOpen className="w-8 h-8" />,
    gradient: 'from-amber-500 to-orange-600',
    route: '/lab/story/emotional-intelligence/eq-001',
    status: 'beta',
    features: [
      'Typewriter paragraph reveals',
      'Floating concept annotations',
      'Dynamic gradient backgrounds',
      'Inline quiz integration',
      'Parallax scrolling headers',
    ],
  },
  {
    id: 'knowledge-cards',
    title: 'Knowledge Cards',
    description: 'Swipeable flashcard-style learning inspired by Tinder\'s interaction model',
    icon: <CreditCard className="w-8 h-8" />,
    gradient: 'from-purple-500 to-pink-600',
    route: '/lab/cards/emotional-intelligence/eq-001',
    status: 'experimental',
    features: [
      'Swipe right = Got it, left = Review',
      '3D card stack perspective',
      'Tap to flip for explanations',
      'Quiz cards mixed in',
      'Review pile at the end',
    ],
  },
  {
    id: 'mind-map',
    title: 'Mind Map Explorer',
    description: 'Spatial concept exploration with interactive node-based visualization',
    icon: <Network className="w-8 h-8" />,
    gradient: 'from-cyan-500 to-blue-600',
    route: '/lab/map/emotional-intelligence/eq-001',
    status: 'experimental',
    features: [
      'Interactive node network',
      'Radial force-directed layout',
      'Pan and zoom controls',
      'Animated connections',
      'Progress-based exploration',
    ],
  },
  {
    id: 'reel-reader',
    title: 'Reel Reader',
    description: 'Vertical TikTok-style content consumption for mobile-first learning',
    icon: <Smartphone className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-600',
    route: '/lab/reels/emotional-intelligence/eq-001',
    status: 'new',
    features: [
      'Vertical swipe navigation',
      'Full-screen immersion',
      'Auto-playing micro-lessons',
      'Gesture-based interactions',
      'Mobile-optimized UI',
    ],
  },
];

export default function LabHub() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base text-text-primary">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-text-muted hover:text-golden transition mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex items-start justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-golden via-amber-300 to-golden bg-clip-text text-transparent"
              >
                Research Lab
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-text-muted max-w-2xl"
              >
                Experimental learning interfaces pushing the boundaries of HCI and educational design.
                Try them out and discover new ways to learn.
              </motion.p>
            </div>

            <div className="hidden md:block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="text-amber-500 font-bold text-sm">🧪 EXPERIMENTAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Experiments Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(experiment.route)}
              className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-golden/50 transition cursor-pointer"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${experiment.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                    experiment.status === 'beta' ? 'bg-golden/80 text-base' :
                    experiment.status === 'new' ? 'bg-sage/80 text-base' :
                    'bg-purple-500/80 text-white'
                  }`}>
                    {experiment.status.toUpperCase()}
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="text-white">
                    {experiment.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-golden transition">
                  {experiment.title}
                </h3>
                <p className="text-text-muted mb-4">
                  {experiment.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {experiment.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <div className="w-1 h-1 rounded-full bg-golden mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Try Button */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-text-muted">
                    Sample: EQ Module, Lesson 1
                  </span>
                  <button className="px-4 py-2 bg-golden/10 hover:bg-golden/20 text-golden rounded-lg transition font-medium">
                    Try It →
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${experiment.gradient} opacity-5`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 bg-surface border border-border rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-4 text-golden">About the Research Lab</h3>
          <div className="space-y-3 text-text-secondary">
            <p>
              These experimental learning modes are built using cutting-edge HCI (Human-Computer Interaction)
              and HCD (Human-Centered Design) principles. Each interface explores different cognitive pathways
              and interaction models to optimize learning effectiveness.
            </p>
            <p>
              <strong className="text-text-primary">Why experiment?</strong> Traditional learning interfaces
              follow a one-size-fits-all model. We believe different learners benefit from different modalities.
              These experiments help us understand which interaction patterns work best for which types of content.
            </p>
            <p className="text-sm text-text-muted italic">
              💡 Your feedback matters! Let us know which learning mode resonates with you most.
            </p>
          </div>
        </motion.div>

        {/* Technical Details (for nerds) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 p-6 bg-base border border-border/50 rounded-xl"
        >
          <details className="text-sm">
            <summary className="cursor-pointer text-text-muted hover:text-text-primary transition font-mono">
              🤓 Technical Stack & Implementation
            </summary>
            <div className="mt-4 space-y-2 text-text-muted font-mono text-xs">
              <p>• Built with React 19 + TypeScript (strict mode)</p>
              <p>• Framer Motion for physics-based animations</p>
              <p>• Canvas API + SVG for spatial visualizations</p>
              <p>• Gesture recognition via useMotionValue hooks</p>
              <p>• Responsive: Mobile-first with touch support</p>
              <p>• State management: Zustand with persistence</p>
            </div>
          </details>
        </motion.div>
      </div>
    </div>
  );
}
