'use client';

import { useState, useMemo } from 'react';
import { Building2 } from 'lucide-react';
import { schools } from '@/data/schools';
import { FilterBar } from '@/components/schools/FilterBar';
import { SchoolDirectoryCard } from '@/components/schools/SchoolDirectoryCard';

export default function SchoolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState('All');

  const hasFilters = searchQuery !== '' || selectedLevels.length > 0 || selectedPrograms.length > 0 || statusFilter !== 'All';

  const filteredSchools = useMemo(() => {
    return schools.filter((school) => {
      // Search
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!school.name.toLowerCase().includes(q) && !school.address.toLowerCase().includes(q)) {
          return false;
        }
      }

      // Level
      if (selectedLevels.length > 0 && !selectedLevels.includes(school.level)) {
        return false;
      }

      // Program
      if (selectedPrograms.length > 0) {
        const hasMatch = school.programTypes.some((t) => selectedPrograms.includes(t));
        if (!hasMatch) return false;
      }

      // Status
      if (statusFilter !== 'All' && school.enrollmentStatus !== statusFilter) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedLevels, selectedPrograms, statusFilter]);

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const toggleProgram = (program: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(program) ? prev.filter((p) => p !== program) : [...prev, program]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLevels([]);
    setSelectedPrograms([]);
    setStatusFilter('All');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sdusd-blue to-sdusd-blue-dark py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
            <Building2 className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            School Directory
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Browse all {schools.length} San Diego Unified schools. Filter by level, program, and enrollment status.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <FilterBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedLevels={selectedLevels}
                onLevelToggle={toggleLevel}
                selectedPrograms={selectedPrograms}
                onProgramToggle={toggleProgram}
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                onClear={clearFilters}
                hasFilters={hasFilters}
              />
            </div>
          </div>

          {/* School grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-sdusd-gray">
                Showing <strong>{filteredSchools.length}</strong> of {schools.length} schools
              </p>
            </div>

            {filteredSchools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredSchools.map((school) => (
                  <SchoolDirectoryCard key={school.id} school={school} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-lg font-semibold text-gray-900 mb-1">No schools found</p>
                <p className="text-sdusd-gray">Try adjusting your filters or search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
