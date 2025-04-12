type Acciones = {
    atras: () => void,
    siguiente: () => void,
    datos: (data: any) => void
};

export function Step4EdadAltura({atras, siguiente, datos}: Acciones){
    const finalizar = ()=>{
        datos({});
        siguiente();
    };
    return (
        <div>
             <p>paso 4</p>
             <button onClick={atras}>⬅ Volver</button>
             <button onClick={finalizar} className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Ver Resultado</button>
        </div>
       
    )
}