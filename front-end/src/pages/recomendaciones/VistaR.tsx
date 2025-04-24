import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Salir } from "../../components/Salir"

export function VistaR(){
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />
            <Salir/>    
            <form action="">
                <div>
                    <p className="text-xl dark:text-teal-900 font-semibold"> Elije tu planta</p>
                    <div>

                    </div>
                </div>
                <div>
                    <p className="text-xl dark:text-teal-900 font-semibold"> Elije el tipo de tierra en el que estan tus plantas</p>
                    <div>
                        <label htmlFor="arenoso">Tierra Arenosa</label>
                        <input type="radio" name="tipoTierra" id="arenoso" />
                    </div>
                    <div>
                        <label htmlFor="pedregoso">Tierra Pedregosa</label>
                        <input type="radio" name="tipoTierra" id="pedregoso" />
                    </div>
                </div>
                <div>
                    <p className="text-xl dark:text-teal-900 font-semibold"> Elije el clima actual</p>
                    <div>
                        <label >Soleado / Caluroso</label>
                        <input type="radio" name="clima" />
                    </div>
                    <div>
                        <label>LLuvioso</label>
                        <input type="radio" name="clima"/>
                    </div>
                    <div>
                        <label >Templado / nublado</label>
                        <input type="radio" name="clima" />
                    </div>
                    <div>
                        <label >Vientos / Gelido</label>
                        <input type="radio" name="clima" />
                    </div>
                </div>
            </form>
        </div>
    )
}