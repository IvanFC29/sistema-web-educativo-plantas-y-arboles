import axios from "axios";

export const getPlantas = () => {
    return axios.get('http://127.0.0.1:8000/sistemaWeb/api/v1/planta/');
}

export const getUsuarios = () => {
    return axios.get('http://127.0.0.1:8000/sistemaWeb/api/v1/usuario/');
}