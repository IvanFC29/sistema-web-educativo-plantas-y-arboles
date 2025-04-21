import { useLocation } from "react-router-dom";

export function Indicador(){
    const locacion = useLocation();

    const rutas: {[key:string]:string}={
        '/inicio': 'Hola !! 👏',
        '/huella-ecologica': 'Huella Ecológica',
        '/mis-plantas': 'Hola !! 👏',
        '/puzzle-plantar': 'Consejos de un  Árbol'
    };

    const nombreSeccion = rutas[locacion.pathname];

    return(
        <h4 className="text-sm sm:text-base rounded-lg">{nombreSeccion}</h4>
    )
}