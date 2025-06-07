import ardilla from '/img_juego/ardilla.png';
import basura from '/img_juego/basura.png';
import cesped from '/img_juego/cesped.png';
import piedra from '/img_juego/piedra.png';
import manzana from '/img_juego/manzana.png';
import nuez from '/img_juego/nuez.png';
import flor from '/img_juego/planta.png';

export function Celda({tipo}: {tipo: string}){
    const iconos: {[key:string]:string} = {
        'P': piedra,  //obstaculo
        '_': cesped,  // camino
        'M': manzana,  // bonus
        'A': ardilla,  // avatar
        'N': nuez,  // bonus
        'F': flor,  // fuego
        'B': basura   // antibonus
    }
    return (
        <div className="flex items-center justify-center border border-gray-300">
            <img src={iconos[tipo] || '❓'} alt="ardilla"  style={{
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                objectFit: 'cover',
                display: 'block', // elimina espacios en línea
                }}/>
        </div>
    )
}