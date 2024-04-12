import patients from '../../data/patients';
import { v1 as uuid } from 'uuid';
import { Patient, NonPatient, NewPatient, NewOccupationalHealthCareEntry, NewHospitalEntry } from '../types';


const getPatients = (): Patient[] => {
  return patients;
};

const getNonPatientsEntries = (): NonPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries  }) =>({
    id, 
    name, 
    dateOfBirth,
    gender,
    occupation,
    entries,
  }));
};

const findById = (id: string): Patient | undefined => {
  const patient = patients.find(p => p.id === id);
  return patient;
};

const addPatients = ( patient: NewPatient ): Patient => {
  const newPatient = {
    id: uuid(),    
    ...patient,
    entries: []
  };

  patients.push(newPatient);
  return newPatient;
};

const addEntryToPatient = (patientId: string, newEntry: NewOccupationalHealthCareEntry | NewHospitalEntry): Patient => {
  const patient = findById(patientId) as Patient;

  if(!patient){
    throw new Error('Patient not found');
  }

  if (typeof patient === 'undefined') {
    throw new Error('Patient not found');
  }
  const newPatientEntry = {
    id: uuid(),    
    ...newEntry,
  };

  patient.entries.push(newPatientEntry);
  return patient;
};

export default {
  getPatients,
  addPatients,
  getNonPatientsEntries,
  findById,
  addEntryToPatient
};