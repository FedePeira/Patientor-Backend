export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}

interface BaseEntry{
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCode?: string[];
}

export interface Patient {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string, 
  entries: Entry[]
}

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
}

export enum TypeEntry {
  occupationalHealthcare = 'OccupationalHealthcare',
  hospital = 'Hospital',
}

export type NonDiagnoses = Omit<Diagnoses,  'latin'>;

export type DiagnosesCode = Omit<Diagnoses, 'latin' | 'name'>;

export type NonPatient= Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id' | 'entries'>;

export type PatientFormValues = Omit<Patient, "id" | "entries">;

export type NewOccupationalHealthCareEntry = Omit<OccupationalHealthCareEntry, 'id'>;

export type NewHospitalEntry = Omit<HospitalEntry, 'id'>;

interface OccupationalHealthCareEntry extends BaseEntry{
  type: "OccupationalHealthcare";
  employerName: string,
  sickLeave: SickLeave
}

export interface SickLeave {
  startDate?: string,
  endDate?: string
}

interface HospitalEntry extends BaseEntry{
  type: "Hospital",
  discharge: Discharge
} 

export interface Discharge {
  date: string,
  criteria: string
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthCareEntry;

