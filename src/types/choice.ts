import { School } from './school';

export interface ChoiceApplication {
  gradeLevel: string;
  rankedSchools: School[];
  submitted: boolean;
  confirmationNumber: string | null;
}
