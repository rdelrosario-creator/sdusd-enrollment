'use client';

import { X, GripVertical } from 'lucide-react';
import { School } from '@/types/school';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface RankingListProps {
  rankedSchools: School[];
  dragOverIndex: number | null;
  onDragOver: (index: number) => (e: React.DragEvent) => void;
  onDrop: (index: number) => (e: React.DragEvent) => void;
  onDragStart: (school: School) => (e: React.DragEvent) => void;
  onDragEnd: () => void;
  onRemove: (schoolId: string) => void;
}

export function RankingList({
  rankedSchools,
  dragOverIndex,
  onDragOver,
  onDrop,
  onDragStart,
  onDragEnd,
  onRemove,
}: RankingListProps) {
  const slots = [0, 1, 2];

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">
        Your Rankings <span className="text-sdusd-gray font-normal">({rankedSchools.length}/3)</span>
      </h3>
      <div className="space-y-2">
        {slots.map((index) => {
          const school = rankedSchools[index];
          const isOver = dragOverIndex === index;

          return (
            <div
              key={index}
              onDragOver={onDragOver(index)}
              onDrop={onDrop(index)}
              className={cn(
                'flex items-center gap-3 p-4 rounded-lg border-2 border-dashed transition-all duration-200 min-h-[68px]',
                school
                  ? 'border-sdusd-blue bg-sdusd-blue-light/50 border-solid'
                  : isOver
                  ? 'border-sdusd-blue bg-sdusd-blue-light/30 scale-[1.02]'
                  : 'border-gray-300 bg-gray-50'
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0',
                  school ? 'bg-sdusd-blue text-white' : 'bg-gray-200 text-gray-500'
                )}
              >
                {index + 1}
              </div>

              {school ? (
                <div
                  draggable
                  onDragStart={onDragStart(school)}
                  onDragEnd={onDragEnd}
                  className="flex-1 flex items-center gap-2 cursor-grab active:cursor-grabbing"
                >
                  <GripVertical className="h-4 w-4 text-sdusd-gray shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{school.name}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-sdusd-gray">{school.gradeSpan}</span>
                      {school.programTypes.filter(t => t !== 'Neighborhood').map((type) => (
                        <Badge key={type} variant="purple" className="text-[10px] px-1.5 py-0">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(school.id)}
                    className="shrink-0 p-1 rounded-md text-gray-400 hover:text-sdusd-red hover:bg-sdusd-red-light transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-400 italic">
                  {isOver ? 'Drop here' : 'Drag a school here or click +'}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
