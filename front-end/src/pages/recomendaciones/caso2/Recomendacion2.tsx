import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { Leaf, Trees, Download, Calendar, Droplet } from "lucide-react"; 

type Respuesta = {
    especie: string;
    tipo: string;
    dias: number;
    aguaRiego: number;
    tierra: string;
    clima: string;
    hojas:string;
}

export function RecomendacionTipo2({especie, tipo, dias, aguaRiego, tierra, clima, hojas}: Respuesta){
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
            <div ref={divRef} className='p-5 bg-green-200 rounded-lg max-w-lg ml-20 mr-20'>
                {tipo === 'Arbol'?(
                    <Trees className="w-10 h-10 text-green-700"/>
                ):(
                    <Leaf className="w-10 h-10 text-green-700"/>
                )}
                <hr />
                <div className='grid grid-cols-2 p-3'>
                    <p className='font-sans'><span className='font-semibold'>Especie: </span>{especie}</p>
                    <p className='font-sans'><span className='font-semibold'>Tipo:</span> {tipo}</p>
                    <p className='font-sans'><span className='font-semibold'>Tierra:</span> {tierra}</p>
                    <p className='font-sans'><span className='font-semibold'>Hojas:</span> {hojas}</p>
                </div>
                <hr />
                <div className='p-3'>
                    <p>En un clima {clima} se estima que lo recomedable para tu planta es:</p>
                </div>
                <div className='p-2'>
                    <ul className='flex flex-row'> <Calendar/> <span> Regar cada {dias} dias</span></ul>
                    <ul className='flex flex-row'> <Droplet/>  <span>Con una cantidad de aproximadamente {aguaRiego} litros de agua</span></ul>
                </div>
            </div>
            <button onClick={descargarRecomendacion} className="mt-4 cursor-pointer bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded" title='Descargar recomendacion en .jpg'>
                <Download />
            </button>
        </div>
    )
}