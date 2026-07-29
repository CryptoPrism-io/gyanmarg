import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { springBouncy } from '@/lib/animations';
import { Trophy, Flame, BookOpen, Clock, Crown } from 'lucide-react';
import { getAIUsersWithProgress } from '@/data/aiUsers';

interface LeaderboardEntry {
  rank: number;
  name: string;
  displayName: string;
  avatar: string;
  xp: number;
  level: number;
  currentStreak?: number;
  lessonsCompleted?: number;
  isAI?: boolean;
  isCurrentUser?: boolean;
  lastActive: string;
}

type SortBy = 'xp' | 'streak' | 'lessons';

interface LeaderboardProps {
  currentUserName?: string;
  currentUserXP?: number;
  currentUserStreak?: number;
  currentUserLessons?: number;
  maxEntries?: number;
  variant?: 'full' | 'compact';
}

export function Leaderboard({
  currentUserName,
  currentUserXP = 0,
  currentUserStreak = 0,
  currentUserLessons = 0,
  maxEntries = 10,
  variant = 'full',
}: LeaderboardProps) {
  const [sortBy, setSortBy] = useState<SortBy>('xp');

  // Combine AI users with current user
  const entries = useMemo(() => {
    const aiUsers = getAIUsersWithProgress();

    // Convert to leaderboard entries
    let allEntries: LeaderboardEntry[] = aiUsers.map((user, idx) => ({
      rank: idx + 1,
      name: user.name,
      displayName: user.displayName,
      avatar: user.avatar,
      xp: user.xp || 0,
      level: user.level || 1,
      currentStreak: user.currentStreak || 0,
      lessonsCompleted: user.lessonsCompleted || 0,
      isAI: true,
      lastActive: user.lastActive || new Date().toISOString(),
    }));

    // Add current user if provided
    if (currentUserName && currentUserXP >= 0) {
      allEntries.push({
        rank: 0, // Will be set after sorting
        name: currentUserName,
        displayName: currentUserName.split(' ')[0],
        avatar: '👤',
        xp: currentUserXP,
        level: Math.floor(currentUserXP / 500) + 1,
        currentStreak: currentUserStreak,
        lessonsCompleted: currentUserLessons,
        isAI: false,
        isCurrentUser: true,
        lastActive: new Date().toISOString(),
      });
    }

    // Sort by selected metric
    const sorted = [...allEntries].sort((a, b) => {
      switch (sortBy) {
        case 'streak':
          return (b.currentStreak || 0) - (a.currentStreak || 0);
        case 'lessons':
          return (b.lessonsCompleted || 0) - (a.lessonsCompleted || 0);
        case 'xp':
        default:
          return b.xp - a.xp;
      }
    });

    // Assign ranks
    return sorted.map((entry, idx) => ({
      ...entry,
      rank: idx + 1,
    })).slice(0, maxEntries);
  }, [sortBy, currentUserName, currentUserXP, currentUserStreak, currentUserLessons, maxEntries]);

  // Find current user's rank (might not be in top 10)
  const currentUserRank = useMemo(() => {
    const aiUsers = getAIUsersWithProgress();
    let allEntries = aiUsers.map((user) => ({
      xp: user.xp || 0,
      streak: user.currentStreak || 0,
      lessons: user.lessonsCompleted || 0,
    }));

    if (currentUserName) {
      allEntries.push({
        xp: currentUserXP,
        streak: currentUserStreak,
        lessons: currentUserLessons,
      });
    }

    const metric = sortBy === 'streak' ? 'streak' : sortBy === 'lessons' ? 'lessons' : 'xp';
    const sorted = [...allEntries].sort((a, b) => b[metric] - a[metric]);
    return sorted.findIndex((e) => e === allEntries[allEntries.length - 1]) + 1;
  }, [sortBy, currentUserName, currentUserXP, currentUserStreak, currentUserLessons]);

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: springBouncy },
  };

  return (
    <div className="space-y-3">
      {/* Tab Buttons */}
      <div className="flex gap-2 bg-white/[0.02] rounded-lg p-1 border border-white/[0.08]">
        {[
          { key: 'xp' as SortBy, label: 'XP', icon: Trophy },
          { key: 'streak' as SortBy, label: 'Streak', icon: Flame },
          { key: 'lessons' as SortBy, label: 'Lessons', icon: BookOpen },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setSortBy(key)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 sm:px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
              sortBy === key
                ? 'bg-golden/20 text-golden border border-golden/30'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* Leaderboard */}
      <motion.div
        className="space-y-1.5"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {entries.map((entry) => (
          <motion.div
            key={`${entry.rank}-${entry.name}`}
            variants={tabVariants}
            className={`relative overflow-hidden rounded-xl border transition-all ${
              entry.isCurrentUser
                ? 'border-golden/40 bg-golden/[0.04]'
                : entry.rank <= 3
                  ? 'border-white/[0.08] bg-white/[0.02]'
                  : 'border-white/[0.06] bg-white/[0.01]'
            }`}
          >
            <div className="p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
              {/* Rank Badge */}
              <div
                className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg shrink-0 font-display font-bold text-sm sm:text-base ${
                  entry.rank === 1
                    ? 'bg-gradient-to-br from-golden to-sunrise text-black'
                    : entry.rank === 2
                      ? 'bg-gradient-to-br from-slate-400 to-slate-300 text-black'
                      : entry.rank === 3
                        ? 'bg-gradient-to-br from-amber-600 to-amber-500 text-white'
                        : 'bg-white/[0.06] text-text-secondary'
                }`}
              >
                {entry.rank === 1 && <Crown className="w-4 h-4 sm:w-5 sm:h-5 absolute" />}
                {entry.rank > 3 && entry.rank}
                {entry.rank === 2 && '2'}
                {entry.rank === 3 && '3'}
              </div>

              {/* Avatar + Name */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">{entry.avatar}</span>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-text-primary truncate">
                      {entry.displayName}
                    </p>
                    {entry.isAI && (
                      <p className="text-[10px] text-text-muted">AI Learner</p>
                    )}
                    {entry.isCurrentUser && (
                      <p className="text-[10px] text-golden font-medium">You</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Primary Stat */}
              <div className="text-right shrink-0">
                <p className={`text-xs sm:text-sm font-bold ${
                  sortBy === 'xp'
                    ? 'text-golden'
                    : sortBy === 'streak'
                      ? 'text-coral'
                      : 'text-sage'
                }`}>
                  {sortBy === 'xp' && entry.xp.toLocaleString()}
                  {sortBy === 'streak' && `${entry.currentStreak}d`}
                  {sortBy === 'lessons' && entry.lessonsCompleted}
                </p>
                <p className="text-[9px] text-text-muted">
                  Lv{entry.level}
                </p>
              </div>

              {/* Last Active */}
              {variant === 'full' && (
                <div className="hidden sm:flex items-center gap-1 text-[10px] text-text-muted shrink-0 ml-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatTime(entry.lastActive)}</span>
                </div>
              )}
            </div>

            {/* Highlight for current user */}
            {entry.isCurrentUser && (
              <div className="absolute inset-0 pointer-events-none border border-golden/20 rounded-xl" />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Current User Info if not in top entries */}
      {currentUserName && !entries.some((e) => e.isCurrentUser) && variant === 'full' && (
        <div className="mt-4 pt-4 border-t border-white/[0.08]">
          <p className="text-[11px] text-text-muted text-center mb-2">
            Your Rank: #{currentUserRank}
          </p>
          <div className="p-3 rounded-lg border border-golden/20 bg-golden/[0.04] text-center">
            <p className="text-xs text-text-secondary">
              Keep learning! You're climbing the leaderboard 🚀
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
