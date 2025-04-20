import { useEffect, useState } from "react";
import { getPlantas } from "../../assets/utils/sistema.api";

export function Tarjetas(){
    const [lista, setLista] = useState([]);

    useEffect(() => {
        async function cargarListaPlantas(){
            const respuesta = await getPlantas();
            setLista(respuesta.data);
            console.log(respuesta.data);
        }
        cargarListaPlantas()
    }, []);

    return (
        <div>
            {/* <p>.${lista === null ? `<p>vacio</p>`:`<p>lleno</p>`}</p> */}
            
        </div>
    )
}