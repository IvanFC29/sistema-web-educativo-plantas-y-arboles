import axios from "axios";

/** API REST DE PLANTA */
const apiPlanta = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/v1/planta/', 
});

export const createPlanta = (
    planta: {
        especie: string, 
        descripcion:string, 
        tipo: string
    }) => apiPlanta.post('/', planta, {
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`, 
        }, 
    });

export const getPlantas = () =>  apiPlanta.get('/', {
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`, 
    }, 
});

export const getPlantaById = (id:string) => apiPlanta.get(`/${id}`, {
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`, 
    }
});

export const updateFotoPlantaById = (id:string, foto:File) => {
    const formData = new FormData();
    formData.append('foto', foto);

    return apiPlanta.patch(`/${id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': `Token ${localStorage.getItem('token')}`, 
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
    }) => apiAporte.post('/', aporte, {
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`, 
        }
    });

export const getAportesByPlanta = (id:string) => apiAporte.get(`/?planta=${id}`, {
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`
    }
});

/** API REST DE FUNCION BUSQUEDA */
export const findDescripcion = (palabra: string) =>
    axios.get(`http://127.0.0.1:8000/sistemaWeb/api/v1/buscar_descripcion/`, {
      params: { palabra }
});
  
/** API REST DE USUARIO */
export const createUser = async (
    newuser: {
       first_name: string, 
       last_name: string
       email: string, 
       username: string, 
       password: string, 
    }
) => {
    const response = await fetch("http://127.0.0.1:8000/sistemaWeb/api/v1/registrar_usuario", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(newuser), 
    });
    const data = await response.json();
    return data;
}

/** API REST PARA EL LOGIN */
export const login = async (userData: { username: string, password: string }) => {
    const response = await fetch("http://127.0.0.1:8000/sistemaWeb/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    // Guardar en localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data; 
};

/** API REST DEL PERFIL - NOMBRE */
export const profile = async() => {
    const response = await fetch("http://127.0.0.1:8000/sistemaWeb/api/v1/profile", {
        method: "POST",
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    });
    const data = await response.json();
    return data;
}

/** API REST DEL JUEGO */
export const updateContadorMensajes = () => {

}

export const updateContadorAprendizaje = () => {
    axios.patch('')
}