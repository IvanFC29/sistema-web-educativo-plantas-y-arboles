import { useState, useEffect } from "react";
import { RecomendacionTipo1 } from "./Recomendacion1";
import { findDescripcion } from "../../../assets/utils/sistema.api";
import { useForm } from "react-hook-form";
import { createPlanta } from "../../../assets/utils/sistema.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Resultado = {
    especie: string;
    tipoPlanta: string;
    tipoArbol: string; 
    estacion: string;
}
type PlantaData = {
    especie: string;
    descripcion: string;
    tipo: string;
    usuario: number; 
};

export function Layout1(){
    const [especie, setEspecie] = useState('');
    const [tipoPlanta, setTipoPlanta] = useState('');
    const [tipoArbol, setTipoArbol] = useState('');
    const [descripcion, setDescripcion] = useState('');
    
    const [estacion, setEstacion] =  useState('');
    const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
    const [divResultado, setDivResultado] = useState<Resultado | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<PlantaData>();
    const navegacion = useNavigate();

    useEffect(() => {
        const nuevaRecomendacion: Resultado = {
            especie: especie,
            tipoPlanta: tipoPlanta,
            tipoArbol: tipoArbol,
            estacion: estacion
        };

        setDivResultado(nuevaRecomendacion);

        if (mostrarDescripcion && especie.trim() !== "") {
            async function busquedaDescripcion(especie: string) {
                try {
                    const respuesta = await findDescripcion(especie);
                    console.log("Respuesta API:", respuesta);
                    setDescripcion(respuesta.data.descripcion);  
                    setValue("descripcion", respuesta.data.descripcion);
                    setError(null);
                } catch (err: any) {
                    console.error("Error:", err);
                    setDescripcion("");
                    setError("No se pudo obtener la descripción");
                }
            }
            busquedaDescripcion(especie);
          } else {
            setDescripcion('');
            setError(null);
          }
    },[especie,descripcion,tipoPlanta,tipoArbol,estacion, mostrarDescripcion]);

    const guardarPlanta = handleSubmit(async (data: PlantaData) => {
        const idUser: number = 1;
        const planta = {
            ...data,
            usuario: idUser,
        };
        try {
          const res = await createPlanta(planta);
          console.log(res);
        } catch (error: any) {
          console.error("Error del servidor:", error.response?.data); 
        }
        
        navegacion('/mis-plantas');
        toast.success('Planta agregada a tu Jardin');
      });

    return(
        <div className="grid grid-cols-1 md:flex m-1">
            <div className="flex-1 p-4">
                <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                    <div onSubmit={guardarPlanta}>
                        <label className="text-sm font-medium">Escribe la especie de tu planta</label>
                        <input type="text" onChange={(e) => {
                                const valor = e.target.value;
                                setEspecie(valor);
                                setValue('especie', valor); 
                            }}
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" />
                            {errors.especie && <span className="text-orange-600">No ingresaste un nombre de planta</span> }
                    </div>
                    <label >
                        <input type="checkbox"  checked={mostrarDescripcion} 
                        onChange={() => setMostrarDescripcion(!mostrarDescripcion)}/> 
                        Buscar una descripcion de la planta
                    </label>
                    <br />
                    {/* {errors.descripcion && <span className="text-orange-600">No buscaste una descripcion de tu planta</span>} */}
                    {mostrarDescripcion && (
                        <div className="m-1.5">
                            {descripcion && <p className="text-sm text-teal-800"><strong>Descripción:</strong> {descripcion}</p>}
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    )}
                    <div className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                        <p className="text-sm font-medium mb-3">Tu planta puede pertenecer a uno de estos tipos</p>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <div className="p-2 mx-auto">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${tipoPlanta.includes('arboles') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="arboles"
                                        onChange={(e) => {
                                            const valor = e.target.value;
                                            setTipoPlanta(valor);
                                            setValue('tipo', valor);
                                        }}
                                        checked={tipoPlanta.includes('arboles')}
                                        name="tipoPlanta" />
                                        <span className="text-sm font-medium">Arboles</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${tipoPlanta.includes('arbustos') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="arbustos"
                                         onChange={(e) => {
                                            const valor = e.target.value;
                                            setTipoPlanta(valor);
                                            setValue('tipo', valor);
                                        }}
                                        checked={tipoPlanta.includes('arbustos')}
                                        name="tipoPlanta" />
                                        <span className="text-sm font-medium">Arbustos</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${tipoPlanta.includes('flores') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="flores"
                                        onChange={(e) => {
                                            const valor = e.target.value;
                                            setTipoPlanta(valor);
                                            setValue('tipo', valor);
                                        }}
                                        checked={tipoPlanta.includes('flores')}
                                        name="tipoPlanta" />
                                        <span className="text-sm font-medium">Flores</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${tipoPlanta.includes('suculentas') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="suculentas"
                                         onChange={(e) => {
                                            const valor = e.target.value;
                                            setTipoPlanta(valor);
                                            setValue('tipo', valor);
                                        }}
                                        checked={tipoPlanta.includes('suculentas')}
                                        name="tipoPlanta" />
                                        <span className="text-sm font-medium">Suculentas</span>
                                </label>
                            </div>
                            {errors.tipo && <span className="text-orange-600">No seleccionaste el tipo de planta</span>}
                        </div>  
                            {tipoPlanta === 'arboles' &&(
                                <div className="m-3">
                                    <p className="text-sm font-medium">Los arboles pueden ser </p>
                                    <div className="grid grid-cols-2 p-3 ml-8 mr-8">
                                        <div className="p-2 mx-auto">
                                            <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                                ${tipoArbol.includes('frutales') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                                <input className="hidden" type="radio" value="frutales"
                                                    onChange={e => setTipoArbol(e.target.value)}
                                                    checked={tipoArbol.includes('frutales')}
                                                    name="tipoArbol" />
                                                    <span className="text-sm font-medium">Frutales</span>
                                            </label>
                                        </div>
                                        <div className="p-2 mx-auto">
                                            <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                                ${tipoArbol.includes('forestales') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                                <input className="hidden" type="radio" value="forestales"
                                                    onChange={e => setTipoArbol(e.target.value)}
                                                    checked={tipoArbol.includes('forestales')}
                                                    name="tipoArbol" />
                                                    <span className="text-sm font-medium">Forestales</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                    <p className="mt-5"> ¿Deseas guardar la planta en "Tu jardin" ?</p>
                    <form onSubmit={guardarPlanta}>
                        <input type="text" className="hidden" {...register('especie', {required:true})} value={especie}/>
                        <input type="text" className="hidden" {...register('tipo', {required:true})} value={tipoPlanta}/>
                        <input type="text" className="hidden" {...register('descripcion')} value={descripcion}/>
                        <button onClick={guardarPlanta} className="text-white font-bold cursor-pointer rounded-lg mt-2 bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 py-2.5 text-center focus:ring-green-300">Si! ⮞</button>    
                    </form>
                </section> 
                {especie.length > 3&&(
                    <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                        <p className="text-sm font-medium">Descubre si es una buena epoca para plantar</p>
                        <div className="grid grid-cols-4 p-3 ml-8 mr-8">
                            <div className="p-2 mx-auto">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${estacion.includes('primavera') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="primavera"
                                        onChange={e => setEstacion(e.target.value)}
                                        checked={estacion.includes('primavera')}
                                        name="estacion" />
                                        <span className="text-sm font-medium">Primavera</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${estacion.includes('verano') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="verano"
                                        onChange={e => setEstacion(e.target.value)}
                                        checked={estacion.includes('verano')}
                                        name="estacion" />
                                        <span className="text-sm font-medium">Verano</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${estacion.includes('otoño') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="otoño"
                                        onChange={e => setEstacion(e.target.value)}
                                        checked={estacion.includes('otoño')}
                                        name="estacion" />
                                        <span className="text-sm font-medium">Otoño</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${estacion.includes('invierno') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="invierno"
                                        onChange={e => setEstacion(e.target.value)}
                                        checked={estacion.includes('invierno')}
                                        name="estacion" />
                                        <span className="text-sm font-medium">Invierno</span>
                                </label>
                            </div>
                        </div>  
                    </section>
                )}
            </div>
            <div className="w-1/3 p-4">
                <p className="text-xl dark:text-teal-900 font-semibold mb-2">Recomendaciones para plantar</p>
                {divResultado && (
                    <RecomendacionTipo1 
                        especie={divResultado.especie}
                        tipoPlanta={divResultado.tipoPlanta}
                        tipoArbol={divResultado.tipoArbol}
                        estacion={divResultado.estacion}
                    />
                )}
            </div>
        </div>
    )
}