import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { Leaf, Trees, Download, Flower2, Cannabis } from "lucide-react"; 
import { plantas} from '../../../assets/utils/recomendaciones';
import { SemillaIcon, PlantinIcon, PlantaJovenIcon } from './svg';

type Respuesta = {
    especie: string;
    tipoPlanta: string;
    etapa: number;
}

export function RecomendacionTipo1({especie,tipoPlanta,etapa}: Respuesta){
    const divRef = useRef(null);

    const lista = ['Jazmin','Pino enano','Tola', 'Cedron'];
    var ejemplo = lista[Math.floor(Math.random()*lista.length)];

    const descargarRecomendacion = async () =>{
        if(divRef.current === null) return;

        const dataUrl = await toPng(divRef.current);
        const link = document.createElement('a');
        link.download = 'mi-imagen.png';
        link.href = dataUrl;
        link.click();
    }

    return(
        <div>
            {especie.length >= 4 &&(
                <div>
                    <div ref={divRef} className='p-5 bg-green-200 rounded-lg max-w-lg ml-5 mr-5'>
                        {/* Título */}
                        <div className="text-center">
                            <p className="font-semibold text-lg">Nueva Plantación !!</p>
                            <p className="capitalize">{especie}</p>
                        </div>
                        <br />
                        {/* Icono central */}
                        {tipoPlanta && (
                            <div className="flex flex-col items-center">
                            <div className="bg-lime-200 rounded-full p-3">
                                {tipoPlanta === "arbol" && <Trees className="w-10 h-10 text-lime-700" />}
                                {tipoPlanta === "suculenta" && <Leaf className="w-10 h-10 text-lime-700" />}
                                {tipoPlanta === "flor" && <Flower2 className="w-10 h-10 text-lime-700" />}
                                {tipoPlanta === "arbusto" && <Cannabis className="w-10 h-10 text-lime-700" />}
                            </div>
                            </div>
                        )}
                        <br />
                         {/* Ubicación */}
                        {tipoPlanta && (
                            <div>
                                <p className="font-semibold flex items-center gap-2">
                                    <span>🖈</span> Ubicación de tu planta: 
                                </p>
                                <p className="text-sm ml-5"> - {plantas[tipoPlanta].ubicacion}</p>
                                <p className="text-sm ml-5"> - Separación recomendada: {plantas[tipoPlanta].separacion}</p>
                            </div>
                        )}
                        {/* Etapa */}
                        {etapa !== -1 && (
                            <div>
                                <p className="font-semibold flex items-center gap-2">
                                    <span>⛏</span> Profundidad de plantado:
                                </p>
                                <p className="text-sm ml-5"> - {plantas[tipoPlanta].etapa[etapa].profundidad}</p>
                                <div className="flex justify-center my-2">
                                    {etapa === 0 && <SemillaIcon />}
                                    {etapa === 1 && <PlantinIcon />}
                                    {etapa === 2 && <PlantaJovenIcon />}
                                </div>
                                <p className="font-semibold flex items-center gap-2 mt-2">
                                    <span>💧</span> Riego inicial:
                                </p>
                                <p className="text-sm ml-5"> - {plantas[tipoPlanta].etapa[etapa].riego}</p>
                            </div>
                        )}
                        <br />
                        {/* Tip rápido */}
                        {tipoPlanta && (
                            <div>
                                <p className="font-semibold flex items-center gap-2">
                                    <span>💡</span> Tip rápido:
                                </p>
                                <p className="text-sm ml-5"> - {plantas[tipoPlanta].tip}</p>
                                <div className='mt-4 p-3 rounded-lg shadow-md text-center bg-amber-100'>
                                    <p className="font-semibold flex items-center gap-2">
                                        <span>👀</span> Dato curioso:
                                    </p>
                                    {tipoPlanta === 'arbol' ?(
                                        <div>
                                            <p className="text-sm ml-5">{plantas[tipoPlanta].altura}</p>
                                            <p className="text-sm ml-5 text-teal-700 font-bold">Cuida que tu arbol no sea un pariente de esta especie o cuida de su posible crecimiento</p>
                                        </div>
                                    ):(
                                        <div>
                                            <p className="text-sm ml-5 text-teal-700 font-bold">La planta de: {ejemplo} es un buen candidato para tu jardin</p> 
                                            <p className="text-sm ml-5 text-teal-700 font-bold">Si tu planta es pariente o cercano a esta especie es una buena opcion</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <button onClick={descargarRecomendacion} className="mt-4 cursor-pointer bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded" title='Descargar recomendacion en .jpg'>
                        <Download />
                    </button>
                </div>
            )}
        </div>
    )
}