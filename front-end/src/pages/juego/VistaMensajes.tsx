import { useNavigate } from "react-router-dom";
import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Pin, PinOff, ArrowLeftSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getMensajesDesbloqueados } from "../../assets/utils/sistema.api";

interface MensajeData {
    id: number;
    titulo: string;
    descripcion: string;
    destacado: boolean;
    desbloqueado: boolean;
}
export function VistaMensajes(){
    const [seDestaco, setSeDestaco] = useState(false);
    const navegacion = useNavigate();
    const [lista, setLista] = useState<MensajeData[]>([]);

    async function cargarMensajes(){
        const res = await getMensajesDesbloqueados(1);
        setLista(res.data);
    }
    
    useEffect(()=>{
        cargarMensajes();
    },[]);

    const destacarMensaje = () => {
        setSeDestaco(!seDestaco);
        toast.success('Se destaco un mensaje en la pagina de Inicio.');
    };

    const volverAlJuego = () => {
        navegacion('/juego-educativo/'+location.pathname.split('/').pop());
    }

    return(
        <div>
            <BarraNavegacion/>
            <div className="bg-[url('/fondo.JPG')] bg-cover bg-no-repeat bg-center h-screen w-full bg-fixed bg-transparent">
                <button onClick={volverAlJuego} className="flex items-center justify-center gap-2 px-4 py-1.5 m-1 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border bg-amber-700 text-white border-yellow-400 hover:bg-amber-800 cursor-pointer">
                    <ArrowLeftSquare size={14}/>
                    <span className="whitespace-nowrap hidden md:inline-block">Volver al Juego</span>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {lista.length !== 0 && (
                        <div>
                            {lista.map((mensaje, index) => (
                                <div key={index} className="bg-amber-100 m-10 p-6">
                                    <div className="flex justify-between">
                                        <p className="text-teal-900 font-extrabold">#{mensaje.id}</p>
                                        <button onClick={destacarMensaje} className="rounded-full p-1 bg-white cursor-pointer hover:bg-red-200" title="Destacar Mensaje">
                                            {seDestaco?(
                                                <Pin className="text-red-500 bg-red-200 rounded-full"/>
                                            ):(
                                                <PinOff className="text-red-500"/>
                                            )}
                                        </button>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-center">{mensaje.titulo}</p>
                                        <hr />
                                        <p className="p-2">{mensaje.descripcion}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}