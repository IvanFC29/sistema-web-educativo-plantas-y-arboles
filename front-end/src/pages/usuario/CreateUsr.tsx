import { useForm } from "react-hook-form";
import { Salir } from "../../components/Salir";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function CreateUsr(){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [mostrarError,  setMostrarError] = useState(false);
    const [mostrarError2, setMostrarError2] = useState(false);
    const [passwordRepetido, setPasswordRepetido] = useState('');
    const navegacion = useNavigate();

    const crearCuenta = handleSubmit(data => {
        console.log(typeof(passwordRepetido));
        
        if (passwordRepetido === '') {
            setMostrarError2(true);
        }else if (passwordRepetido === data.password) {
            setMostrarError(false);
            setMostrarError2(false)
            console.log('exito');
            /** TO DO */ 
            //guardar los datos en la base de datos
            navegacion('/index');
            toast.success('Cuenta creada correctamente!!');
        }else{
            setMostrarError(true);
            console.log('los passwords no coinciden');   
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <Salir/>
            <p className="text-center text-2xl text-teal-800 m-3">Bienvenido!! Crea una cuenta para acceder al sistema </p>
            <div className="w-full max-w-sm p-4 bg-white border border-green-400 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-white dark:border-gray-700 mx-auto m-3">
                <form onSubmit={crearCuenta}>
                    <div>
                        <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre/s</label>
                        <input type="text" id="nombre" 
                            {...register('nombre', {required:true})} 
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" placeholder="Nombre completo"/>
                            {errors.nombre && <span className="text-orange-600 text-sm">Este campo esta vacio</span> }
                    </div>
                    <div>
                        <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900">Apellido/s</label>
                        <input type="text" id="apellido" 
                            {...register('apellido', {required:true})} 
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" placeholder="Apellido/s"/>
                            {errors.apellido && <span className="text-orange-600 text-sm">Este campo esta vacio</span> }
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Correo Electronico</label>
                        <input type="email" id="email" 
                            {...register('email', {required:true})}
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" placeholder="nombre@gmail.com"/>
                            {errors.email && <span className="text-orange-600 text-sm">Campo no valido</span>} 
                    </div>
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Nombre de usuario</label>
                        <input type="text" id="username" 
                            {...register('username', {required:true})}
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" placeholder="user12"/>
                            {errors.username && <span className="text-orange-600 text-sm">Este campo esta vacio</span> }
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Contraseña</label>
                        <input type="password" id="password" 
                            {...register('password', {required:true})} 
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black"  placeholder="••••••••"/>
                            {errors.password && <span className="text-orange-600 text-sm">Campo no valido</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Repite Contraseña</label>
                        <input type="password"
                            onChange={(e)=>setPasswordRepetido(e.target.value)}
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black"  placeholder="••••••••"/>
                            {mostrarError && (
                                <span className="text-orange-600 text-sm">Las contrasenias no coinciden <br /></span>
                            )}
                            {mostrarError2 && (
                                <span className="text-orange-600 text-sm">Este campo esta vacio</span>
                            )}
                    </div>
                    <div className="mt-2">
                        <button type="submit" className="cursor-pointer w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Crear Cuenta</button>
                    </div>
                </form>
            </div>
        </div>

    )
}