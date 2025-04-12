type Acciones = {
    atras: () => void,
    siguiente: () => void,
    datos: (data: any) => void
};

export function Step3Cantidad({atras, siguiente, datos}: Acciones){
    const seleccionar = (cantidad: Number)=>{
        datos({cantidadPlantas: cantidad});
        siguiente();
    };
    return (
        <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">¿Cuantas plantas tienes?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div onClick={() => seleccionar(1)} className="cursor-pointer m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-sky-200 dark:border-sky-200 dark:hover:bg-sky-100">
                    <p className="text-4xl text-center">1</p>
                </div>     
                <div onClick={() => seleccionar(3)} className="cursor-pointer m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-sky-200 dark:border-sky-200 dark:hover:bg-sky-100">
                    <p className="text-4xl text-center">3</p>
                </div>    
                <div onClick={() => seleccionar(5)} className="cursor-pointer m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-sky-200 dark:border-sky-200 dark:hover:bg-sky-100">
                    <p className="text-4xl text-center">5</p>
                </div>
            </div>    
            <button onClick={atras}>⬅ Volver</button>
        </div>
    )
}