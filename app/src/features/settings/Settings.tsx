import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  User,
  Trash2,
  Shield,
  HardDrive,
  RefreshCw,
  Cloud,
  CloudOff,
  LogOut,
  Settings as SettingsIcon,
  Info,
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';
import { useAuth } from '@/hooks';
import { GoogleSignInButton } from '@/components/molecules';
import { ModuleLayout, Section } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Button } from '@/components/atoms';

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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export function Settings() {
  const [exportStatus, setExportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error' | 'confirm'>('idle');
  const [importError, setImportError] = useState<string | null>(null);
  const [pendingImportData, setPendingImportData] = useState<ExportData | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Store data for display
  const profile = useUserStore((s) => s.profile);
  const userProgress = useProgressStore((s) => s.userProgress);
  const resetUser = useUserStore((s) => s.resetUser);
  const resetProgress = useProgressStore((s) => s.resetProgress);

  // Auth state
  const { user, signOut, isSyncing, syncNow, lastSyncAt, syncError, isConfigured } = useAuth();

  // Format last sync time
  const formatLastSync = () => {
    if (!lastSyncAt) return 'Never synced';
    const now = new Date();
    const diff = now.getTime() - lastSyncAt.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    return lastSyncAt.toLocaleDateString();
  };

  // Calculate storage usage
  const calculateStorageSize = () => {
    let totalSize = 0;
    Object.values(STORAGE_KEYS).forEach((key) => {
      const data = localStorage.getItem(key);
      if (data) {
        totalSize += new Blob([data]).size;
      }
    });
    return (totalSize / 1024).toFixed(2);
  };

  // Export all data
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
    } catch (error) {
      console.error('Export failed:', error);
      setExportStatus('error');
      setTimeout(() => setExportStatus('idle'), 3000);
    }
  };

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string) as ExportData;
        if (!data.version || !data.stores) {
          throw new Error('Invalid backup file format');
        }
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

  // Confirm import
  const confirmImport = () => {
    if (!pendingImportData) return;
    try {
      if (pendingImportData.stores.user) {
        localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(pendingImportData.stores.user));
      }
      if (pendingImportData.stores.progress) {
        localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(pendingImportData.stores.progress));
      }
      if (pendingImportData.stores.habits) {
        localStorage.setItem(STORAGE_KEYS.habits, JSON.stringify(pendingImportData.stores.habits));
      }
      if (pendingImportData.stores.spacedRepetition) {
        localStorage.setItem(STORAGE_KEYS.spacedRepetition, JSON.stringify(pendingImportData.stores.spacedRepetition));
      }
      setImportStatus('success');
      setPendingImportData(null);
      setTimeout(() => window.location.reload(), 1500);
    } catch (error) {
      console.error('Import failed:', error);
      setImportError('Failed to restore data');
      setImportStatus('error');
    }
  };

  const cancelImport = () => {
    setPendingImportData(null);
    setImportStatus('idle');
    setImportError(null);
  };

  // Reset all data
  const handleReset = () => {
    resetUser();
    resetProgress();
    Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
    localStorage.removeItem('gyanmarg-last-reset-date');
    setShowResetConfirm(false);
    window.location.reload();
  };

  return (
    <ModuleLayout
      title="Settings"
      subtitle="Manage your account and data"
      icon={<SettingsIcon className="w-5 h-5" />}
      headerGradient="sunset"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Profile Card */}
        <motion.div variants={itemVariants}>
          <GlassCard>
            <div className="flex items-center gap-4 mb-4">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'User'}
                  className="w-14 h-14 rounded-xl border-2 border-golden/30 shadow-golden"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-golden/20 to-sunrise/20 border border-golden/30 flex items-center justify-center">
                  <User className="w-7 h-7 text-golden" />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-lg font-display font-semibold text-text-primary">
                  {profile?.name || user?.displayName || 'Learner'}
                </h2>
                <p className="text-sm text-text-secondary">
                  Level {userProgress.level} • {userProgress.xp.toLocaleString()} XP
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-light rounded-xl p-3 border border-white/10">
                <p className="text-[10px] text-text-muted uppercase tracking-wide">Lessons</p>
                <p className="text-xl font-display font-bold text-sage">{userProgress.lessonsCompleted.length}</p>
              </div>
              <div className="glass-light rounded-xl p-3 border border-white/10">
                <p className="text-[10px] text-text-muted uppercase tracking-wide">Streak</p>
                <p className="text-xl font-display font-bold text-coral">{userProgress.currentStreak} days</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Cloud Sync Section */}
        {isConfigured && (
          <Section title="Cloud Sync" subtitle="Sync across devices">
            <motion.div variants={itemVariants}>
              <GlassCard>
                {user ? (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="" className="w-10 h-10 rounded-lg" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-golden/20 flex items-center justify-center">
                          <User className="w-5 h-5 text-golden" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-text-primary">{user.displayName || 'User'}</p>
                        <p className="text-xs text-text-muted">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 px-3 glass-light rounded-lg border border-white/10 mb-4">
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
                          {isSyncing ? 'Syncing...' : `Last sync: ${formatLastSync()}`}
                        </span>
                      </div>
                      <button onClick={syncNow} disabled={isSyncing} className="text-xs text-golden hover:text-golden/80 disabled:opacity-50">
                        Sync now
                      </button>
                    </div>
                    {syncError && <p className="text-xs text-coral mb-4">{syncError}</p>}
                    <Button variant="glass" onClick={signOut} className="gap-2">
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-text-secondary mb-4">
                      Sign in with Google to sync your progress across devices.
                    </p>
                    <GoogleSignInButton variant="primary" size="md" label="Sign in with Google" />
                  </>
                )}
              </GlassCard>
            </motion.div>
          </Section>
        )}

        {/* Data Management */}
        <Section title="Data Management" subtitle="Backup and restore">
          <motion.div variants={itemVariants}>
            <GlassCard>
              {/* Storage Info */}
              <div className="flex items-center justify-between py-3 px-3 glass-light rounded-lg border border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-lavender" />
                  <span className="text-sm text-text-secondary">Local Storage</span>
                </div>
                <span className="text-sm font-medium text-text-primary">{calculateStorageSize()} KB</span>
              </div>

              {/* Export */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-sage" />
                  <h3 className="text-sm font-medium text-text-primary">Backup Progress</h3>
                </div>
                <p className="text-xs text-text-muted mb-3">
                  Download all your data to restore on another device.
                </p>
                <Button
                  variant={exportStatus === 'success' ? 'primary' : 'glass'}
                  onClick={handleExport}
                  disabled={exportStatus !== 'idle'}
                  className="gap-2"
                >
                  {exportStatus === 'success' ? <CheckCircle className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                  {exportStatus === 'success' ? 'Downloaded!' : 'Export Data'}
                </Button>
              </div>

              {/* Import */}
              <div className="mb-6 pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCw className="w-4 h-4 text-sky" />
                  <h3 className="text-sm font-medium text-text-primary">Restore Backup</h3>
                </div>
                <p className="text-xs text-text-muted mb-3">
                  Import a previously exported backup file.
                </p>
                <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept=".json" className="hidden" />

                <AnimatePresence mode="wait">
                  {importStatus === 'confirm' && pendingImportData ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-golden/10 border border-golden/30 rounded-xl p-4 mb-3"
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-golden mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-golden">Confirm Import</p>
                          <p className="text-xs text-text-muted mt-1">
                            Backup from: {new Date(pendingImportData.exportDate).toLocaleString()}
                          </p>
                          <div className="flex gap-2 mt-3">
                            <Button variant="primary" size="sm" onClick={confirmImport}>Confirm</Button>
                            <Button variant="glass" size="sm" onClick={cancelImport}>Cancel</Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : importStatus === 'success' ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-sage/10 border border-sage/30 rounded-xl p-4 mb-3">
                      <div className="flex items-center gap-2 text-sage">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Data restored! Reloading...</span>
                      </div>
                    </motion.div>
                  ) : importStatus === 'error' ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-coral/10 border border-coral/30 rounded-xl p-4 mb-3">
                      <div className="flex items-center gap-2 text-coral">
                        <AlertTriangle className="w-5 h-5" />
                        <span className="text-sm font-medium">{importError || 'Import failed'}</span>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <Button
                  variant="glass"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={importStatus === 'confirm' || importStatus === 'success'}
                  className="gap-2"
                >
                  <Upload className="w-4 h-4" />
                  Import Data
                </Button>
              </div>

              {/* Danger Zone */}
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-coral" />
                  <h3 className="text-sm font-medium text-coral">Danger Zone</h3>
                </div>
                <p className="text-xs text-text-muted mb-3">
                  Permanently delete all your data. This cannot be undone.
                </p>

                <AnimatePresence>
                  {showResetConfirm ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-coral/10 border border-coral/30 rounded-xl p-4 mb-3"
                    >
                      <p className="text-sm text-coral mb-3">
                        Are you sure? All progress will be permanently deleted.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="primary" size="sm" onClick={handleReset} className="bg-coral hover:bg-coral/80">
                          Delete Everything
                        </Button>
                        <Button variant="glass" size="sm" onClick={() => setShowResetConfirm(false)}>Cancel</Button>
                      </div>
                    </motion.div>
                  ) : (
                    <Button variant="glass" onClick={() => setShowResetConfirm(true)} className="gap-2 text-coral border-coral/30 hover:bg-coral/10">
                      <Trash2 className="w-4 h-4" />
                      Reset All Data
                    </Button>
                  )}
                </AnimatePresence>
              </div>
            </GlassCard>
          </motion.div>
        </Section>

        {/* About */}
        <Section title="About">
          <motion.div variants={itemVariants}>
            <GlassCard>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sunrise to-golden flex items-center justify-center">
                  <Info className="w-5 h-5 text-base" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary">Polymind</h3>
                  <p className="text-xs text-text-muted">Your mind, unlimited.</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Build your Polymind using spaced repetition, active recall, and cross-domain connections
                to retain knowledge from 1000+ bestselling authors.
              </p>
              <p className="text-xs text-text-muted">Version 1.0.0</p>
            </GlassCard>
          </motion.div>
        </Section>
      </motion.div>
    </ModuleLayout>
  );
}

export default Settings;
