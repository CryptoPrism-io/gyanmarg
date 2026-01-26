import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Flame, Crown, Medal, Award } from 'lucide-react';
import { Card } from '@/components/molecules';
import { useProgressStore } from '@/store/progressStore';
import { useUserStore } from '@/store/userStore';
import type { LeaderboardEntry } from '@/types';

const LEADERBOARD_KEY = 'gyanmarg-leaderboard';

// AI competitors for motivation (progressive difficulty)
const aiCompetitors: Omit<LeaderboardEntry, 'isCurrentUser'>[] = [
  { id: 'ai-1', name: 'Scholar Sam', xp: 4200, level: 9, streak: 21 },
  { id: 'ai-2', name: 'Focused Fiona', xp: 2800, level: 6, streak: 14 },
  { id: 'ai-3', name: 'Habit Hero', xp: 1800, level: 4, streak: 30 },
  { id: 'ai-4', name: 'Deep Diver', xp: 1200, level: 3, streak: 7 },
  { id: 'ai-5', name: 'Quick Learner', xp: 600, level: 2, streak: 5 },
];

// Rank icons based on position
function getRankDisplay(rank: number) {
  switch (rank) {
    case 1:
      return <Crown className="w-5 h-5 text-amber-400" />;
    case 2:
      return <Medal className="w-5 h-5 text-slate-300" />;
    case 3:
      return <Award className="w-5 h-5 text-amber-700" />;
    default:
      return <span className="w-5 text-center text-muted font-medium">{rank}</span>;
  }
}

interface LeaderboardRowProps {
  rank: number;
  entry: LeaderboardEntry;
  highlight: boolean;
}

function LeaderboardRow({ rank, entry, highlight }: LeaderboardRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: rank * 0.05 }}
      className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
        highlight
          ? 'bg-accent/10 border border-accent/30'
          : 'bg-secondary hover:bg-elevated'
      }`}
    >
      {/* Rank */}
      <div className="w-8 flex justify-center">{getRankDisplay(rank)}</div>

      {/* Avatar placeholder */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
          highlight ? 'bg-accent text-white' : 'bg-elevated text-secondary'
        }`}
      >
        {entry.name.charAt(0)}
      </div>

      {/* Name and stats */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`font-medium truncate ${highlight ? 'text-accent' : 'text-primary'}`}>
            {entry.name}
          </span>
          {highlight && (
            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
              You
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            Lvl {entry.level}
          </span>
          {entry.streak > 0 && (
            <span className="flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-500" />
              {entry.streak}
            </span>
          )}
        </div>
      </div>

      {/* XP */}
      <div className="text-right">
        <span className={`font-semibold ${highlight ? 'text-accent' : 'text-primary'}`}>
          {entry.xp.toLocaleString()}
        </span>
        <span className="text-xs text-muted ml-1">XP</span>
      </div>
    </motion.div>
  );
}

interface LocalLeaderboardProps {
  className?: string;
  maxEntries?: number;
}

export function LocalLeaderboard({ className, maxEntries = 5 }: LocalLeaderboardProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const userProgress = useProgressStore((s) => s.userProgress);
  const profile = useUserStore((s) => s.profile);

  useEffect(() => {
    // Load or initialize leaderboard
    const stored = localStorage.getItem(LEADERBOARD_KEY);
    let board: LeaderboardEntry[] = stored
      ? JSON.parse(stored)
      : aiCompetitors.map((c) => ({ ...c, isCurrentUser: false }));

    // Create/update current user's entry
    const userEntry: LeaderboardEntry = {
      id: 'current-user',
      name: profile?.name || 'You',
      xp: userProgress.xp,
      level: userProgress.level,
      streak: userProgress.currentStreak,
      isCurrentUser: true,
    };

    // Remove old user entry and add new one
    board = board.filter((e) => !e.isCurrentUser);
    board.push(userEntry);

    // Sort by XP descending
    board.sort((a, b) => b.xp - a.xp);

    // Take top entries
    const topEntries = board.slice(0, 10);

    setEntries(topEntries);

    // Save to localStorage
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(topEntries));
  }, [userProgress, profile]);

  // Find user's rank
  const userRank = entries.findIndex((e) => e.isCurrentUser) + 1;

  return (
    <Card className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold text-primary">Leaderboard</h3>
            <p className="text-xs text-muted">Compete with fellow learners</p>
          </div>
        </div>
        {userRank > 0 && (
          <div className="text-right">
            <span className="text-xs text-muted">Your rank</span>
            <p className="font-semibold text-accent">#{userRank}</p>
          </div>
        )}
      </div>

      {/* Leaderboard entries */}
      <div className="space-y-2">
        {entries.slice(0, maxEntries).map((entry, index) => (
          <LeaderboardRow
            key={entry.id}
            rank={index + 1}
            entry={entry}
            highlight={entry.isCurrentUser}
          />
        ))}
      </div>

      {/* Show more indicator */}
      {entries.length > maxEntries && (
        <p className="text-center text-xs text-muted mt-3">
          +{entries.length - maxEntries} more learners
        </p>
      )}

      {/* Motivational message based on rank */}
      {userRank > 0 && (
        <div className="mt-4 pt-4 border-t border-border text-center">
          {userRank === 1 ? (
            <p className="text-sm text-amber-500 font-medium">
              🏆 You&apos;re leading the pack!
            </p>
          ) : userRank <= 3 ? (
            <p className="text-sm text-success">
              Almost at the top! Keep pushing!
            </p>
          ) : (
            <p className="text-sm text-muted">
              {entries[userRank - 2]?.xp - userProgress.xp || 0} XP to rank up
            </p>
          )}
        </div>
      )}
    </Card>
  );
}

export default LocalLeaderboard;
