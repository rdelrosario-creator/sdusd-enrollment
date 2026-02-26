'use client';

import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  description?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={cn(
          'flex items-start gap-3 cursor-pointer group',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-sdusd-blue focus:ring-sdusd-blue cursor-pointer accent-sdusd-blue"
          {...props}
        />
        <div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {label}
          </span>
          {description && (
            <p className="text-xs text-sdusd-gray mt-0.5">{description}</p>
          )}
        </div>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export { Checkbox };
