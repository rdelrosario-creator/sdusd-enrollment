'use client';

import { useReducer, useCallback } from 'react';
import {
  EnrollmentFormData,
  StudentInfo,
  ParentInfo,
  DocumentChecklist,
  initialStudentInfo,
  initialParentInfo,
  initialDocumentChecklist,
} from '@/types/enrollment';
import { generateConfirmationNumber } from '@/lib/utils';

interface FormState {
  currentStep: number;
  data: EnrollmentFormData;
  errors: Record<string, string>;
  isSubmitted: boolean;
  confirmationNumber: string | null;
}

type Action =
  | { type: 'UPDATE_STUDENT'; payload: Partial<StudentInfo> }
  | { type: 'UPDATE_PARENT'; payload: Partial<ParentInfo> }
  | { type: 'UPDATE_DOCUMENTS'; payload: Partial<DocumentChecklist> }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'GO_TO_STEP'; payload: number }
  | { type: 'SET_ERRORS'; payload: Record<string, string> }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'SUBMIT' };

const initialState: FormState = {
  currentStep: 0,
  data: {
    student: initialStudentInfo,
    parent: initialParentInfo,
    documents: initialDocumentChecklist,
  },
  errors: {},
  isSubmitted: false,
  confirmationNumber: null,
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'UPDATE_STUDENT':
      return {
        ...state,
        data: {
          ...state.data,
          student: { ...state.data.student, ...action.payload },
        },
      };
    case 'UPDATE_PARENT': {
      const newParent = { ...state.data.parent, ...action.payload };
      if (action.payload.sameAddress && action.payload.sameAddress === true) {
        newParent.address = state.data.student.address;
        newParent.city = state.data.student.city;
        newParent.zip = state.data.student.zip;
      }
      return {
        ...state,
        data: { ...state.data, parent: newParent },
      };
    }
    case 'UPDATE_DOCUMENTS':
      return {
        ...state,
        data: {
          ...state.data,
          documents: { ...state.data.documents, ...action.payload },
        },
      };
    case 'NEXT_STEP':
      return { ...state, currentStep: Math.min(state.currentStep + 1, 4), errors: {} };
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(state.currentStep - 1, 0), errors: {} };
    case 'GO_TO_STEP':
      return { ...state, currentStep: action.payload, errors: {} };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'CLEAR_ERRORS':
      return { ...state, errors: {} };
    case 'SUBMIT':
      return {
        ...state,
        isSubmitted: true,
        currentStep: 4,
        confirmationNumber: generateConfirmationNumber(),
      };
    default:
      return state;
  }
}

export function useMultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateStudent = useCallback(
    (data: Partial<StudentInfo>) => dispatch({ type: 'UPDATE_STUDENT', payload: data }),
    []
  );

  const updateParent = useCallback(
    (data: Partial<ParentInfo>) => dispatch({ type: 'UPDATE_PARENT', payload: data }),
    []
  );

  const updateDocuments = useCallback(
    (data: Partial<DocumentChecklist>) => dispatch({ type: 'UPDATE_DOCUMENTS', payload: data }),
    []
  );

  const nextStep = useCallback(() => dispatch({ type: 'NEXT_STEP' }), []);
  const prevStep = useCallback(() => dispatch({ type: 'PREV_STEP' }), []);
  const goToStep = useCallback((step: number) => dispatch({ type: 'GO_TO_STEP', payload: step }), []);
  const setErrors = useCallback(
    (errors: Record<string, string>) => dispatch({ type: 'SET_ERRORS', payload: errors }),
    []
  );
  const clearErrors = useCallback(() => dispatch({ type: 'CLEAR_ERRORS' }), []);
  const submit = useCallback(() => dispatch({ type: 'SUBMIT' }), []);

  return {
    ...state,
    updateStudent,
    updateParent,
    updateDocuments,
    nextStep,
    prevStep,
    goToStep,
    setErrors,
    clearErrors,
    submit,
  };
}
