import { NewPatient, Gender, TypeEntry, NewHospitalEntry, NewOccupationalHealthCareEntry, Discharge, SickLeave } from "./types";

const isNotEmptyString = (text: unknown): text is string => {
 return typeof text === 'string' && text.trim() !== '';
};

const parseString = (variable: unknown): string => {
  if(typeof variable === 'undefined' || !isString(variable)){
    throw new Error('Incorrect or missing variable');
  }
  return variable;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseGender = (gender: unknown): Gender => {
  if(!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or mising gender: ' + gender);
  }
  return gender;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};

const parseType = (type: unknown): TypeEntry => {
  if(!type || !isString(type) || !isType(type)) {
    throw new Error('Incorrect or mising gender: ' + type);
  }
  return type;
};

const isType = (param: string): param is TypeEntry => {
  return Object.values(TypeEntry).map(v => v.toString()).includes(param);
};

const parseArray = (array: unknown): string[] => {
  if (!Array.isArray(array)) {
     throw new Error('Input is not an array');
  }
 
  const parsedArray: string[] = [];
 
  array.forEach(item => {
     if (!isString(item)) {
       throw new Error(`Incorrect or missing string: ${item}`);
     }
     parsedArray.push(item);
  });
 
  return parsedArray;
};

const parseDischarge = (dischargeObject: unknown): Discharge => {
  if (typeof dischargeObject !== 'object' || dischargeObject === null || !('date' in dischargeObject) || !('criteria' in dischargeObject)) {
     throw new Error('Invalid discharge object');
  }
 
  const date = parseString(dischargeObject.date);
  const criteria = parseString(dischargeObject.criteria);
 
  return {
     date,
     criteria,
  };
};

const parseSickLeave = (sickLeaveObject: unknown): SickLeave => {
  if (typeof sickLeaveObject !== 'object' || sickLeaveObject === null || !('startDate' in sickLeaveObject) || !('endDate' in sickLeaveObject)) {
     throw new Error('Invalid sick leave object');
  }
 
  const startDate = parseString(sickLeaveObject.startDate);
  const endDate = parseString(sickLeaveObject.endDate);
 
  return {
     startDate,
     endDate,
  };
 };

export const toNewPatient = (object: unknown): NewPatient => {   
  if(!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing date');
  }

  if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object){
    const newEntry: NewPatient = {
      name: parseString(object.name),
      dateOfBirth: parseString(object.dateOfBirth),
      ssn: parseString(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation),
    };
  
    return newEntry;
  }

  throw new Error('Incorrect data: some fields are missing');
};

export const toNewPatientEntry = (object: unknown): NewHospitalEntry | NewOccupationalHealthCareEntry => {   
  if(!object || typeof object !== 'object') {
    console.log('------------------------');
    console.log('Revisando tenga algo object: ', object);
    console.log('------------------------');
    throw new Error('Incorrect or missing date');
  }

  console.log('Object: ', object);

  if('type' in object && parseType(object.type) && object.type === 'Hospital') {
    console.log('------------------------');
    console.log('Revisando entry con type Hospital');
    console.log('------------------------');

    if('description' in object && isNotEmptyString(object.description) &&
      'date' in object && isNotEmptyString(object.date) &&
      'specialist' in object && isNotEmptyString(object.specialist) &&
      'diagnosisCodes' in object && Array.isArray(object.diagnosisCodes) && object.diagnosisCodes.every(isNotEmptyString) &&
      'discharge' in object){
        const newHospitalEntry: NewHospitalEntry = {
          description: parseString(object.description),
          date: parseString(object.date),
          specialist: parseString(object.specialist),
          diagnosisCode: parseArray(object.diagnosisCodes),
          discharge: parseDischarge(object.discharge),
          type: "Hospital"
        };

        console.log('------------------------');
        console.log('Devolviendo entry: ', newHospitalEntry);
        console.log('------------------------');
    
        return newHospitalEntry;
    }

    console.log('No se logor devolver el entry');
    throw new Error('Incorrect data: some fields are missing');
  } else if('type' in object && parseType(object.type) && object.type === 'OccupationalHealthcare') {
    
    console.log('------------------------');
    console.log('Revisando entry con type OccupationalHealthcare');
    console.log('------------------------');
    if('description' in object && isNotEmptyString(object.description) &&
      'date' in object && isNotEmptyString(object.date) &&
      'specialist' in object && isNotEmptyString(object.specialist) &&
      'diagnosisCodes' in object && Array.isArray(object.diagnosisCodes) && object.diagnosisCodes.every(isNotEmptyString) &&
      'employerName' in object && isNotEmptyString(object.employerName) &&
      'sickLeave' in object){
        const newOccupationalEntry: NewOccupationalHealthCareEntry = {
          description: parseString(object.description),
          date: parseString(object.date),
          specialist: parseString(object.specialist),
          diagnosisCode: parseArray(object.diagnosisCodes),
          employerName: parseString(object.employerName),
          sickLeave: parseSickLeave(object.sickLeave),
          type: "OccupationalHealthcare"
        };

        console.log('------------------------');
        console.log('Devolviendo entry: ', newOccupationalEntry);
        console.log('------------------------');
    
        return newOccupationalEntry;
    }  

    console.log('No se logor devolver el entry');
    throw new Error('Incorrect data: some fields are missing');
  }

  console.log('No se logor devolver el entry');
  throw new Error('Incorrect data: some fields are missing');
};