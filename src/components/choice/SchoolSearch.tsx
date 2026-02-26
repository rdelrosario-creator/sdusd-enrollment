'use client';

import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SchoolSearchProps {
  query: string;
  onQueryChange: (q: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { value: 'all', label: 'All' },
  { value: 'Magnet', label: 'Magnet' },
  { value: 'STEM', label: 'STEM' },
  { value: 'IB', label: 'IB' },
  { value: 'Arts', label: 'Arts' },
  { value: 'Language Immersion', label: 'Language' },
  { value: 'STEAM', label: 'STEAM' },
];

export function SchoolSearch({ query, onQueryChange, activeFilter, onFilterChange }: SchoolSearchProps) {
  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sdusd-gray" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search schools by name..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-sdusd-blue focus:border-transparent placeholder:text-gray-400 transition-colors"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={cn(
              'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
              activeFilter === filter.value
                ? 'bg-sdusd-purple text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
