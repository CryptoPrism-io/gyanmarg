import { motion } from 'framer-motion';
import { Clock, Package, Bug, Sparkles, BookOpen, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/templates';
import { Button } from '@/components/atoms';
import { Link } from 'react-router-dom';
import { APP_VERSION } from '@/lib/version';

interface ChangelogEntry {
  version: string;
  date: string;
  type: 'feature' | 'fix' | 'content' | 'major';
  title: string;
  changes: string[];
}

const CHANGELOG: ChangelogEntry[] = [
  {
    version: '2.4.0',
    date: '2026-02-13',
    type: 'content',
    title: 'Relationships & Society',
    changes: [
      'Added 4 new modules: Dating & Attraction, Networking, Parenting, Social Intelligence',
      '306 new lessons across relationship and social skills domains',
      '40 AI-generated level images (Gemini 2.5 Flash)',
      'Enhanced mobile-optimized flashcard interface',
      'Improved spaced repetition algorithm for social concepts',
    ],
  },
  {
    version: '2.3.0',
    date: '2026-02-10',
    type: 'content',
    title: 'New Category Modules',
    changes: [
      '5 new modules across diverse categories: Technical Analysis, Quantum Mechanics, Game Theory, Ancient Empires, Communication & Rhetoric',
      '400 new lessons total',
      'AI-generated level images for all new modules',
      'Cross-domain knowledge connections',
      'Enhanced Finance & Markets category',
    ],
  },
  {
    version: '2.2.0',
    date: '2026-02-07',
    type: 'major',
    title: 'Bharat Wisdom Category',
    changes: [
      'Launched new Bharat Wisdom category with 8 modules',
      '640 new lessons on Indian philosophy, spirituality, and traditions',
      'Modules: Bhagavad Gita, Ramayana & Mahabharata, Upanishads, Shiv Sutras, Ayurveda, Yoga Philosophy, Sanskrit & Mantras, Jyotish & Vastu',
      'Reorganized Ancient Wisdom and Spirit & Body categories',
      '80+ AI-generated level images',
    ],
  },
  {
    version: '2.1.0',
    date: '2026-02-04',
    type: 'content',
    title: 'Ancient Wisdom Expansion',
    changes: [
      '4 new Ancient Wisdom modules with 320 lessons',
      'Wealth & Power category: 3 new modules with 240 lessons',
      'Emotional Intelligence module upgraded to 10 levels (80 lessons)',
      'Enhanced pathway progression system',
    ],
  },
  {
    version: '2.0.0',
    date: '2026-01-30',
    type: 'major',
    title: 'Gamification 2.0',
    changes: [
      'Daily login rewards system with streak bonuses',
      'Badge collection system with 50+ achievements',
      'Mobile-optimized flashcard interface with swipe gestures',
      'Streak freeze system (1 freeze per week)',
      'Weekly auto-generated challenges',
      'Level-up celebration animations',
      'Achievement unlock notifications',
      'Enhanced XP progression (500 XP per level)',
    ],
  },
  {
    version: '1.5.0',
    date: '2026-01-20',
    type: 'feature',
    title: 'Spaced Repetition & Flashcards',
    changes: [
      'Implemented SM-2 spaced repetition algorithm',
      'Interactive flashcard review system',
      'Due card tracking and scheduling',
      'Review history and performance analytics',
      'Bookmarking and starred cards',
      'Inline flashcard revision in learning pathways',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-01-01',
    type: 'major',
    title: 'Initial Launch',
    changes: [
      '16 foundational modules across 14 categories',
      'Interactive learning pathways with 6 lesson types',
      'Quiz system with explanations',
      'XP and level progression system',
      'Knowledge map visualization',
      'Dark theme with amber accents',
      'PWA support for offline access',
      'Cloud sync with Firebase (stub)',
    ],
  },
];

const typeConfig = {
  major: {
    label: 'Major Release',
    color: 'from-golden to-sunrise',
    textColor: 'text-golden',
    bgColor: 'bg-golden/10',
    borderColor: 'border-golden/30',
    icon: Sparkles,
  },
  feature: {
    label: 'Feature',
    color: 'from-sage to-emerald-500',
    textColor: 'text-sage',
    bgColor: 'bg-sage/10',
    borderColor: 'border-sage/30',
    icon: Package,
  },
  content: {
    label: 'Content',
    color: 'from-lavender to-purple-500',
    textColor: 'text-lavender',
    bgColor: 'bg-lavender/10',
    borderColor: 'border-lavender/30',
    icon: BookOpen,
  },
  fix: {
    label: 'Fix',
    color: 'from-sky to-blue-500',
    textColor: 'text-sky',
    bgColor: 'bg-sky/10',
    borderColor: 'border-sky/30',
    icon: Bug,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export function ChangelogPage() {
  return (
    <PageLayout showNav={false}>
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-10 backdrop-blur-xl bg-base/80 border-b border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/settings">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                </Link>
                <div>
                  <h1 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                    Changelog
                  </h1>
                  <p className="text-xs sm:text-sm text-text-secondary">
                    Latest updates and improvements
                  </p>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="px-3 py-1.5 rounded-lg bg-golden/10 border border-golden/30">
                  <span className="text-sm font-mono font-semibold text-golden">
                    v{APP_VERSION}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Changelog Entries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <div className="space-y-6">
            {CHANGELOG.map((entry, index) => {
              const config = typeConfig[entry.type];
              const Icon = config.icon;
              const isLatest = index === 0;

              return (
                <motion.div
                  key={entry.version}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {index !== CHANGELOG.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-[2px] bg-white/[0.06]" />
                  )}

                  <div className="flex gap-4">
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`
                          w-10 h-10 rounded-xl flex items-center justify-center
                          bg-gradient-to-br ${config.color}
                          ${isLatest ? 'ring-4 ring-golden/20 shadow-lg shadow-golden/20' : ''}
                        `}
                      >
                        <Icon className="w-5 h-5 text-base" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-lg sm:text-xl font-display font-semibold text-text-primary">
                              {entry.title}
                            </h2>
                            {isLatest && (
                              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-golden/20 text-golden border border-golden/30">
                                LATEST
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-text-muted">
                            <Clock className="w-3 h-3" />
                            {entry.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`
                              px-2.5 py-1 rounded-lg text-xs font-medium
                              ${config.bgColor} ${config.borderColor} ${config.textColor}
                              border
                            `}
                          >
                            {config.label}
                          </div>
                          <div className="px-2.5 py-1 rounded-lg bg-surface/50 border border-white/10">
                            <span className="text-xs font-mono text-text-secondary">
                              v{entry.version}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Changes */}
                      <div className="glass-light rounded-xl p-4 border border-white/10">
                        <ul className="space-y-2">
                          {entry.changes.map((change, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + i * 0.05 }}
                              className="flex items-start gap-2 text-sm text-text-secondary"
                            >
                              <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${config.bgColor}`} />
                              <span>{change}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center py-8 border-t border-white/[0.06]"
          >
            <p className="text-sm text-text-muted mb-2">
              Built with care by the Polymind team
            </p>
            <p className="text-xs text-text-muted">
              Transforming 45+ ebooks into interactive learning experiences
            </p>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

export default ChangelogPage;
