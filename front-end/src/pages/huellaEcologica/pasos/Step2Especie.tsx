import { useForm } from "react-hook-form";
import { getPlantas } from "../../../assets/utils/sistema.api";
import { useEffect, useState } from "react";
import { Sprout } from "lucide-react";
type Acciones = {
    siguiente: () => void;
    datos: (data: any) => void;
    datoActual : any;
};
interface Planta {
    especie: string;
    tipo: string;
    cantidad: number;
    oxigenoTotal: number;
    co2Total: number;
    carbonoTotal: number;
    fechaRegistro: string;
}
export function Step2Especie({siguiente, datos, datoActual}: Acciones){
    const [lista, setLista] = useState<Planta[]>([]);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const registrarPlantas = handleSubmit(data => {
        datos({ especiePlanta: data.nombrePlanta});
        siguiente();
    })

    const nombreEspecie = datoActual?.especiePlanta; 
    console.log(nombreEspecie);
     useEffect(() => {
            async function cargarPlantas() {
                const res = await getPlantas();
                setLista(res.data);
            }
            cargarPlantas();
        });
    return(
        <div>
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">¿Cual es el nombre de la planta?</p>
            <form onSubmit={registrarPlantas} className="max-w-md mx-auto mt-10">
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="nombrePlanta" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre de planta / arbol</label>
                    {lista.length === 0 ? (
                        <div>
                            <Sprout size={32} className="mx-auto text-emerald-900 opacity-60" />
                            <p className="dark:text-teal-900 font-semibold text-center">Sin plantas en tu jardin  !!</p>
                        </div>
                    ) : (
                        <div>
                        <select className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" 
                        // onChange={e => setEspeciePlanta(e.target.value)}
                        {...register("nombrePlanta", {required: true})}
                        >
                            <option value="">Tu planta es</option>
                            {lista.map((planta, index) => (
                                <option key={index} value={planta.especie}>{planta.especie}</option>
                            ))}
                        </select>
                         {errors.nombrePlanta && <span className="text-orange-600">No ingresaste un nombre</span>}
                        </div>
                    )}
                </div>
                <button className="cursor-pointer rounded-lg mt-10 bg-sky-200 p-2 hover:bg-sky-300" type="submit">Avanzar ⮞</button>
            </form>
        </div>
    )
}