import { useForm } from "react-hook-form"

type Acciones = {
    atras: () => void,
    siguiente: () => void,
    datos: (data: any) => void
};

export function Step2Especie({atras, siguiente, datos}: Acciones){

    const {register, handleSubmit, formState: {errors}} = useForm();

    const registrarPlantas = handleSubmit(data => {
        console.log(data);
        datos({ especiePlanta: data});
        siguiente();
    })

    return(
        <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">¿Cual es el nombre de la planta?</h2>
            <form onSubmit={registrarPlantas} className="max-w-md mx-auto mt-10">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" id="nombrePlanta"
                        {...register("nombrePlanta", {required: true})}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "/>     
                        {errors.nombrePlanta && <span className="text-orange">No ingresaste un nombre</span>}
                    <label htmlFor="nombrePlanta" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-800 peer-focus:dark:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre de planta / arbol</label>
                </div>
                <button onClick={atras}>⬅ Volver</button>
                <button  type="submit">Avanzar ➡</button>
            </form>
        </div>
    )
}