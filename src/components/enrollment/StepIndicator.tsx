import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  'Student Info',
  'Parent/Guardian',
  'Documents',
  'Review',
  'Confirmation',
];

interface StepIndicatorProps {
  currentStep: number;
  isSubmitted: boolean;
}

export function StepIndicator({ currentStep, isSubmitted }: StepIndicatorProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between min-w-[500px] px-2">
        {steps.map((label, index) => {
          const isCompleted = isSubmitted ? true : index < currentStep;
          const isActive = index === currentStep && !isSubmitted;

          return (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
                    isCompleted
                      ? 'bg-sdusd-green text-white'
                      : isActive
                      ? 'bg-sdusd-blue text-white ring-4 ring-sdusd-blue/20'
                      : 'bg-gray-200 text-gray-500'
                  )}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : index + 1}
                </div>
                <span
                  className={cn(
                    'text-xs mt-2 text-center whitespace-nowrap',
                    isActive ? 'text-sdusd-blue font-semibold' : 'text-sdusd-gray'
                  )}
                >
                  {label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-0.5 mx-2 mt-[-1.25rem] transition-colors duration-300',
                    isCompleted ? 'bg-sdusd-green' : 'bg-gray-200'
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
