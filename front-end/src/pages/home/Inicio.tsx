interface Progreso {
    id: number;
    cantidadMsj: number;
    cantidadApzj: number;
}

import { BarraNavegacion } from "../../components/BarraNavegacion"
import { Footer } from "../../components/PiePagina";
import { Link } from "react-router-dom"
import { getProgresoJuego } from "../../assets/utils/sistema.api";
import { useEffect, useState } from "react";

export function Home(){
    const [progresoJuego, setProgresoJuego] = useState<Progreso>();

    async function cargarProgreso() {
        const res = await getProgresoJuego();
        setProgresoJuego(res.data[0]);
        console.log(progresoJuego);
    }

    useEffect(()=> {
        cargarProgreso();
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300 flex flex-col">
            <BarraNavegacion />
            <div className="grid grid-cols-1 md:grid-cols-3 flex-grow">
                <div className="m-10">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white dark:border-gray-700 hover:bg-gray-100">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-teal-900">Conociendo tus Plantas</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Esta seccion te permite registrar tus plantas con estimaciones de cuidado y consejos para plantar</p>
                        <Link to='/conociendo-tu-planta' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Vamos!
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="m-10">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white dark:border-gray-700 hover:bg-gray-100">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-teal-900">Aporte Ambiental</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">¿Conoces cuanto de oxigeno aportas al medio ambiente con las plantas de tu hogar?.</p>
                        <Link to='/aporte-ambiental' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Vamos!
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="m-10" onClick={cargarProgreso}>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white dark:border-gray-700 hover:bg-gray-100">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-teal-900">Mi jardin - Juego</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Descubre mensajes y temas educativos mediante un juego para aprender mas acerca de las plantas y arboles.</p>
                        <Link to={'/juego-educativo/'+progresoJuego?.id} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Vamos!
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>  
            <Footer/>  
        </section>
    )
}