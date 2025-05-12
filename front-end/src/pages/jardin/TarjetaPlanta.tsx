interface Planta{
    id: number
    especie: string;
    tipo: string;
    descripcion: string;
}

interface filaPlanta{
    plantaGuardada: Planta;
}

import imagenDefault from '/fotoDefault.png';
import { useState } from 'react';

export function Tarjeta( {plantaGuardada}: filaPlanta){
    const [modalAbierto, setModalAbierto] = useState(false);
    const [descripcionActual, setDescripcionActual] = useState("");

    const formatear = (palabra:string) =>{
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    };

    const mostrarModal = (descripcion:string) =>{
        setDescripcionActual(descripcion);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setDescripcionActual("");
    };

    const enlace:string = '/aportes-plantas/'+plantaGuardada.id;
    return (
        <div className="rounded-lg bg-lime-100 flex m-1 p-1">
            <div className="w-1/4">
                <img src={imagenDefault} alt="Imagen de planta" />
            </div>
            <div className="flex-1">
                <p className="font-semibold">{formatear(plantaGuardada.especie)}</p>
                <p className="text-sm text-gray-500">Tipo de planta: ({formatear(plantaGuardada.tipo)})</p>
                <hr />
                <div className='grid grid-cols-2'>
                    <button onClick={() => mostrarModal(plantaGuardada.descripcion)} className='text-green-700 cursor-pointer text-sm font-medium'>Descripcion</button>
                    <a href={enlace} className='text-teal-600 cursor-pointer text-sm font-medium'>Historial de Aportes Ambientales</a>
                </div>
            </div>
            {modalAbierto && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                        <h3 className="text-lg font-semibold mb-2">Descripción completa</h3>
                        <div className='m-auto'><img src={imagenDefault} alt="Imagen de planta" /></div>
                        <p className="text-gray-700">{descripcionActual}</p>
                        <button onClick={cerrarModal}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}