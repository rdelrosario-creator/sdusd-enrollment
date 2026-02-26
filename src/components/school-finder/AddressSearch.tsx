'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface AddressSearchProps {
  onSearch: (address: string) => void;
  isLoading: boolean;
}

const sampleAddresses = [
  'Try: 1234 Tourmaline St, San Diego, CA 92109',
  'Try: 2445 Fogg St, San Diego, CA 92117',
  'Try: 425 S 47th St, San Diego, CA 92113',
  'Try: 3366 Park Blvd, San Diego, CA 92103',
];

export function AddressSearch({ onSearch, isLoading }: AddressSearchProps) {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-sdusd-gray" />
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your home address or ZIP code..."
            className="pl-10"
            required
          />
        </div>
        <Button type="submit" disabled={isLoading || !address.trim()} size="md">
          <Search className="h-4 w-4 mr-2" />
          {isLoading ? 'Searching...' : 'Find My School'}
        </Button>
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        {sampleAddresses.map((sample) => (
          <button
            key={sample}
            onClick={() => {
              const addr = sample.replace('Try: ', '');
              setAddress(addr);
              onSearch(addr);
            }}
            className="text-xs text-sdusd-blue hover:text-sdusd-blue-dark hover:underline transition-colors"
          >
            {sample}
          </button>
        ))}
      </div>
    </div>
  );
}
