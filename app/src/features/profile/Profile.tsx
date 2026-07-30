import { useState, useMemo, useRef, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { springLoose, springWobble, springSlow } from '@/lib/animations';

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
import { Button } from '@/components/atoms';
import { ShareableAchievementCard } from '@/components/organisms';
import { BADGES } from '@/data/badges';
import { modulesMeta, type ModuleMeta } from '@/data/modules-meta';
import { moduleCategories, getCategoryForModule } from '@/data/categories';
import { modules } from '@/data/modules';
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
  visible: { opacity: 1, y: 0, transition: springLoose },
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
  const mod = modulesMeta.find((m) => m.id === card.moduleId);
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

// Roman numeral converter for section numbers
function toRoman(num: number): string {
  const numerals: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let result = '';
  let remaining = num;
  for (const [value, symbol] of numerals) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }
  return result;
}

export function Profile() {
  const [activeView, setActiveView] = useState<ProfileView>('main');
  const [showReviewSession, setShowReviewSession] = useState(false);
  const navigate = useNavigate();

  // Stores
  const profile = useUserStore((s) => s.profile);
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
    return ids.map((id) => modulesMeta.find((m) => m.id === id)).filter((m): m is ModuleMeta => !!m);
  }, [starredCards]);
  const filteredCards = useMemo(() => {
    const cards = filterModule ? starredCards.filter((c) => c.moduleId === filterModule) : starredCards;
    return [...cards].sort((a, b) => new Date(b.starredAt).getTime() - new Date(a.starredAt).getTime());
  }, [starredCards, filterModule]);

  // Current streak
  const currentStreak = userProgress?.currentStreak || 0;

  // --- Computed: Categories explored ---
  const categoriesExplored = useMemo(() => {
    const completedModuleIds = new Set<string>();
    userProgress.lessonsCompleted.forEach((lessonId) => {
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
      days.push(i < currentStreak);
    }
    return days;
  }, [currentStreak]);

  const orderedLabels = useMemo(() => {
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

  // Badge skill trees config
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
    <div className="pb-24 min-h-screen bg-[var(--color-bg-base)]">
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* ── HERO HEADER ── */}
      <div className="relative px-5 pt-12 pb-8 max-w-3xl mx-auto">
        {/* Decorative gold line */}
        <div className="absolute left-0 top-16 w-16 h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
        
        <div className="flex items-end justify-between">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--color-accent)] mb-2"
            >
              The Reader's Codex
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-serif tracking-[-0.02em] leading-none text-text-primary"
            >
              {profile?.name || user?.displayName || 'Reader'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-[11px] uppercase tracking-[0.3em] font-bold mt-3 ${learnerTitle.color}`}
            >
              {tabSubtitle[activeView]}
            </motion.p>
          </div>
          
          {/* Folio number */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="hidden md:block text-right"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted mb-1">Folio</p>
            <p className="text-2xl font-serif text-[var(--color-accent)]">{toRoman(userProgress.level)}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5">
        {/* ── TABLE OF CONTENTS TAB BAR ── */}
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <div className="flex gap-0 border-b border-[var(--color-border)]">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`relative flex-1 pb-3 pt-1 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-200 group ${
                  activeView === tab.id
                    ? 'text-[var(--color-accent)]'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                <span className="hidden sm:inline mr-2 text-[9px] opacity-60">{toRoman(idx + 1)}.</span>
                {tab.label}
                {activeView === tab.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] opacity-0 group-hover:opacity-30 transition-opacity" />
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >

            {/* ════════════════════════════════════════ */}
            {/* TAB: OVERVIEW (main)                     */}
            {/* ════════════════════════════════════════ */}
            {activeView === 'main' && (
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">

                {/* ── IDENTITY MANIFEST ── */}
                <motion.section variants={itemVariants} className="relative">
                  <div className="flex items-start gap-6">
                    {/* Avatar — framed like a portrait */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 rounded-2xl border-2 border-[var(--color-accent)]/30 p-1">
                        {user?.photoURL ? (
                          <img src={user.photoURL} alt="" className="w-full h-full rounded-xl object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          <div className="w-full h-full rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                            <User className="w-8 h-8 text-[var(--color-accent)]" />
                          </div>
                        )}
                      </div>
                      {/* Corner ornaments */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--color-accent)]" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--color-accent)]" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--color-accent)]" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--color-accent)]" />
                    </div>

                    <div className="flex-1 pt-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-xs text-text-muted uppercase tracking-[0.15em] mb-1">Current Level</p>
                          <p className="text-3xl font-serif text-text-primary">Level {userProgress.level}</p>
                        </div>
                        <button
                          onClick={handleShareCard}
                          disabled={isSharing}
                          className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center hover:bg-[var(--color-accent)]/20 active:scale-95 transition-all disabled:opacity-50"
                          title="Share your codex"
                        >
                          <Share2 className="w-4 h-4 text-[var(--color-accent)]" />
                        </button>
                      </div>

                      {/* XP Progress — elegant bar */}
                      <div className="mb-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Experience</span>
                          <span className="text-xs font-mono text-[var(--color-accent)]">{xpProgress} / 500</span>
                        </div>
                        <div className="h-[3px] rounded-full bg-[var(--color-bg-surface)] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-bright)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${getLevelProgress()}%` }}
                            transition={{ ...springWobble, delay: 0.3 }}
                          />
                        </div>
                      </div>

                      {/* Stats as a manifest table */}
                      <div className="grid grid-cols-4 gap-px bg-[var(--color-border)] rounded-xl overflow-hidden border border-[var(--color-border)]">
                        {[
                          { Icon: Trophy, value: userProgress.xp.toLocaleString(), label: 'XP', color: 'text-golden' },
                          { Icon: Flame, value: currentStreak, label: 'Streak', color: 'text-coral' },
                          { Icon: BookOpen, value: userProgress.lessonsCompleted.length, label: 'Reads', color: 'text-sage' },
                          { Icon: Star, value: longestStreak || currentStreak, label: 'Best', color: 'text-lavender' },
                        ].map((s) => (
                          <div key={s.label} className="bg-[var(--color-bg-elevated)] p-3 text-center">
                            <s.Icon className={`w-4 h-4 mx-auto mb-1 ${s.color}`} />
                            <p className="text-sm font-bold text-text-primary tabular-nums leading-none">{s.value}</p>
                            <p className="text-[9px] text-text-muted mt-1 uppercase tracking-wider">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Weekly strip */}
                  <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-bold">This Week</span>
                    <div className="flex items-center gap-1.5">
                      {weeklyActivity.map((active, i) => (
                        <div 
                          key={i} 
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-bold transition-all ${
                            active 
                              ? 'bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30' 
                              : 'bg-[var(--color-bg-surface)] text-text-muted/30 border border-[var(--color-border)]'
                          }`}
                        >
                          {orderedLabels[i]}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* ── UP NEXT — The Next Chapter ── */}
                <motion.section variants={itemVariants} className="space-y-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-[2px] h-4 rounded-full bg-[var(--color-accent)]" />
                    <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">The Next Chapter</h3>
                  </div>

                  {continueInfo && (
                    <button
                      onClick={() => navigate(`/pathway/${continueInfo.module.id}`)}
                      className="w-full text-left group"
                    >
                      <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-all overflow-hidden">
                        <div className="p-4">
                          <p className="text-[10px] text-[var(--color-accent)] font-semibold uppercase tracking-[0.15em] mb-1">{continueInfo.module.title}</p>
                          <p className="text-base font-serif text-text-primary group-hover:text-[var(--color-accent)] transition-colors">{continueInfo.lesson.title}</p>
                          <div className="flex items-center gap-2 mt-3">
                            <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted">Continue reading</span>
                            <ChevronRight className="w-3 h-3 text-[var(--color-accent)]" />
                          </div>
                        </div>
                        <div className="h-[2px] bg-[var(--color-bg-surface)]">
                          <div className="h-full w-0 bg-[var(--color-accent)] group-hover:w-full transition-all duration-500" />
                        </div>
                      </div>
                    </button>
                  )}

                  {nextBadge && (
                    <button
                      onClick={() => setActiveView('badges')}
                      className="w-full text-left group"
                    >
                      <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-lavender)]/30 transition-all overflow-hidden">
                        <div className="p-4">
                          <p className="text-[10px] text-lavender font-semibold uppercase tracking-[0.15em] mb-1">Approaching Badge</p>
                          <p className="text-base font-serif text-text-primary group-hover:text-lavender transition-colors">{nextBadge.badge.name}</p>
                          <div className="mt-3 h-[2px] rounded-full bg-[var(--color-bg-surface)] overflow-hidden">
                            <motion.div 
                              className="h-full rounded-full bg-lavender" 
                              initial={{ width: 0 }} 
                              animate={{ width: `${nextBadge.progress}%` }} 
                              transition={{ ...springSlow, delay: 0.3 }} 
                            />
                          </div>
                          <p className="text-[10px] text-text-muted mt-2">{Math.round(nextBadge.progress)}% complete</p>
                        </div>
                      </div>
                    </button>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/challenges" className="group">
                      <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-sage)]/30 transition-all p-4">
                        <p className="text-[10px] text-sage font-semibold uppercase tracking-[0.15em] mb-1">Weekly Trials</p>
                        <p className="text-sm font-semibold text-text-primary">Earn XP</p>
                      </div>
                    </Link>
                    <button onClick={() => setActiveView('badges')} className="text-left group">
                      <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-golden)]/30 transition-all p-4">
                        <p className="text-[10px] text-golden font-semibold uppercase tracking-[0.15em] mb-1">Laurels</p>
                        <p className="text-sm font-semibold text-text-primary">{unlockedBadges.length} / {BADGES.length}</p>
                      </div>
                    </button>
                  </div>
                </motion.section>

                {/* ── THE JOURNEY — Atlas of Knowledge ── */}
                <motion.section variants={itemVariants} className="space-y-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-[2px] h-4 rounded-full bg-[var(--color-lavender)]" />
                    <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">Atlas of Knowledge</h3>
                  </div>
                  
                  <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                    <div className="divide-y divide-[var(--color-border)]">
                      {categoryProgress
                        .sort((a, b) => b.progress - a.progress)
                        .slice(0, 8)
                        .map((cat, idx) => (
                          <div key={cat.id} className="px-4 py-3 hover:bg-[var(--color-bg-surface)] transition-colors">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-base leading-none w-6 text-center">{cat.icon}</span>
                              <span className="text-sm font-medium text-text-primary flex-1">{cat.name}</span>
                              <span className="text-[10px] text-text-muted tabular-nums font-mono">{cat.completedLessons}/{cat.totalLessons}</span>
                              <span className={`text-[11px] font-bold tabular-nums ${categoryTextColor[cat.color] || 'text-text-muted'}`}>{cat.progress}%</span>
                            </div>
                            <div className="h-[2px] rounded-full bg-[var(--color-bg-surface)] overflow-hidden ml-9">
                              <motion.div
                                className={`h-full rounded-full ${categoryBarColor[cat.color] || 'bg-[var(--color-accent)]'}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${cat.progress}%` }}
                                transition={{ ...springSlow, delay: 0.05 * idx }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.section>

                {/* ── COLOPHON ── */}
                <motion.div variants={itemVariants} className="flex justify-center pt-4">
                  <Link to="/changelog" className="text-[10px] text-text-muted hover:text-[var(--color-accent)] transition-colors font-mono tracking-wider">
                    v{APP_VERSION} · The Codex Continues
                  </Link>
                </motion.div>

                <div className="h-4" />
              </motion.div>
            )}

            {/* ════════════════════════════════════════ */}
            {/* TAB: BADGES — The Trophy Room            */}
            {/* ════════════════════════════════════════ */}
            {activeView === 'badges' && (
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                {/* Collection summary */}
                <motion.section variants={itemVariants}>
                  <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">The Collection</span>
                      <span className="text-sm font-bold text-[var(--color-accent)]">{totalBadgeProgress}%</span>
                    </div>
                    <div className="h-[3px] rounded-full bg-[var(--color-bg-surface)] overflow-hidden mb-4">
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-bright)]" 
                        initial={{ width: 0 }} 
                        animate={{ width: `${totalBadgeProgress}%` }} 
                        transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.2 }} 
                      />
                    </div>
                    <div className="flex gap-2">
                      {['bronze', 'silver', 'gold', 'platinum', 'diamond'].map((tier) => {
                        const tierBadges = BADGES.filter(b => b.tier === tier);
                        const tierUnlocked = tierBadges.filter(b => unlockedBadges.some(ub => ub.id === b.id));
                        const tierColors: Record<string, string> = { bronze: 'text-amber-600', silver: 'text-slate-400', gold: 'text-yellow-500', platinum: 'text-cyan-400', diamond: 'text-purple-400' };
                        return (
                          <div key={tier} className="flex-1 text-center py-2 rounded-lg bg-[var(--color-bg-surface)]">
                            <p className={`text-xs font-bold ${tierColors[tier]}`}>{tierUnlocked.length}/{tierBadges.length}</p>
                            <p className={`text-[9px] ${tierColors[tier]} opacity-60 capitalize`}>{tier}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>

                {/* Hall of Fame */}
                {hallOfFame.length > 0 && (
                  <motion.section variants={itemVariants} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-[2px] h-4 rounded-full bg-golden" />
                      <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">Hall of Fame</h3>
                    </div>
                    <div className="space-y-2">
                      {hallOfFame.map((badge) => (
                        <div key={badge.id} className="relative group">
                          <BadgeCard badge={badge} unlocked={true} size="hero" />
                          <button 
                            onClick={() => setShareableBadge(badge)} 
                            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 w-8 h-8 rounded-lg bg-golden/20 border border-golden/30 flex items-center justify-center hover:bg-golden/30"
                            title="Share"
                          >
                            <Share2 className="w-3.5 h-3.5 text-golden" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Skill Trees */}
                {skillTrees.map((tree) => {
                  const treeBadges = BADGES.filter(b => tree.categories.includes(b.category)).sort((a, b) => a.requirement.value - b.requirement.value);
                  if (treeBadges.length === 0) return null;
                  const treeUnlocked = treeBadges.filter(b => unlockedBadges.some(ub => ub.id === b.id)).length;
                  return (
                    <motion.section key={tree.key} variants={itemVariants} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-[10px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 ${tree.color}`}>
                          <span>{tree.icon}</span>{tree.label}
                        </h3>
                        <span className={`text-[10px] font-bold ${tree.color}`}>{treeUnlocked}/{treeBadges.length}</span>
                      </div>
                      <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-3 space-y-2">
                        {treeBadges.map((badge, idx) => {
                          const unlocked = unlockedBadges.find(b => b.id === badge.id);
                          const isNext = !unlocked && (idx === 0 || unlockedBadges.some(ub => ub.id === treeBadges[idx - 1]?.id));
                          return (
                            <div key={badge.id} className={isNext ? 'ring-1 ring-[var(--color-accent)]/30 rounded-xl' : ''}>
                              <BadgeCard badge={unlocked || badge} unlocked={!!unlocked} progress={!unlocked ? getBadgeProgress(badge.id) : undefined} size="sm" showProgress={true} />
                            </div>
                          );
                        })}
                      </div>
                    </motion.section>
                  );
                })}

                {unlockedBadges.length === 0 && (
                  <motion.section variants={itemVariants} className="text-center py-12">
                    <p className="text-4xl mb-3">🎯</p>
                    <p className="text-sm text-text-muted">No laurels yet — complete lessons to earn them</p>
                  </motion.section>
                )}
                <div className="h-4" />
              </motion.div>
            )}

            {/* ════════════════════════════════════════ */}
            {/* TAB: SAVED — The Commonplace Book        */}
            {/* ════════════════════════════════════════ */}
            {activeView === 'saved' && (
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
                {modulesWithCards.length > 1 && (
                  <motion.div variants={itemVariants} className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button
                      onClick={() => setFilterModule(null)}
                      className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${!filterModule ? 'bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/25' : 'bg-[var(--color-bg-surface)] text-text-muted border-[var(--color-border)]'}`}
                    >
                      All ({starredCards.length})
                    </button>
                    {modulesWithCards.map((mod) => (
                      <button
                        key={mod.id}
                        onClick={() => setFilterModule(mod.id === filterModule ? null : mod.id)}
                        className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${filterModule === mod.id ? 'bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/25' : 'bg-[var(--color-bg-surface)] text-text-muted border-[var(--color-border)]'}`}
                      >
                        {mod.title} ({starredCards.filter((c) => c.moduleId === mod.id).length})
                      </button>
                    ))}
                  </motion.div>
                )}
                {filteredCards.length === 0 ? (
                  <motion.div variants={itemVariants} className="text-center py-16">
                    <BookOpen className="w-12 h-12 text-text-muted/30 mx-auto mb-4" />
                    <p className="text-sm text-text-muted">Your commonplace book is empty. Star passages during lessons to collect them here.</p>
                  </motion.div>
                ) : (
                  <motion.div variants={itemVariants} className="space-y-3">
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
            {/* TAB: REVIEW — The Memory Palace          */}
            {/* ════════════════════════════════════════ */}
            {activeView === 'review' && (
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
                <motion.section variants={itemVariants}>
                  <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-border)]">
                      <div className="w-[2px] h-4 rounded-full bg-lavender" />
                      <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">The Memory Palace</span>
                    </div>
                    <div className="p-5">
                      {dueCardCount > 0 ? (
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-lavender/[0.07] border border-lavender/15">
                            <div className="w-16 h-16 rounded-xl bg-lavender/15 flex items-center justify-center shrink-0">
                              <span className="text-2xl font-bold text-lavender">{dueCardCount}</span>
                            </div>
                            <div>
                              <p className="text-base font-bold text-text-primary">{dueCardCount} memory{dueCardCount !== 1 ? 'ies' : ''} awaiting review</p>
                              <p className="text-xs text-text-muted mt-1">Earn <span className="text-[var(--color-accent)] font-semibold">+75 XP</span> for completing all</p>
                            </div>
                          </div>
                          <Button variant="primary" size="lg" onClick={() => setShowReviewSession(true)} className="w-full gap-2 justify-center text-sm font-bold">
                            Enter the Palace
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center py-10 text-center">
                          <p className="text-4xl mb-3">✅</p>
                          <p className="text-base font-bold text-text-primary">All memories consolidated</p>
                          <p className="text-xs text-text-muted mt-2">No cards due for review.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.section>
                <div className="h-4" />
              </motion.div>
            )}

            {/* ════════════════════════════════════════ */}
            {/* TAB: SETTINGS — The Archive Room         */}
            {/* ════════════════════════════════════════ */}
            {activeView === 'settings' && (
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">

                {/* Cloud Sync */}
                {isConfigured && (
                  <motion.section variants={itemVariants}>
                    <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--color-border)]">
                        <div className="w-[2px] h-4 rounded-full bg-sage" />
                        <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">The Aether</span>
                      </div>
                      <div className="p-4">
                        {user ? (
                          <>
                            <div className="flex items-center gap-3 mb-4">
                              {user.photoURL ? (
                                <img src={user.photoURL} alt="" className="w-10 h-10 rounded-lg border border-[var(--color-border)]" referrerPolicy="no-referrer" />
                              ) : (
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center"><User className="w-5 h-5 text-[var(--color-accent)]" /></div>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-text-primary truncate">{user.displayName || 'User'}</p>
                                <p className="text-[11px] text-text-muted truncate">{user.email}</p>
                              </div>
                              <div className={`w-2 h-2 rounded-full ${syncError ? 'bg-coral' : 'bg-sage'}`} />
                            </div>
                            <div className="flex gap-2">
                              <button 
                                onClick={syncNow} 
                                disabled={isSyncing} 
                                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs bg-sage/10 text-sage border border-sage/20 hover:bg-sage/15 active:scale-95 transition-all disabled:opacity-50 font-semibold"
                              >
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
                  </motion.section>
                )}

                {/* Backup & Restore */}
                <motion.section variants={itemVariants}>
                  <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-border)]">
                      <div className="flex items-center gap-3">
                        <div className="w-[2px] h-4 rounded-full bg-golden" />
                        <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">The Vault</span>
                      </div>
                      <span className="text-[10px] text-text-muted font-mono">{calculateStorageSize()} KB</span>
                    </div>
                    <div className="p-4 space-y-3">
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
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/25 rounded-lg p-3">
                            <p className="text-xs text-[var(--color-accent)] mb-2">Restore from {new Date(pendingImportData.exportDate).toLocaleDateString()}?</p>
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
                </motion.section>

                {/* Appearance */}
                <motion.section variants={itemVariants}>
                  <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--color-border)]">
                      <div className="w-[2px] h-4 rounded-full bg-lavender" />
                      <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">The Canvas</span>
                    </div>
                    <div className="p-4 flex gap-2">
                      {([{ value: 'dark' as const, label: 'Nocturne' }, { value: 'light' as const, label: 'Diurnal' }, { value: 'system' as const, label: 'Auto' }]).map((opt) => (
                        <button 
                          key={opt.value} 
                          onClick={() => updateSettings({ theme: opt.value })} 
                          className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-95 ${
                            settings.theme === opt.value 
                              ? 'bg-[var(--color-accent)] text-[var(--color-bg-base)]' 
                              : 'bg-[var(--color-bg-surface)] text-text-muted hover:text-text-primary'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Learning */}
                <motion.section variants={itemVariants}>
                  <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--color-border)]">
                      <div className="w-[2px] h-4 rounded-full bg-sage" />
                      <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">The Method</span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-text-primary">Express Mode</p>
                          <p className="text-[11px] text-text-muted mt-0.5">Shorter lessons (2-5 min)</p>
                        </div>
                        <button 
                          onClick={() => updateSettings({ microLearningMode: !settings.microLearningMode })} 
                          className={`relative shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.microLearningMode ? 'bg-sage' : 'bg-[var(--color-bg-surface)]'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                            settings.microLearningMode ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Notifications */}
                <motion.section variants={itemVariants}>
                  <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--color-border)]">
                      <div className="w-[2px] h-4 rounded-full bg-coral" />
                      <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.25em]">The Bell</span>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-text-primary">Daily Streak Reminder</p>
                          <p className="text-[11px] text-text-muted mt-0.5">Keep your streak alive</p>
                        </div>
                        <button 
                          onClick={() => toggleNotifications(!notificationSchedule.enabled)} 
                          className={`relative shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationSchedule.enabled ? 'bg-sage' : 'bg-[var(--color-bg-surface)]'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                            notificationSchedule.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      {notificationSchedule.enabled && (
                        <div className="border-t border-[var(--color-border)] pt-4">
                          <p className="text-[11px] text-text-muted mb-2">Reminder time</p>
                          <input 
                            type="time" 
                            value={notificationSchedule.scheduledTime} 
                            onChange={(e) => setNotificationTime(e.target.value)} 
                            className="w-full px-3 py-2 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-text-primary text-sm focus:outline-none focus:border-sage/50 transition-colors" 
                          />
                          <p className="text-[10px] text-text-muted mt-2">{notificationSchedule.timezone}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.section>

                {/* Danger Zone */}
                <motion.section variants={itemVariants}>
                  <div className="rounded-xl border border-coral/20 bg-coral/[0.03] overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-coral/10">
                      <div className="w-[2px] h-4 rounded-full bg-coral" />
                      <span className="text-[10px] font-bold text-coral uppercase tracking-[0.25em]">The Abyss</span>
                    </div>
                    <div className="p-4">
                      <AnimatePresence>
                        {showResetConfirm ? (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                            <p className="text-xs text-coral mb-3">All progress permanently deleted. Are you sure?</p>
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
                </motion.section>

                {/* Colophon */}
                <motion.section variants={itemVariants} className="flex items-center justify-between px-1 pt-2">
                  <span className="text-[10px] font-mono text-text-muted">v{APP_VERSION}</span>
                  <div className="flex gap-3">
                    <button onClick={handleHardRefresh} disabled={isRefreshing} className="text-[10px] text-text-muted hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                      <RotateCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />{isRefreshing ? 'Updating...' : 'Update'}
                    </button>
                    <Link to="/changelog" className="text-[10px] text-text-muted hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />Changelog
                    </Link>
                  </div>
                </motion.section>

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
            className="fixed inset-0 z-40 bg-[var(--color-bg-base)] overflow-y-auto"
          >
            <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 bg-[var(--color-bg-base)]/90 backdrop-blur-sm border-b border-[var(--color-border)]">
              <button
                onClick={() => setShowReviewSession(false)}
                className="flex items-center gap-2 text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to Codex
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
              className="w-full max-w-md rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-5 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-text-primary">Share Achievement</h2>
                <button onClick={() => setShareableBadge(null)} className="w-8 h-8 rounded-lg bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-overlay)] flex items-center justify-center transition-colors">
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
