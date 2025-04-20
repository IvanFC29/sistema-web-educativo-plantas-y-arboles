import { BarraNavegacion } from "../../components/BarraNavegacion"
import { Sprout } from 'lucide-react';
import { Tarjetas } from "./Tarjetas";

export function MisPlantas(){
    return (
        <section>
            <BarraNavegacion />      
            <div className="max-w-md mx-auto mt-10 text-center">
            <Sprout size={120} className="mx-auto text-emerald-900 opacity-60" />
                <p className="dark:text-teal-900 font-semibold">Sin plantas en tu jardin  !!</p>
                <p className="dark:text-gray-500">Ve a la actividad "Calculadora Ecologica" para agregar plantas</p>
            </div>
            <Tarjetas/>
        </section>
    )
} 