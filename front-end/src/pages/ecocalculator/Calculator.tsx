import { BarraNavegacion } from "../../components/BarraNavegacion"
import { Salir } from "../../components/Salir"
import { Wizard } from "./Wizard"

export function EcoCalculator(){
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />
            <Salir/>
            <Wizard/>
        </div>
    )
}