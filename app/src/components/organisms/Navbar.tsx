import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  Flame,
  RotateCcw,
  User,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useAuth } from '@/hooks';
import { UserAvatar, GoogleSignInButton } from '@/components/molecules';
import { PolymindLogo } from '@/components/brand';
import { SearchModal } from '@/components/organisms/SearchModal';

const navItems = [
  { id: 'dashboard', path: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'pathway', path: '/pathway', label: 'Library', icon: BookOpen },
  { id: 'review', path: '/review', label: 'Revisit', icon: RotateCcw },
  { id: 'profile', path: '/profile', label: 'Profile', icon: User },
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
            >
              <PolymindLogo size="sm" variant="simple" />
            </motion.div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="polymind-brand-text font-display font-bold tracking-wider text-lg">
                POLYMIND
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            </div>
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

          {/* Search + XP & Streak */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            <SearchModal />

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

// Mobile Bottom Navigation — mirrors desktop 4-tab structure
const mobileNavItems = [
  { id: 'dashboard', path: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'pathway', path: '/pathway', label: 'Library', icon: BookOpen },
  { id: 'review', path: '/review', label: 'Revisit', icon: RotateCcw },
  { id: 'profile', path: '/profile', label: 'Profile', icon: User },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      {/* Blur background */}
      <div className="absolute inset-0 bg-base/95 backdrop-blur-xl border-t border-white/[0.08]" />

      {/* Nav content - taller for easier tapping */}
      <div className="relative flex justify-around items-center h-20 px-1">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(`${item.path}/`);

          return (
            <Link
              key={item.id}
              to={item.path}
              className="relative flex flex-col items-center justify-center py-2 px-4 min-w-[60px] active:scale-95 transition-transform"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`
                  flex flex-col items-center justify-center gap-1.5
                  transition-colors duration-200
                  ${isActive ? 'text-sunrise' : 'text-text-muted'}
                `}
              >
                <div className="relative">
                  <Icon className={`w-6 h-6 ${isActive ? '' : 'opacity-60'}`} />
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-glow"
                      className="absolute -inset-3 bg-sunrise/20 rounded-full blur-lg"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                {item.label && (
                  <span
                    className={`
                      text-xs font-medium
                      ${isActive ? 'text-sunrise' : 'text-text-muted opacity-60'}
                    `}
                  >
                    {item.label}
                  </span>
                )}
              </motion.div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-sunrise to-golden rounded-full"
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
