import Link from 'next/link';
import { MapPin, Phone, User, Users, ArrowRight } from 'lucide-react';
import { School } from '@/types/school';
import { StatusBadge, Badge } from '@/components/ui/Badge';

interface SchoolResultProps {
  school: School;
  level: string;
  delay: number;
}

export function SchoolResult({ school, level, delay }: SchoolResultProps) {
  return (
    <div
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs font-semibold text-sdusd-gray uppercase tracking-wide">
            {level} School
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-1">{school.name}</h3>
        </div>
        <StatusBadge status={school.enrollmentStatus} />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {school.programTypes.map((type) => (
          <Badge key={type} variant="blue">{type}</Badge>
        ))}
        <Badge variant="gray">{school.gradeSpan}</Badge>
      </div>

      <div className="space-y-2 text-sm text-sdusd-gray mb-5">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>{school.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 shrink-0" />
          <span>{school.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 shrink-0" />
          <span>Principal: {school.principal}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 shrink-0" />
          <span>{school.studentCount} students</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-5 leading-relaxed">{school.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {school.features.map((feature) => (
          <span key={feature} className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-600">
            {feature}
          </span>
        ))}
      </div>

      <Link
        href="/enroll"
        className="inline-flex items-center gap-2 text-sdusd-blue font-semibold hover:text-sdusd-blue-dark transition-colors"
      >
        Begin Enrollment <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
