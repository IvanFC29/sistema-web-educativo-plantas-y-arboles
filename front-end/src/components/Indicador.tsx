import { useLocation } from "react-router-dom";

export function Indicador(){
    const locacion = useLocation();

    const rutas: {[key:string]:string}={
        '/inicio': 'Hola !! 👏',
        '/aporte-ambiental': 'Aporte Ambiental',
        '/conociendo-tu-planta': 'Conociendo tus Plantas',
        '/mis-plantas': 'Mis Plantas',
        '/juego-educativo': 'Juego - El Jardin',
        '/mis-mensajes-encontrados': 'Mensajes para tomar en cuenta con las plantas y arboles',
        '/mis-aprendizajes': 'Mis Aprendizajes'
    };

    let nombreSeccion = '';

    if (locacion.pathname.startsWith('/aportes-plantas')) {
        nombreSeccion = 'Historial de aportes Ambientales';
    }else{
        nombreSeccion = rutas[locacion.pathname];
    }
    return(
        <h4 className="text-sm sm:text-base rounded-lg">{nombreSeccion}</h4>
    )
}