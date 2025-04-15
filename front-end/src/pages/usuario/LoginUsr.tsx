import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function(){
    const navegador = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();

    const ingresar = handleSubmit(data =>{
        console.log(data);
        console.log('Se presiono el boton');
        navegador('/inicio');
    });

    return(
        <div className="w-full max-w-sm p-4 bg-white border border-green-400 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-white dark:border-gray-700">
            <form  onSubmit={ingresar} className="space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Correo Electronico</label>
                    <input type="email" id="email" 
                        {...register('email', {required:true})}
                        className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" placeholder="nombre@gmail.com"/>
                        {errors.email && <span className="text-orange-600">Campo no valido</span>} 
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Contraseña</label>
                    <input type="password" id="password" 
                        {...register('password', {required:true})} 
                        className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black"  placeholder="••••••••"/>
                        {errors.password && <span className="text-orange-600">Campo no valido</span>}
                </div>
                <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Ingresar</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-700">
                    Todavia no tienes una cuenta? <a href="#" className="text-green-700 hover:underline dark:text-green-500">Registrate</a>
                </div>
            </form>
        </div>
    )
}