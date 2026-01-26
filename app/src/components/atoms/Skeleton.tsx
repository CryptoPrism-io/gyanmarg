interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  lines = 1,
}: SkeletonProps) {
  const baseClasses = 'relative overflow-hidden bg-white/[0.03] rounded';

  // Shimmer animation overlay
  const shimmerClasses = `
    after:absolute after:inset-0
    after:bg-gradient-to-r after:from-transparent after:via-white/[0.05] after:to-transparent
    after:animate-shimmer
  `;

  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  };

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${baseClasses} ${shimmerClasses} ${variantClasses[variant]}`}
            style={{
              ...style,
              width: i === lines - 1 ? '75%' : style.width || '100%',
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${shimmerClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

// Preset skeleton components
export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`glass rounded-2xl p-6 border border-white/10 ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1">
          <Skeleton className="mb-2" width="60%" />
          <Skeleton width="40%" />
        </div>
      </div>
      <Skeleton lines={3} />
    </div>
  );
}

export function SkeletonList({
  count = 3,
  className = '',
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 glass-light p-3 rounded-xl border border-white/10">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1">
            <Skeleton className="mb-1" width="70%" />
            <Skeleton width="50%" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Stats skeleton for dashboard-like layouts
export function SkeletonStats({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="glass-light rounded-xl p-4 border border-white/10">
          <Skeleton width={40} height={40} variant="rectangular" className="mb-3" />
          <Skeleton width="60%" height={24} className="mb-2" />
          <Skeleton width="40%" height={14} />
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
