import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  Zap,
  Flame,
  Sparkles,
  Settings,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useAuth } from '@/hooks';
import { UserAvatar, GoogleSignInButton } from '@/components/molecules';

const navItems = [
  { id: 'dashboard', path: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'pathway', path: '/pathway', label: 'Learn', icon: BookOpen },
  { id: 'review', path: '/review', label: 'Review', icon: Brain },
  { id: 'challenges', path: '/challenges', label: 'Challenges', icon: Zap },
  { id: 'settings', path: '/settings', label: 'Settings', icon: Settings },
];

export function Navbar() {
  const location = useLocation();
  const userProgress = useProgressStore((state) => state.userProgress);
  const { user, isConfigured } = useAuth();

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-12 sm:h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 sm:gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-sunrise to-golden flex items-center justify-center shadow-sunrise"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-base" />
            </motion.div>
            <span className="font-display font-semibold text-text-primary hidden sm:block text-lg">
              Gyanmarg
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(`${item.path}/`);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  title={item.label}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${isActive
                        ? 'bg-sunrise/10 text-sunrise'
                        : 'text-text-muted hover:text-text-primary hover:bg-glass-light'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[1px] left-2 right-2 h-0.5 bg-gradient-to-r from-sunrise to-golden rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* XP & Streak Display */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak */}
            {(userProgress?.currentStreak ?? 0) > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-coral/10 border border-coral/20"
              >
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-coral" />
                <span className="text-xs sm:text-sm font-semibold text-coral">
                  {userProgress.currentStreak}
                </span>
              </motion.div>
            )}

            {/* XP Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-golden/10 border border-golden/20 shadow-[0_0_12px_rgba(247,201,72,0.15)]"
            >
              <span className="text-xs sm:text-sm font-semibold text-golden">
                {(userProgress?.xp ?? 0).toLocaleString()}
              </span>
              <span className="text-[10px] sm:text-xs text-golden/70 font-medium">XP</span>
            </motion.div>

            {/* User Avatar or Sign In Button */}
            {isConfigured && (
              user ? (
                <UserAvatar size="sm" />
              ) : (
                <GoogleSignInButton
                  variant="outline"
                  size="sm"
                  iconOnly
                  className="hidden sm:flex"
                />
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Mobile Bottom Navigation
const mobileNavItems = [
  { id: 'dashboard', path: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'pathway', path: '/pathway', label: 'Learn', icon: BookOpen },
  { id: 'review', path: '/review', label: 'Review', icon: Brain },
  { id: 'challenges', path: '/challenges', label: 'Goals', icon: Zap },
  { id: 'settings', path: '/settings', label: 'Settings', icon: Settings },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      {/* Blur background */}
      <div className="absolute inset-0 bg-base/90 backdrop-blur-xl border-t border-white/[0.06]" />

      {/* Nav content */}
      <div className="relative flex justify-around items-center h-16 px-2">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(`${item.path}/`);

          return (
            <Link
              key={item.id}
              to={item.path}
              className="relative flex flex-col items-center justify-center py-1.5 px-3"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`
                  flex flex-col items-center justify-center gap-1
                  transition-colors duration-200
                  ${isActive ? 'text-sunrise' : 'text-text-muted'}
                `}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? '' : 'opacity-70'}`} />
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-glow"
                      className="absolute -inset-2 bg-sunrise/20 rounded-full blur-md"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <span
                  className={`
                    text-[10px] font-medium
                    ${isActive ? 'text-sunrise' : 'text-text-muted opacity-70'}
                  `}
                >
                  {item.label}
                </span>
              </motion.div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-sunrise to-golden rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
