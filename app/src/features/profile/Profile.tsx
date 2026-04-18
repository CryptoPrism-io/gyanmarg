import { useState, useMemo, useRef, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpacedRepetitionInline = lazy(() =>
  import('@/features/spaced-repetition/SpacedRepetition').then((m) => ({ default: m.SpacedRepetition }))
);
import {
  User,
  Star,
  BookOpen,
  Trophy,
  Flame,
  Download,
  Upload,
  Trash2,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  LogOut,
  RotateCw,
  ExternalLink,
  ChevronRight,
  Share2,
  Award,
  Settings,
  Bookmark,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import type { StarredCard } from '@/store/progressStore';
import { useAuth } from '@/hooks';
import { GoogleSignInButton, BadgeCard, RichMarkdown } from '@/components/molecules';
// ModuleLayout removed — using editorial layout directly
import { Button } from '@/components/atoms';
import { ShareableAchievementCard } from '@/components/organisms';
import { BADGES } from '@/data/badges';
import { modules } from '@/data/modules';
import { moduleCategories, getCategoryForModule } from '@/data/categories';
import { APP_VERSION } from '@/lib/version';

// Storage keys for all stores
const STORAGE_KEYS = {
  user: 'gyanmarg-user',
  progress: 'gyanmarg-progress',
  habits: 'gyanmarg-habits',
  spacedRepetition: 'gyanmarg-spaced-repetition-v3',
};

interface ExportData {
  version: string;
  exportDate: string;
  stores: {
    user: unknown;
    progress: unknown;
    habits: unknown;
    spacedRepetition: unknown;
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 28 } },
};

// --- Dynamic learner title based on behavior ---
function getLearnerTitle(stats: {
  lessonsCompleted: number;
  streak: number;
  badges: number;
  categoriesExplored: number;
  level: number;
}): { title: string; color: string } {
  if (stats.level >= 20 && stats.categoriesExplored >= 10)
    return { title: 'Renaissance Mind', color: 'text-golden' };
  if (stats.level >= 15 && stats.streak >= 30)
    return { title: 'Discipline Master', color: 'text-coral' };
  if (stats.categoriesExplored >= 8)
    return { title: 'Polymath Explorer', color: 'text-lavender' };
  if (stats.streak >= 14)
    return { title: 'Streak Machine', color: 'text-coral' };
  if (stats.badges >= 10)
    return { title: 'Badge Collector', color: 'text-sunrise' };
  if (stats.lessonsCompleted >= 50)
    return { title: 'Deep Learner', color: 'text-sage' };
  if (stats.lessonsCompleted >= 20)
    return { title: 'Rising Scholar', color: 'text-golden' };
  if (stats.lessonsCompleted >= 5)
    return { title: 'Curious Mind', color: 'text-lavender' };
  return { title: 'New Explorer', color: 'text-text-secondary' };
}

const categoryTextColor: Record<string, string> = {
  purple: 'text-purple-400',
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
  green: 'text-green-400',
  orange: 'text-orange-400',
  amber: 'text-amber-400',
  indigo: 'text-indigo-400',
  cyan: 'text-cyan-400',
  rose: 'text-rose-400',
  slate: 'text-slate-300',
  teal: 'text-teal-400',
  pink: 'text-pink-400',
  yellow: 'text-yellow-400',
};

const categoryBarColor: Record<string, string> = {
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  emerald: 'bg-emerald-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  indigo: 'bg-indigo-500',
  cyan: 'bg-cyan-500',
  rose: 'bg-rose-500',
  slate: 'bg-slate-400',
  teal: 'bg-teal-500',
  pink: 'bg-pink-500',
  yellow: 'bg-yellow-500',
};

// --- Saved card sub-component ---
const cardTypeLabels: Record<string, string> = {
  overview: 'Overview',
  content: 'Key Insight',
  quiz: 'Quiz',
  takeaway: 'Takeaway',
  action: 'Action',
};

const cardTypeColors: Record<string, string> = {
  overview: 'text-sunrise bg-sunrise/10 border-sunrise/20',
  content: 'text-text-secondary bg-white/5 border-white/10',
  quiz: 'text-lavender bg-lavender/10 border-lavender/20',
  takeaway: 'text-sage bg-sage/10 border-sage/20',
  action: 'text-golden bg-golden/10 border-golden/20',
};

function SavedCardItem({ card, onUnstar }: { card: StarredCard; onUnstar: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const mod = modules.find((m) => m.id === card.moduleId);
  const colorClass = cardTypeColors[card.cardType] || cardTypeColors.content;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="rounded-2xl border border-white/[0.08] bg-elevated/60 backdrop-blur-sm overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-3 flex items-start gap-3 hover:bg-white/[0.02] transition-colors"
      >
        <div className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${colorClass}`}>
          {cardTypeLabels[card.cardType] || card.cardType}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-primary truncate">{card.title}</p>
          {mod && <p className="text-[11px] text-text-muted mt-0.5">{mod.title}</p>}
        </div>
        <Star className="w-4 h-4 text-golden fill-golden shrink-0 mt-0.5" />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 border-t border-white/[0.06]">
              <div className="pt-3 prose prose-invert prose-sm max-h-60 overflow-y-auto">
                {card.cardType === 'content' ? (
                  <RichMarkdown content={card.content} />
                ) : (
                  <p className="text-text-secondary text-sm leading-relaxed">{card.content}</p>
                )}
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.06]">
                <span className="text-[10px] text-text-muted">
                  Saved {new Date(card.starredAt).toLocaleDateString()}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); onUnstar(); }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs text-coral/70 hover:text-coral hover:bg-coral/10 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Remove
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Sub-page views ---
type ProfileView = 'main' | 'badges' | 'saved' | 'review' | 'settings';

export function Profile() {
  const [activeView, setActiveView] = useState<ProfileView>('main');
  const [showReviewSession, setShowReviewSession] = useState(false);
  const navigate = useNavigate();

  // Stores
  const profile = useUserStore((s) => s.profile);
  const consecutiveLogins = useUserStore((s) => s.consecutiveLogins);
  const userProgress = useProgressStore((s) => s.userProgress);
  const getLevelProgress = useProgressStore((s) => s.getLevelProgress);
  const unlockedBadges = useProgressStore((s) => s.unlockedBadges);
  const getBadgeProgress = useProgressStore((s) => s.getBadgeProgress);
  const starredCards = useProgressStore((s) => s.starredCards);
  const unstarCard = useProgressStore((s) => s.unstarCard);
  const longestStreak = useProgressStore((s) => s.longestStreak);
  const isLessonCompleted = useProgressStore((s) => s.isLessonCompleted);
  const resetUser = useUserStore((s) => s.resetUser);
  const resetProgress = useProgressStore((s) => s.resetProgress);
  const notificationSchedule = useProgressStore((s) => s.notificationSchedule);
  const toggleNotifications = useProgressStore((s) => s.toggleNotifications);
  const setNotificationTime = useProgressStore((s) => s.setNotificationTime);
  const settings = useUserStore((s) => s.settings);
  const updateSettings = useUserStore((s) => s.updateSettings);

  // Spaced Repetition
  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const dueCardCount = getDueCards().length;

  // Auth
  const { user, signOut, isSyncing, syncNow, lastSyncAt, syncError, isConfigured } = useAuth();

  // Data management state
  const [exportStatus, setExportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error' | 'confirm'>('idle');
  const [importError, setImportError] = useState<string | null>(null);
  const [pendingImportData, setPendingImportData] = useState<ExportData | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Share card
  const shareCardRef = useRef<HTMLDivElement>(null);
  const [isSharing, setIsSharing] = useState(false);

  // Saved cards filtering
  const [filterModule, setFilterModule] = useState<string | null>(null);

  // Shareable achievement modal
  const [shareableBadge, setShareableBadge] = useState<(typeof BADGES)[number] | null>(null);
  const modulesWithCards = useMemo(() => {
    const ids = [...new Set(starredCards.map((c) => c.moduleId))];
    return ids.map((id) => modules.find((m) => m.id === id)).filter((m): m is typeof modules[number] => !!m);
  }, [starredCards]);
  const filteredCards = useMemo(() => {
    const cards = filterModule ? starredCards.filter((c) => c.moduleId === filterModule) : starredCards;
    return [...cards].sort((a, b) => new Date(b.starredAt).getTime() - new Date(a.starredAt).getTime());
  }, [starredCards, filterModule]);

  // Current streak
  const currentStreak = consecutiveLogins || userProgress.currentStreak || 0;

  // --- Computed: Categories explored ---
  const categoriesExplored = useMemo(() => {
    const completedModuleIds = new Set<string>();
    userProgress.lessonsCompleted.forEach((lessonId) => {
      // Extract module from lesson ID pattern
      for (const mod of modules) {
        if (mod.pathway?.some(level => level.lessons.some(l => l.id === lessonId))) {
          completedModuleIds.add(mod.id);
        }
      }
    });
    const cats = new Set<string>();
    completedModuleIds.forEach((modId) => {
      const cat = getCategoryForModule(modId);
      if (cat) cats.add(cat.id);
    });
    return cats.size;
  }, [userProgress.lessonsCompleted]);

  // --- Computed: Category progress ---
  const categoryProgress = useMemo(() => {
    return moduleCategories
      .sort((a, b) => a.order - b.order)
      .map((cat) => {
        const catModules = cat.moduleIds
          .map((id) => modules.find((m) => m.id === id))
          .filter((m): m is typeof modules[number] => !!m && m.isAvailable && !!m.pathway);

        let totalLessons = 0;
        let completedLessons = 0;
        catModules.forEach((mod) => {
          mod.pathway?.forEach((level) => {
            totalLessons += level.lessons.length;
            completedLessons += level.lessons.filter((l) => isLessonCompleted(l.id)).length;
          });
        });

        return {
          ...cat,
          totalLessons,
          completedLessons,
          progress: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
          modulesCount: catModules.length,
        };
      })
      .filter((c) => c.totalLessons > 0);
  }, [isLessonCompleted]);

  // --- Computed: Next badge to earn ---
  const nextBadge = useMemo(() => {
    const locked = BADGES.filter((b) => !unlockedBadges.some((ub) => ub.id === b.id));
    if (locked.length === 0) return null;

    // Find the one with highest progress
    let best = locked[0];
    let bestProgress = getBadgeProgress(best.id);
    for (const b of locked) {
      const p = getBadgeProgress(b.id);
      if (p > bestProgress) {
        best = b;
        bestProgress = p;
      }
    }
    return { badge: best, progress: bestProgress };
  }, [unlockedBadges, getBadgeProgress]);

  // --- Computed: Find continue lesson ---
  const continueInfo = useMemo(() => {
    for (const mod of modules) {
      if (!mod.isAvailable || !mod.pathway) continue;
      for (const level of mod.pathway) {
        for (const lesson of level.lessons) {
          if (!isLessonCompleted(lesson.id)) {
            return { module: mod, level, lesson };
          }
        }
      }
    }
    return null;
  }, [isLessonCompleted]);

  // --- Computed: Weekly activity (last 7 days) ---
  const weeklyActivity = useMemo(() => {
    const days: boolean[] = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      // Check if any lesson was completed on this date (approximate via streak)
      days.push(i < currentStreak);
    }
    return days;
  }, [currentStreak]);

  const orderedLabels = useMemo(() => {
    // Show last 7 days ending today
    const labels = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      labels.push(['S', 'M', 'T', 'W', 'T', 'F', 'S'][d.getDay()]);
    }
    return labels;
  }, []);

  // Learner title
  const learnerTitle = getLearnerTitle({
    lessonsCompleted: userProgress.lessonsCompleted.length,
    streak: currentStreak,
    badges: unlockedBadges.length,
    categoriesExplored,
    level: userProgress.level,
  });

  // XP to next level
  const xpProgress = userProgress.xp % 500;

  // Handlers
  const handleShareCard = useCallback(async () => {
    if (!shareCardRef.current) return;
    setIsSharing(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(shareCardRef.current, {
        backgroundColor: '#0A0A0B',
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, 'image/png')
      );
      if (!blob) return;
      if (navigator.share && navigator.canShare?.({ files: [new File([blob], 'polymind-stats.png', { type: 'image/png' })] })) {
        await navigator.share({
          title: 'My Polymind Stats',
          text: `Level ${userProgress.level} with ${userProgress.xp.toLocaleString()} XP on Polymind!`,
          files: [new File([blob], 'polymind-stats.png', { type: 'image/png' })],
        });
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'polymind-stats.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    } catch {
      // User cancelled
    } finally {
      setIsSharing(false);
    }
  }, [userProgress]);

  const formatLastSync = () => {
    if (!lastSyncAt) return 'Never';
    const diff = Date.now() - lastSyncAt.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return lastSyncAt.toLocaleDateString();
  };

  const calculateStorageSize = () => {
    let totalSize = 0;
    Object.values(STORAGE_KEYS).forEach((key) => {
      const data = localStorage.getItem(key);
      if (data) totalSize += new Blob([data]).size;
    });
    return (totalSize / 1024).toFixed(1);
  };

  const handleExport = () => {
    try {
      const exportData: ExportData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        stores: {
          user: JSON.parse(localStorage.getItem(STORAGE_KEYS.user) || '{}'),
          progress: JSON.parse(localStorage.getItem(STORAGE_KEYS.progress) || '{}'),
          habits: JSON.parse(localStorage.getItem(STORAGE_KEYS.habits) || '{}'),
          spacedRepetition: JSON.parse(localStorage.getItem(STORAGE_KEYS.spacedRepetition) || '{}'),
        },
      };
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `gyanmarg-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setExportStatus('success');
      setTimeout(() => setExportStatus('idle'), 3000);
    } catch {
      setExportStatus('error');
      setTimeout(() => setExportStatus('idle'), 3000);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string) as ExportData;
        if (!data.version || !data.stores) throw new Error('Invalid backup file format');
        setPendingImportData(data);
        setImportStatus('confirm');
        setImportError(null);
      } catch (error) {
        setImportError(error instanceof Error ? error.message : 'Failed to parse backup file');
        setImportStatus('error');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const confirmImport = () => {
    if (!pendingImportData) return;
    try {
      Object.entries(pendingImportData.stores).forEach(([key, value]) => {
        if (value) localStorage.setItem(STORAGE_KEYS[key as keyof typeof STORAGE_KEYS], JSON.stringify(value));
      });
      setImportStatus('success');
      setPendingImportData(null);
      setTimeout(() => window.location.reload(), 1500);
    } catch {
      setImportError('Failed to restore data');
      setImportStatus('error');
    }
  };

  const handleReset = () => {
    resetUser();
    resetProgress();
    Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
    localStorage.removeItem('gyanmarg-last-reset-date');
    setShowResetConfirm(false);
    window.location.reload();
  };

  const handleHardRefresh = async () => {
    setIsRefreshing(true);
    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(reg => reg.unregister()));
      }
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
      }
      window.location.reload();
    } catch {
      setIsRefreshing(false);
    }
  };

  // Badge skill trees config (used in Achievements tab)
  const skillTrees = [
    { key: 'streak', label: 'Streak Milestones', icon: '🔥', color: 'text-coral', borderColor: 'border-coral/20', categories: ['streak'] },
    { key: 'mastery', label: 'Content Mastery', icon: '📚', color: 'text-sage', borderColor: 'border-sage/20', categories: ['module', 'lesson'] },
    { key: 'xp', label: 'XP Milestones', icon: '⭐', color: 'text-golden', borderColor: 'border-golden/20', categories: ['xp'] },
    { key: 'review', label: 'Review Mastery', icon: '🃏', color: 'text-lavender', borderColor: 'border-lavender/20', categories: ['review'] },
  ];

  const hallOfFame = useMemo(() => {
    return [...unlockedBadges]
      .sort((a, b) => {
        const tierOrder: Record<string, number> = { diamond: 5, platinum: 4, gold: 3, silver: 2, bronze: 1 };
        const tierDiff = (tierOrder[b.tier] || 0) - (tierOrder[a.tier] || 0);
        if (tierDiff !== 0) return tierDiff;
        return new Date(b.unlockedAt || 0).getTime() - new Date(a.unlockedAt || 0).getTime();
      })
      .slice(0, 3);
  }, [unlockedBadges]);

  const totalBadgeProgress = Math.round((unlockedBadges.length / BADGES.length) * 100);

  // Tab bar configuration
  const tabs = [
    { id: 'main' as const, label: 'Overview', icon: User },
    { id: 'badges' as const, label: 'Badges', icon: Award },
    { id: 'saved' as const, label: 'Saved', icon: Bookmark },
    { id: 'review' as const, label: 'Review', icon: BookOpen },
    { id: 'settings' as const, label: 'Settings', icon: Settings },
  ];

  const tabSubtitle: Record<ProfileView, string> = {
    main: learnerTitle.title,
    badges: `${unlockedBadges.length} of ${BADGES.length} earned`,
    saved: `${starredCards.length} cards`,
    review: dueCardCount > 0 ? `${dueCardCount} cards due` : 'All caught up',
    settings: 'Data & Account',
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="px-5 pt-7 pb-0 max-w-3xl mx-auto">
        <h1 className="text-[2rem] font-serif tracking-[-0.02em] leading-none text-text-primary">
          {profile?.name || user?.displayName || 'Reader'}
        </h1>
        <p className="text-[9px] uppercase tracking-[0.32em] font-bold text-sunrise mt-2">
          {tabSubtitle[activeView]}
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-5">
      {/* ── TAB BAR ── */}
      <div className="flex gap-4 mt-4 mb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id)}
            className={`relative pb-2.5 text-[9px] uppercase tracking-[0.2em] font-bold transition-colors whitespace-nowrap ${
              activeView === tab.id
                ? 'text-sunrise'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            {tab.label}
            {activeView === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-sunrise rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.12 }}
        >

          {/* ════════════════════════════════════════ */}
          {/* TAB: OVERVIEW (main)                     */}
          {/* ════════════════════════════════════════ */}
          {activeView === 'main' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5">

              {/* Identity Banner */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden">
                  <div className="p-4">
                    {/* Avatar + Name row */}
                    <div className="flex items-center gap-3 mb-3">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt="" className="w-12 h-12 rounded-xl border border-black/[0.08] dark:border-white/10" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-sunrise/15 border border-sunrise/25 flex items-center justify-center shrink-0">
                          <User className="w-6 h-6 text-sunrise" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-base font-bold text-text-primary truncate leading-tight">
                          {profile?.name || user?.displayName || 'Learner'}
                        </h2>
                        <p className={`text-[11px] font-semibold ${learnerTitle.color}`}>{learnerTitle.title}</p>
                      </div>
                      <button
                        onClick={handleShareCard}
                        disabled={isSharing}
                        className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center hover:bg-black/[0.08] active:scale-95 transition-all disabled:opacity-50"
                        title="Share stats"
                      >
                        <Share2 className="w-3.5 h-3.5 text-text-muted" />
                      </button>
                    </div>

                    {/* XP bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-semibold text-sunrise">Lv. {userProgress.level}</span>
                        <span className="text-[10px] text-text-muted tabular-nums">{xpProgress} / 500 XP</span>
                      </div>
                      <div className="h-[3px] rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-sunrise"
                          initial={{ width: 0 }}
                          animate={{ width: `${getLevelProgress()}%` }}
                          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                        />
                      </div>
                    </div>

                    {/* 4 icon stats — 1×4 grid */}
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { Icon: Trophy,   value: userProgress.xp.toLocaleString(),          label: 'XP',     iconCls: 'text-golden',   bg: 'bg-amber-50  dark:bg-golden/[0.10]' },
                        { Icon: Flame,    value: currentStreak,                              label: 'Streak', iconCls: 'text-coral',    bg: 'bg-red-50    dark:bg-coral/[0.10]'  },
                        { Icon: BookOpen, value: userProgress.lessonsCompleted.length,        label: 'Reads',  iconCls: 'text-sage',     bg: 'bg-green-50  dark:bg-sage/[0.10]'  },
                        { Icon: Star,     value: longestStreak || currentStreak,             label: 'Best',   iconCls: 'text-lavender', bg: 'bg-purple-50 dark:bg-lavender/[0.10]' },
                      ].map((s) => (
                        <div key={s.label} className={`text-center rounded-xl py-2.5 px-1 ${s.bg}`}>
                          <div className="flex justify-center mb-1">
                            <s.Icon className={`w-4 h-4 ${s.iconCls}`} />
                          </div>
                          <p className="text-sm font-bold text-text-primary tabular-nums leading-none">{s.value}</p>
                          <p className="text-[9px] text-text-muted mt-0.5 font-medium uppercase tracking-wide">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Weekly dots */}
                    <div className="mt-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between">
                      <span className="text-[9px] text-text-muted font-semibold uppercase tracking-widest">This Week</span>
                      <div className="flex items-center gap-1">
                        {weeklyActivity.map((active, i) => (
                          <div key={i} className={`w-6 h-6 rounded-md flex items-center justify-center text-[8px] font-bold transition-all ${active ? 'bg-sunrise/20 text-sunrise border border-sunrise/30' : 'bg-black/[0.03] dark:bg-white/[0.03] text-text-muted/40 border border-black/[0.05] dark:border-white/[0.05]'}`}>
                            {orderedLabels[i]}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Up Next */}
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-[2px] h-3.5 rounded-full bg-sunrise" />
                  <h3 className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Up Next</h3>
                </div>

                {continueInfo && (
                  <button
                    onClick={() => navigate(`/pathway/${continueInfo.module.id}`)}
                    className="w-full text-left rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden flex active:scale-[0.99] transition-all"
                  >
                    <div className="w-[3px] bg-sunrise shrink-0" />
                    <div className="p-3 flex-1 min-w-0">
                      <p className="text-[10px] text-sunrise font-semibold uppercase tracking-wide mb-0.5">{continueInfo.module.title}</p>
                      <p className="text-sm font-semibold text-text-primary truncate leading-snug">{continueInfo.lesson.title}</p>
                      <p className="text-[11px] text-sunrise font-medium mt-1.5">Continue →</p>
                    </div>
                  </button>
                )}

                {nextBadge && (
                  <button
                    onClick={() => setActiveView('badges')}
                    className="w-full text-left rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden flex active:scale-[0.99] transition-all"
                  >
                    <div className="w-[3px] bg-lavender shrink-0" />
                    <div className="p-3 flex-1 min-w-0">
                      <p className="text-[10px] text-lavender font-semibold uppercase tracking-wide mb-0.5">Badge Progress</p>
                      <p className="text-sm font-semibold text-text-primary truncate">{nextBadge.badge.name}</p>
                      <div className="mt-1.5 h-1 rounded-full bg-black/[0.06] dark:bg-white/[0.07] overflow-hidden">
                        <motion.div className="h-full rounded-full bg-lavender" initial={{ width: 0 }} animate={{ width: `${nextBadge.progress}%` }} transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }} />
                      </div>
                      <p className="text-[10px] text-text-muted mt-1">{Math.round(nextBadge.progress)}%</p>
                    </div>
                  </button>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <Link to="/challenges" className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden flex active:scale-[0.99] transition-all">
                    <div className="w-[3px] bg-sage shrink-0" />
                    <div className="p-3">
                      <p className="text-[10px] text-sage font-semibold uppercase tracking-wide">Weekly</p>
                      <p className="text-xs font-semibold text-text-primary mt-0.5">Earn XP</p>
                    </div>
                  </Link>
                  <button onClick={() => setActiveView('badges')} className="text-left rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden flex active:scale-[0.99] transition-all">
                    <div className="w-[3px] bg-golden shrink-0" />
                    <div className="p-3">
                      <p className="text-[10px] text-golden font-semibold uppercase tracking-wide">Badges</p>
                      <p className="text-xs font-semibold text-text-primary mt-0.5">{unlockedBadges.length} / {BADGES.length}</p>
                    </div>
                  </button>
                </div>
              </motion.div>

              {/* Journey */}
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-[2px] h-3.5 rounded-full bg-lavender" />
                  <h3 className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Your Journey</h3>
                </div>
                <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm divide-y divide-black/[0.04] dark:divide-white/[0.04] overflow-hidden">
                  {categoryProgress
                    .sort((a, b) => b.progress - a.progress)
                    .slice(0, 6)
                    .map((cat, idx) => (
                      <div key={cat.id} className="px-3 py-2.5">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-sm leading-none">{cat.icon}</span>
                          <span className="text-xs font-semibold text-text-primary flex-1 truncate">{cat.name}</span>
                          <span className="text-[10px] text-text-muted tabular-nums">{cat.completedLessons}/{cat.totalLessons}</span>
                          <span className={`text-[10px] font-bold tabular-nums ${categoryTextColor[cat.color] || 'text-text-muted'}`}>{cat.progress}%</span>
                        </div>
                        <div className="h-[2px] rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${categoryBarColor[cat.color] || 'bg-sunrise'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${cat.progress}%` }}
                            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.04 * idx }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-center">
                <Link to="/changelog" className="text-[10px] text-text-muted hover:text-sunrise transition-colors font-mono">v{APP_VERSION} · What's new</Link>
              </motion.div>

              <div className="h-2" />
            </motion.div>
          )}

          {/* ════════════════════════════════════════ */}
          {/* TAB: ACHIEVEMENTS (badges)               */}
          {/* ════════════════════════════════════════ */}
          {activeView === 'badges' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
              {/* Collection summary */}
              <motion.div variants={itemVariants}>
                <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Collection</span>
                    <span className="text-xs font-bold text-sunrise">{totalBadgeProgress}%</span>
                  </div>
                  <div className="h-[2px] rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden mb-2.5">
                    <motion.div className="h-full rounded-full bg-sunrise" initial={{ width: 0 }} animate={{ width: `${totalBadgeProgress}%` }} transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.2 }} />
                  </div>
                  <div className="flex gap-1.5">
                    {['bronze', 'silver', 'gold', 'platinum', 'diamond'].map((tier) => {
                      const tierBadges = BADGES.filter(b => b.tier === tier);
                      const tierUnlocked = tierBadges.filter(b => unlockedBadges.some(ub => ub.id === b.id));
                      const tierColors: Record<string, string> = { bronze: 'text-amber-600', silver: 'text-slate-400', gold: 'text-yellow-500', platinum: 'text-cyan-400', diamond: 'text-purple-400' };
                      return (
                        <div key={tier} className="flex-1 text-center">
                          <p className={`text-[10px] font-bold ${tierColors[tier]}`}>{tierUnlocked.length}/{tierBadges.length}</p>
                          <p className={`text-[8px] ${tierColors[tier]} opacity-60 capitalize`}>{tier}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Hall of Fame */}
              {hallOfFame.length > 0 && (
                <motion.div variants={itemVariants} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-[2px] h-3.5 rounded-full bg-golden" />
                    <h3 className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Hall of Fame</h3>
                  </div>
                  <div className="space-y-1.5">
                    {hallOfFame.map((badge) => (
                      <div key={badge.id} className="relative group">
                        <BadgeCard badge={badge} unlocked={true} size="hero" />
                        <button onClick={() => setShareableBadge(badge)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 w-7 h-7 rounded-lg bg-golden/20 border border-golden/30 flex items-center justify-center" title="Share">
                          <Share2 className="w-3.5 h-3.5 text-golden" />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Skill Trees */}
              {skillTrees.map((tree) => {
                const treeBadges = BADGES.filter(b => tree.categories.includes(b.category)).sort((a, b) => a.requirement.value - b.requirement.value);
                if (treeBadges.length === 0) return null;
                const treeUnlocked = treeBadges.filter(b => unlockedBadges.some(ub => ub.id === b.id)).length;
                return (
                  <motion.div key={tree.key} variants={itemVariants} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 ${tree.color}`}>
                        <span>{tree.icon}</span>{tree.label}
                      </h3>
                      <span className={`text-[9px] font-bold ${tree.color}`}>{treeUnlocked}/{treeBadges.length}</span>
                    </div>
                    <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm p-2.5 space-y-1">
                      {treeBadges.map((badge, idx) => {
                        const unlocked = unlockedBadges.find(b => b.id === badge.id);
                        const isNext = !unlocked && (idx === 0 || unlockedBadges.some(ub => ub.id === treeBadges[idx - 1]?.id));
                        return (
                          <div key={badge.id} className={isNext ? 'ring-1 ring-sunrise/30 rounded-xl' : ''}>
                            <BadgeCard badge={unlocked || badge} unlocked={!!unlocked} progress={!unlocked ? getBadgeProgress(badge.id) : undefined} size="sm" showProgress={true} />
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}

              {unlockedBadges.length === 0 && (
                <motion.div variants={itemVariants} className="text-center py-10">
                  <p className="text-3xl mb-2">🎯</p>
                  <p className="text-sm text-text-muted">No badges yet — complete lessons to earn them</p>
                </motion.div>
              )}
              <div className="h-2" />
            </motion.div>
          )}

          {/* ════════════════════════════════════════ */}
          {/* TAB: LIBRARY (saved cards)               */}
          {/* ════════════════════════════════════════ */}
          {activeView === 'saved' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
              {modulesWithCards.length > 1 && (
                <motion.div variants={itemVariants} className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    onClick={() => setFilterModule(null)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${!filterModule ? 'bg-golden/15 text-golden border-golden/25' : 'bg-white/[0.03] text-text-muted border-white/[0.08]'}`}
                  >
                    All ({starredCards.length})
                  </button>
                  {modulesWithCards.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => setFilterModule(mod.id === filterModule ? null : mod.id)}
                      className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${filterModule === mod.id ? 'bg-golden/15 text-golden border-golden/25' : 'bg-white/[0.03] text-text-muted border-white/[0.08]'}`}
                    >
                      {mod.title} ({starredCards.filter((c) => c.moduleId === mod.id).length})
                    </button>
                  ))}
                </motion.div>
              )}
              {filteredCards.length === 0 ? (
                <motion.div variants={itemVariants} className="text-center py-12">
                  <BookOpen className="w-10 h-10 text-text-muted/40 mx-auto mb-3" />
                  <p className="text-sm text-text-muted">No saved cards yet. Star cards during lessons to save them here.</p>
                </motion.div>
              ) : (
                <motion.div variants={itemVariants} className="space-y-2">
                  <AnimatePresence>
                    {filteredCards.map((card) => (
                      <SavedCardItem key={card.cardId} card={card} onUnstar={() => unstarCard(card.cardId)} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ════════════════════════════════════════ */}
          {/* TAB: REVIEW (spaced repetition)          */}
          {/* ════════════════════════════════════════ */}
          {activeView === 'review' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
              <motion.div variants={itemVariants}>
                <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.05] dark:border-white/[0.05]">
                    <div className="w-[2px] h-3.5 rounded-full bg-lavender" />
                    <span className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Review Cards</span>
                  </div>
                  <div className="p-4">
                    {dueCardCount > 0 ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-lavender/[0.07] border border-lavender/15">
                          <div className="w-12 h-12 rounded-xl bg-lavender/15 flex items-center justify-center shrink-0">
                            <span className="text-xl font-bold text-lavender">{dueCardCount}</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-text-primary">{dueCardCount} card{dueCardCount !== 1 ? 's' : ''} due</p>
                            <p className="text-[11px] text-text-muted mt-0.5">Earn <span className="text-sunrise font-semibold">+75 XP</span> for completing all</p>
                          </div>
                        </div>
                        <Button variant="primary" size="md" onClick={() => setShowReviewSession(true)} className="w-full gap-2 justify-center">
                          Start Review
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-8 text-center">
                        <p className="text-3xl mb-2">✅</p>
                        <p className="text-sm font-bold text-text-primary">All caught up!</p>
                        <p className="text-[11px] text-text-muted mt-1">No cards due right now.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
              <div className="h-2" />
            </motion.div>
          )}

          {/* ════════════════════════════════════════ */}
          {/* TAB: SETTINGS                            */}
          {/* ════════════════════════════════════════ */}
          {activeView === 'settings' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-2.5">

              {/* Cloud Sync */}
              {isConfigured && (
                <motion.div variants={itemVariants}>
                  <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.05] dark:border-white/[0.05]">
                      <div className="w-[2px] h-3.5 rounded-full bg-sage" />
                      <span className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Cloud Sync</span>
                    </div>
                    <div className="p-3">
                      {user ? (
                        <>
                          <div className="flex items-center gap-3 mb-3">
                            {user.photoURL ? (
                              <img src={user.photoURL} alt="" className="w-8 h-8 rounded-lg border border-black/[0.08] dark:border-white/10" referrerPolicy="no-referrer" />
                            ) : (
                              <div className="w-8 h-8 rounded-lg bg-sunrise/10 flex items-center justify-center"><User className="w-4 h-4 text-sunrise" /></div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-text-primary truncate">{user.displayName || 'User'}</p>
                              <p className="text-[10px] text-text-muted truncate">{user.email}</p>
                            </div>
                            <div className={`w-1.5 h-1.5 rounded-full ${syncError ? 'bg-coral' : 'bg-sage'}`} />
                          </div>
                          <div className="flex gap-2">
                            <button onClick={syncNow} disabled={isSyncing} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-sage/10 text-sage border border-sage/20 hover:bg-sage/15 active:scale-95 transition-all disabled:opacity-50">
                              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                              {isSyncing ? 'Syncing...' : `Sync (${formatLastSync()})`}
                            </button>
                            <Button variant="glass" size="sm" onClick={signOut} className="gap-1.5">
                              <LogOut className="w-3 h-3" />Sign Out
                            </Button>
                          </div>
                        </>
                      ) : (
                        <GoogleSignInButton variant="primary" size="md" label="Sign in with Google" />
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Backup & Restore */}
              <motion.div variants={itemVariants}>
                <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/[0.05] dark:border-white/[0.05]">
                    <div className="flex items-center gap-2">
                      <div className="w-[2px] h-3.5 rounded-full bg-golden" />
                      <span className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Backup & Restore</span>
                    </div>
                    <span className="text-[9px] text-text-muted font-mono">{calculateStorageSize()} KB</span>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="flex gap-2">
                      <Button variant={exportStatus === 'success' ? 'primary' : 'glass'} size="sm" onClick={handleExport} disabled={exportStatus !== 'idle'} className="gap-1.5 flex-1">
                        {exportStatus === 'success' ? <CheckCircle className="w-3 h-3" /> : <Download className="w-3 h-3" />}
                        {exportStatus === 'success' ? 'Done!' : 'Export'}
                      </Button>
                      <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept=".json" className="hidden" />
                      <Button variant="glass" size="sm" onClick={() => fileInputRef.current?.click()} disabled={importStatus === 'confirm' || importStatus === 'success'} className="gap-1.5 flex-1">
                        <Upload className="w-3 h-3" />Import
                      </Button>
                    </div>
                    <AnimatePresence mode="wait">
                      {importStatus === 'confirm' && pendingImportData && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-sunrise/10 border border-sunrise/25 rounded-lg p-3">
                          <p className="text-xs text-sunrise mb-2">Restore from {new Date(pendingImportData.exportDate).toLocaleDateString()}?</p>
                          <div className="flex gap-2">
                            <Button variant="primary" size="sm" onClick={confirmImport}>Confirm</Button>
                            <Button variant="glass" size="sm" onClick={() => { setPendingImportData(null); setImportStatus('idle'); }}>Cancel</Button>
                          </div>
                        </motion.div>
                      )}
                      {importStatus === 'success' && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-sage flex items-center gap-1.5 p-2"><CheckCircle className="w-3 h-3" /> Restored! Reloading...</motion.div>)}
                      {importStatus === 'error' && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-coral flex items-center gap-1.5 p-2"><AlertTriangle className="w-3 h-3" /> {importError || 'Import failed'}</motion.div>)}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Appearance */}
              <motion.div variants={itemVariants}>
                <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.05] dark:border-white/[0.05]">
                    <div className="w-[2px] h-3.5 rounded-full bg-lavender" />
                    <span className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Appearance</span>
                  </div>
                  <div className="p-3 flex gap-2">
                    {([{ value: 'dark' as const, label: 'Dark' }, { value: 'light' as const, label: 'Light' }, { value: 'system' as const, label: 'System' }]).map((opt) => (
                      <button key={opt.value} onClick={() => updateSettings({ theme: opt.value })} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 ${settings.theme === opt.value ? 'bg-sunrise text-white' : 'bg-black/[0.04] dark:bg-white/[0.06] text-text-muted hover:text-text-primary'}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Learning Preferences */}
              <motion.div variants={itemVariants}>
                <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.05] dark:border-white/[0.05]">
                    <div className="w-[2px] h-3.5 rounded-full bg-sage" />
                    <span className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Learning</span>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-text-primary">Express Mode</p>
                        <p className="text-[10px] text-text-muted mt-0.5">Shorter lessons (2-5 min)</p>
                      </div>
                      <button onClick={() => updateSettings({ microLearningMode: !settings.microLearningMode })} className={`relative shrink-0 inline-flex h-5 w-9 items-center rounded-full transition-colors ${settings.microLearningMode ? 'bg-sage' : 'bg-black/[0.1] dark:bg-white/[0.12]'}`}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${settings.microLearningMode ? 'translate-x-4' : 'translate-x-0.5'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Notifications */}
              <motion.div variants={itemVariants}>
                <div className="rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.05] dark:border-white/[0.05]">
                    <div className="w-[2px] h-3.5 rounded-full bg-coral" />
                    <span className="text-[9px] font-bold text-text-primary uppercase tracking-[0.2em]">Notifications</span>
                  </div>
                  <div className="p-3 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-text-primary">Daily Streak Reminder</p>
                        <p className="text-[10px] text-text-muted mt-0.5">Keep your streak alive</p>
                      </div>
                      <button onClick={() => toggleNotifications(!notificationSchedule.enabled)} className={`relative shrink-0 inline-flex h-5 w-9 items-center rounded-full transition-colors ${notificationSchedule.enabled ? 'bg-sage' : 'bg-black/[0.1] dark:bg-white/[0.12]'}`}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${notificationSchedule.enabled ? 'translate-x-4' : 'translate-x-0.5'}`} />
                      </button>
                    </div>
                    {notificationSchedule.enabled && (
                      <div className="border-t border-black/[0.05] dark:border-white/[0.05] pt-3">
                        <p className="text-[10px] text-text-muted mb-1.5">Reminder time</p>
                        <input type="time" value={notificationSchedule.scheduledTime} onChange={(e) => setNotificationTime(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.07] dark:border-white/[0.08] text-text-primary text-sm focus:outline-none focus:border-sage/50 transition-colors" />
                        <p className="text-[9px] text-text-muted mt-1">{notificationSchedule.timezone}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Danger Zone */}
              <motion.div variants={itemVariants}>
                <div className="rounded-xl border border-coral/20 bg-coral/[0.02] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-coral/10">
                    <div className="w-[2px] h-3.5 rounded-full bg-coral" />
                    <span className="text-[9px] font-bold text-coral uppercase tracking-[0.2em]">Danger Zone</span>
                  </div>
                  <div className="p-3">
                    <AnimatePresence>
                      {showResetConfirm ? (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                          <p className="text-xs text-coral mb-2">All progress permanently deleted. Are you sure?</p>
                          <div className="flex gap-2">
                            <Button variant="primary" size="sm" onClick={handleReset} className="bg-coral hover:bg-coral/80">Delete Everything</Button>
                            <Button variant="glass" size="sm" onClick={() => setShowResetConfirm(false)}>Cancel</Button>
                          </div>
                        </motion.div>
                      ) : (
                        <Button variant="glass" size="sm" onClick={() => setShowResetConfirm(true)} className="gap-1.5 text-coral border-coral/25 hover:bg-coral/10">
                          <Trash2 className="w-3 h-3" />Reset All Data
                        </Button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* App Info */}
              <motion.div variants={itemVariants} className="flex items-center justify-between px-1">
                <span className="text-[10px] font-mono text-text-muted">v{APP_VERSION}</span>
                <div className="flex gap-2">
                  <button onClick={handleHardRefresh} disabled={isRefreshing} className="text-[10px] text-text-muted hover:text-sunrise transition-colors flex items-center gap-1">
                    <RotateCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />{isRefreshing ? 'Updating...' : 'Update'}
                  </button>
                  <Link to="/changelog" className="text-[10px] text-text-muted hover:text-sunrise transition-colors flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />Changelog
                  </Link>
                </div>
              </motion.div>

              <div className="h-2" />
            </motion.div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* Hidden shareable card for html2canvas */}
      <div className="fixed -left-[9999px] top-0" aria-hidden="true">
        <div
          ref={shareCardRef}
          style={{
            width: 400,
            padding: 32,
            background: 'linear-gradient(135deg, #0A0A0B 0%, #1a1a2e 50%, #16213e 100%)',
            fontFamily: 'Outfit, Inter, sans-serif',
            color: '#fff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #F59E0B, #EF4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>P</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2 }}>POLYMIND</div>
              <div style={{ fontSize: 10, color: '#F59E0B', fontWeight: 500 }}>THE INFINITE LIBRARY</div>
            </div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{profile?.name || 'Learner'}</div>
          <div style={{ fontSize: 13, color: '#a3a3a3', marginBottom: 6 }}>{learnerTitle.title} · Level {userProgress.level}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20, marginTop: 16 }}>
            {[
              { value: userProgress.xp.toLocaleString(), label: 'Total XP', color: '#F7C948' },
              { value: `${longestStreak || currentStreak}`, label: 'Best Streak', color: '#EF4444' },
              { value: `${userProgress.lessonsCompleted.length}`, label: 'Reads', color: '#22C55E' },
              { value: `${unlockedBadges.length}`, label: 'Badges', color: '#F59E0B' },
            ].map((s) => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '12px 16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 11, color: '#a3a3a3', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 10, color: '#666', textAlign: 'center' as const }}>polymind.app</div>
        </div>
      </div>

      {/* Inline Review Session Overlay */}
      {showReviewSession && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[var(--color-bg)] overflow-y-auto"
        >
          <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 bg-[var(--color-bg)]/90 backdrop-blur-sm border-b border-white/[0.06]">
            <button
              onClick={() => setShowReviewSession(false)}
              className="flex items-center gap-2 text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Profile
            </button>
          </div>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="w-8 h-8 rounded-full border-2 border-lavender/30 border-t-lavender animate-spin" />
            </div>
          }>
            <SpacedRepetitionInline />
          </Suspense>
        </motion.div>
      )}

      {/* Shareable Achievement Modal */}
      {shareableBadge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShareableBadge(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-surface border border-white/[0.08] p-5 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-text-primary">Share Achievement</h2>
              <button onClick={() => setShareableBadge(null)} className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] flex items-center justify-center transition-colors">
                <span className="text-text-muted">×</span>
              </button>
            </div>
            {(() => {
              const tierConfig: Record<string, { badge: string; text: string; xp: number }> = {
                bronze: { badge: 'from-amber-700 to-amber-600', text: 'text-amber-500', xp: 50 },
                silver: { badge: 'from-slate-500 to-slate-400', text: 'text-slate-300', xp: 100 },
                gold: { badge: 'from-yellow-600 to-yellow-500', text: 'text-yellow-400', xp: 200 },
                platinum: { badge: 'from-cyan-500 to-blue-400', text: 'text-cyan-300', xp: 500 },
                diamond: { badge: 'from-purple-600 to-pink-500', text: 'text-purple-300', xp: 1000 },
              };
              const config = tierConfig[shareableBadge.tier] || tierConfig.bronze;
              return (
                <ShareableAchievementCard
                  achievementName={shareableBadge.name}
                  achievementDescription={shareableBadge.description}
                  userName={user?.displayName || 'Learner'}
                  unlockedDate={shareableBadge.unlockedAt || new Date().toISOString()}
                  xpReward={config.xp}
                  badgeColor={config.badge}
                  textColor={config.text}
                />
              );
            })()}
          </motion.div>
        </motion.div>
      )}
      </div>
    </div>
  );
}

export default Profile;
