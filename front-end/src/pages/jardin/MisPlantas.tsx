import { BarraNavegacion } from "../../components/BarraNavegacion"

export function MisPlantas(){
    return (
        <section>
            <BarraNavegacion />      
            <div className="max-w-md mx-auto mt-10 text-center">
                <p className="text-6xl m-2">🌱</p>
                <p className="dark:text-teal-900">Sin plantas en tu jardin </p>
                <p className="dark:text-gray-500">Ve a la actividad "Calculadora Ecologica" para agregar plantas</p>
            </div>
        </section>
    )
} 