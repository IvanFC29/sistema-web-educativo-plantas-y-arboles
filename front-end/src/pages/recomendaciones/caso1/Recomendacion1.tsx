import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { Leaf, Trees,  Download, Flower2,  Cannabis  } from "lucide-react"; 
import { segunTipoPlanta, segunEstacion, segunDimension } from '../../../assets/utils/recomendaciones';

type Respuesta = {
    especie: string;
    tipoPlanta: string;
    estacion: string;
}

export function RecomendacionTipo1({especie,tipoPlanta,estacion}: Respuesta){
    const divRef = useRef(null);

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
                        <p className='text-center font-semibold'> Nueva Plantacion !!</p>
                        <p className='text-center'> {especie.charAt(0).toUpperCase()+especie.slice(1).toLowerCase()}</p>
                        <br />
                        {tipoPlanta !== '' &&(
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-lime-200 rounded-full p-3">
                                        {tipoPlanta === "arboles" &&(
                                            <Trees className="w-10 h-10 text-lime-700" />
                                        )}
                                        {tipoPlanta === "suculentas" && (
                                            <Leaf className="w-10 h-10 text-lime-700" />
                                        )}
                                        {tipoPlanta === "flores" &&(
                                            <Flower2 className="w-10 h-10 text-lime-700"/>
                                        )}
                                        {tipoPlanta === "arbustos" &&(
                                            <Cannabis className="w-10 h-10 text-lime-700"/>
                                        )}
                                    </div>
                                </div>
                                <div className='m-1.5'>
                                    <p className='font-semibold'>🖈 Ubicacion de tu planta:</p>
                                    <p className='font-sans text-sm ml-1.5'> - {segunTipoPlanta(tipoPlanta)} </p>
                                    <p className='font-sans text-sm ml-1.5'> - {segunDimension(tipoPlanta)}</p>
                                </div>
                            </div>
                        )}
                        <br />
                        {estacion !== '' &&(
                            <div className='m-1.5'>
                                <p className='font-semibold'>🗓 ¿Es buena epoca para plantar?</p>
                                <p className='font-sans text-sm ml-1.5'> - {segunEstacion(estacion)}</p>
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