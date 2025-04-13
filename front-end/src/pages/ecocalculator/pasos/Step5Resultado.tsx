import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Acciones = {
    datos: (data: any) => void;
};
  
export function Step5Resultado({datos}: Acciones){
    const navegacion = useNavigate();
    const finalizar = () => {
        datos({});
        navegacion('/mis-plantas');
        toast.success('Planta agregada a tu Jardin');
    }

    const salir = () => {
        navegacion('/inicio');
    }

    return(
        <div>
            <h2 className="text-2xl dark:text-teal-900 text-center">Resultados de la planta</h2>
            <div>

            </div>
            <button onClick={salir} className="cursor-pointer rounded-lg mt-10 bg-amber-200 p-2 hover:bg-amber-300" >🗙 Salir</button>
            <p className="mt-10"> Guardar planta en Mi jardin ?</p>
            <button onClick={finalizar} className="text-white font-bold cursor-pointer rounded-lg mt-2 bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 py-2.5 text-center focus:ring-green-300">Si! ⮞</button>
        </div>
    )
}