import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Flame, Star, Lock, Lightbulb } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useGameStore } from '@/store/gameStore';
import { modules } from '@/data/modules';
import { useLevelGameData, useModuleGameData } from '@/hooks/useGameData';
import { GAME_INFO } from '@/types/game';
import type { PathwayLesson, PathwayLevel } from '@/types';
import type { GameType, GameContent } from '@/types/game';
import { GameModal } from './GameModal';

interface SelectedGame {
  levelId: string;
  levelTitle: string;
  gameType: GameType;
  content: GameContent;
}

function LevelGameRow({ level, lessons, isComplete, onPlayGame }: {
  level: PathwayLevel;
  lessons: PathwayLesson[];
  isComplete: boolean;
  onPlayGame: (levelId: string, levelTitle: string, gameType: GameType, content: GameContent) => void;
}) {
  const { bestGameType, content, availableGames } = useLevelGameData(lessons);
  const getHighScore = useGameStore((s) => s.getHighScore);

  if (!bestGameType || availableGames.length === 0) return null;

  const info = GAME_INFO[bestGameType];
  const high = getHighScore(level.id, bestGameType);

  return (
    <div className="p-3.5 rounded-xl bg-elevated/60 backdrop-blur-sm border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-lg">{level.icon}</span>
          <div className="min-w-0">
            <p className="text-sm font-medium text-text-primary truncate">{level.title}</p>
            <p className="text-[11px] text-text-muted">{lessons.length} lessons</p>
          </div>
        </div>
        {isComplete ? (
          <motion.button
            onClick={() => onPlayGame(level.id, level.title, bestGameType, content)}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-elevated/80 border border-white/[0.08] hover:border-golden/25 hover:bg-golden/5 transition-all duration-200 text-xs group min-h-[36px] shadow-sm"
          >
            <span className="text-sm">{info.icon}</span>
            <span className="text-text-secondary group-hover:text-golden transition-colors font-medium">{info.label}</span>
            {high && (
              <span className={`ml-0.5 font-display font-bold ${
                high.score >= 90 ? 'text-sage' : high.score >= 70 ? 'text-golden' : 'text-text-muted'
              }`}>
                {high.score}%
              </span>
            )}
          </motion.button>
        ) : (
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-text-muted/50">
            <Lock className="w-3 h-3" />
            <span>Complete level</span>
          </div>
        )}
      </div>
    </div>
  );
}

