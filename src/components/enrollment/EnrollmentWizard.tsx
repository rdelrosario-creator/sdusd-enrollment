'use client';

import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import { StepIndicator } from './StepIndicator';
import { StudentInfoStep } from './StudentInfoStep';
import { ParentInfoStep } from './ParentInfoStep';
import { DocumentsStep } from './DocumentsStep';
import { ReviewStep } from './ReviewStep';
import { ConfirmationStep } from './ConfirmationStep';

export function EnrollmentWizard() {
  const form = useMultiStepForm();

  const renderStep = () => {
    switch (form.currentStep) {
      case 0:
        return (
          <StudentInfoStep
            data={form.data.student}
            errors={form.errors}
            onUpdate={form.updateStudent}
            onNext={form.nextStep}
            onSetErrors={form.setErrors}
          />
        );
      case 1:
        return (
          <ParentInfoStep
            data={form.data.parent}
            errors={form.errors}
            onUpdate={form.updateParent}
            onNext={form.nextStep}
            onPrev={form.prevStep}
            onSetErrors={form.setErrors}
          />
        );
      case 2:
        return (
          <DocumentsStep
            data={form.data.documents}
            errors={form.errors}
            onUpdate={form.updateDocuments}
            onNext={form.nextStep}
            onPrev={form.prevStep}
            onSetErrors={form.setErrors}
          />
        );
      case 3:
        return (
          <ReviewStep
            data={form.data}
            onSubmit={form.submit}
            onPrev={form.prevStep}
            onGoToStep={form.goToStep}
          />
        );
      case 4:
        return (
          <ConfirmationStep
            confirmationNumber={form.confirmationNumber || ''}
            studentName={`${form.data.student.firstName} ${form.data.student.lastName}`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <StepIndicator currentStep={form.currentStep} isSubmitted={form.isSubmitted} />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
        {renderStep()}
      </div>
    </div>
  );
}
