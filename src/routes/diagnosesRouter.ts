import express from 'express';

import diagnosesService from '../services/diagnosesService';

const router = express.Router();

router.get('/', (_req, res) => {
  const diagnoses = diagnosesService.getDiagnoses();
  res.send(diagnoses);
});

router.get('/:code', (req, res) => {
  const diagnose = diagnosesService.findById(String(req.params.code));

  if (diagnose) {
    res.send(diagnose);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnose!');
});

export default router;