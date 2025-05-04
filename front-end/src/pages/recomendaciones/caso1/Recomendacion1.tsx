import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { Download } from "lucide-react"; 
import { Sprout } from "lucide-react";

type Respuesta = {
    especie: string;
    tipoPlanta: string;
    tipoArbol: string;
    estacion: string;
}

export function RecomendacionTipo1({especie,tipoPlanta,tipoArbol,estacion}: Respuesta){
    const divRef = useRef(null);

    const descargarRecomendacion = async () =>{
        if(divRef.current === null) return;

        const dataUrl = await toPng(divRef.current);
        const link = document.createElement('a');
        link.download = 'mi-imagen.png';
        link.href = dataUrl;
        link.click();
    }
    var recomendarSegunTipo:string = 'una maceta dentro la casa ';
    var recomendacionEstacion:string = '';
    if (tipoPlanta === 'flores' && estacion === 'primavera') {
        recomendacionEstacion = 'Primavera es la mejor época para plantar flores';
    } else if(tipoPlanta === 'arboles' && estacion === 'verano'){
        recomendacionEstacion = 'Es una epoca muy calida para sembrar arboles';
    }
    var recomendacionDimen:string = '';
    if (tipoPlanta === 'flores') {
        recomendacionDimen = 'Puedes plantarlo como a 10 cm de otras flores';
    } else if(tipoPlanta === 'arboles'){
        recomendacionDimen = 'Es mejor un metro de distancia de otro arbol o de construcciones';
    }
    return(
        <div>
            {especie.length >= 4 &&(
                <div>
                    <div ref={divRef} className='p-5 bg-green-200 rounded-lg max-w-lg ml-5 mr-5'>
                        <p className='text-center font-semibold'> Nueva Plantacion !!</p>
                        <p className='flex flex-row font-serif'> <Sprout className="w-10 h-10 text-green-700"/> {especie.charAt(0).toUpperCase()+especie.slice(1).toLowerCase()}</p>
                        <hr />
                        {tipoPlanta !== '' &&(
                            <div>
                                <div className='m-1.5'>
                                    <p className='font-serif'>📍 Ubicacion de tu planta:</p>
                                    <p className='font-sans text-sm ml-1.5'>Al ser una planta que pertence al grupo de "{tipoPlanta}" se recomienda</p>
                                    <li className='font-sans text-sm ml-1.5'>Plantarlo en {recomendarSegunTipo} </li>
                                    {tipoArbol !== '' && tipoPlanta === 'arboles' && (
                                        <div>
                                            {tipoArbol === 'frutales'?(
                                                <li className='font-sans text-sm ml-1.5'>Los arboles {tipoArbol}</li>
                                            ):(
                                                <li className='font-sans text-sm ml-1.5'>Los arboles {tipoArbol}</li>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <hr />
                                <div className='m-1.5'>
                                    <p className='font-serif'>📏 Sobre las dimensiones:</p>
                                    <li className='font-sans text-sm ml-1.5'> {recomendacionDimen}</li>
                                </div>
                            </div>
                        )}
                        <hr />
                        {estacion !== '' &&(
                            <div className='m-1.5'>
                                <p className='font-serif'>📅Es buena epoca?</p>
                                <li className='font-sans text-sm ml-1.5'>{recomendacionEstacion}</li>
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