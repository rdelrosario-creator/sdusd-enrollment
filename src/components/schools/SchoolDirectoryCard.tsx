import { MapPin, Phone, Users } from 'lucide-react';
import { School } from '@/types/school';
import { Badge, StatusBadge } from '@/components/ui/Badge';
import type { ProgramType } from '@/types/school';

const programColors: Partial<Record<ProgramType, 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'gray'>> = {
  Magnet: 'purple',
  STEM: 'blue',
  STEAM: 'blue',
  IB: 'orange',
  Arts: 'red',
  'Language Immersion': 'green',
  Music: 'red',
  Academy: 'orange',
  Neighborhood: 'gray',
};

export function SchoolDirectoryCard({ school }: { school: School }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">{school.name}</h3>
          <span className="text-xs text-sdusd-gray">{school.gradeSpan} &middot; {school.level}</span>
        </div>
        <StatusBadge status={school.enrollmentStatus} />
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {school.programTypes.map((type) => (
          <Badge key={type} variant={programColors[type] || 'gray'}>
            {type}
          </Badge>
        ))}
      </div>

      <div className="space-y-1.5 text-sm text-sdusd-gray">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{school.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 shrink-0" />
          <span>{school.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-3.5 w-3.5 shrink-0" />
          <span>{school.studentCount} students</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {school.features.map((feature) => (
          <span key={feature} className="text-[11px] px-2 py-0.5 bg-gray-50 rounded text-gray-500 border border-gray-100">
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
