import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients = patientService.getNonPatientsEntries();
  console.log(patients);
  res.send(patients);
});

router.post('/', (_req, res) => {
  res.send('Saving a patients!');
});

export default router;