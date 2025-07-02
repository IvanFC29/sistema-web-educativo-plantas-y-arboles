import { useState, useEffect } from "react";
import { RecomendacionTipo1 } from "./Recomendacion1";
import { findDescripcion, createPlanta, getPlantas, profile } from "../../../assets/utils/sistema.api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

type Resultado = {
    especie: string;
    tipoPlanta: string;
    estacion: string;
}
type PlantaData = {
    especie: string;
    descripcion: string;
    tipo: string;
    usuario: number; 
};

export function Layout1(){
    const [idUsuario, setIdUsuario] = useState(0);
    const [especie, setEspecie] = useState('');
    const [tipoPlanta, setTipoPlanta] = useState('');
    const [descripcion, setDescripcion] = useState('');
    
    const [estacion, setEstacion] =  useState('');
    const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
    const [divResultado, setDivResultado] = useState<Resultado | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [mostrar, setMostrar] = useState(false);
    const [formData, setFormData] = useState<PlantaData | null>(null);
    const [existe, setExiste] = useState(false);
    const [lista, setLista] = useState<PlantaData[]>([]);
    
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<PlantaData>();
    const navegacion = useNavigate();

    async function cargarListaPlantas() {
        const respuesta = await getPlantas();
        setLista(respuesta.data);
    }

    async function getID() {
        const response = await profile();
        setIdUsuario(response.id);
    }
    
    useEffect(() => {
        cargarListaPlantas();
        getID();

        const nuevaRecomendacion: Resultado = {
            especie: especie,
            tipoPlanta: tipoPlanta,
            estacion: estacion
        };

        setDivResultado(nuevaRecomendacion);

    },[especie,descripcion,tipoPlanta,estacion, mostrarDescripcion, lista]);

    const guardarPlanta = async (data: PlantaData) => {
        const idUser: number = idUsuario;
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
        setMostrar(false);
        navegacion('/mis-plantas');
        toast.success('Planta agregada a tu Jardin');
    };

    const confirmarPlanta = (data: PlantaData) => {    
        // Reiniciar el estado
        setExiste(false);

        // Verificar duplicado
        const yaExiste = lista.some(i => i.especie.toLowerCase() === data.especie.toLowerCase());

        setExiste(yaExiste);
        setFormData(data);
        setMostrar(true);
    }

    const onCancel = () => setMostrar(false);

    const buscarDescripcion = () => {
        if (especie.trim() !== "") {
            async function busquedaDescripcion(especie: string) {
                try {
                    const respuesta = await findDescripcion(especie);
                    console.log("Respuesta API:", respuesta);
                    setDescripcion(respuesta.data.descripcion);  
                    setValue("descripcion", respuesta.data.descripcion);
                    setError(null);
                    setMostrarDescripcion(true); 
                } catch (err: any) {
                    console.error("Error:", err);
                    setDescripcion("");
                    setError("No se pudo obtener la descripción");
                    setMostrarDescripcion(false); 
                }
            }
            busquedaDescripcion(especie);
        } else {
            setDescripcion('');
            setError(null);
            setMostrarDescripcion(false);
        }
    }

    return(
        <div className="grid grid-cols-1 md:flex m-1">
            <div className="w-full md:flex-1 p-4">
                <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                    <div>
                        <label className="text-sm font-medium">Escribe la especie de tu planta</label>
                        <input type="text" onChange={(e) => {
                                const valor = e.target.value;
                                setEspecie(valor);
                                setValue('especie', valor); 
                            }}
                            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" />
                            {errors.especie && <span className="text-orange-600">No ingresaste un nombre de planta</span> }
                    </div>
                    <br />
                    <label className="flex flex-row" >
                        <button onClick={buscarDescripcion} className="bg-sky-200 rounded-full p-1 hover:bg-sky-300 cursor-pointer" ><Search /> </button>
                        <p>Buscar una descripcion de la planta</p>
                    </label>
                    <br />
                    {errors.descripcion && <span className="text-orange-600">No buscaste una descripcion de tu planta</span>}
                    {mostrarDescripcion && descripcion &&(
                        <div className="m-1.5">
                            {descripcion && <p className="text-sm text-teal-800"><strong>Descripción:</strong> {descripcion}</p>}
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    )}
                    <br />
                    <div className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                        <p className="text-sm font-medium mb-3">Tu planta puede pertenecer a uno de estos tipos</p>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <div className="p-2 mx-auto m-2">
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
                            <div className="p-2 mx-auto m-2">
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
                            <div className="p-2 mx-auto m-2">
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
                            <div className="p-2 mx-auto m-2">
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
                    </div>
                    <form onSubmit={handleSubmit(confirmarPlanta)}>
                        <input type="text" className="hidden" {...register('especie', {required:true})} value={especie}/>
                        <input type="text" className="hidden" {...register('tipo', {required:true})} value={tipoPlanta}/>
                        <input type="text" className="hidden" {...register('descripcion', {required:true})} value={descripcion}/>
                        <button className="text-white font-bold cursor-pointer rounded-lg mt-2 bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 py-2.5 text-center focus:ring-green-300">Guardar ⮞</button>    
                    </form>
                </section> 
                {especie.length > 3&&(
                    <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                        <p className="text-sm font-medium">Descubre si es una buena epoca para plantar</p>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <div className="p-2 mx-auto m-2">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${estacion.includes('primavera') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="primavera"
                                        onChange={e => setEstacion(e.target.value)}
                                        checked={estacion.includes('primavera')}
                                        name="estacion" />
                                        <span className="text-sm font-medium">Primavera</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto m-2">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${estacion.includes('verano') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="verano"
                                        onChange={e => setEstacion(e.target.value)}
                                        checked={estacion.includes('verano')}
                                        name="estacion" />
                                        <span className="text-sm font-medium">Verano</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto m-2">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${estacion.includes('otoño') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="otoño"
                                        onChange={e => setEstacion(e.target.value)}
                                        checked={estacion.includes('otoño')}
                                        name="estacion" />
                                        <span className="text-sm font-medium">Otoño</span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto m-2">
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
            <div className="w-full md:w-1/3 p-4">
                <p className="text-xl dark:text-teal-900 font-semibold mb-2">Recomendaciones para plantar</p>
                {divResultado && (
                    <RecomendacionTipo1 
                        especie={divResultado.especie}
                        tipoPlanta={divResultado.tipoPlanta}
                        estacion={divResultado.estacion}
                    />
                )}
            </div>
            {mostrar &&( 
                <div className="fixed z-10 inset-0 overflow-y-auto bg-opacity-50 flex items-center justify-center">
                    <div className="bg-amber-100 rounded-lg shadow-xl overflow-hidden">
                        <div className="px-6 py-4">
                            <p className="font-bold text-xl mb-2 text-center"> ¿Deseas guardar la planta en "Tu jardin" ?</p>
                            <p className="mt-5">Recuerda descargar tu recomendacion antes de guardar tu planta</p>
                            {existe && (
                                <p className="mt-5"> ⚠️En tu jardin existe una planta con el mismo nombre!!</p>
                            )}
                        </div>
                        <div className="px-6 py-4 bg-amber-100 text-right">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2 cursor-pointer"
                                onClick={onCancel}> Cancelar
                            </button>
                            {formData && (
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
                                    onClick={() => guardarPlanta(formData)}> Confirmar
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}