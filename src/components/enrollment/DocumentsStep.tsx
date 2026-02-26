'use client';

import { DocumentChecklist } from '@/types/enrollment';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { validateDocuments } from '@/lib/validators';
import { AlertCircle } from 'lucide-react';

interface DocumentsStepProps {
  data: DocumentChecklist;
  errors: Record<string, string>;
  onUpdate: (data: Partial<DocumentChecklist>) => void;
  onNext: () => void;
  onPrev: () => void;
  onSetErrors: (errors: Record<string, string>) => void;
}

const documents = [
  {
    key: 'birthCertificate' as const,
    label: 'Birth Certificate',
    description: 'Original or certified copy of birth certificate, passport, or baptismal record.',
    required: true,
  },
  {
    key: 'proofOfResidency' as const,
    label: 'Proof of Residency',
    description: 'Current utility bill (gas, electric, water), lease agreement, or mortgage statement.',
    required: true,
  },
  {
    key: 'immunizationRecords' as const,
    label: 'Immunization Records',
    description: 'Up-to-date immunization records from your healthcare provider.',
    required: true,
  },
  {
    key: 'previousSchoolRecords' as const,
    label: 'Previous School Records',
    description: 'Report cards and transcripts from previous school (if transferring).',
    required: false,
  },
  {
    key: 'iep504Plan' as const,
    label: 'IEP or 504 Plan',
    description: 'Current Individualized Education Plan or 504 Plan (if applicable).',
    required: false,
  },
];

export function DocumentsStep({ data, errors, onUpdate, onNext, onPrev, onSetErrors }: DocumentsStepProps) {
  const handleNext = () => {
    const validationErrors = validateDocuments(data);
    if (Object.keys(validationErrors).length > 0) {
      onSetErrors(validationErrors);
      return;
    }
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Required Documents</h2>
      <p className="text-sdusd-gray mb-6">
        Please confirm you have the following documents ready. You will bring these to your school.
      </p>

      {Object.keys(errors).length > 0 && (
        <div className="mb-6 p-4 bg-sdusd-red-light border border-sdusd-red/20 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-sdusd-red shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-sdusd-red">Required documents missing</p>
            <p className="text-sm text-red-700 mt-1">
              Please check all required documents before continuing.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.key}
            className={`p-4 rounded-lg border transition-colors duration-200 ${
              data[doc.key]
                ? 'border-sdusd-green bg-sdusd-green-light/50'
                : errors[doc.key]
                ? 'border-sdusd-red bg-sdusd-red-light/50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <Checkbox
              id={doc.key}
              label={doc.label + (doc.required ? ' *' : ' (optional)')}
              description={doc.description}
              checked={data[doc.key]}
              onChange={(e) => onUpdate({ [doc.key]: e.target.checked })}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-sdusd-blue-light rounded-lg">
        <p className="text-sm text-sdusd-blue">
          <strong>Note:</strong> Lack of documents should not delay enrollment. Contact the
          Enrollment Office at (619) 260-2410 for assistance gathering required documents.
        </p>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back
        </Button>
        <Button onClick={handleNext}>
          Next: Review
        </Button>
      </div>
    </div>
  );
}
