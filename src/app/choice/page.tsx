'use client';

import { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { schools } from '@/data/schools';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { GradeLevelSelect } from '@/components/choice/GradeLevelSelect';
import { SchoolSearch } from '@/components/choice/SchoolSearch';
import { SchoolCard } from '@/components/choice/SchoolCard';
import { RankingList } from '@/components/choice/RankingList';
import { ChoiceConfirmation } from '@/components/choice/ChoiceConfirmation';
import { Button } from '@/components/ui/Button';
import { generateConfirmationNumber } from '@/lib/utils';

export default function ChoicePage() {
  const [gradeLevel, setGradeLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  const dnd = useDragAndDrop();

  // Filter to only choice-eligible schools (not pure neighborhood)
  const choiceSchools = useMemo(() => {
    return schools.filter((school) => {
      const isChoiceEligible = school.programTypes.some(
        (t) => t !== 'Neighborhood'
      );
      if (!isChoiceEligible) return false;

      // Grade level filter
      if (gradeLevel !== 'all') {
        if (gradeLevel === 'TK-5' && school.level !== 'Elementary') return false;
        if (gradeLevel === 'K-8' && school.level !== 'K-8') return false;
        if (gradeLevel === '6-8' && school.level !== 'Middle') return false;
        if (gradeLevel === '9-12' && school.level !== 'High') return false;
      }

      // Program type filter
      if (activeFilter !== 'all') {
        if (!school.programTypes.includes(activeFilter as typeof school.programTypes[number])) {
          return false;
        }
      }

      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return school.name.toLowerCase().includes(q);
      }

      return true;
    });
  }, [gradeLevel, activeFilter, searchQuery]);

  const handleSubmit = () => {
    setConfirmationNumber(generateConfirmationNumber());
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-sdusd-purple to-purple-900 py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Choice Application</h1>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <ChoiceConfirmation
              rankedSchools={dnd.rankedSchools}
              confirmationNumber={confirmationNumber}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sdusd-purple to-purple-900 py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
            <Sparkles className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Choice / Magnet Application
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Search for schools, then drag and drop or click to rank up to 3 choices.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Search & results */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="sm:col-span-1">
                  <GradeLevelSelect value={gradeLevel} onChange={setGradeLevel} />
                </div>
                <div className="sm:col-span-2">
                  <SchoolSearch
                    query={searchQuery}
                    onQueryChange={setSearchQuery}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-sdusd-gray mb-3">
                {choiceSchools.length} school{choiceSchools.length !== 1 ? 's' : ''} found
              </p>
              <div className="space-y-2">
                {choiceSchools.map((school) => (
                  <SchoolCard
                    key={school.id}
                    school={school}
                    isRanked={dnd.isRanked(school.id)}
                    rank={dnd.getRank(school.id)}
                    canAdd={dnd.canAdd}
                    onDragStart={dnd.handleDragStart(school)}
                    onDragEnd={dnd.handleDragEnd}
                    onAdd={() => dnd.addSchool(school)}
                  />
                ))}
                {choiceSchools.length === 0 && (
                  <div className="text-center py-8 text-sdusd-gray">
                    <p>No schools match your filters. Try adjusting your search.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Ranking list */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <RankingList
                rankedSchools={dnd.rankedSchools}
                dragOverIndex={dnd.dragOverIndex}
                onDragOver={dnd.handleDragOver}
                onDrop={dnd.handleDrop}
                onDragStart={dnd.handleDragStart}
                onDragEnd={dnd.handleDragEnd}
                onRemove={dnd.removeSchool}
              />

              {dnd.rankedSchools.length > 0 && (
                <div className="mt-6">
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-sdusd-purple hover:bg-purple-800"
                    size="lg"
                  >
                    Submit Application
                  </Button>
                  <p className="text-xs text-sdusd-gray text-center mt-2">
                    You can rank 1 to 3 schools. At least 1 is required.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
