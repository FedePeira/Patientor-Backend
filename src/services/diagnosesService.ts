import diagnoses from '../../data/diagnoses';

import { DiagnosesEntry, NonDiagnosesEntry } from '../types';


const getDiagnoses = (): DiagnosesEntry[] => {
  return diagnoses;
};

const getNonDiagnosesEntries = (): NonDiagnosesEntry[] => {
  return diagnoses;
};

const addDiagnoses = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnoses,
  getNonDiagnosesEntries
};