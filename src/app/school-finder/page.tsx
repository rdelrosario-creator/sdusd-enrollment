'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { AddressSearch } from '@/components/school-finder/AddressSearch';
import { SchoolResult } from '@/components/school-finder/SchoolResult';
import { findSchoolsByAddress } from '@/lib/school-finder';
import { School } from '@/types/school';

interface SchoolAssignment {
  elementary: School | null;
  middle: School | null;
  high: School | null;
}

export default function SchoolFinderPage() {
  const [results, setResults] = useState<SchoolAssignment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [searchAddress, setSearchAddress] = useState('');

  const handleSearch = (address: string) => {
    setIsLoading(true);
    setSearchAddress(address);

    // Simulate network delay
    setTimeout(() => {
      const assignment = findSchoolsByAddress(address);
      setResults(assignment);
      setSearched(true);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sdusd-blue to-sdusd-blue-dark py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
            <Search className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Find Your Neighborhood School
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Enter your home address to find the elementary, middle, and high school assigned to your neighborhood.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <AddressSearch onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-sdusd-blue border-t-transparent rounded-full animate-spin" />
            <p className="mt-3 text-sdusd-gray">Searching for your schools...</p>
          </div>
        )}

        {!isLoading && searched && results && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Schools assigned to <span className="text-sdusd-blue">{searchAddress}</span>
            </h2>
            <div className="space-y-6">
              {results.elementary && (
                <SchoolResult school={results.elementary} level="Elementary" delay={0} />
              )}
              {results.middle && (
                <SchoolResult school={results.middle} level="Middle" delay={150} />
              )}
              {results.high && (
                <SchoolResult school={results.high} level="High" delay={300} />
              )}
            </div>
          </div>
        )}

        {!isLoading && searched && !results && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-lg font-semibold text-gray-900 mb-2">No schools found</p>
            <p className="text-sdusd-gray">
              We couldn&apos;t find assigned schools for that address. Please include a valid San Diego ZIP code (e.g., 92109, 92103, 92114).
            </p>
          </div>
        )}

        {!searched && !isLoading && (
          <div className="text-center py-12 text-sdusd-gray">
            <p>Enter your address above to see your assigned neighborhood schools.</p>
          </div>
        )}
      </div>
    </div>
  );
}
