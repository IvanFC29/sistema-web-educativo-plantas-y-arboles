interface Planta{
    especie: string;
    tipo: string;
    descripcion: string;
}

interface filaPlanta{
    plantaGuardada: Planta;
}

import imagenDefault from '/fotoDefault.jpg';

export function Tarjeta( {plantaGuardada}: filaPlanta){

    const formatear = (palabra:string) =>{
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    };

    return (
        <div className="rounded-lg bg-lime-100 flex m-1 p-1">
            <div className="w-1/4">
                <img src={imagenDefault} alt="Imagen de planta" />
            </div>
            <div className="flex-1">
                <p className="font-semibold">{formatear(plantaGuardada.especie)}</p>
                <p className="text-sm text-gray-500">Tipo de planta: ({formatear(plantaGuardada.tipo)})</p>
                {plantaGuardada.descripcion !== '' && (
                    <p className="text-sm text-teal-800"> <span className="font-semibold">Descripcion:</span> {plantaGuardada.descripcion}</p>
                )}
            </div>
        </div>
    )
}