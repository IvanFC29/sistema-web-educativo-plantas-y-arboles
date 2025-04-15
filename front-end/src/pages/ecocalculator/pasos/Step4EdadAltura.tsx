import { useForm } from "react-hook-form";

type Acciones = {
    atras: () => void;
    siguiente: () => void;
    datos: (data: any) => void;
    datoActual: any;
};

export function Step4EdadAltura({atras, siguiente, datos, datoActual}: Acciones){
    
    const {register, handleSubmit} = useForm();

    const finalizar = handleSubmit(data => {
        const cantidad = datoActual.cantidadPlantas || 1;
        const plantas = [];
      
        for (let i = 0; i < cantidad; i++) {
          plantas.push({
            edad: Number(data[`edad_${i}`]),
            altura: Number(data[`altura_${i}`]),
            espesura: Number(data[`grosor_${i}`]) 
          });
        }
      
        const datosFinales = {
          ...datoActual, 
          cantidadPlantas: cantidad,
          plantas: plantas
        };
      
        console.log(datosFinales); 
        datos(datosFinales); 
        siguiente(); 
      }); 

    return (
        <div>
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Proporciona la edad, altura y espesura de cada planta.</p>
            <p className="dark:text-gray-500 text-center"> No te preocupes si no sabes las medidas exactas, puedes dar valores aproximados.</p>
            <form onSubmit={finalizar}>
                <div className="mt-10 space-y-6">
                    {[...Array(datoActual.cantidadPlantas || 1)].map((_, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 border p-4 rounded-lg shadow-md">
                        <div className="col-span-full">
                            <p className="dark:text-gray-500 text-2xl"> {datoActual.especiePlanta} {index + 1}</p>
                        </div>

                        <div className="relative z-0 w-full group">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                Edad aproximada (en años)
                            </label>
                            <input
                                type="number"
                                {...register(`edad_${index}`, {required: true})}
                                placeholder="3"
                                className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
                            />
                        </div>

                        <div className="relative z-0 w-full group">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                Altura aproximada (en cm.)
                            </label>
                            <input
                                type="number"
                                {...register(`altura_${index}`, {required: true})}
                                placeholder="4"
                                className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
                            />
                        </div>

                        <div className="relative z-0 w-full group">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                Grosor aproximado (diametro tronco/follaje cm.)
                            </label>
                            <input
                                type="number"
                                {...register(`grosor_${index}`, {required: true})}
                                placeholder="110"
                                className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
                            />
                        </div>
                    </div>
                    ))}
                </div>

                <div className="flex justify-between mt-10">
                    <button type="button" onClick={atras} className="cursor-pointer rounded-lg bg-amber-200 p-2 hover:bg-amber-300">⮜ Volver</button>
                    <button type="submit" 
                        className="text-white font-bold cursor-pointer rounded-lg bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 py-2.5 text-center focus:ring-green-300"
                    > Ver Resultados ⮞</button>
                </div>
            </form>
        </div>
    )
}