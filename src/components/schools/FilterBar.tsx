'use client';

import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedLevels: string[];
  onLevelToggle: (level: string) => void;
  selectedPrograms: string[];
  onProgramToggle: (program: string) => void;
  statusFilter: string;
  onStatusChange: (status: string) => void;
  onClear: () => void;
  hasFilters: boolean;
}

const levels = ['Elementary', 'K-8', 'Middle', 'High'];
const programs = ['Magnet', 'STEM', 'STEAM', 'IB', 'Arts', 'Language Immersion', 'Academy'];
const statuses = ['All', 'Open', 'Waitlist', 'Closed'];

export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedLevels,
  onLevelToggle,
  selectedPrograms,
  onProgramToggle,
  statusFilter,
  onStatusChange,
  onClear,
  hasFilters,
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sdusd-gray" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by school name..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-sdusd-blue focus:border-transparent placeholder:text-gray-400 transition-colors"
        />
      </div>

      {/* School Level */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">School Level</p>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => onLevelToggle(level)}
              className={cn(
                'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                selectedLevels.includes(level)
                  ? 'bg-sdusd-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Program Type */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Program Type</p>
        <div className="flex flex-wrap gap-2">
          {programs.map((program) => (
            <button
              key={program}
              onClick={() => onProgramToggle(program)}
              className={cn(
                'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                selectedPrograms.includes(program)
                  ? 'bg-sdusd-purple text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {program}
            </button>
          ))}
        </div>
      </div>

      {/* Enrollment Status */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Enrollment Status</p>
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={cn(
                'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                statusFilter === status
                  ? 'bg-sdusd-green text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={onClear}
          className="flex items-center gap-1 text-sm text-sdusd-red hover:text-red-700 transition-colors"
        >
          <X className="h-3.5 w-3.5" /> Clear all filters
        </button>
      )}
    </div>
  );
}
