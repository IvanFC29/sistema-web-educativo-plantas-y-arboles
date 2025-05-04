interface Planta {
    especie: string;
    tipo: string;
    cantidad: number;
    oxigenoTotal: number;
    co2Total: number;
    carbonoTotal: number;
    fechaRegistro: string;
}

import { BarraNavegacion } from "../../components/BarraNavegacion"
import { useEffect, useState } from "react";
import { getPlantas } from "../../assets/utils/sistema.api";
import { Sprout } from 'lucide-react';
import { Tarjetas } from "./Tarjetas";

export function MisPlantas(){
    const [lista, setLista] = useState<Planta[]>([]);

    useEffect(() => {
        async function cargarListaPlantas(){
            const respuesta = await getPlantas();
            setLista(respuesta.data);
            console.log(respuesta.data);
        }
        cargarListaPlantas()
    }, []);

    return (
        // <section className="bg-[url('/fondo.jpg')] bg-cover bg-no-repeat bg-center h-screen w-screen bg-fixed">
        <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />      
            <div className="p-3 max-w-4xl w-full mx-auto">
                {lista.length === 0 ?(
                    <div className="max-w-md mx-auto mt-10 text-center">
                        <Sprout size={120} className="mx-auto text-emerald-900 opacity-60" />
                        <p className="dark:text-teal-900 font-semibold">Sin plantas en tu jardin  !!</p>
                        <p className="dark:text-gray-500">Ve a la actividad "Aporte Ambiental" para agregar plantas</p>
                    </div>
                ): (
                    <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {lista.map((planta, index) => (
                            <Tarjetas key={index} planta={planta} />
                        ))}
                    </div>  
                )}
            </div>
        </section>
    )
} 