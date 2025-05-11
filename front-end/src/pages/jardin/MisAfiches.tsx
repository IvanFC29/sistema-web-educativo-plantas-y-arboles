interface Aporte {
    especie: string;
    cantidad: number;
    oxigenoTotal: number;
    co2Total: number;
    carbonoTotal: number;
    fechaRegistro: string;
}

import { BarraNavegacion } from "../../components/BarraNavegacion"
import { useEffect, useState } from "react";
import { getAportes } from "../../assets/utils/sistema.api";
import { Wind } from 'lucide-react';
import { Tarjetas } from "./TarjetaAporte";

export function MisAfiches(){
    const [lista, setLista] = useState<Aporte[]>([]);

    useEffect(() => {
        async function cargarTarjetasAportes(){
            const respuesta = await getAportes();
            setLista(respuesta.data);
            console.log(respuesta.data);
        }
        cargarTarjetasAportes();
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />      
            <a href="/mis-plantas" className="text-green-700 text-sm font-medium m-5">Mis Plantas </a>
            <div className="p-3 max-w-4xl w-full mx-auto">
                {lista.length === 0 ?(
                    <div className="max-w-md mx-auto mt-10 text-center">
                        <Wind size={120} className="mx-auto text-emerald-900 opacity-60" />
                        <p className="dark:text-teal-900 font-semibold">Historial de aportes vacio !!</p>
                        <p className="dark:text-gray-500">Ve a la actividad "Aporte Ambiental" para agregar</p>
                    </div>
                ): (
                    <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {lista.map((aporte, index) => (
                            <Tarjetas key={index} aporte={aporte} />
                        ))}
                    </div>  
                )}
            </div>
        </section>
    )
} 