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
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { ModuleLayout } from '@/components/templates';
import { Card } from '@/components/molecules';
import { Badge, ProgressBar } from '@/components/atoms';
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
};

const colorMap: Record<string, string> = {
  orange: 'from-orange-500 to-amber-500',
  blue: 'from-blue-500 to-cyan-500',
  emerald: 'from-emerald-500 to-green-500',
  purple: 'from-purple-500 to-pink-500',
  amber: 'from-amber-500 to-yellow-500',
  cyan: 'from-cyan-500 to-teal-500',
  rose: 'from-rose-500 to-red-500',
  green: 'from-green-500 to-lime-500',
  teal: 'from-teal-500 to-cyan-500',
  indigo: 'from-indigo-500 to-purple-500',
};

const bgColorMap: Record<string, string> = {
  orange: 'bg-orange-500/10 border-orange-500/30',
  blue: 'bg-blue-500/10 border-blue-500/30',
  emerald: 'bg-emerald-500/10 border-emerald-500/30',
  purple: 'bg-purple-500/10 border-purple-500/30',
  amber: 'bg-amber-500/10 border-amber-500/30',
  cyan: 'bg-cyan-500/10 border-cyan-500/30',
  rose: 'bg-rose-500/10 border-rose-500/30',
  green: 'bg-green-500/10 border-green-500/30',
  teal: 'bg-teal-500/10 border-teal-500/30',
  indigo: 'bg-indigo-500/10 border-indigo-500/30',
};

export function ModuleHub() {
  const { userProgress } = useProgressStore();

  // Calculate overall progress (mock for now)
  const completedModules = 0;
  const totalModules = modules.length;

  return (
    <ModuleLayout
      title="Learning Modules"
      subtitle="Your path to mastery across 10 domains"
      icon={<BookOpen className="w-5 h-5" />}
      rightContent={
        <div className="text-right">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="text-amber-500 font-semibold">{userProgress.xp} XP</span>
          </div>
          <p className="text-xs text-muted">Level {userProgress.level}</p>
        </div>
      }
    >
      {/* Overall Progress */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold text-primary">Your Learning Journey</h3>
            <p className="text-sm text-muted">
              {completedModules} of {totalModules} modules completed
            </p>
          </div>
          <Badge variant="primary">{Math.round((completedModules / totalModules) * 100)}%</Badge>
        </div>
        <ProgressBar value={(completedModules / totalModules) * 100} variant="gradient" />
      </Card>

      {/* Domain Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-primary mb-4">Knowledge Domains</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">🧠 Mindset</Badge>
          <Badge variant="default">🤖 Technology</Badge>
          <Badge variant="default">💰 Finance</Badge>
          <Badge variant="default">🗣️ Communication</Badge>
          <Badge variant="default">🥋 Philosophy</Badge>
          <Badge variant="default">💻 Coding</Badge>
        </div>
      </div>

      {/* Module Grid */}
      <div className="space-y-4">
        {modules.map((module, index) => {
          const Icon = iconMap[module.icon] || Brain;
          const isLocked = index > 1 && completedModules < index - 1;

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={isLocked ? '#' : module.route}
                className={`block ${isLocked ? 'cursor-not-allowed' : ''}`}
              >
                <Card
                  hover={!isLocked}
                  className={`
                    relative overflow-hidden border
                    ${isLocked ? 'opacity-50' : ''}
                    ${bgColorMap[module.color]}
                  `}
                >
                  {/* Module Number Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                      bg-gradient-to-br ${colorMap[module.color]} text-white
                    `}>
                      {module.number}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center shrink-0
                      bg-gradient-to-br ${colorMap[module.color]}
                    `}>
                      {isLocked ? (
                        <Lock className="w-6 h-6 text-white" />
                      ) : (
                        <Icon className="w-6 h-6 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-primary">{module.title}</h3>
                        <Badge variant="default" size="sm">{module.subtitle}</Badge>
                      </div>
                      <p className="text-sm text-secondary line-clamp-2 mb-3">
                        {module.description}
                      </p>

                      {/* Books */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {module.books.slice(0, 3).map((book, i) => (
                          <span key={i} className="text-xs text-muted bg-secondary px-2 py-0.5 rounded">
                            {book.length > 20 ? book.substring(0, 20) + '...' : book}
                          </span>
                        ))}
                        {module.books.length > 3 && (
                          <span className="text-xs text-muted">+{module.books.length - 3} more</span>
                        )}
                      </div>

                      {/* Progress & CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-border rounded-full h-1.5">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${colorMap[module.color]}`}
                              style={{ width: `${index === 0 ? 35 : 0}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted">
                            {index === 0 ? '35%' : '0%'}
                          </span>
                        </div>
                        {!isLocked && (
                          <ChevronRight className="w-5 h-5 text-muted" />
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Learning Path Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl border border-accent/20"
      >
        <h3 className="font-semibold text-primary mb-2">Recommended Path</h3>
        <p className="text-sm text-secondary mb-4">
          Start with <strong>Module 1: Personal Development</strong> to build foundational habits,
          then <strong>Module 7: Psychology</strong> to understand how your brain learns.
          After that, choose based on your goals!
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent">
            Want money? → Module 3
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-500">
            Want tech skills? → Module 8
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-500">
            Want people skills? → Module 4
          </span>
        </div>
      </motion.div>
    </ModuleLayout>
  );
}

export default ModuleHub;
