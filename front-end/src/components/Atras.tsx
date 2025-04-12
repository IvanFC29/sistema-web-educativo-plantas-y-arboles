import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function Atras(){
    const locacion = useLocation();
    const navegacion = useNavigate();

    const rutas: {[key:string]:string}={
        '/calculadora-ecologica': 'Calculadora Ecológica'
    };

    const nombreSeccion = rutas[locacion.pathname];

    const volverAtras = () => {
        navegacion(-1);
    };

    return(
        <button onClick={volverAtras} className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-black m-3 shadow-sm transition">
            <ArrowLeft size={20} />
            <h4 className="text-sm sm:text-base rounded-lg">{nombreSeccion}</h4>
        </button> 
    )
}