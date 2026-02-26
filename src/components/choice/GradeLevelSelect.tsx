'use client';

import { Select } from '@/components/ui/Select';

interface GradeLevelSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const gradeOptions = [
  { value: 'all', label: 'All Grade Levels' },
  { value: 'TK-5', label: 'Elementary (TK-5)' },
  { value: 'K-8', label: 'K-8 Schools' },
  { value: '6-8', label: 'Middle (6-8)' },
  { value: '9-12', label: 'High (9-12)' },
];

export function GradeLevelSelect({ value, onChange }: GradeLevelSelectProps) {
  return (
    <Select
      id="gradeLevel"
      label="Grade Level"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={gradeOptions}
    />
  );
}
