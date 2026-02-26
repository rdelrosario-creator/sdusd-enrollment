'use client';

import { GripVertical, Plus } from 'lucide-react';
import { School } from '@/types/school';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface SchoolCardProps {
  school: School;
  isRanked: boolean;
  rank: number | null;
  canAdd: boolean;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: () => void;
  onAdd: () => void;
}

export function SchoolCard({
  school,
  isRanked,
  rank,
  canAdd,
  onDragStart,
  onDragEnd,
  onAdd,
}: SchoolCardProps) {
  return (
    <div
      draggable={!isRanked}
      onDragStart={!isRanked ? onDragStart : undefined}
      onDragEnd={onDragEnd}
      className={cn(
        'flex items-center gap-3 p-4 rounded-lg border bg-white transition-all duration-200',
        isRanked
          ? 'border-sdusd-green/30 bg-sdusd-green-light/30 opacity-60'
          : 'border-gray-200 hover:border-sdusd-blue hover:shadow-md cursor-grab active:cursor-grabbing'
      )}
    >
      {!isRanked && (
        <GripVertical className="h-5 w-5 text-gray-400 shrink-0" />
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-gray-900 text-sm truncate">{school.name}</h4>
          {rank && (
            <Badge variant="green">Ranked #{rank}</Badge>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-sdusd-gray">{school.gradeSpan}</span>
          <span className="text-xs text-gray-300">|</span>
          {school.programTypes.filter(t => t !== 'Neighborhood').map((type) => (
            <Badge key={type} variant="purple" className="text-[10px] px-1.5 py-0">
              {type}
            </Badge>
          ))}
        </div>
      </div>

      {!isRanked && canAdd && (
        <button
          onClick={onAdd}
          className="shrink-0 p-1.5 rounded-md text-sdusd-blue hover:bg-sdusd-blue-light transition-colors"
          title="Add to ranking"
        >
          <Plus className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
