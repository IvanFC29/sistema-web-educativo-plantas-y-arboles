import { BarraNavegacion } from "../../components/BarraNavegacion"
import { Atras } from "../../components/Atras"
import { Wizard } from "./Wizard"
export function EcoCalculator(){
    return (
        <div>
            <BarraNavegacion />
            <Atras />
            <Wizard/>
        </div>
    )
}