import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Salir } from "../../components/Salir"
import { Cloudy, Sun, CloudRain } from "lucide-react";
import { getPlantas } from "../../assets/utils/sistema.api";
import { useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { Resultado } from "./Resultado";
import "../../assets/css/step5.css";
import { generarRecomendacion } from "../../assets/utils/CalculosR";

interface Planta {
    especie: string;
    tipo: string;
    cantidad: number;
    oxigenoTotal: number;
    co2Total: number;
    carbonoTotal: number;
    fechaRegistro: string;
}

type Recomendacion = {
    especie: string;
    tipo: string;
    dias: number;
    aguaRiego: number;
    tierra: string;
    clima: string;
}
export function VistaR(){
    const [lista, setLista] = useState<Planta[]>([]);
    const [divResultado, setDivResultado] = useState<Recomendacion | null>(null);

    const {register, handleSubmit} = useForm();
   
    useEffect(()=> {
        async function cargarPlantas() {
            const res = await getPlantas();
            setLista(res.data);
        }
        cargarPlantas();
    });

    const calcularRiego = handleSubmit(data => {
        generarRecomendacion();
        const nuevaRecomendacion: Recomendacion = {
            especie: data.nombreEspecie,
            tipo: data.tipoEspecie,
            dias: 12,
            aguaRiego: 2,
            tierra: data.tipoTierra,
            clima: data.clima
        };

        console.log("La recomendacion",nuevaRecomendacion);
        setDivResultado(nuevaRecomendacion);
    });

    return (
        <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />
            <Salir/>    
            <form onSubmit={calcularRiego} className="p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                <div>
                    <p className="text-xl dark:text-teal-900 font-semibold mb-2">1. Elije tu planta</p>
                    {lista.length === 0 ? (
                        <p className="dark:text-teal-900 font-semibold text-center">Sin plantas en tu jardin  !!</p>
                    ):(
                        <div className="grid grid-cols-4">
                            {lista.map((planta, index) =>(            
                                <div key={index} className="bg-green-300 border-2 border-gray-200 flex justify-center">
                                    <input type="radio" value={planta.especie} className="cursor-pointer"
                                        {...register('nombreEspecie', {required: true})}
                                    />
                                    <input type="text" value={planta.tipo} {...register('tipoEspecie')} className="formulario" />
                                    <label>{planta.especie}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mt-3">
                    <p className="text-xl dark:text-teal-900 font-semibold mb-2">2. Elije el tipo de tierra en el que estan tus plantas</p>
                    <div className="grid grid-cols-2 p-3 ml-8 mr-8">
                        <div className="p-2 mx-auto">
                            <input  className="mr-1 cursor-pointer" type="radio" value="arenoso" 
                            {...register('tipoTierra', {required: true})} 
                            id="arenoso" />
                            <label htmlFor="arenoso">Tierra Arenosa</label>
                        </div>
                        <div className="p-2 mx-auto">
                            <input className="mr-1 cursor-pointer" type="radio" value="pedregoso"
                            {...register('tipoTierra', {required: true})} 
                            id="pedregoso" />
                            <label htmlFor="pedregoso">Tierra Pedregosa</label>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-xl dark:text-teal-900 font-semibold mb-2">3. Elije el clima actual</p>
                    <div className="grid grid-cols-3 p-3">
                        <div className="p-2 mx-auto flex justify-center">
                            <input className="mr-1 cursor-pointer"  type="radio" value="soleado"
                                {...register('clima', {required: true})} />
                            <label className="flex justify-center my-auto"> Soleado / Caluroso <Sun/> </label>
                        </div>
                        <div className="p-2 mx-auto flex justify-center">
                            <input className="mr-1 cursor-pointer"  type="radio" value="lluvioso"
                              {...register('clima', {required: true})} />
                            <label className="flex justify-center my-auto"> LLuvioso <CloudRain/> </label>
                        </div>
                        <div className="p-2 mx-auto flex justify-center">
                            <input className="mr-1 cursor-pointer"  type="radio" value="nublado"
                             {...register('clima', {required: true})}  />
                            <label className="flex justify-center my-auto"> Templado / nublado <Cloudy/></label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="text-white font-bold cursor-pointer rounded-lg bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 mt-5 py-2.5 text-center focus:ring-green-300"> Ver Resultado ⮞</button>
            </form>
            <div className="p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                <div className="">
                    <p className="text-xl dark:text-teal-900 font-semibold mb-2">4. Recomendaciones de cuidado</p>
                    {divResultado && (
                    <Resultado
                        especie={divResultado.especie}
                        tipo={divResultado.tipo}
                        dias={divResultado.dias}
                        aguaRiego={divResultado.aguaRiego}
                        tierra={divResultado.tierra}
                        clima={divResultado.clima}
                    />
                    )}
                </div>
            </div>
        </section>
    )
}