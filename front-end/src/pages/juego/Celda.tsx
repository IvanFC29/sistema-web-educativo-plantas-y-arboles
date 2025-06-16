import ardilla from '/img_juego/ardilla.png';
import basura from '/img_juego/basura.png';
import cesped from '/img_juego/cesped.png';
import piedra from '/img_juego/piedra.png';
import manzana from '/img_juego/manzana.png';
import nuez from '/img_juego/nuez.png';
import flor from '/img_juego/planta.png';

type CeldaAcciones = {
    tipo:string,
    visible: boolean,
    onDescubrir: () => void;
}
export function Celda({tipo, visible, onDescubrir}: CeldaAcciones){
    const iconos: {[key:string]:string} = {
        'P': piedra,  //obstaculo
        '_': flor,  // camino
        'M': manzana,  // bonus
        'A': ardilla,  // avatar
        'N': nuez,  // bonus
        'F': cesped,  // fuego
        'B': basura   // antibonus
    }
    return (
        <div onClick={onDescubrir} className="flex items-center justify-center border border-gray-300">
            {visible?(
                <img src={iconos[tipo]} alt="img" style={{
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    objectFit: 'cover',
                    display: 'block', 
                }}/>
            ):(
                <img src={iconos['F']} alt="img" className='cursor-pointer' />
            )}
           
        </div>
    )
}