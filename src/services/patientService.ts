import patients from '../../data/patients';

import { PatientsEntry, NonPatientsEntry } from '../types';


const getPatients = (): PatientsEntry[] => {
  return patients;
};

const getNonPatientsEntries = (): NonPatientsEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation  }) =>({
    id, 
    name, 
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatients = () => {
  return null;
};

export default {
  getPatients,
  addPatients,
  getNonPatientsEntries
};