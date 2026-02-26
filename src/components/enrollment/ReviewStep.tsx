'use client';

import { EnrollmentFormData } from '@/types/enrollment';
import { Button } from '@/components/ui/Button';
import { Edit3, Check, X } from 'lucide-react';

interface ReviewStepProps {
  data: EnrollmentFormData;
  onSubmit: () => void;
  onPrev: () => void;
  onGoToStep: (step: number) => void;
}

export function ReviewStep({ data, onSubmit, onPrev, onGoToStep }: ReviewStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Review Your Application</h2>
      <p className="text-sdusd-gray mb-6">
        Please review all information carefully before submitting.
      </p>

      {/* Student Info */}
      <div className="mb-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Student Information</h3>
          <button
            onClick={() => onGoToStep(0)}
            className="flex items-center gap-1 text-sm text-sdusd-blue hover:text-sdusd-blue-dark transition-colors"
          >
            <Edit3 className="h-3.5 w-3.5" /> Edit
          </button>
        </div>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <Field label="Name" value={`${data.student.firstName} ${data.student.lastName}`} />
          <Field label="Date of Birth" value={data.student.dateOfBirth} />
          <Field label="Grade Entering" value={data.student.gradeEntering || '—'} />
          <Field label="Gender" value={data.student.gender || '—'} />
          <Field label="Primary Language" value={data.student.primaryLanguage || '—'} />
          <Field label="Ethnicity" value={data.student.ethnicity || '—'} />
          <Field label="Address" value={`${data.student.address}, ${data.student.city} ${data.student.zip}`} span />
        </div>
      </div>

      {/* Parent Info */}
      <div className="mb-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Parent/Guardian Information</h3>
          <button
            onClick={() => onGoToStep(1)}
            className="flex items-center gap-1 text-sm text-sdusd-blue hover:text-sdusd-blue-dark transition-colors"
          >
            <Edit3 className="h-3.5 w-3.5" /> Edit
          </button>
        </div>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <Field label="Name" value={`${data.parent.firstName} ${data.parent.lastName}`} />
          <Field label="Relationship" value={data.parent.relationship} />
          <Field label="Email" value={data.parent.email} />
          <Field label="Phone" value={data.parent.phone} />
          <Field label="Emergency Contact" value={data.parent.emergencyContactName} />
          <Field label="Emergency Phone" value={data.parent.emergencyContactPhone} />
        </div>
      </div>

      {/* Documents */}
      <div className="mb-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Documents</h3>
          <button
            onClick={() => onGoToStep(2)}
            className="flex items-center gap-1 text-sm text-sdusd-blue hover:text-sdusd-blue-dark transition-colors"
          >
            <Edit3 className="h-3.5 w-3.5" /> Edit
          </button>
        </div>
        <div className="p-5 space-y-2 text-sm">
          <DocItem label="Birth Certificate" checked={data.documents.birthCertificate} />
          <DocItem label="Proof of Residency" checked={data.documents.proofOfResidency} />
          <DocItem label="Immunization Records" checked={data.documents.immunizationRecords} />
          <DocItem label="Previous School Records" checked={data.documents.previousSchoolRecords} />
          <DocItem label="IEP/504 Plan" checked={data.documents.iep504Plan} />
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back
        </Button>
        <Button onClick={onSubmit} className="bg-sdusd-green hover:bg-green-700">
          Submit Enrollment
        </Button>
      </div>
    </div>
  );
}

function Field({ label, value, span }: { label: string; value: string; span?: boolean }) {
  return (
    <div className={span ? 'sm:col-span-2' : ''}>
      <span className="text-sdusd-gray">{label}</span>
      <p className="font-medium text-gray-900">{value || '—'}</p>
    </div>
  );
}

function DocItem({ label, checked }: { label: string; checked: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {checked ? (
        <Check className="h-4 w-4 text-sdusd-green" />
      ) : (
        <X className="h-4 w-4 text-sdusd-gray" />
      )}
      <span className={checked ? 'text-gray-900' : 'text-sdusd-gray'}>{label}</span>
    </div>
  );
}
