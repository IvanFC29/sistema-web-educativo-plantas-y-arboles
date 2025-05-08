import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Salir } from "../../components/Salir"
import { PanelGame } from "./PanelGame";

export function VistaGame(){
    return (
         // <section className="bg-[url('/fondo.jpg')] bg-cover bg-no-repeat bg-center h-screen w-screen bg-fixed">
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />
            <Salir/>
            <PanelGame/>          
        </div>
    )
}