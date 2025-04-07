import { BarraNavegacion } from "../../components/BarraNavegacion"
import { Link } from "react-router-dom"

export function MisPlantas(){
    return (
        <section>
            <BarraNavegacion />      
            <div className="max-w-md mx-auto mt-10">
                <button className="bg-green-500 hover:bg-green-600 p-2 rounded-lg text-white">
                    <Link to={'/agregar-plantas'}>
                        <h4>+ Agregar Planta</h4>
                    </Link>
                </button>
                <p className="text-xl">🌱</p>
                <p>Sin plantas en tu jardin </p>
            </div>
        </section>
    )
} 