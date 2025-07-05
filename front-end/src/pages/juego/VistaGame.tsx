import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Salir } from "../../components/Salir"
import { PanelGame } from "./PanelGame";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProgresoJuego } from "../../assets/utils/sistema.api";

export function VistaGame(){
    const navegacion = useNavigate();
    const [mostrar, setMostrar] = useState(false);
    const [habilitarBtnMsj, setHabilitarBtnMsj] = useState(false);
    const [habilitarBtnApzj, setHabilitarBtnApzj] = useState(false);

    const mostrarInstruccion = () => setMostrar(true);
    const cerrarInstruccion = () => setMostrar(false);

    useEffect(()=>{
        async function habilitarBtnMensajes(){
            const progresoActual = await getProgresoJuego();
            if (progresoActual.data[0].cantidadMsjDesbloqueados === 0) {
                setHabilitarBtnMsj(false);
            }else{
                setHabilitarBtnMsj(true);
            }
        }
        async function habilitarBtnAprendizajes(){
            const progresoActual = await getProgresoJuego();
            if (progresoActual.data[0].cantidadApzjDesbloqueados === 0) {
                setHabilitarBtnApzj(false);
            }else{
                setHabilitarBtnApzj(true);
            }
        }
        habilitarBtnMensajes();
        habilitarBtnAprendizajes();
    });

    const mostrarReflexiones = () => {
        console.log('Aqui iran las reflexiones');
        console.log(habilitarBtnMsj);
        
        navegacion('/mis-mensajes-encontrados');
    }

    const mostrarAprendizajes = () => {
        console.log('Aqui iran los aprendizajes');
        console.log(habilitarBtnApzj);
        
        navegacion('/mis-aprendizajes');
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <BarraNavegacion />
            <Salir/>
            <div className="p-2 m-0 flex flex-row justify-center bg-amber-100">
                <button onClick={mostrarInstruccion} className="bg-amber-700 text-white text-center p-2 m-2 border-2 border-yellow-400 cursor-pointer rounded-2xl hover:bg-amber-900">¿Como Jugar?</button>
                <button onClick={mostrarReflexiones} disabled={!habilitarBtnMsj} className="bg-amber-700 text-white text-center p-2 m-2 border-2 border-yellow-400 cursor-pointer rounded-2xl hover:bg-amber-900">Para tomar en cuenta</button>
                <button onClick={mostrarAprendizajes} disabled={!habilitarBtnApzj} className="bg-amber-700 text-white text-center p-2 m-2 border-2 border-yellow-400 cursor-pointer rounded-2xl hover:bg-amber-900">Aprendizaje</button>
            </div>
            <div className="bg-[url('/fondo.JPG')] bg-cover bg-no-repeat bg-center h-full w-full bg-fixed bg-transparent">
                <PanelGame/>   
            </div>
            {mostrar && (
                <div className="fixed z-10 inset-0 overflow-y-auto bg-opacity-50 flex items-center justify-center">
                    <div className="bg-amber-200 border-green-700 border-2 rounded-lg shadow-xl overflow-hidden">
                        <div className="px-6 py-4">
                        <p className="font-bold text-xl mb-2 text-center"> ¿Como Jugar?</p>
                            <p className="mt-5">- Desplazate alrededor del jardin junto a la ardilla </p>
                            <p className="mt-1">- Busca nueces y manzanas </p>
                            <p className="mt-1">- Para encontrar objetos haz click en las flores cera de ti para descubrir lo que hay detras </p>
                            <p className="mt-1">- Descubre temas de aprendizaje acumulando tres manzanas </p>
                            <p className="mt-1">- Descubre mensajes de reflexion acumulando tres nueces </p>
                            <p className="mt-1">- Cuidate de los montones de basura, te haran perder salud </p>
                            <p className="mt-1">- Cada busqueda es diaria, luedo de recorrer los 5 laberintos termina el juego diario </p>   
                        </div>
                        <div className="px-6 py-4 bg-amber-200 text-right">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2 cursor-pointer"
                                onClick={cerrarInstruccion}> Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}       
        </div>
    )
}