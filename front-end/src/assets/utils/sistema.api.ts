import axios from "axios";

/** API REST DE PLANTA */
const apiPlanta = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/planta/', 
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
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/aporte/'
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
    axios.get(`http://127.0.0.1:8000/sistemaWeb/api/buscar_descripcion/`, {
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
    const response = await fetch("http://127.0.0.1:8000/sistemaWeb/api/registrar_usuario", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(newuser), 
    });
    const data = await response.json();
    return data;
}

/** API REST PARA EL LOGIN */
export const login = async (userData: { username: string, password: string }) => {
    const response = await fetch("http://127.0.0.1:8000/sistemaWeb/api/login", {
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
    const response = await fetch("http://127.0.0.1:8000/sistemaWeb/api/profile", {
        method: "POST",
        headers:{
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    });
    const data = await response.json();
    return data;
}

/** API REST DEL JUEGO */
const apiProgreso = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/progreso/',
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`
    }
});

export const getProgresoJuego = () =>  apiProgreso.get('/');

export const updateContadorMensajes = async () => {
    const res = await apiProgreso.post('incrementar-contador-msj/');
    return res.data;
}

export const updateContadorAprendizaje = async () => {
    const res = await apiProgreso.post('incrementar-contador-apzj/');
    return res.data;
}

/** API REST DE LOS MENSAJES */
const apiMensajes = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/mensaje/',
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`
    }
})

export const getMensajesDesbloqueados = (id:number) => apiMensajes.get(`/?progreso=${id}`);

export const saveMensajeDesbloqueado = (
    mensaje: {
        titulo:string;
        descripcion:string;
        destacado:boolean;
        desbloqueado:boolean;
    }
) => {
    apiMensajes.post('/',mensaje);
};

/** API REST DE LOS APRENDIZAJES */
const apiAprendizaje = axios.create({
    baseURL: 'http://127.0.0.1:8000/sistemaWeb/api/aprendizaje/',
    headers:{
        'Authorization': `Token ${localStorage.getItem('token')}`
    }
})

export const getAprendizajeDesbloqueado = (id:number) => apiAprendizaje.get(`/?progreso=${id}`);

export const saveAprendizajeDesbloqueado = (
    aprendizaje: {
        titulo:string;
        contenido:string;
        imagen:string;
        video:string;
        fuente:string;
        destacado:boolean;
        desbloqueado:boolean;
    }
) => {
    apiAprendizaje.post('/', aprendizaje);
};
