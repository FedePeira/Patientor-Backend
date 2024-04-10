import patients from '../../data/patients';
import { v1 as uuid } from 'uuid';
import { PatientsEntry, NonPatientsEntry, NewPatientEntry } from '../types';


const getPatients = (): PatientsEntry[] => {
  return patients;
};

const getNonPatientsEntries = (): NonPatientsEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries  }) =>({
    id, 
    name, 
    dateOfBirth,
    gender,
    occupation,
    entries,
  }));
};

const findById = (id: string): PatientsEntry | undefined => {
  const patient = patients.find(p => p.id === id);
  return patient;
};

const addPatients = ( entry: NewPatientEntry ): PatientsEntry => {
  const newPatientEntry = {
    id: uuid(),    
    ...entry,
    entries: []
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  addPatients,
  getNonPatientsEntries,
  findById
};