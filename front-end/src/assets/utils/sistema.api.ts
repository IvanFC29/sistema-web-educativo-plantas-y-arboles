import axios from "axios";

const apiPlanta = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/v1/planta/'
});

export const getPlantas = () =>  apiPlanta.get('/');

export const createPlanta = (planta: {especie: string, tipo: string, cantidad: number, oxigenoTotal: number, carbonoTotal: number, co2Total: number}) => apiPlanta.post('/', planta);

