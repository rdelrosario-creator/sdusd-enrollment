export type ProgramType =
  | 'Neighborhood'
  | 'Magnet'
  | 'STEM'
  | 'STEAM'
  | 'IB'
  | 'Arts'
  | 'Language Immersion'
  | 'Music'
  | 'Charter'
  | 'Academy';

export type EnrollmentStatus = 'Open' | 'Closed' | 'Waitlist';

export type SchoolLevel = 'Elementary' | 'Middle' | 'High' | 'K-8';

export interface School {
  id: string;
  name: string;
  level: SchoolLevel;
  gradeSpan: string;
  programTypes: ProgramType[];
  address: string;
  zip: string;
  phone: string;
  principal: string;
  enrollmentStatus: EnrollmentStatus;
  studentCount: number;
  description: string;
  features: string[];
  neighborhoodZips: string[];
}
