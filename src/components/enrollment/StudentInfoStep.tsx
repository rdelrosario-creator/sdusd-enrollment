'use client';

import { StudentInfo } from '@/types/enrollment';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { validateStudentInfo } from '@/lib/validators';

interface StudentInfoStepProps {
  data: StudentInfo;
  errors: Record<string, string>;
  onUpdate: (data: Partial<StudentInfo>) => void;
  onNext: () => void;
  onSetErrors: (errors: Record<string, string>) => void;
}

const gradeOptions = [
  { value: 'TK', label: 'Transitional Kindergarten (TK)' },
  { value: 'K', label: 'Kindergarten' },
  { value: '1', label: '1st Grade' },
  { value: '2', label: '2nd Grade' },
  { value: '3', label: '3rd Grade' },
  { value: '4', label: '4th Grade' },
  { value: '5', label: '5th Grade' },
  { value: '6', label: '6th Grade' },
  { value: '7', label: '7th Grade' },
  { value: '8', label: '8th Grade' },
  { value: '9', label: '9th Grade' },
  { value: '10', label: '10th Grade' },
  { value: '11', label: '11th Grade' },
  { value: '12', label: '12th Grade' },
];

const genderOptions = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'prefer-not', label: 'Prefer not to say' },
];

const ethnicityOptions = [
  { value: 'hispanic-latino', label: 'Hispanic or Latino' },
  { value: 'white', label: 'White' },
  { value: 'black', label: 'Black or African American' },
  { value: 'asian', label: 'Asian' },
  { value: 'native-american', label: 'American Indian or Alaska Native' },
  { value: 'pacific-islander', label: 'Native Hawaiian or Pacific Islander' },
  { value: 'two-or-more', label: 'Two or More Races' },
  { value: 'prefer-not', label: 'Prefer not to say' },
];

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'vietnamese', label: 'Vietnamese' },
  { value: 'tagalog', label: 'Tagalog' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'mandarin', label: 'Mandarin' },
  { value: 'somali', label: 'Somali' },
  { value: 'other', label: 'Other' },
];

export function StudentInfoStep({ data, errors, onUpdate, onNext, onSetErrors }: StudentInfoStepProps) {
  const handleNext = () => {
    const validationErrors = validateStudentInfo(data);
    if (Object.keys(validationErrors).length > 0) {
      onSetErrors(validationErrors);
      return;
    }
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Student Information</h2>
      <p className="text-sdusd-gray mb-6">Please provide the student&apos;s details below.</p>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="firstName"
            label="First Name"
            value={data.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            error={errors.firstName}
            required
          />
          <Input
            id="lastName"
            label="Last Name"
            value={data.lastName}
            onChange={(e) => onUpdate({ lastName: e.target.value })}
            error={errors.lastName}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="dateOfBirth"
            label="Date of Birth"
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => onUpdate({ dateOfBirth: e.target.value })}
            error={errors.dateOfBirth}
            required
          />
          <Select
            id="gradeEntering"
            label="Grade Entering"
            value={data.gradeEntering}
            onChange={(e) => onUpdate({ gradeEntering: e.target.value })}
            options={gradeOptions}
            placeholder="Select grade level"
            error={errors.gradeEntering}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            id="gender"
            label="Gender"
            value={data.gender}
            onChange={(e) => onUpdate({ gender: e.target.value })}
            options={genderOptions}
            placeholder="Select gender"
          />
          <Select
            id="ethnicity"
            label="Ethnicity"
            value={data.ethnicity}
            onChange={(e) => onUpdate({ ethnicity: e.target.value })}
            options={ethnicityOptions}
            placeholder="Select ethnicity"
          />
        </div>

        <Select
          id="primaryLanguage"
          label="Primary Language at Home"
          value={data.primaryLanguage}
          onChange={(e) => onUpdate({ primaryLanguage: e.target.value })}
          options={languageOptions}
          placeholder="Select primary language"
        />

        <Input
          id="address"
          label="Home Address"
          value={data.address}
          onChange={(e) => onUpdate({ address: e.target.value })}
          error={errors.address}
          placeholder="Street address"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="city"
            label="City"
            value={data.city}
            onChange={(e) => onUpdate({ city: e.target.value })}
          />
          <Input
            id="zip"
            label="ZIP Code"
            value={data.zip}
            onChange={(e) => onUpdate({ zip: e.target.value })}
            error={errors.zip}
            placeholder="e.g., 92109"
            required
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button onClick={handleNext}>
          Next: Parent/Guardian
        </Button>
      </div>
    </div>
  );
}
