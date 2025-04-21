import { listaMensajes } from "../../assets/utils/Mensajes";
import planta0 from '../../assets/planta0.jpg';
import planta1 from '../../assets/planta1.jpg';
import planta2 from '../../assets/planta2.jpg';
import planta3 from '../../assets/planta3.jpg';
import planta4 from '../../assets/planta4.jpg';
import { useState, useEffect } from "react";

export function PanelGame(){
    const [mensajeAleatorio, setMensajeAleatorio] = useState(['', '']);
    const [dibujoArbol, setDibujoArbol] = useState('');

    const sprites: string[] = [
        planta0, 
        planta1, 
        planta2,
        planta3, 
        planta4
    ]

    useEffect(()=> {
        seleccionarMensaje();
    }, []);

    function seleccionarMensaje(){
        const i = Math.floor(Math.random()*4);
        setMensajeAleatorio(listaMensajes(i));
        setDibujoArbol(sprites[0]);
    }
    return(
        <div>
            <button onClick={seleccionarMensaje}>Regar</button>
            <p>titulo: {mensajeAleatorio[0]}</p>
            <p>descripcion: {mensajeAleatorio[1]}</p>
            {dibujoArbol ? (
            <img src={dibujoArbol} alt="Descripción" />
            ) : null}
        </div>
    )
}