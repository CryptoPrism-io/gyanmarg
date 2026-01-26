import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  TrendingUp,
  MessageSquare,
  Zap,
  Link as LinkIcon,
  Lightbulb,
  Code,
  Home,
  Network,
  Lock,
  ChevronRight,
  Trophy,
  BookOpen,
  Sparkles,
  Heart,
  Flower2,
  Building,
  Dumbbell,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { ModuleLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Badge, ProgressBar, XPBadge } from '@/components/atoms';
import { modules } from '@/data/modules';

const iconMap: Record<string, typeof Brain> = {
  brain: Brain,
  cpu: Cpu,
  'trending-up': TrendingUp,
  'message-square': MessageSquare,
  zap: Zap,
  link: LinkIcon,
  lightbulb: Lightbulb,
  code: Code,
  home: Home,
  network: Network,
  heart: Heart,
  flower: Flower2,
  building: Building,
  dumbbell: Dumbbell,
  sparkles: Sparkles,
};

const colorMap: Record<string, { gradient: string; bg: string; border: string; text: string }> = {
  orange: {
    gradient: 'from-sunrise to-golden',
    bg: 'bg-sunrise/10',
    border: 'border-sunrise/30',
    text: 'text-sunrise',
  },
  blue: {
    gradient: 'from-sky to-lavender',
    bg: 'bg-sky/10',
    border: 'border-sky/30',
    text: 'text-sky',
  },
  emerald: {
    gradient: 'from-sage to-sage-light',
    bg: 'bg-sage/10',
    border: 'border-sage/30',
    text: 'text-sage',
  },
  purple: {
    gradient: 'from-lavender to-lavender-light',
    bg: 'bg-lavender/10',
    border: 'border-lavender/30',
    text: 'text-lavender',
  },
  amber: {
    gradient: 'from-golden to-sunrise',
    bg: 'bg-golden/10',
    border: 'border-golden/30',
    text: 'text-golden',
  },
  cyan: {
    gradient: 'from-sky to-sage',
    bg: 'bg-sky/10',
    border: 'border-sky/30',
    text: 'text-sky',
  },
  rose: {
    gradient: 'from-coral to-blush',
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    text: 'text-coral',
  },
  green: {
    gradient: 'from-sage to-golden',
    bg: 'bg-sage/10',
    border: 'border-sage/30',
    text: 'text-sage',
  },
  teal: {
    gradient: 'from-sage to-sky',
    bg: 'bg-sage/10',
    border: 'border-sage/30',
    text: 'text-sage',
  },
  indigo: {
    gradient: 'from-lavender to-sky',
    bg: 'bg-lavender/10',
    border: 'border-lavender/30',
    text: 'text-lavender',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export function ModuleHub() {
  const { userProgress } = useProgressStore();

  // Calculate overall progress (mock for now)
  const completedModules = 0;
  const totalModules = modules.length;

  const categories = [
    { label: 'Mindset', emoji: '🧠', color: 'sunrise' },
    { label: 'Technology', emoji: '🤖', color: 'lavender' },
    { label: 'Finance', emoji: '💰', color: 'golden' },
    { label: 'Communication', emoji: '🗣️', color: 'sky' },
    { label: 'Philosophy', emoji: '🥋', color: 'coral' },
    { label: 'Coding', emoji: '💻', color: 'sage' },
  ];

  return (
    <ModuleLayout
      title="Learning Modules"
      subtitle="Your path to mastery across 16 domains"
      icon={<BookOpen className="w-5 h-5" />}
      headerGradient="sunrise"
      rightContent={
        <div className="flex items-center gap-3">
          <XPBadge xp={userProgress.xp} />
        </div>
      }
    >
      {/* Overall Progress */}
      <GlassCard className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sunrise to-golden flex items-center justify-center shadow-sunrise">
              <Sparkles className="w-6 h-6 text-base" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary">Your Learning Journey</h3>
              <p className="text-sm text-text-muted">
                {completedModules} of {totalModules} modules completed
              </p>
            </div>
          </div>
          <span className="text-2xl font-display font-bold text-sunrise">
            {Math.round((completedModules / totalModules) * 100)}%
          </span>
        </div>
        <ProgressBar value={(completedModules / totalModules) * 100} variant="gradient" size="md" animated />
      </GlassCard>

      {/* Domain Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-display font-semibold text-text-primary mb-4">Knowledge Domains</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <motion.span
              key={cat.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-light px-3 py-1.5 rounded-lg border border-white/10 text-sm text-text-secondary cursor-pointer hover:border-white/20 transition-colors"
            >
              {cat.emoji} {cat.label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Module Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {modules.map((module, index) => {
          const Icon = iconMap[module.icon] || Brain;
          const colors = colorMap[module.color] || colorMap.orange;
          const isLocked = index > 1 && completedModules < index - 1;

          return (
            <motion.div key={module.id} variants={itemVariants}>
              <Link
                to={isLocked ? '#' : module.route}
                className={`block ${isLocked ? 'cursor-not-allowed' : ''}`}
              >
                <div
                  className={`
                    relative overflow-hidden rounded-2xl border transition-all
                    ${isLocked ? 'opacity-50' : 'hover:scale-[1.01] hover:shadow-lg'}
                    glass ${colors.border}
                  `}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} to-transparent opacity-50`} />

                  {/* Content */}
                  <div className="relative p-4">
                    {/* Module Number Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`
                        w-9 h-9 rounded-xl flex items-center justify-center text-sm font-display font-bold
                        bg-gradient-to-br ${colors.gradient} text-base shadow-lg
                      `}>
                        {module.number}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`
                        w-14 h-14 rounded-xl flex items-center justify-center shrink-0
                        bg-gradient-to-br ${colors.gradient} shadow-lg
                      `}>
                        {isLocked ? (
                          <Lock className="w-6 h-6 text-base" />
                        ) : (
                          <Icon className="w-6 h-6 text-base" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pr-8">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold text-text-primary">{module.title}</h3>
                          <Badge variant="outline" size="sm" className={colors.text}>
                            {module.subtitle}
                          </Badge>
                        </div>
                        <p className="text-sm text-text-secondary line-clamp-2 mb-3">
                          {module.description}
                        </p>

                        {/* Books */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {module.books.slice(0, 3).map((book, i) => (
                            <span key={i} className="text-xs text-text-muted bg-surface/50 px-2 py-0.5 rounded-md border border-white/5">
                              {book.length > 20 ? book.substring(0, 20) + '...' : book}
                            </span>
                          ))}
                          {module.books.length > 3 && (
                            <span className="text-xs text-text-muted">+{module.books.length - 3} more</span>
                          )}
                        </div>

                        {/* Progress & CTA */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 bg-surface rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${index === 0 ? 35 : 0}%` }}
                                className={`h-full rounded-full bg-gradient-to-r ${colors.gradient}`}
                              />
                            </div>
                            <span className="text-xs text-text-muted font-medium">
                              {index === 0 ? '35%' : '0%'}
                            </span>
                          </div>
                          {!isLocked && (
                            <ChevronRight className="w-5 h-5 text-text-muted" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Learning Path Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 relative overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sunrise/10 via-lavender/5 to-golden/10" />
        <div className="absolute inset-0 border border-sunrise/20 rounded-2xl" />

        <div className="relative p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sunrise/10 border border-sunrise/20 flex items-center justify-center shrink-0">
              <Lightbulb className="w-6 h-6 text-sunrise" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary mb-2">Recommended Path</h3>
              <p className="text-sm text-text-secondary mb-4">
                Start with <strong className="text-sunrise">Module 1: Personal Development</strong> to build foundational habits,
                then <strong className="text-lavender">Module 7: Psychology</strong> to understand how your brain learns.
                After that, choose based on your goals!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg bg-golden/10 border border-golden/20 text-golden font-medium">
                  Want wealth? → Module 3
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-sage/10 border border-sage/20 text-sage font-medium">
                  Want tech skills? → Module 8
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-lavender/10 border border-lavender/20 text-lavender font-medium">
                  Want people skills? → Module 4
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ModuleLayout>
  );
}

export default ModuleHub;
