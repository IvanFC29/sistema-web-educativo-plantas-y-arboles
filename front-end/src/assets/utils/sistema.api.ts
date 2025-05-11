import axios from "axios";

const apiPlanta = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/v1/planta/'
});

export const createPlanta = (
    planta: {
        especie: string, 
        descripcion:string, 
        tipo: string
    }) => apiPlanta.post('/', planta);

export const getPlantas = () =>  apiPlanta.get('/');

const apiAporte = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/v1/aporte/'
})

export const createAporte = (
    aporte: {
        cantidad: number, 
        oxigenoTotal: number, 
        carbonoTotal: number, 
        co2Total: number
    }) => apiAporte.post('/', aporte);

export const getAportes = () => apiAporte.get('/');

export const findDescripcion = (palabra: string) =>
    axios.get(`http://127.0.0.1:8000/sistemaWeb/api/v1/buscar_descripcion/`, {
      params: { palabra }
});
  