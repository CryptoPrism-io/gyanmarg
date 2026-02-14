import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';
import type { StarredCard } from '@/store/progressStore';
import { useAuth } from '@/hooks';
import { GoogleSignInButton, BadgeCard, GlassCard, RichMarkdown } from '@/components/molecules';
import { ModuleLayout, Section } from '@/components/templates';
import { Button, ProgressBar } from '@/components/atoms';
import { BADGES } from '@/data/badges';
import { achievements } from '@/data/achievements';
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
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

// --- Sub-sections ---

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

// --- Tabs ---
type ProfileTab = 'overview' | 'badges' | 'saved' | 'data';

export function Profile() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview');

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
  const resetUser = useUserStore((s) => s.resetUser);
  const resetProgress = useProgressStore((s) => s.resetProgress);

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

  // Badge filtering
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  // Saved cards filtering
  const [filterModule, setFilterModule] = useState<string | null>(null);
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

  // Data management handlers
  const formatLastSync = () => {
    if (!lastSyncAt) return 'Never synced';
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

  const tabs: { id: ProfileTab; label: string; count?: number }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'badges', label: 'Badges', count: unlockedBadges.length },
    { id: 'saved', label: 'Saved', count: starredCards.length },
    { id: 'data', label: 'Data' },
  ];

  return (
    <ModuleLayout
      title={profile?.name || user?.displayName || 'Your Profile'}
      subtitle={`Level ${userProgress.level} \u2022 ${userProgress.xp.toLocaleString()} XP`}
      icon={<User className="w-5 h-5" />}
      headerGradient="sunset"
    >
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
        {/* Profile Hero */}
        <motion.div variants={itemVariants}>
          <GlassCard className="!p-4">
            <div className="flex items-center gap-4 mb-4">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="" className="w-14 h-14 rounded-xl border-2 border-golden/30" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-golden/20 to-sunrise/20 border border-golden/30 flex items-center justify-center">
                  <User className="w-7 h-7 text-golden" />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-lg font-display font-semibold text-text-primary">
                  {profile?.name || user?.displayName || 'Learner'}
                </h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-xs text-coral">
                    <Flame className="w-3.5 h-3.5" />
                    {consecutiveLogins || userProgress.currentStreak} day streak
                  </span>
                  <span className="flex items-center gap-1 text-xs text-sage">
                    <BookOpen className="w-3.5 h-3.5" />
                    {userProgress.lessonsCompleted.length} lessons
                  </span>
                </div>
              </div>
            </div>

            {/* Level progress */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-text-muted">Level {userProgress.level}</span>
              <div className="flex-1">
                <ProgressBar value={getLevelProgress()} variant="xp" size="sm" animated />
              </div>
              <span className="text-xs text-text-muted">Level {userProgress.level + 1}</span>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[
                { icon: <Trophy className="w-3.5 h-3.5" />, value: userProgress.xp.toLocaleString(), label: 'XP', color: 'text-golden' },
                { icon: <Flame className="w-3.5 h-3.5" />, value: longestStreak || userProgress.currentStreak, label: 'Best', color: 'text-coral' },
                { icon: <Star className="w-3.5 h-3.5" />, value: unlockedBadges.length, label: 'Badges', color: 'text-sunrise' },
                { icon: <Target className="w-3.5 h-3.5" />, value: unlockedAchievements.length, label: 'Achieve', color: 'text-lavender' },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-light rounded-xl p-2 border border-white/10">
                  <div className={`${stat.color} flex justify-center mb-1`}>{stat.icon}</div>
                  <p className="text-sm font-display font-bold text-text-primary">{stat.value}</p>
                  <p className="text-[9px] text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="flex gap-1 p-1 bg-elevated/50 rounded-xl border border-white/[0.06]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all
                ${activeTab === tab.id
                  ? 'bg-sunrise/15 text-sunrise border border-sunrise/20'
                  : 'text-text-muted hover:text-text-secondary hover:bg-white/5'
                }
              `}
            >
              {tab.label}
              {tab.count !== undefined && tab.count > 0 && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-sunrise/20 text-sunrise' : 'bg-white/10 text-text-muted'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
              {/* Achievements */}
              <Section title="Achievements" subtitle={`${unlockedAchievements.length} of ${achievements.length} unlocked`}>
                <div className="space-y-2">
                  {achievements.map((ach) => {
                    const unlocked = unlockedAchievements.includes(ach.id);
                    return (
                      <div
                        key={ach.id}
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                          unlocked
                            ? 'bg-golden/5 border-golden/20'
                            : 'bg-white/[0.02] border-white/[0.06] opacity-50'
                        }`}
                      >
                        <span className="text-2xl">{ach.icon}</span>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${unlocked ? 'text-text-primary' : 'text-text-muted'}`}>
                            {ach.name}
                          </p>
                          <p className="text-[11px] text-text-muted">{ach.description}</p>
                        </div>
                        <span className={`text-xs font-semibold ${unlocked ? 'text-golden' : 'text-text-muted'}`}>
                          +{ach.xpReward} XP
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Section>

              {/* Weekly Challenge shortcut */}
              <Link to="/challenges">
                <GlassCard className="!p-4 hover:bg-white/[0.04] transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center">
                        <Target className="w-5 h-5 text-lavender" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-primary">Weekly Challenge</p>
                        <p className="text-[11px] text-text-muted">Complete challenges for bonus XP</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-text-muted" />
                  </div>
                </GlassCard>
              </Link>

              {/* Cloud sync status */}
              {isConfigured && user && (
                <GlassCard className="!p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isSyncing ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                          <RefreshCw className="w-4 h-4 text-golden" />
                        </motion.div>
                      ) : syncError ? (
                        <CloudOff className="w-4 h-4 text-coral" />
                      ) : (
                        <Cloud className="w-4 h-4 text-sage" />
                      )}
                      <span className="text-xs text-text-secondary">
                        {isSyncing ? 'Syncing...' : `Synced: ${formatLastSync()}`}
                      </span>
                    </div>
                    <button onClick={syncNow} disabled={isSyncing} className="text-xs text-golden hover:text-golden/80 disabled:opacity-50">
                      Sync
                    </button>
                  </div>
                </GlassCard>
              )}
            </motion.div>
          )}

          {activeTab === 'badges' && (
            <motion.div key="badges" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {/* Filter Tabs */}
              <div className="flex gap-2 mb-4">
                {[
                  { key: 'all' as const, label: `All (${BADGES.length})`, activeClass: 'bg-golden/20 text-golden border-golden/30' },
                  { key: 'unlocked' as const, label: `Earned (${unlockedBadges.length})`, activeClass: 'bg-sage/20 text-sage border-sage/30' },
                  { key: 'locked' as const, label: `Locked (${BADGES.length - unlockedBadges.length})`, activeClass: 'bg-white/10 text-white border-white/20' },
                ].map(({ key, label, activeClass }) => (
                  <button
                    key={key}
                    onClick={() => setBadgeFilter(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                      badgeFilter === key ? activeClass : 'bg-surface/50 text-white/60 border-white/10 hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {BADGES.filter(badge => {
                  const isUnlocked = unlockedBadges.some(b => b.id === badge.id);
                  if (badgeFilter === 'unlocked') return isUnlocked;
                  if (badgeFilter === 'locked') return !isUnlocked;
                  return true;
                })
                .sort((a, b) => {
                  const aU = unlockedBadges.some(ub => ub.id === a.id);
                  const bU = unlockedBadges.some(ub => ub.id === b.id);
                  if (aU !== bU) return bU ? 1 : -1;
                  return a.requirement.value - b.requirement.value;
                })
                .map(badge => {
                  const unlocked = unlockedBadges.find(b => b.id === badge.id);
                  return (
                    <BadgeCard
                      key={badge.id}
                      badge={unlocked || badge}
                      unlocked={!!unlocked}
                      progress={!unlocked ? getBadgeProgress(badge.id) : undefined}
                      size="md"
                      showProgress={true}
                    />
                  );
                })}
              </div>

              {badgeFilter === 'unlocked' && unlockedBadges.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-white/40 mb-2">No badges earned yet</p>
                  <p className="text-sm text-white/30">Complete lessons and maintain streaks to earn badges!</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'saved' && (
            <motion.div key="saved" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {/* Module Filter */}
              {modulesWithCards.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                  <button
                    onClick={() => setFilterModule(null)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      !filterModule ? 'bg-golden/15 text-golden border-golden/25' : 'bg-white/[0.03] text-text-muted border-white/[0.08]'
                    }`}
                  >
                    All ({starredCards.length})
                  </button>
                  {modulesWithCards.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => setFilterModule(mod.id === filterModule ? null : mod.id)}
                      className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        filterModule === mod.id ? 'bg-golden/15 text-golden border-golden/25' : 'bg-white/[0.03] text-text-muted border-white/[0.08]'
                      }`}
                    >
                      {mod.title} ({starredCards.filter((c) => c.moduleId === mod.id).length})
                    </button>
                  ))}
                </div>
              )}

              {filteredCards.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="w-10 h-10 text-text-muted/40 mx-auto mb-3" />
                  <p className="text-sm text-text-muted">No saved cards yet. Star cards during lessons to save them here.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <AnimatePresence>
                    {filteredCards.map((card) => (
                      <SavedCardItem key={card.cardId} card={card} onUnstar={() => unstarCard(card.cardId)} />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'data' && (
            <motion.div key="data" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
              {/* Cloud Sync */}
              {isConfigured && (
                <GlassCard>
                  <h3 className="text-sm font-medium text-text-primary mb-3 flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-sage" />
                    Cloud Sync
                  </h3>
                  {user ? (
                    <>
                      <div className="flex items-center gap-3 mb-3">
                        {user.photoURL ? (
                          <img src={user.photoURL} alt="" className="w-8 h-8 rounded-lg" referrerPolicy="no-referrer" />
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-golden/20 flex items-center justify-center">
                            <User className="w-4 h-4 text-golden" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-xs font-medium text-text-primary">{user.displayName || 'User'}</p>
                          <p className="text-[11px] text-text-muted">{user.email}</p>
                        </div>
                      </div>
                      <Button variant="glass" size="sm" onClick={signOut} className="gap-2">
                        <LogOut className="w-3.5 h-3.5" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <GoogleSignInButton variant="primary" size="md" label="Sign in with Google" />
                  )}
                </GlassCard>
              )}

              {/* Backup & Restore */}
              <GlassCard>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-text-primary flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sage" />
                    Backup & Restore
                  </h3>
                  <span className="flex items-center gap-1.5 text-[11px] text-text-muted">
                    <HardDrive className="w-3 h-3" />
                    {calculateStorageSize()} KB
                  </span>
                </div>

                <div className="flex gap-2 mb-4">
                  <Button
                    variant={exportStatus === 'success' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={handleExport}
                    disabled={exportStatus !== 'idle'}
                    className="gap-2 flex-1"
                  >
                    {exportStatus === 'success' ? <CheckCircle className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                    {exportStatus === 'success' ? 'Done!' : 'Export'}
                  </Button>

                  <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept=".json" className="hidden" />
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={importStatus === 'confirm' || importStatus === 'success'}
                    className="gap-2 flex-1"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Import
                  </Button>
                </div>

                <AnimatePresence mode="wait">
                  {importStatus === 'confirm' && pendingImportData && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      className="bg-golden/10 border border-golden/30 rounded-xl p-3 mb-3"
                    >
                      <p className="text-xs text-golden mb-2">
                        Restore from {new Date(pendingImportData.exportDate).toLocaleDateString()}?
                      </p>
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
              </GlassCard>

              {/* Danger Zone */}
              <GlassCard>
                <h3 className="text-sm font-medium text-coral mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Danger Zone
                </h3>
                <p className="text-[11px] text-text-muted mb-3">Permanently delete all progress. Cannot be undone.</p>
                <AnimatePresence>
                  {showResetConfirm ? (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      className="bg-coral/10 border border-coral/30 rounded-xl p-3"
                    >
                      <p className="text-xs text-coral mb-3">Are you sure? All progress will be permanently deleted.</p>
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
              </GlassCard>

              {/* App Info */}
              <GlassCard className="!p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-golden" />
                    <span className="text-xs text-text-secondary">Polymind v{APP_VERSION}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="glass" size="sm" onClick={handleHardRefresh} disabled={isRefreshing} className="gap-1.5 text-[11px]">
                      <RotateCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
                      {isRefreshing ? 'Refreshing...' : 'Update'}
                    </Button>
                    <Link to="/changelog">
                      <Button variant="glass" size="sm" className="gap-1.5 text-[11px]">
                        <ExternalLink className="w-3 h-3" />
                        Changelog
                      </Button>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ModuleLayout>
  );
}

export default Profile;
