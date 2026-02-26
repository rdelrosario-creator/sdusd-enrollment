'use client';

import { ParentInfo } from '@/types/enrollment';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { validateParentInfo } from '@/lib/validators';

interface ParentInfoStepProps {
  data: ParentInfo;
  errors: Record<string, string>;
  onUpdate: (data: Partial<ParentInfo>) => void;
  onNext: () => void;
  onPrev: () => void;
  onSetErrors: (errors: Record<string, string>) => void;
}

const relationshipOptions = [
  { value: 'mother', label: 'Mother' },
  { value: 'father', label: 'Father' },
  { value: 'guardian', label: 'Legal Guardian' },
  { value: 'grandparent', label: 'Grandparent' },
  { value: 'other', label: 'Other' },
];

export function ParentInfoStep({ data, errors, onUpdate, onNext, onPrev, onSetErrors }: ParentInfoStepProps) {
  const handleNext = () => {
    const validationErrors = validateParentInfo(data);
    if (Object.keys(validationErrors).length > 0) {
      onSetErrors(validationErrors);
      return;
    }
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Parent/Guardian Information</h2>
      <p className="text-sdusd-gray mb-6">Enter the primary parent or guardian&apos;s details.</p>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="parentFirstName"
            label="First Name"
            value={data.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            error={errors.firstName}
            required
          />
          <Input
            id="parentLastName"
            label="Last Name"
            value={data.lastName}
            onChange={(e) => onUpdate({ lastName: e.target.value })}
            error={errors.lastName}
            required
          />
        </div>

        <Select
          id="relationship"
          label="Relationship to Student"
          value={data.relationship}
          onChange={(e) => onUpdate({ relationship: e.target.value })}
          options={relationshipOptions}
          placeholder="Select relationship"
          error={errors.relationship}
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="parentEmail"
            label="Email Address"
            type="email"
            value={data.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            error={errors.email}
            placeholder="parent@example.com"
            required
          />
          <Input
            id="parentPhone"
            label="Phone Number"
            type="tel"
            value={data.phone}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            error={errors.phone}
            placeholder="(619) 555-0100"
            required
          />
        </div>

        <Checkbox
          id="sameAddress"
          label="Same address as student"
          checked={data.sameAddress}
          onChange={(e) => onUpdate({ sameAddress: e.target.checked })}
        />

        {!data.sameAddress && (
          <div className="space-y-4 animate-fade-in">
            <Input
              id="parentAddress"
              label="Address"
              value={data.address}
              onChange={(e) => onUpdate({ address: e.target.value })}
              placeholder="Street address"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                id="parentCity"
                label="City"
                value={data.city}
                onChange={(e) => onUpdate({ city: e.target.value })}
              />
              <Input
                id="parentZip"
                label="ZIP Code"
                value={data.zip}
                onChange={(e) => onUpdate({ zip: e.target.value })}
              />
            </div>
          </div>
        )}

        <div className="border-t border-gray-200 pt-5 mt-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="emergencyName"
              label="Contact Name"
              value={data.emergencyContactName}
              onChange={(e) => onUpdate({ emergencyContactName: e.target.value })}
              error={errors.emergencyContactName}
              required
            />
            <Input
              id="emergencyPhone"
              label="Contact Phone"
              type="tel"
              value={data.emergencyContactPhone}
              onChange={(e) => onUpdate({ emergencyContactPhone: e.target.value })}
              error={errors.emergencyContactPhone}
              placeholder="(619) 555-0100"
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back
        </Button>
        <Button onClick={handleNext}>
          Next: Documents
        </Button>
      </div>
    </div>
  );
}
