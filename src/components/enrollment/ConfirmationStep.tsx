import { CheckCircle, Printer, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface ConfirmationStepProps {
  confirmationNumber: string;
  studentName: string;
}

export function ConfirmationStep({ confirmationNumber, studentName }: ConfirmationStepProps) {
  return (
    <div className="animate-fade-in text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sdusd-green-light mb-6">
        <CheckCircle className="h-12 w-12 text-sdusd-green" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-2">Enrollment Submitted!</h2>
      <p className="text-lg text-sdusd-gray mb-8 max-w-md mx-auto">
        The enrollment application for <strong>{studentName}</strong> has been successfully submitted.
      </p>

      <div className="inline-block bg-sdusd-blue-light rounded-xl px-8 py-5 mb-8">
        <p className="text-sm text-sdusd-blue font-medium mb-1">Confirmation Number</p>
        <p className="text-2xl font-bold text-sdusd-blue tracking-wide">{confirmationNumber}</p>
      </div>

      <div className="max-w-md mx-auto text-left mb-8">
        <h3 className="font-semibold text-gray-900 mb-3">Next Steps:</h3>
        <ol className="space-y-3 text-sm text-sdusd-gray">
          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sdusd-blue text-white text-xs font-semibold shrink-0 mt-0.5">1</span>
            <span>Check your email for a confirmation with your application details.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sdusd-blue text-white text-xs font-semibold shrink-0 mt-0.5">2</span>
            <span>Bring your original documents to your assigned school for verification.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sdusd-blue text-white text-xs font-semibold shrink-0 mt-0.5">3</span>
            <span>Your school will contact you with additional registration details.</span>
          </li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <Button variant="outline" onClick={() => window.print()}>
          <Printer className="h-4 w-4 mr-2" />
          Print Confirmation
        </Button>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>

      <div className="border-t border-gray-200 pt-6 text-sm text-sdusd-gray">
        <p className="font-medium text-gray-900 mb-2">Questions? We&apos;re here to help.</p>
        <div className="flex items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" /> (619) 260-2410
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-4 w-4" /> enrollment@sandi.net
          </span>
        </div>
      </div>
    </div>
  );
}
