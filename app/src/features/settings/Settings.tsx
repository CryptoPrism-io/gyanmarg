import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  User,
  Database,
  Trash2,
  Shield,
  HardDrive,
  RefreshCw,
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';

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

  // Calculate storage usage
  const calculateStorageSize = () => {
    let totalSize = 0;
    Object.values(STORAGE_KEYS).forEach((key) => {
      const data = localStorage.getItem(key);
      if (data) {
        totalSize += new Blob([data]).size;
      }
    });
    return (totalSize / 1024).toFixed(2); // KB
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

        // Validate structure
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

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Confirm import
  const confirmImport = () => {
    if (!pendingImportData) return;

    try {
      // Restore each store
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

      // Reload to apply changes
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error('Import failed:', error);
      setImportError('Failed to restore data');
      setImportStatus('error');
    }
  };

  // Cancel import
  const cancelImport = () => {
    setPendingImportData(null);
    setImportStatus('idle');
    setImportError(null);
  };

  // Reset all data
  const handleReset = () => {
    resetUser();
    resetProgress();
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
    localStorage.removeItem('gyanmarg-last-reset-date');
    setShowResetConfirm(false);
    window.location.reload();
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account and data</p>
      </div>

      {/* Profile Card */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
            <User className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">{profile?.name || 'Learner'}</h2>
            <p className="text-sm text-gray-400">
              Level {userProgress.level} • {userProgress.xp.toLocaleString()} XP
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-[#0A0A0B] rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase">Lessons Completed</p>
            <p className="text-xl font-bold text-white">{userProgress.lessonsCompleted.length}</p>
          </div>
          <div className="bg-[#0A0A0B] rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase">Current Streak</p>
            <p className="text-xl font-bold text-amber-500">{userProgress.currentStreak} days</p>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Database className="w-5 h-5 text-blue-400" />
          <h2 className="text-lg font-semibold text-white">Data Management</h2>
        </div>

        {/* Storage Info */}
        <div className="bg-[#0A0A0B] rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-400">Local Storage Used</span>
            </div>
            <span className="text-sm font-medium text-white">{calculateStorageSize()} KB</span>
          </div>
        </div>

        {/* Export Section */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            Backup Your Progress
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Download all your data including progress, habits, and flashcard stats.
            Use this to restore on another device or keep a backup.
          </p>
          <button
            onClick={handleExport}
            disabled={exportStatus !== 'idle'}
            className="flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700
                     text-white rounded-lg transition-colors disabled:opacity-50"
          >
            {exportStatus === 'success' ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Downloaded!
              </>
            ) : exportStatus === 'error' ? (
              <>
                <AlertTriangle className="w-4 h-4" />
                Export Failed
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Export Data
              </>
            )}
          </button>
        </div>

        {/* Import Section */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-blue-400" />
            Restore From Backup
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Import a previously exported backup file. This will replace all current data.
          </p>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".json"
            className="hidden"
          />

          <AnimatePresence mode="wait">
            {importStatus === 'confirm' && pendingImportData ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-3"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-amber-500">Confirm Import</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Backup from: {new Date(pendingImportData.exportDate).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      This will replace all your current progress. This action cannot be undone.
                    </p>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={confirmImport}
                        className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-lg transition-colors"
                      >
                        Confirm Import
                      </button>
                      <button
                        onClick={cancelImport}
                        className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : importStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-3"
              >
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Data restored! Reloading...</span>
                </div>
              </motion.div>
            ) : importStatus === 'error' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-3"
              >
                <div className="flex items-center gap-2 text-red-500">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="text-sm font-medium">{importError || 'Import failed'}</span>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={importStatus === 'confirm' || importStatus === 'success'}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700
                     text-white rounded-lg transition-colors disabled:opacity-50"
          >
            <Upload className="w-4 h-4" />
            Import Data
          </button>
        </div>

        {/* Danger Zone */}
        <div className="border-t border-gray-800 pt-6">
          <h3 className="text-sm font-medium text-red-400 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Danger Zone
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Permanently delete all your data. This cannot be undone.
          </p>

          <AnimatePresence>
            {showResetConfirm ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-3"
              >
                <p className="text-sm text-red-400 mb-3">
                  Are you sure? All your progress, habits, and review history will be permanently deleted.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleReset}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                  >
                    Yes, Delete Everything
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            ) : (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-red-600/20 hover:bg-red-600/30
                         text-red-400 border border-red-600/30 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Reset All Data
              </button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* About */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-2">About Gyanmarg</h2>
        <p className="text-sm text-gray-400 mb-4">
          ज्ञानमार्ग - "Path of Knowledge"
        </p>
        <p className="text-xs text-gray-500">
          A gamified learning platform using spaced repetition, active recall, and interleaving
          to help you master knowledge from 45+ ebooks.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-600">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
