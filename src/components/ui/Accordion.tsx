'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn('divide-y divide-gray-200 border-t border-b border-gray-200', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between py-4 px-1 text-left hover:text-sdusd-blue transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium pr-4">{item.question}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-sdusd-gray shrink-0 transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
              )}
            >
              <p className="text-sdusd-gray px-1 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
