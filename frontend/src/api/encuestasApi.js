import axios from 'axios';

const envioDatosPersonales = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/datospersonales/'
});

const envioDatosPsicologia = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/psicologia/'
});


//  GET Y POST DE DATOS PERSONALES

export const getDatosPersonales = () => {
  return envioDatosPersonales.get('/');
};

export const postDatosPersonales = (data) => {
  return envioDatosPersonales.post('/', data);
};

// GET Y POST DE PSICOLOGIA

export const getDatosPsicologia = () => {
  return envioDatosPsicologia.get('/');
};

export const postDatosPsicologia = (data2) => {
  return envioDatosPsicologia.post('/', data2);
};
