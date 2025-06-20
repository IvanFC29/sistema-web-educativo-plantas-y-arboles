import axios from "axios";

/** API REST DE PLANTA */
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

export const getPlantaById = (id:string) => apiPlanta.get(`/${id}`);

export const updateFotoPlantaById = (id:string, foto:File) => {
    const formData = new FormData();
    formData.append('foto', foto);

    return apiPlanta.patch(`/${id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data', 
        }, 
    });
};

/** API REST DE APORTES AMBIENTALES */
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

export const getAportesByPlanta = (id:string) => apiAporte.get(`/?planta=${id}`);

/** API REST DE FUNCION BUSQUEDA */
export const findDescripcion = (palabra: string) =>
    axios.get(`http://127.0.0.1:8000/sistemaWeb/api/v1/buscar_descripcion/`, {
      params: { palabra }
});
  