import express from 'express';
import patientService from '../services/patientService';
import { toNewPatient, toNewPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients = patientService.getNonPatientsEntries();
  res.send(patients);
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatient(req.body);
    const addedPatient = patientService.addPatients(newPatientEntry);
    res.json(addedPatient);
  } catch(error: unknown){
    let errorMessage = 'Something went wrong';
    if(error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.post('/:id/entries', (req, res) => {
  try {
    console.log('Agregando un entry al patient:' + String(req.params.id));
    const newEntry = toNewPatientEntry(req.body);
    const updatedPatient = patientService.addEntryToPatient(String(req.params.id), newEntry);
    res.json(updatedPatient);
  } catch(error: unknown){
    let errorMessage = 'Something went wrong';
    if(error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.get('/:id', (req, res) => {
  const patient = patientService.findById(String(req.params.id));

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

export default router;