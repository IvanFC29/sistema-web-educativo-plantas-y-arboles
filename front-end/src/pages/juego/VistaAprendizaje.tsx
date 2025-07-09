import { useNavigate } from "react-router-dom";
import { BarraNavegacion } from "../../components/BarraNavegacion";
import { Pin, PinOff } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { getAprendizajeDesbloqueado } from "../../assets/utils/sistema.api";

interface AprendizajeData {
    id: number;
    titulo: string;
    contenido: string;
    imagen: string;
    fuente: string;
    video: string;
    destacado: boolean;
    desbloqueado: boolean;
}

export function VistaAprendizaje(){
    const [seDestaco, setSeDestaco] = useState(false);
    const [expandido, setExpandido] = useState(false);
    const [lista, setLista] = useState<AprendizajeData[]>([]);
    
    const contenedorRef = useRef<HTMLDivElement>(null);
    const navegacion = useNavigate();

    async function cargarAprendizajes(){
        const res = await getAprendizajeDesbloqueado(1);
        setLista(res.data);
    }

    useEffect(()=> {
        cargarAprendizajes();
        const clickFuera = (e: MouseEvent) => {
            if (
              contenedorRef.current &&
              !contenedorRef.current.contains(e.target as Node)
            ) {
              setExpandido(false);
            }
          };
          document.addEventListener("click", clickFuera);
          return () => document.removeEventListener("click", clickFuera);
    }, []);

    const destacarTema = () => {
        setSeDestaco(!seDestaco);
        toast.success('Se destaco un tema de Aprendizaje en la pagina de Inicio.');
    };

    const volverAlJuego = () => {
        navegacion('/juego-educativo/'+location.pathname.split('/').pop());
    }

    return(
        <div>
            <BarraNavegacion/>
            <div className="bg-[url('/fondo.JPG')] bg-cover bg-no-repeat bg-center min-h-screen max-h-full w-full bg-fixed bg-transparent">
                <button onClick={volverAlJuego} className="bg-amber-700 text-white text-center p-2 m-2 border-2 border-yellow-400 cursor-pointer rounded-2xl hover:bg-amber-900">Volver al Juego</button>
                <div className="grid grid-cols-1 relative">
                    {lista.length === 0? (
                        <div></div>
                    ): (
                        <div>
                            {lista.map((aprendizaje, index) => (
                                <div key={index} ref={contenedorRef} className={`bg-amber-100 mt-10 ml-5 mr-5  mb-10 p-1 transition-all overflow-hidden shadow-md md:p-6 md:ml-20 md:mr-20 ${ expandido ? "max-h-full" : "max-h-[150px]"}`}>
                                    <div className="flex justify-between">
                                        <p className="text-teal-900 font-extrabold">#{aprendizaje.id}</p>
                                        <button onClick={destacarTema} className="rounded-full p-1 bg-white cursor-pointer hover:bg-red-200" title="Destacar aprendizaje">
                                            {seDestaco?(
                                                <Pin className="text-red-500 bg-red-200 rounded-full"/>
                                            ):(
                                                <PinOff className="text-red-500"/>
                                            )}
                                        </button>
                                    </div>
                                    <div className="pl-7 pr-7">
                                        <p className="font-semibold text-center">{aprendizaje.titulo.toUpperCase()}</p>
                                        <hr />
                                        <div className="pl-7 pr-7 grid grid-cols-1 md:grid-cols-2">
                                            <p className="p-2">{aprendizaje.contenido}</p>
                                            <div className="m-4">
                                                <img src={aprendizaje.imagen} alt="Ilustracion Del Tema" width={400} height={400}/>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="p-10">
                                        <p>Fuente de informacion del tema: <span><a className="text-emerald-950 font-bold" href={aprendizaje.fuente} target="_blank"> Fotosíntesis: qué es, fases e importancia </a></span></p>
                                        <div className="p-2">
                                            <p>Obten mas informacion en el siguiente video:</p>
                                            <iframe width="300" height="185" src={aprendizaje.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <button onClick={()=>{setExpandido(!expandido)}} title={expandido? "Ver menos": "Ver mas"} className="rounded-full pr-1 pl-1 absolute bottom-11 bg-amber-100 hover:bg-amber-200 text-gray-700 cursor-pointer">
                                        {expandido?  "▲" : "▼"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}