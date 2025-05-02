import { listaMensajes } from "../../assets/utils/Mensajes";

import { useState, useEffect } from "react";

export function PanelGame(){
    const [mensajeAleatorio, setMensajeAleatorio] = useState(['', '']);

    useEffect(()=> {
        seleccionarMensaje();
    }, []);

    function seleccionarMensaje(){
        const i = Math.floor(Math.random()*4);
        setMensajeAleatorio(listaMensajes(i));
    }
    return(
        <div>
            <button onClick={seleccionarMensaje}>Regar</button>
            <p>titulo: {mensajeAleatorio[0]}</p>
            <p>descripcion: {mensajeAleatorio[1]}</p>
        </div>
    )
}