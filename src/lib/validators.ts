import { StudentInfo, ParentInfo, DocumentChecklist } from '@/types/enrollment';

export function validateStudentInfo(data: StudentInfo): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.firstName.trim()) errors.firstName = 'First name is required';
  if (!data.lastName.trim()) errors.lastName = 'Last name is required';
  if (!data.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
  if (!data.gradeEntering) errors.gradeEntering = 'Grade level is required';
  if (!data.address.trim()) errors.address = 'Address is required';
  if (!data.zip.trim()) errors.zip = 'ZIP code is required';
  else if (!/^\d{5}$/.test(data.zip)) errors.zip = 'Enter a valid 5-digit ZIP code';

  return errors;
}

export function validateParentInfo(data: ParentInfo): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.firstName.trim()) errors.firstName = 'First name is required';
  if (!data.lastName.trim()) errors.lastName = 'Last name is required';
  if (!data.relationship) errors.relationship = 'Relationship is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email address';
  if (!data.phone.trim()) errors.phone = 'Phone number is required';
  else if (!/^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(data.phone)) errors.phone = 'Enter a valid phone number';
  if (!data.emergencyContactName.trim()) errors.emergencyContactName = 'Emergency contact name is required';
  if (!data.emergencyContactPhone.trim()) errors.emergencyContactPhone = 'Emergency contact phone is required';

  return errors;
}

export function validateDocuments(data: DocumentChecklist): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.birthCertificate) errors.birthCertificate = 'Birth certificate is required';
  if (!data.proofOfResidency) errors.proofOfResidency = 'Proof of residency is required';
  if (!data.immunizationRecords) errors.immunizationRecords = 'Immunization records are required';

  return errors;
}
