import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { Download, Droplet } from "lucide-react"; 
import { plantas } from '../../../assets/utils/recomendaciones';

type Respuesta = {
    especie: string;
    tipo: string;
    tierra: string;
    clima: string;
    hojas:string;
}

export function RecomendacionTipo2({especie, tipo, tierra, clima, hojas}: Respuesta){
    const divRef = useRef(null);
    
    const descargarRecomendacion = async () =>{
        if(divRef.current === null) return;

        const dataUrl = await toPng(divRef.current);
        const link = document.createElement('a');
        link.download = 'mi-imagen.png';
        link.href = dataUrl;
        link.click();
    }

    return (
        <div>
            {especie !== '' &&(
            <div>
                <div ref={divRef} className='p-5 bg-green-200 rounded-lg max-w-lg ml-5 mr-5'>
                    <p className='text-center font-semibold'> Cuidados Basicos </p>
                    <p className='text-center'> {especie.charAt(0).toUpperCase()+especie.slice(1).toLowerCase()}</p>
                    <br />
                    <div className="flex flex-col items-center">
                        <div className="bg-lime-200 rounded-full p-3">
                            <Droplet  className="w-10 h-10 text-lime-700" /> 
                        </div>
                    </div>
                    <div>
                        <p className='font-sans text-sm ml-1.5'>{plantas[tipo].riego}</p>
                    </div>
                    {tierra !== "" &&(
                        <div className='m-1.5'>
                           <p className='font-semibold'> Sobre la tierra </p>
                           <p className='font-sans text-sm ml-1.5'> - {plantas[tipo].tierra[tierra]}</p>
                        </div>
                    )}
                    <br />
                    {clima !== "" &&(
                        <div className='m-1.5'>
                            <p className='font-semibold'> Sobre el Clima </p>
                            <p className='font-sans text-sm ml-1.5'> -{plantas[tipo].clima[clima]} </p>
                        </div>
                    )}
                    <br />
                    {hojas !== "" &&(
                        <div className='m-1.5'>
                            <p className='font-semibold'> Sobre las hojas </p>
                            <p className='font-sans text-sm ml-1.5'> - {plantas[tipo].hojas[hojas]} </p>
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