function ModuleApplyItRow({ moduleId, moduleTitle, allLessons, onPlayGame }: {
  moduleId: string;
  moduleTitle: string;
  allLessons: PathwayLesson[];
  onPlayGame: (levelId: string, levelTitle: string, gameType: GameType, content: GameContent) => void;
}) {
  const { content, available } = useModuleGameData(allLessons);
  const getHighScore = useGameStore((s) => s.getHighScore);

  if (!available) return null;

  const high = getHighScore(moduleId, 'apply-it');

  return (
    <div className="p-3.5 rounded-xl bg-gradient-to-br from-golden/5 to-golden/[0.02] border border-golden/15 hover:border-golden/25 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-golden/15 border border-golden/20 flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-golden" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-golden truncate">Apply It: {moduleTitle}</p>
            <p className="text-[11px] text-text-muted">Wisdom scenarios from all levels</p>
          </div>
        </div>
        <motion.button
          onClick={() => onPlayGame(moduleId, moduleTitle, 'apply-it', content)}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-golden/10 border border-golden/20 hover:bg-golden/15 transition-all duration-200 text-xs group min-h-[36px] shadow-sm"
        >
          <span className="text-sm">💡</span>
          <span className="text-golden font-medium">Play</span>
          {high && (
            <span className={`ml-0.5 font-display font-bold ${
              high.score >= 90 ? 'text-sage' : 'text-golden'
            }`}>
              {high.score}%
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
}

// TODO: Set to false for production
const DEV_UNLOCK_ALL = false;

export function GameHub() {
  const completedLessons = useProgressStore((s) => s.userProgress.lessonsCompleted);
  const { totalGamesPlayed, totalGameXP } = useGameStore();
  const [selectedGame, setSelectedGame] = useState<SelectedGame | null>(null);

  const moduleGroups = useMemo(() => {
    const groups: {
      moduleId: string;
      moduleTitle: string;
      moduleColor: string;
      moduleIcon: string;
      levels: { level: PathwayLevel; lessons: PathwayLesson[]; isComplete: boolean }[];
      allCompletedLessons: PathwayLesson[];
    }[] = [];

    for (const mod of modules) {
      if (!mod.pathway || !mod.isAvailable) continue;

      const levels: typeof groups[number]['levels'] = [];
      const allCompletedLessons: PathwayLesson[] = [];

      for (const level of mod.pathway) {
        if (DEV_UNLOCK_ALL) {
          // Dev mode: show all levels as complete, use all lessons
          levels.push({
            level,
            lessons: level.lessons,
            isComplete: true,
          });
          allCompletedLessons.push(...level.lessons);
        } else {
          const completedInLevel = level.lessons.filter((l) => completedLessons.includes(l.id));
          const isLevelComplete = completedInLevel.length === level.lessons.length;

          if (completedInLevel.length > 0) {
            levels.push({
              level,
              lessons: level.lessons,
              isComplete: isLevelComplete,
            });
            allCompletedLessons.push(...completedInLevel);
          }
        }
      }

      if (levels.length > 0) {
        groups.push({
          moduleId: mod.id,
          moduleTitle: mod.title,
          moduleColor: mod.color,
          moduleIcon: mod.icon,
          levels,
          allCompletedLessons,
        });
      }
    }

    return groups;
  }, [completedLessons]);

  const totalCompletedLessons = moduleGroups.reduce((sum, g) => sum + g.allCompletedLessons.length, 0);

  const handlePlayGame = useCallback((levelId: string, levelTitle: string, gameType: GameType, content: GameContent) => {
    setSelectedGame({ levelId, levelTitle, gameType, content });
  }, []);

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lavender/20 to-lavender/5 border border-lavender/20 flex items-center justify-center shadow-lg shadow-lavender/10">
            <Gamepad2 className="w-6 h-6 text-lavender" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-text-primary">Play</h1>
            <p className="text-sm text-text-secondary">Reinforce what you've learned</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: Trophy, value: totalGamesPlayed, label: 'Games', color: 'golden', gradient: 'from-golden/15 to-golden/5', border: 'golden/20' },
            { icon: Star, value: totalGameXP, label: 'Game XP', color: 'golden', gradient: 'from-sunrise/15 to-sunrise/5', border: 'sunrise/20' },
            { icon: Flame, value: totalCompletedLessons, label: 'Lessons', color: 'coral', gradient: 'from-coral/12 to-coral/3', border: 'coral/15' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative rounded-xl p-3.5 border bg-gradient-to-br ${stat.gradient} border-${stat.border} text-center overflow-hidden`}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/[0.02] rounded-full blur-xl pointer-events-none" />
              <stat.icon className={`w-5 h-5 text-${stat.color} mx-auto mb-1.5`} />
              <p className={`text-lg font-display font-bold text-${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {moduleGroups.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-center py-16 overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lavender/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-20 h-20 mx-auto mb-5 rounded-2xl bg-elevated/80 border border-white/[0.08] flex items-center justify-center">
              <Gamepad2 className="w-10 h-10 text-text-muted/40" />
            </div>
            <h3 className="relative text-xl font-display font-bold text-text-primary mb-2">
              No games available yet
            </h3>
            <p className="relative text-sm text-text-secondary max-w-xs mx-auto leading-relaxed">
              Complete all lessons in a level to unlock its game. Each level has a unique game type based on its content.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-7">
            {moduleGroups.map((group, gi) => (
              <motion.div
                key={group.moduleId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: gi * 0.05, type: 'spring', stiffness: 300, damping: 24 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xl">{group.moduleIcon}</span>
                  <h2 className="text-sm font-display font-bold text-text-primary">{group.moduleTitle}</h2>
                </div>

                <div className="space-y-2">
                  {/* Module-level Apply It game */}
                  <ModuleApplyItRow
                    moduleId={group.moduleId}
                    moduleTitle={group.moduleTitle}
                    allLessons={group.allCompletedLessons}
                    onPlayGame={handlePlayGame}
                  />

                  {/* Level games */}
                  {group.levels.map(({ level, lessons, isComplete }) => (
                    <LevelGameRow
                      key={level.id}
                      level={level}
                      lessons={lessons}
                      isComplete={isComplete}
                      onPlayGame={handlePlayGame}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <GameModal
          isOpen={!!selectedGame}
          onClose={() => setSelectedGame(null)}
          levelId={selectedGame.levelId}
          levelTitle={selectedGame.levelTitle}
          gameType={selectedGame.gameType}
          content={selectedGame.content}
        />
      )}
    </div>
  );
}

export default GameHub;
