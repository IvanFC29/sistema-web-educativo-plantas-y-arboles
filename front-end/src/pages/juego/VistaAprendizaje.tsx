import { useNavigate } from "react-router-dom";
import { BarraNavegacion } from "../../components/BarraNavegacion";
import { ArrowLeftSquare, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { getAprendizajeDesbloqueado } from "../../assets/utils/sistema.api";

interface AprendizajeData {
    id: number;
    titulo: string;
    contenido: string;
    imagen: string;
    fuente: string;
    video: string;
    desbloqueado: boolean;
}

export function VistaAprendizaje(){
    const [expandidoIndex, setExpandidoIndex] = useState<number | null>(null);
    const [lista, setLista] = useState<AprendizajeData[]>([]);
    const navegacion = useNavigate();

    async function cargarAprendizajes(){
        const res = await getAprendizajeDesbloqueado(1);
        setLista(res.data);
    }

    useEffect(()=> {
        cargarAprendizajes();
    }, []);

    const volverAlJuego = () => {
        navegacion('/juego-educativo/'+location.pathname.split('/').pop());
    }
    const toggleExpandido = (index: number) => {
        setExpandidoIndex(prev => (prev === index ? null : index));
    };

    return(
        <div>
            <BarraNavegacion/>
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
                <button onClick={volverAlJuego} className="flex items-center justify-center gap-2 px-4 py-1.5 m-1 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border bg-amber-700 text-white border-yellow-400 hover:bg-amber-800 cursor-pointer">
                    <ArrowLeftSquare size={14}/>
                    <span className="whitespace-nowrap hidden md:inline-block">Volver al Juego</span>
                </button>
                <div className="p-4 md:p-8 space-y-4">
                    {lista.map((aprendizaje, index) => (
                        <div
                        key={index}
                        className="border border-gray-300 rounded-md shadow-md bg-white overflow-hidden transition-all"
                        >
                        {/* CABECERA */}
                        <button
                            className="w-full flex items-center justify-between p-4 bg-amber-100 hover:bg-amber-200 transition-colors"
                            onClick={() => toggleExpandido(index)}
                        >
                            <h2 className="font-bold text-start text-teal-900">
                            {`Tema ${index + 1}: ${aprendizaje.titulo}`}
                            </h2>
                            {expandidoIndex === index ? (
                            <ChevronUp className="text-gray-600" />
                            ) : (
                            <ChevronDown className="text-gray-600" />
                            )}
                        </button>

                        {/* CONTENIDO EXPANDIBLE */}
                        {expandidoIndex === index && (
                            <div className="p-4 md:p-6 bg-amber-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <p className="text-gray-800">{aprendizaje.contenido}</p>
                                <div className="flex justify-center">
                                <img
                                    src={aprendizaje.imagen}
                                    alt="Ilustración"
                                    className="rounded-md  h-auto max-w-xs md:max-w-xl"
                                />
                                </div>
                            </div>

                            <div className="mt-6 text-sm text-gray-700">
                                <p>
                                Fuente:
                                <a
                                    href={aprendizaje.fuente}
                                    className="text-emerald-900 font-semibold ml-1 underline"
                                    target="_blank"
                                >
                                    Ver artículo
                                </a>
                                </p>
                                <div className="mt-3">
                                <p>Video relacionado:</p>
                                <iframe
                                    width="300"
                                    height="185"
                                    src={aprendizaje.video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-md mt-2"
                                ></iframe>
                                </div>
                            </div>
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}