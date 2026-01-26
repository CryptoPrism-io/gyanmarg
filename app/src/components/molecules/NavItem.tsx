import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  badge?: number;
}

export function NavItem({ to, icon, label, badge }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <Link
      to={to}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        transition-all duration-200
        ${isActive
          ? 'bg-accent/10 text-accent'
          : 'text-text-secondary hover:text-text-primary hover:bg-elevated'
        }
      `}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className="ml-auto px-1.5 py-0.5 text-xs font-semibold bg-accent text-white rounded-full">
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </Link>
  );
}

// Mobile navigation item
export function MobileNavItem({ to, icon, label }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <Link
      to={to}
      className={`
        flex flex-col items-center justify-center py-2 px-3 rounded-xl
        transition-all duration-200 min-w-[56px]
        ${isActive ? 'text-accent' : 'text-muted hover:text-text-secondary'}
      `}
    >
      <span className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`}>
        {icon}
      </span>
      <span className={`text-[10px] mt-1 font-medium`}>{label}</span>
    </Link>
  );
}

export default NavItem;
