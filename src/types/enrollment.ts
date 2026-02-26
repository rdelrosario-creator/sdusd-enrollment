export interface StudentInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gradeEntering: string;
  gender: string;
  ethnicity: string;
  primaryLanguage: string;
  address: string;
  city: string;
  zip: string;
}

export interface ParentInfo {
  firstName: string;
  lastName: string;
  relationship: string;
  email: string;
  phone: string;
  sameAddress: boolean;
  address: string;
  city: string;
  zip: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

export interface DocumentChecklist {
  birthCertificate: boolean;
  proofOfResidency: boolean;
  immunizationRecords: boolean;
  previousSchoolRecords: boolean;
  iep504Plan: boolean;
}

export interface EnrollmentFormData {
  student: StudentInfo;
  parent: ParentInfo;
  documents: DocumentChecklist;
}

export const initialStudentInfo: StudentInfo = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gradeEntering: '',
  gender: '',
  ethnicity: '',
  primaryLanguage: '',
  address: '',
  city: 'San Diego',
  zip: '',
};

export const initialParentInfo: ParentInfo = {
  firstName: '',
  lastName: '',
  relationship: '',
  email: '',
  phone: '',
  sameAddress: false,
  address: '',
  city: 'San Diego',
  zip: '',
  emergencyContactName: '',
  emergencyContactPhone: '',
};

export const initialDocumentChecklist: DocumentChecklist = {
  birthCertificate: false,
  proofOfResidency: false,
  immunizationRecords: false,
  previousSchoolRecords: false,
  iep504Plan: false,
};
