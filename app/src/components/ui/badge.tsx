import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sunrise focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-sunrise text-base hover:bg-sunrise/80',
        secondary:
          'border-transparent bg-surface text-text-secondary hover:bg-surface/80',
        destructive:
          'border-transparent bg-coral text-base hover:bg-coral/80',
        outline: 'border-white/20 text-text-secondary',
        success:
          'border-transparent bg-sage text-base hover:bg-sage/80',
        warning:
          'border-transparent bg-golden text-base hover:bg-golden/80',
        info:
          'border-transparent bg-lavender text-base hover:bg-lavender/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function ShadcnBadge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { ShadcnBadge, badgeVariants };
