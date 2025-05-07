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

    var recomendacionSegunTierra = '';
    if(tierra === 'arcilloso'){
        recomendacionSegunTierra = "La frecuencia de riego debe ser mayor porque el suelo retiene menos agua"
    }else{
        recomendacionSegunTierra = "La frecuencia de riego debe ser menor porque el suelo retiene mas agua"
    }
    return (
        <div>
            {especie !== '' &&(
            <div>
                <div ref={divRef} className='p-5 bg-green-200 rounded-lg max-w-lg ml-5 mr-5'>
                    {tipo === 'Arbol'?(
                        <Trees className="w-10 h-10 text-green-700"/>
                    ):(
                        <Leaf className="w-10 h-10 text-green-700"/>
                    )}
                    <hr />
                    <div className='grid grid-cols-2 p-3'>
                        <p className='font-sans'><span className='font-semibold'>Especie: </span>{especie}</p>
                        <p className='font-sans'><span className='font-semibold'>Tierra:</span> {tierra}</p>
                    </div>
                    <hr />
                    <div className='p-3'>
                        {clima !== "" &&(
                            <p>En un clima {clima} se estima que lo recomedable para tu planta es:</p>
                        )}
                    </div>
                    {/* <div className='p-2'>
                        {dias !== null  && aguaRiego !== null &&(
                            <div>
                                  <ul className='flex flex-row'> <Calendar/> <span> Regar cada {dias} dias</span></ul>
                                  <ul className='flex flex-row'> <Droplet/>  <span>Con una cantidad de aproximadamente {aguaRiego} litros de agua</span></ul>
                            </div>
                        )}
                    </div> */}
                    <div className='p-2'>
                        {tierra !== "" &&(
                            <div>
                                <ul className='flex flex-row'> <span> De acuerdo al tipo de tierra {tierra} </span></ul>
                                <ul className='flex flex-row'> <Droplet/>  <span>{recomendacionSegunTierra} </span></ul>
                            </div>
                        )}
                    </div>
                    <div className='p-2'>
                        {hojas !== "" &&(
                            <ul className='flex flex-row'> <span> Las hojas de tu planta parecen decir que  {hojas} </span></ul>
                        )}
                    </div>
                </div>
                <button onClick={descargarRecomendacion} className="mt-4 cursor-pointer bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded" title='Descargar recomendacion en .jpg'>
                    <Download />
                </button>
            </div>
            )}
        </div>
    )
}