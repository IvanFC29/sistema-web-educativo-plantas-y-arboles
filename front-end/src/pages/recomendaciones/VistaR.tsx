import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Salir } from "../../components/Salir"
import "../../assets/css/step5.css";
import { Layout1 } from "./caso1/Layout1";
import { Layout2 } from "./caso2/Layout2";

export function VistaR(){

    return (
        <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />
            <Salir/>    
            <div className="mt-5 p-2 grid grid-cols-2">
                <div className="m-1">
                    <Layout1/>
                </div>
                <div className="m-1">
                    <Layout2/>
                </div>
            </div>
        </section>
    )
}