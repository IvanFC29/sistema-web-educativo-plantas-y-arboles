import { useNavigate } from "react-router-dom";
import { listaReflexiones } from "../../assets/utils/ReflexionesGame";
import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Pin, PinOff } from "lucide-react";
import { useState } from "react";

export function VistaReflexiones(){
    const [seDestaco, setSeDestaco] = useState(false);
    const navegacion = useNavigate();

    var reflexion = listaReflexiones(0);
    console.log(reflexion);

    const destacarReflexion = () => {
        setSeDestaco(!seDestaco);
    };

    const volverAlJuego = () => {
        navegacion('/puzzle-plantar');
    }

    return(
        <div>
            <BarraNavegacion/>
            <div className="bg-[url('/fondo.JPG')] bg-cover bg-no-repeat bg-center h-screen w-full bg-fixed bg-transparent">
                <button onClick={volverAlJuego} className="bg-amber-700 text-white text-center p-2 m-2 border-2 border-yellow-400 cursor-pointer rounded-2xl hover:bg-amber-900">Volver al Juego</button>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-amber-100 m-10 p-6">
                        <div className="flex justify-between">
                            <p className="text-teal-900 font-extrabold">#{reflexion[0]}</p>
                            <button onClick={destacarReflexion} className="rounded-full p-1 bg-white cursor-pointer hover:bg-red-200" title="Destacar Reflexion">
                                {seDestaco?(
                                    <Pin className="text-red-500 bg-red-200 rounded-full"/>
                                ):(
                                    <PinOff className="text-red-500"/>
                                )}
                            </button>
                        </div>
                        <div>
                            <p className="font-semibold text-center">{reflexion[1]}</p>
                            <hr />
                            <p className="p-2">{reflexion[2]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}