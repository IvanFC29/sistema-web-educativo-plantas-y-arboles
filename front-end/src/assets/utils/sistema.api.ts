import axios from "axios";

const apiPlanta = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/v1/planta/'
});

export const getPlantas = () =>  apiPlanta.get('/');

export const createPlanta = (planta: {especie: string, descripcion:string, tipo: string}) => apiPlanta.post('/', planta);

export const findDescripcion = (palabra: string) =>
    axios.get(`http://127.0.0.1:8000/sistemaWeb/api/v1/buscar_descripcion/`, {
      params: { palabra }
});
  