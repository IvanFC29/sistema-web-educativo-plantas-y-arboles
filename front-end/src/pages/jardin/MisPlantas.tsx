import { BarraNavegacion } from "../../components/BarraNavegacion"
export function MisPlantas(){
    return (
        <section>
            <BarraNavegacion />     
            <form className="max-w-md mx-auto mt-10">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="nombrePlanta" id="nombrePlanta" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="nombrePlanta" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-800 peer-focus:dark:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre de planta / arbol</label>
                </div>
                <button type="submit" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar</button>
            </form>
            <div className="max-w-md mx-auto mt-10">
                <p className="text-xl">🌱</p>
                <p>Sin plantas en tu jardin </p>
            </div>
        </section>
    )
} 