import diagnoses from '../../data/diagnoses';

import { Diagnoses, NonDiagnoses } from '../types';


const getDiagnoses = (): Diagnoses[] => {
  return diagnoses;
};

const getNonDiagnosesEntries = (): NonDiagnoses[] => {
  return diagnoses.map(({ code, name  }) =>({
    code, 
    name, 
  }));
};

const findById = (code: string): Diagnoses | undefined => {
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