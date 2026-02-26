'use client';

import { useState, useCallback } from 'react';
import { School } from '@/types/school';

const MAX_RANKED = 3;

export function useDragAndDrop() {
  const [rankedSchools, setRankedSchools] = useState<School[]>([]);
  const [draggedItem, setDraggedItem] = useState<School | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = useCallback(
    (school: School) => (e: React.DragEvent) => {
      setDraggedItem(school);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', school.id);
    },
    []
  );

  const handleDragOver = useCallback(
    (index: number) => (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      setDragOverIndex(index);
    },
    []
  );

  const handleDrop = useCallback(
    (index: number) => (e: React.DragEvent) => {
      e.preventDefault();
      setDragOverIndex(null);

      if (!draggedItem) return;

      setRankedSchools((prev) => {
        const existingIndex = prev.findIndex((s) => s.id === draggedItem.id);

        // If already ranked, reorder
        if (existingIndex !== -1) {
          const newList = [...prev];
          newList.splice(existingIndex, 1);
          newList.splice(index, 0, draggedItem);
          return newList;
        }

        // If new and list is not full, add at index
        if (prev.length < MAX_RANKED) {
          const newList = [...prev];
          newList.splice(index, 0, draggedItem);
          return newList.slice(0, MAX_RANKED);
        }

        return prev;
      });

      setDraggedItem(null);
    },
    [draggedItem]
  );

  const handleDragEnd = useCallback(() => {
    setDraggedItem(null);
    setDragOverIndex(null);
  }, []);

  const addSchool = useCallback((school: School) => {
    setRankedSchools((prev) => {
      if (prev.length >= MAX_RANKED) return prev;
      if (prev.some((s) => s.id === school.id)) return prev;
      return [...prev, school];
    });
  }, []);

  const removeSchool = useCallback((schoolId: string) => {
    setRankedSchools((prev) => prev.filter((s) => s.id !== schoolId));
  }, []);

  const isRanked = useCallback(
    (schoolId: string) => rankedSchools.some((s) => s.id === schoolId),
    [rankedSchools]
  );

  const getRank = useCallback(
    (schoolId: string) => {
      const index = rankedSchools.findIndex((s) => s.id === schoolId);
      return index !== -1 ? index + 1 : null;
    },
    [rankedSchools]
  );

  const canAdd = rankedSchools.length < MAX_RANKED;

  return {
    rankedSchools,
    draggedItem,
    dragOverIndex,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    addSchool,
    removeSchool,
    isRanked,
    getRank,
    canAdd,
  };
}
