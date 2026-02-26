import { CheckCircle, Mail } from 'lucide-react';
import { School } from '@/types/school';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

interface ChoiceConfirmationProps {
  rankedSchools: School[];
  confirmationNumber: string;
}

export function ChoiceConfirmation({ rankedSchools, confirmationNumber }: ChoiceConfirmationProps) {
  return (
    <div className="text-center animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sdusd-green-light mb-6">
        <CheckCircle className="h-12 w-12 text-sdusd-green" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
      <p className="text-lg text-sdusd-gray mb-6">
        Your Choice/Magnet application has been received.
      </p>

      <div className="inline-block bg-sdusd-blue-light rounded-xl px-8 py-5 mb-8">
        <p className="text-sm text-sdusd-blue font-medium mb-1">Confirmation Number</p>
        <p className="text-2xl font-bold text-sdusd-blue tracking-wide">{confirmationNumber}</p>
      </div>

      <div className="max-w-md mx-auto text-left mb-8">
        <h3 className="font-semibold text-gray-900 mb-3">Your School Rankings:</h3>
        <div className="space-y-2">
          {rankedSchools.map((school, index) => (
            <div key={school.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sdusd-blue text-white text-sm font-bold">
                {index + 1}
              </span>
              <div>
                <p className="font-medium text-gray-900 text-sm">{school.name}</p>
                <div className="flex gap-1">
                  {school.programTypes.filter(t => t !== 'Neighborhood').map((type) => (
                    <Badge key={type} variant="purple" className="text-[10px]">{type}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-md mx-auto text-left mb-8 p-4 bg-sdusd-orange-light rounded-lg">
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-sdusd-orange shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-gray-900">Lottery results will be announced February 14, 2025</p>
            <p className="text-sdusd-gray mt-1">
              You will be notified by email and mail of your placement results.
            </p>
          </div>
        </div>
      </div>

      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
}
