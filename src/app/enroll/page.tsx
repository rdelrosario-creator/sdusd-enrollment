import { ClipboardList } from 'lucide-react';
import { EnrollmentWizard } from '@/components/enrollment/EnrollmentWizard';

export const metadata = {
  title: 'Enroll - San Diego Unified School District',
  description: 'Complete your enrollment application for San Diego Unified School District.',
};

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-sdusd-blue to-sdusd-blue-dark py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
            <ClipboardList className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Enrollment Application
          </h1>
          <p className="text-blue-100 text-lg">
            Complete the form below to enroll your child in San Diego Unified.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <EnrollmentWizard />
      </div>
    </div>
  );
}
