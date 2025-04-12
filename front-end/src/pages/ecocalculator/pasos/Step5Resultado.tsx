import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Acciones = {
    atras: () => void;
    datos: (data: any) => void;
};
  
export function Step5Resultado({atras, datos}: Acciones){
    const navegacion = useNavigate();
    const finalizar = () => {
        datos({});
        navegacion('/mis-plantas');
        toast.success('Planta agregada a tu Jardin');
    }

    return(
        <div>
            <p className="text-2xl dark:text-teal-900 text-center">Resultados de la planta</p>
            <button onClick={atras}>⬅ Atrás</button>
            <p> Guardar planta en Mi jardin ?</p>
            <button onClick={finalizar} className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Si! </button>
        </div>
    )
}