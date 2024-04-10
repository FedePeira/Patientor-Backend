export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientsEntry {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation: string, 
}

export type NonDiagnosesEntry = Omit<DiagnosesEntry,  'latin'>;

export type NonPatientsEntry = Omit<PatientsEntry,  'ssn'>;