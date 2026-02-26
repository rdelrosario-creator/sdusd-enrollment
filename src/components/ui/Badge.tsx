import { cn } from '@/lib/utils';

type BadgeVariant = 'blue' | 'red' | 'orange' | 'green' | 'purple' | 'gray';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue: 'bg-sdusd-blue-light text-sdusd-blue',
  red: 'bg-sdusd-red-light text-sdusd-red',
  orange: 'bg-sdusd-orange-light text-orange-700',
  green: 'bg-sdusd-green-light text-green-800',
  purple: 'bg-sdusd-purple-light text-sdusd-purple',
  gray: 'bg-gray-100 text-sdusd-gray',
};

export function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: 'Open' | 'Closed' | 'Waitlist' }) {
  const variant: BadgeVariant =
    status === 'Open' ? 'green' : status === 'Waitlist' ? 'orange' : 'red';
  return <Badge variant={variant}>{status}</Badge>;
}
