export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry{

}

export interface PatientsEntry {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation: string, 
  entries: Entry[]
}

export type NonDiagnosesEntry = Omit<DiagnosesEntry,  'latin'>;

export type NonPatientsEntry = Omit<PatientsEntry, 'ssn'>;

export type NewPatientEntry = Omit<PatientsEntry, 'id' | 'entries'>;

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
}