// User Avatar with Dropdown Menu
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Cloud, CloudOff, RefreshCw, User, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks';

interface UserAvatarProps {
  /** Size of the avatar */
  size?: 'sm' | 'md' | 'lg';
  /** Show dropdown on click */
  showDropdown?: boolean;
  /** Custom class name */
  className?: string;
}

export function UserAvatar({
  size = 'md',
  showDropdown = true,
  className = '',
}: UserAvatarProps) {
  const { user, signOut, isSyncing, syncNow, lastSyncAt, syncError } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  // Size classes
  const sizeClasses = {
    sm: { avatar: 'w-7 h-7', text: 'text-xs', icon: 'w-3 h-3' },
    md: { avatar: 'w-8 h-8', text: 'text-sm', icon: 'w-4 h-4' },
    lg: { avatar: 'w-10 h-10', text: 'text-base', icon: 'w-5 h-5' },
  };

  const handleSignOut = async () => {
    setIsOpen(false);
    await signOut();
  };

  const handleSync = async () => {
    await syncNow();
  };

  // Format last sync time
  const formatLastSync = () => {
    if (!lastSyncAt) return 'Never synced';
    const now = new Date();
    const diff = now.getTime() - lastSyncAt.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return lastSyncAt.toLocaleDateString();
  };

  // Get initials from name
  const getInitials = () => {
    if (user.displayName) {
      const names = user.displayName.split(' ');
      return names.map(n => n[0]).slice(0, 2).join('').toUpperCase();
    }
    return user.email?.[0]?.toUpperCase() || '?';
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Avatar Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => showDropdown && setIsOpen(!isOpen)}
        className={`
          flex items-center gap-1.5 rounded-full
          ${showDropdown ? 'cursor-pointer' : 'cursor-default'}
          focus:outline-none focus:ring-2 focus:ring-amber-500/50
        `}
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || 'User'}
            className={`${sizeClasses[size].avatar} rounded-full border-2 border-amber-500/30`}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className={`
              ${sizeClasses[size].avatar} rounded-full
              bg-amber-500/20 border-2 border-amber-500/30
              flex items-center justify-center
              text-amber-500 font-semibold ${sizeClasses[size].text}
            `}
          >
            {getInitials()}
          </div>
        )}
        {showDropdown && (
          <ChevronDown
            className={`
              ${sizeClasses[size].icon} text-gray-400
              transition-transform duration-200
              ${isOpen ? 'rotate-180' : ''}
            `}
          />
        )}
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-64 z-50"
          >
            <div className="bg-[#111113] border border-gray-800 rounded-xl shadow-xl overflow-hidden">
              {/* User Info Header */}
              <div className="px-4 py-3 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-10 h-10 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-amber-500" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {user.displayName || 'User'}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sync Status */}
              <div className="px-4 py-3 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isSyncing ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <RefreshCw className="w-4 h-4 text-amber-500" />
                      </motion.div>
                    ) : syncError ? (
                      <CloudOff className="w-4 h-4 text-red-400" />
                    ) : (
                      <Cloud className="w-4 h-4 text-green-400" />
                    )}
                    <span className="text-xs text-gray-400">
                      {isSyncing ? 'Syncing...' : syncError ? 'Sync error' : formatLastSync()}
                    </span>
                  </div>
                  <button
                    onClick={handleSync}
                    disabled={isSyncing}
                    className="text-xs text-amber-500 hover:text-amber-400 disabled:opacity-50"
                  >
                    Sync now
                  </button>
                </div>
                {syncError && (
                  <p className="text-xs text-red-400 mt-1 truncate">{syncError}</p>
                )}
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-2 flex items-center gap-3 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserAvatar;
