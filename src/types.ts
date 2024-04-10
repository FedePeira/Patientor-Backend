export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export type NonDiagnosesEntry = Omit<DiagnosesEntry,  'latin'>;