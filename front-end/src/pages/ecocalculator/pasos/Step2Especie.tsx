import { useForm } from "react-hook-form"

type Acciones = {
    atras: () => void;
    siguiente: () => void;
    datos: (data: any) => void;
    datoActual : any;
};

export function Step2Especie({atras, siguiente, datos, datoActual}: Acciones){

    const {register, handleSubmit, formState: {errors}} = useForm();

    const registrarPlantas = handleSubmit(data => {
        datos({ especiePlanta: data.nombrePlanta});
        siguiente();
    })

    const nombreEspecie = datoActual?.especiePlanta; 

    return(
        <div>
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">¿Cual es el nombre de la planta?</p>
            <form onSubmit={registrarPlantas} className="max-w-md mx-auto mt-10">
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="nombrePlanta" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre de planta / arbol</label>
                    <input type="text" id="nombrePlanta"
                        {...register("nombrePlanta", {required: true})}
                        defaultValue={nombreEspecie}
                        className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" />     
                        {errors.nombrePlanta && <span className="text-orange-600">No ingresaste un nombre</span>}
                </div>
                <button className="cursor-pointer  ml-2 mr-2 rounded-lg mt-10 bg-amber-200 p-2 hover:bg-amber-300" type="button" onClick={atras}>⮜ Volver</button>
                <button className="cursor-pointer rounded-lg mt-10 bg-sky-200 p-2 hover:bg-sky-300" type="submit">Avanzar ⮞</button>
            </form>
        </div>
    )
}