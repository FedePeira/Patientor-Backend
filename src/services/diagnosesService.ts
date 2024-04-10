import diagnoses from '../../data/diagnoses';

import { DiagnosesEntry, NonDiagnosesEntry } from '../types';


const getDiagnoses = (): DiagnosesEntry[] => {
  return diagnoses;
};

const getNonDiagnosesEntries = (): NonDiagnosesEntry[] => {
  return diagnoses.map(({ code, name  }) =>({
    code, 
    name, 
  }));
};

const findById = (code: string): DiagnosesEntry | undefined => {
  const diagnose = diagnoses.find(d => d.code === code);
  return diagnose;
};

const addDiagnoses = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnoses,
  getNonDiagnosesEntries,
  findById
};