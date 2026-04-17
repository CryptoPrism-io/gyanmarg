import { useState, useMemo, useRef, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpacedRepetitionInline = lazy(() =>
  import('@/features/spaced-repetition/SpacedRepetition').then((m) => ({ default: m.SpacedRepetition }))
);
import {
  User,
  Trophy,
  Flame,
  Star,
  BookOpen,
  Target,
  Shield,
  Download,
  Upload,
  Trash2,
  AlertTriangle,
  CheckCircle,
  HardDrive,
  RefreshCw,
  Cloud,
  CloudOff,
  LogOut,
  RotateCw,
  ExternalLink,
  Info,
  ChevronRight,
  Share2,
  TrendingUp,
  Award,
  Settings,
  Bookmark,
  Bell,
  Clock,
  Layers,
  CheckCircle2,
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
import { achievements } from '@/data/achievements';
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

  // Unlocked achievements
  const unlockedAchievements = userProgress.achievements || [];

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
    { id: 'review' as const, label: 'Review', icon: Layers },
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
    <div className="pb-28">
      {/* Editorial Profile Header */}
      <div className="px-6 pt-10 pb-0 max-w-3xl mx-auto">
        <h1 className="text-[2.6rem] font-serif tracking-[-0.02em] leading-none text-text-primary">
          {profile?.name || user?.displayName || 'Reader'}
        </h1>
        <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-text-muted mt-2.5">
          {tabSubtitle[activeView]}
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6">
      {/* ── EDITORIAL TAB BAR ── */}
      <div className="flex gap-5 mt-6 mb-8 border-b border-white/[0.08]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id)}
            className={`relative pb-3 text-[10px] uppercase tracking-[0.22em] font-bold transition-colors whitespace-nowrap ${
              activeView === tab.id
                ? 'text-golden'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            {tab.label}
            {activeView === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-golden to-sunrise rounded-full"
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
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-elevated/70 backdrop-blur-sm">
                  {/* Ambient glows */}
                  <div className="absolute -top-8 -right-8 w-48 h-48 bg-golden/[0.08] rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-lavender/[0.08] rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-golden/20 to-transparent" />

                  <div className="relative p-5">
                    {/* Avatar + Name */}
                    <div className="flex items-start gap-4 mb-5">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt="" className="w-[60px] h-[60px] rounded-2xl border-2 border-golden/40 shadow-golden" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-golden/30 to-sunrise/20 border-2 border-golden/40 flex items-center justify-center shadow-golden">
                          <User className="w-7 h-7 text-golden" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-display font-bold text-text-primary truncate leading-tight">
                          {profile?.name || user?.displayName || 'Learner'}
                        </h2>
                        <p className={`text-[13px] font-semibold ${learnerTitle.color} mt-0.5`}>{learnerTitle.title}</p>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-[11px] text-text-muted bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.08]">Lv. {userProgress.level}</span>
                          {isConfigured && user && (
                            <span className="flex items-center gap-1 text-[11px] text-text-muted">
                              {syncError ? <CloudOff className="w-3 h-3 text-coral" /> : <Cloud className="w-3 h-3 text-sage" />}
                              {formatLastSync()}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={handleShareCard}
                        disabled={isSharing}
                        className="w-9 h-9 rounded-xl bg-golden/10 border border-golden/25 flex items-center justify-center hover:bg-golden/20 active:scale-95 transition-all disabled:opacity-50"
                      >
                        <Share2 className="w-4 h-4 text-golden" />
                      </button>
                    </div>

                    {/* XP Progress bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-golden/80">Level {userProgress.level}</span>
                        <span className="text-[11px] text-text-muted">{xpProgress} / 500 XP</span>
                      </div>
                      <div className="h-[5px] rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-golden to-sunrise"
                          initial={{ width: 0 }}
                          animate={{ width: `${getLevelProgress()}%` }}
                          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* 4 stats */}
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { icon: <Trophy className="w-3.5 h-3.5" />, value: userProgress.xp.toLocaleString(), label: 'XP', color: 'text-golden', bg: 'bg-golden/[0.08] border-golden/15' },
                        { icon: <Flame className="w-3.5 h-3.5" />, value: currentStreak, label: 'Streak', color: 'text-coral', bg: 'bg-coral/[0.08] border-coral/15' },
                        { icon: <BookOpen className="w-3.5 h-3.5" />, value: userProgress.lessonsCompleted.length, label: 'Reads', color: 'text-sage', bg: 'bg-sage/[0.08] border-sage/15' },
                        { icon: <TrendingUp className="w-3.5 h-3.5" />, value: longestStreak || currentStreak, label: 'Best', color: 'text-lavender', bg: 'bg-lavender/[0.08] border-lavender/15' },
                      ].map((stat) => (
                        <div key={stat.label} className={`text-center rounded-xl p-2.5 border ${stat.bg}`}>
                          <div className={`${stat.color} flex justify-center mb-1`}>{stat.icon}</div>
                          <p className="text-sm font-display font-bold text-text-primary tabular-nums">{stat.value}</p>
                          <p className="text-[10px] text-text-muted mt-0.5 font-medium">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Weekly activity dots */}
                    <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[10px] text-text-muted font-semibold uppercase tracking-widest">This Week</span>
                      <div className="flex items-center gap-1">
                        {weeklyActivity.map((active, i) => (
                          <div key={i} className={`w-[26px] h-[26px] rounded-lg flex items-center justify-center text-[9px] font-bold transition-all ${active ? 'bg-golden/25 text-golden border border-golden/40 shadow-golden' : 'bg-white/[0.03] text-text-muted/30 border border-white/[0.05]'}`}>
                            {orderedLabels[i]}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Up Next — 2 items only */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 px-0.5">
                  <div className="w-[3px] h-4 rounded-full bg-gradient-to-b from-golden to-sunrise" />
                  <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.18em]">Up Next</h3>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {continueInfo && (
                    <button
                      onClick={() => navigate(`/pathway/${continueInfo.module.id}`)}
                      className="text-left rounded-2xl border border-golden/20 bg-gradient-to-br from-golden/[0.07] via-elevated/50 to-transparent p-4 hover:border-golden/35 hover:from-golden/[0.10] active:scale-[0.98] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-golden/15 border border-golden/25 flex items-center justify-center mb-3 group-hover:bg-golden/25 transition-colors">
                        <BookOpen className="w-4 h-4 text-golden" />
                      </div>
                      <p className="text-xs font-bold text-text-primary truncate leading-tight">{continueInfo.module.title}</p>
                      <p className="text-[11px] text-text-muted mt-0.5 truncate">{continueInfo.lesson.title}</p>
                      <div className="flex items-center gap-1 mt-2.5 text-golden text-[11px] font-semibold">
                        Continue <ChevronRight className="w-3 h-3" />
                      </div>
                    </button>
                  )}
                  {nextBadge && (
                    <button
                      onClick={() => setActiveView('badges')}
                      className="text-left rounded-2xl border border-lavender/20 bg-gradient-to-br from-lavender/[0.07] via-elevated/50 to-transparent p-4 hover:border-lavender/35 active:scale-[0.98] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-lavender/15 border border-lavender/25 flex items-center justify-center mb-3 text-lg group-hover:bg-lavender/25 transition-colors">
                        {nextBadge.badge.icon}
                      </div>
                      <p className="text-xs font-bold text-text-primary truncate leading-tight">{nextBadge.badge.name}</p>
                      <div className="mt-2.5">
                        <div className="h-1.5 rounded-full bg-white/[0.07] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-lavender"
                            initial={{ width: 0 }}
                            animate={{ width: `${nextBadge.progress}%` }}
                            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.4 }}
                          />
                        </div>
                        <p className="text-[10px] text-lavender/70 font-semibold mt-1">{Math.round(nextBadge.progress)}% there</p>
                      </div>
                    </button>
                  )}
                </div>

                {/* Weekly Challenge + Achievements row */}
                <div className="grid grid-cols-2 gap-2.5">
                  <Link to="/challenges" className="block">
                    <div className="rounded-2xl border border-sunrise/20 bg-gradient-to-br from-sunrise/[0.07] via-elevated/50 to-transparent p-4 hover:border-sunrise/35 active:scale-[0.98] transition-all h-full">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-sunrise" />
                        <span className="text-xs font-bold text-text-primary">Weekly</span>
                      </div>
                      <p className="text-[11px] text-text-muted">Earn bonus XP</p>
                    </div>
                  </Link>

                  <button onClick={() => setActiveView('badges')} className="text-left rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/15 hover:bg-white/[0.04] active:scale-[0.98] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-golden" />
                      <span className="text-xs font-bold text-text-primary">Badges</span>
                    </div>
                    <p className="text-[11px] text-text-muted">{unlockedAchievements.length} / {achievements.length} earned</p>
                  </button>
                </div>
              </motion.div>

              {/* Journey Map — top 8 by progress */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 px-0.5">
                  <div className="w-[3px] h-4 rounded-full bg-gradient-to-b from-lavender to-sky" />
                  <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.18em]">Your Journey</h3>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-elevated/40 overflow-hidden divide-y divide-white/[0.05]">
                  {categoryProgress
                    .sort((a, b) => b.progress - a.progress)
                    .slice(0, 8)
                    .map((cat, idx) => (
                      <div key={cat.id} className="p-3.5 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-base">{cat.icon}</span>
                            <div>
                              <span className="text-xs font-semibold text-text-primary">{cat.name}</span>
                              <p className="text-[10px] text-text-muted mt-0.5">{cat.completedLessons} / {cat.totalLessons} lessons</p>
                            </div>
                          </div>
                          <span className={`text-xs font-bold ${categoryTextColor[cat.color] || 'text-text-muted'}`}>{cat.progress}%</span>
                        </div>
                        <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${categoryBarColor[cat.color] || 'bg-golden'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${cat.progress}%` }}
                            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.05 * idx }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>

              {/* Version & Changelog */}
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 pt-2">
                <Link to="/changelog" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors">
                  <span className="text-[11px] font-mono text-text-muted">v{APP_VERSION}</span>
                  <span className="text-[11px] text-text-muted/60">·</span>
                  <span className="text-[11px] text-golden/80">What's new</span>
                </Link>
              </motion.div>

              <div className="h-4" />
            </motion.div>
          )}

          {/* ════════════════════════════════════════ */}
          {/* TAB: ACHIEVEMENTS (badges)               */}
          {/* ════════════════════════════════════════ */}
          {activeView === 'badges' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
              {/* Overall progress */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl border border-white/[0.08] bg-elevated/50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-text-primary uppercase tracking-[0.15em]">Collection</span>
                    <span className="text-sm font-bold text-golden">{totalBadgeProgress}%</span>
                  </div>
                  <div className="h-[5px] rounded-full bg-white/[0.06] overflow-hidden mb-3">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-amber-700 via-golden to-sunrise"
                      initial={{ width: 0 }}
                      animate={{ width: `${totalBadgeProgress}%` }}
                      transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.2 }}
                    />
                  </div>
                  <div className="flex justify-between">
                    {['bronze', 'silver', 'gold', 'platinum', 'diamond'].map((tier) => {
                      const tierBadges = BADGES.filter(b => b.tier === tier);
                      const tierUnlocked = tierBadges.filter(b => unlockedBadges.some(ub => ub.id === b.id));
                      const tierColors: Record<string, string> = {
                        bronze: 'text-amber-600', silver: 'text-slate-400', gold: 'text-yellow-400',
                        platinum: 'text-cyan-300', diamond: 'text-purple-400',
                      };
                      const tierBgs: Record<string, string> = {
                        bronze: 'bg-amber-600/10', silver: 'bg-slate-400/10', gold: 'bg-yellow-400/10',
                        platinum: 'bg-cyan-300/10', diamond: 'bg-purple-400/10',
                      };
                      return (
                        <div key={tier} className={`px-2 py-1 rounded-lg ${tierBgs[tier]}`}>
                          <p className={`text-[10px] font-bold ${tierColors[tier]} text-center`}>{tierUnlocked.length}/{tierBadges.length}</p>
                          <p className={`text-[9px] ${tierColors[tier]} opacity-70 capitalize text-center mt-0.5`}>{tier}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Hall of Fame */}
              {hallOfFame.length > 0 && (
                <motion.div variants={itemVariants} className="space-y-2.5">
                  <div className="flex items-center gap-2 px-0.5">
                    <div className="w-[3px] h-4 rounded-full bg-gradient-to-b from-golden to-amber-600" />
                    <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.18em]">Hall of Fame</h3>
                  </div>
                  <div className="space-y-2">
                    {hallOfFame.map((badge) => (
                      <div key={badge.id} className="relative group">
                        <BadgeCard badge={badge} unlocked={true} size="hero" />
                        <button
                          onClick={() => setShareableBadge(badge)}
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 w-8 h-8 rounded-lg bg-golden/20 border border-golden/30 flex items-center justify-center hover:bg-golden/30"
                          title="Share this achievement"
                        >
                          <Share2 className="w-4 h-4 text-golden" />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Skill Trees */}
              {skillTrees.map((tree) => {
                const treeBadges = BADGES
                  .filter(b => tree.categories.includes(b.category))
                  .sort((a, b) => a.requirement.value - b.requirement.value);
                if (treeBadges.length === 0) return null;
                const treeUnlocked = treeBadges.filter(b => unlockedBadges.some(ub => ub.id === b.id)).length;
                return (
                  <motion.div key={tree.key} variants={itemVariants} className="space-y-2">
                    <div className="flex items-center justify-between px-0.5">
                      <h3 className="text-[11px] font-bold text-text-primary flex items-center gap-2 uppercase tracking-[0.15em]">
                        <span className="text-sm">{tree.icon}</span>
                        {tree.label}
                      </h3>
                      <span className={`text-[11px] font-bold ${tree.color} px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]`}>{treeUnlocked}/{treeBadges.length}</span>
                    </div>
                    <div className={`rounded-2xl border ${tree.borderColor} bg-elevated/40 p-3 space-y-1.5`}>
                      {treeBadges.map((badge, idx) => {
                        const unlocked = unlockedBadges.find(b => b.id === badge.id);
                        const isNextToEarn = !unlocked && (idx === 0 || unlockedBadges.some(ub => ub.id === treeBadges[idx - 1]?.id));
                        return (
                          <div key={badge.id} className="relative">
                            {idx > 0 && (
                              <div className={`absolute -top-1.5 left-[22px] w-px h-1.5 ${unlocked ? 'bg-white/15' : 'bg-white/[0.04]'}`} />
                            )}
                            <div className={isNextToEarn ? 'relative' : ''}>
                              {isNextToEarn && (
                                <div className="absolute -inset-px rounded-xl ring-1 ring-golden/30 animate-pulse pointer-events-none" />
                              )}
                              <BadgeCard
                                badge={unlocked || badge}
                                unlocked={!!unlocked}
                                progress={!unlocked ? getBadgeProgress(badge.id) : undefined}
                                size="sm"
                                showProgress={true}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}

              {unlockedBadges.length === 0 && (
                <motion.div variants={itemVariants} className="text-center py-8">
                  <div className="text-4xl mb-3">🎯</div>
                  <p className="text-sm text-white/40 mb-1">Your trophy room is empty</p>
                  <p className="text-xs text-white/25">Complete lessons and maintain streaks to earn badges</p>
                </motion.div>
              )}
              <div className="h-4" />
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
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5">
              <motion.div variants={itemVariants}>
                <div className="relative overflow-hidden rounded-3xl border border-lavender/20 bg-elevated/60 backdrop-blur-sm">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-lavender/[0.07] rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
                  <div className="relative p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-4 h-4 text-lavender" />
                      <h2 className="text-base font-display font-bold text-text-primary">Review Cards</h2>
                    </div>
                    <p className="text-[11px] text-text-muted mb-5">Spaced repetition — reinforce what you've learned</p>

                    {dueCardCount > 0 ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-lavender/[0.08] border border-lavender/20">
                          <div className="w-14 h-14 rounded-2xl bg-lavender/20 border border-lavender/30 flex items-center justify-center shrink-0">
                            <span className="text-2xl font-display font-bold text-lavender">{dueCardCount}</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-text-primary">
                              {dueCardCount} card{dueCardCount !== 1 ? 's' : ''} due
                            </p>
                            <p className="text-[11px] text-text-muted mt-0.5">Complete all → earn <span className="text-golden font-semibold">+75 XP bonus</span></p>
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          size="md"
                          onClick={() => setShowReviewSession(true)}
                          className="w-full gap-2 justify-center"
                        >
                          <Layers className="w-4 h-4" />
                          Start Review Session
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-10 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-sage/15 border border-sage/25 flex items-center justify-center mb-4">
                          <CheckCircle2 className="w-8 h-8 text-sage" />
                        </div>
                        <p className="text-sm font-bold text-text-primary">All caught up!</p>
                        <p className="text-[11px] text-text-muted mt-1.5">No cards due right now. Check back later.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
              <div className="h-4" />
            </motion.div>
          )}

          {/* ════════════════════════════════════════ */}
          {/* TAB: SETTINGS                            */}
          {/* ════════════════════════════════════════ */}
          {activeView === 'settings' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
              {/* Cloud Sync */}
              {isConfigured && (
                <motion.div variants={itemVariants}>
                  <div className="rounded-2xl border border-white/10 bg-elevated/60 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-[3px] h-4 rounded-full bg-sage" />
                      <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.15em] flex items-center gap-1.5">
                        <Cloud className="w-3.5 h-3.5 text-sage" />
                        Cloud Sync
                      </h3>
                    </div>
                    {user ? (
                      <>
                        <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                          {user.photoURL ? (
                            <img src={user.photoURL} alt="" className="w-9 h-9 rounded-xl border border-white/10" referrerPolicy="no-referrer" />
                          ) : (
                            <div className="w-9 h-9 rounded-xl bg-golden/20 border border-golden/25 flex items-center justify-center">
                              <User className="w-4 h-4 text-golden" />
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="text-xs font-bold text-text-primary">{user.displayName || 'User'}</p>
                            <p className="text-[11px] text-text-muted">{user.email}</p>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${syncError ? 'bg-coral' : 'bg-sage'}`} />
                        </div>
                        <div className="flex gap-2">
                          <button onClick={syncNow} disabled={isSyncing} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs bg-sage/10 text-sage border border-sage/25 hover:bg-sage/20 active:scale-95 transition-all disabled:opacity-50">
                            <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                            {isSyncing ? 'Syncing...' : `Sync (${formatLastSync()})`}
                          </button>
                          <Button variant="glass" size="sm" onClick={signOut} className="gap-2">
                            <LogOut className="w-3.5 h-3.5" />
                            Sign Out
                          </Button>
                        </div>
                      </>
                    ) : (
                      <GoogleSignInButton variant="primary" size="md" label="Sign in with Google" />
                    )}
                  </div>
                </motion.div>
              )}

              {/* Backup & Restore */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl border border-white/10 bg-elevated/60 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-[3px] h-4 rounded-full bg-sage" />
                      <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.15em] flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-sage" />
                        Backup & Restore
                      </h3>
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] text-text-muted bg-white/[0.04] px-2 py-1 rounded-lg border border-white/[0.07]">
                      <HardDrive className="w-3 h-3" />
                      {calculateStorageSize()} KB
                    </span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <Button variant={exportStatus === 'success' ? 'primary' : 'glass'} size="sm" onClick={handleExport} disabled={exportStatus !== 'idle'} className="gap-2 flex-1">
                      {exportStatus === 'success' ? <CheckCircle className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                      {exportStatus === 'success' ? 'Done!' : 'Export'}
                    </Button>
                    <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept=".json" className="hidden" />
                    <Button variant="glass" size="sm" onClick={() => fileInputRef.current?.click()} disabled={importStatus === 'confirm' || importStatus === 'success'} className="gap-2 flex-1">
                      <Upload className="w-3.5 h-3.5" />
                      Import
                    </Button>
                  </div>
                  <AnimatePresence mode="wait">
                    {importStatus === 'confirm' && pendingImportData && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-golden/10 border border-golden/30 rounded-xl p-3 mb-3">
                        <p className="text-xs text-golden mb-2">Restore from {new Date(pendingImportData.exportDate).toLocaleDateString()}?</p>
                        <div className="flex gap-2">
                          <Button variant="primary" size="sm" onClick={confirmImport}>Confirm</Button>
                          <Button variant="glass" size="sm" onClick={() => { setPendingImportData(null); setImportStatus('idle'); }}>Cancel</Button>
                        </div>
                      </motion.div>
                    )}
                    {importStatus === 'success' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-sage/10 border border-sage/30 rounded-xl p-3 mb-3">
                        <p className="text-xs text-sage flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> Restored! Reloading...</p>
                      </motion.div>
                    )}
                    {importStatus === 'error' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-coral/10 border border-coral/30 rounded-xl p-3 mb-3">
                        <p className="text-xs text-coral flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5" /> {importError || 'Import failed'}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Appearance */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl border border-white/10 bg-elevated/60 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-[3px] h-4 rounded-full bg-golden" />
                    <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.15em] flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-golden" />
                      Appearance
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {([
                      { value: 'dark' as const, label: 'Dark' },
                      { value: 'light' as const, label: 'Light' },
                      { value: 'system' as const, label: 'System' },
                    ]).map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => updateSettings({ theme: opt.value })}
                        className={`flex-1 py-3 px-3 rounded-xl text-xs font-bold transition-all border active:scale-95 ${
                          settings.theme === opt.value
                            ? 'bg-golden/15 border-golden/35 text-golden'
                            : 'bg-white/[0.03] border-white/[0.08] text-text-muted hover:bg-white/[0.06]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Learning Preferences */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl border border-white/10 bg-elevated/60 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-[3px] h-4 rounded-full bg-lavender" />
                    <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.15em] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-lavender" />
                      Learning Preferences
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-text-primary">Express Learning Mode</p>
                        <p className="text-[11px] text-text-muted mt-0.5">Bite-sized lessons (2-5 min) instead of full sessions</p>
                      </div>
                      <button
                        onClick={() => updateSettings({ microLearningMode: !settings.microLearningMode })}
                        className={`relative shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.microLearningMode ? 'bg-lavender' : 'bg-white/[0.12]'}`}
                      >
                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${settings.microLearningMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
                      </button>
                    </div>
                    {settings.microLearningMode && (
                      <div className="p-3 rounded-xl bg-lavender/[0.08] border border-lavender/20">
                        <p className="text-[11px] text-lavender font-medium">⚡ Express Mode active: See shorter versions of lessons optimized for quick learning</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Notification Preferences */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl border border-white/10 bg-elevated/60 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-[3px] h-4 rounded-full bg-coral" />
                    <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.15em] flex items-center gap-1.5">
                      <Bell className="w-3.5 h-3.5 text-coral" />
                      Notifications
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-text-primary">Daily Streak Reminder</p>
                        <p className="text-[11px] text-text-muted mt-0.5">Get daily notifications to keep your streak alive</p>
                      </div>
                      <button
                        onClick={() => toggleNotifications(!notificationSchedule.enabled)}
                        className={`relative shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors ${notificationSchedule.enabled ? 'bg-sage' : 'bg-white/[0.12]'}`}
                      >
                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${notificationSchedule.enabled ? 'translate-x-5' : 'translate-x-0.5'}`} />
                      </button>
                    </div>
                    {notificationSchedule.enabled && (
                      <div className="border-t border-white/[0.06] pt-4">
                        <label className="flex items-center gap-2 mb-2">
                          <Clock className="w-3.5 h-3.5 text-text-muted" />
                          <span className="text-xs font-bold text-text-primary">Preferred Time</span>
                        </label>
                        <input
                          type="time"
                          value={notificationSchedule.scheduledTime}
                          onChange={(e) => setNotificationTime(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-text-primary text-sm focus:outline-none focus:border-sage/50 transition-colors"
                        />
                        <p className="text-[11px] text-text-muted mt-2">
                          Reminder at {notificationSchedule.scheduledTime} · {notificationSchedule.timezone}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Danger Zone */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl border border-coral/20 bg-coral/[0.03] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-[3px] h-4 rounded-full bg-coral" />
                    <h3 className="text-[11px] font-bold text-coral uppercase tracking-[0.15em] flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Danger Zone
                    </h3>
                  </div>
                  <p className="text-[11px] text-text-muted mb-4">Permanently delete all progress. Cannot be undone.</p>
                  <AnimatePresence>
                    {showResetConfirm ? (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-coral/10 border border-coral/30 rounded-xl p-4">
                        <p className="text-xs text-coral font-medium mb-3">Are you sure? All progress will be permanently deleted.</p>
                        <div className="flex gap-2">
                          <Button variant="primary" size="sm" onClick={handleReset} className="bg-coral hover:bg-coral/80">Delete Everything</Button>
                          <Button variant="glass" size="sm" onClick={() => setShowResetConfirm(false)}>Cancel</Button>
                        </div>
                      </motion.div>
                    ) : (
                      <Button variant="glass" size="sm" onClick={() => setShowResetConfirm(true)} className="gap-2 text-coral border-coral/30 hover:bg-coral/10">
                        <Trash2 className="w-3.5 h-3.5" />
                        Reset All Data
                      </Button>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* App Info */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Info className="w-3.5 h-3.5 text-golden" />
                      <span className="text-xs font-mono text-text-muted">v{APP_VERSION}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="glass" size="sm" onClick={handleHardRefresh} disabled={isRefreshing} className="gap-1.5 text-[11px]">
                        <RotateCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
                        {isRefreshing ? 'Updating...' : 'Update'}
                      </Button>
                      <Link to="/changelog">
                        <Button variant="glass" size="sm" className="gap-1.5 text-[11px]">
                          <ExternalLink className="w-3 h-3" />
                          Changelog
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="h-4" />
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
