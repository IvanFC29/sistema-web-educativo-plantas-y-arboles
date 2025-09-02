import { useState, useEffect } from "react";
import { RecomendacionTipo1 } from "./Recomendacion1";
import { findDescripcion, createPlanta, getPlantas, profile } from "../../../assets/utils/sistema.api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HelpCircle, Search } from "lucide-react";
import { Listas } from "./Lista";

type Resultado = {
    especie: string;
    tipoPlanta: string;
    etapa: number;
    descripcion: string;
}
type PlantaData = {
    especie: string;
    descripcion: string;
    tipo: string;
    etapa: string;
    usuario: number; 
};

export function Layout1(){
    const [idUsuario, setIdUsuario] = useState(-1);
    const [especie, setEspecie] = useState('');
    const [tipoPlanta, setTipoPlanta] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [etapa, setEtapa] = useState(0); // 0: Semilla, 1: Plantín, 2: Planta joven

    const [buscando, setBuscando] = useState(false);
    const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
    const [mostrarListaArboles, setMostrarListaArboles] = useState(false);
    const [mostrarListaArbustos, setMostrarListaArbustos] = useState(false);
    const [mostrarListaFlores, setMostrarListaFlores] = useState(false);
    const [mostrarListaSuculentas, setMostrarListaSuculentas] = useState(false);

    const [divResultado, setDivResultado] = useState<Resultado | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [mostrar, setMostrar] = useState(false);
    const [formData, setFormData] = useState<PlantaData | null>(null);
    const [existe, setExiste] = useState(false);
    const [lista, setLista] = useState<PlantaData[]>([]);
    
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<PlantaData>();
    const navegacion = useNavigate();

    useEffect(() => {
        async function cargarListaPlantas() {
            const respuesta = await getPlantas();
            setLista(respuesta.data);
        }
        cargarListaPlantas();
        async function getID() {
            const response = await profile();
            setIdUsuario(response.id);
        }
        getID();

        const nuevaRecomendacion: Resultado = {
            especie: especie,
            tipoPlanta: tipoPlanta,
            etapa: etapa,
            descripcion: descripcion
        };

        setDivResultado(nuevaRecomendacion);

    },[especie,descripcion,tipoPlanta,etapa]);

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
                setBuscando(true);
                let progresoActual = 0;
                const intervalo = setInterval(() => {
                  progresoActual += 1;
                }, 50);

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
                } finally{
                    clearInterval(intervalo);
                    setTimeout(()=>{
                        setBuscando(false);
                    }, 500)
                }
            }
            busquedaDescripcion(especie);
        } else {
            setDescripcion('');
            setError(null);
            setMostrarDescripcion(false);
        }
    }

    const clasificar = (et: number) => {
        let res = ["semilla", "plantin", "planta_joven"][et];
        return res;
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
                    <div className="m-2 p-4 max-w-4xl w-full mx-auto ">
                        <p className="text-sm font-medium mb-3">Tu planta puede pertenecer a uno de estos tipos</p>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <div className="p-2 mx-auto m-2 flex justify-center">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${tipoPlanta.includes('arbol') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="arbol"
                                        onChange={(e) => {
                                            const valor = e.target.value;
                                            setTipoPlanta(valor);
                                            setValue('tipo', valor);
                                        }}
                                        checked={tipoPlanta.includes('arbol')}
                                        name="tipoPlanta" />
                                        <img src="arboles.JPG" alt="arboles" className="w-28 h-28 object-contain"/>
                                        <span className="text-sm font-medium">Arboles <span>
                                            <button
                                                onClick={() => setMostrarListaArboles(!mostrarListaArboles)}
                                                className="text-blue-600 hover:text-blue-800 cursor-pointer ml-1.5"
                                            >
                                                <HelpCircle className="w-5 h-5" />
                                            </button>
                                            {mostrarListaArboles && (
                                                <Listas tipoPlanta="arbol"/>
                                            )}
                                            </span>
                                        </span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto m-2 flex justify-center">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${tipoPlanta.includes('arbusto') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="arbusto"
                                         onChange={(e) => {
                                            const valor = e.target.value;
                                            setTipoPlanta(valor);
                                            setValue('tipo', valor);
                                        }}
                                        checked={tipoPlanta.includes('arbusto')}
                                        name="tipoPlanta" />
                                        <img src="arbustos.JPG" alt="arboles" className="w-28 h-28 object-contain"/>
                                        <span className="text-sm font-medium">Arbustos <span>
                                            <button
                                                onClick={() => setMostrarListaArbustos(!mostrarListaArbustos)}
                                                className="text-blue-600 hover:text-blue-800 cursor-pointer ml-1.5"
                                            >
                                                <HelpCircle className="w-5 h-5" />
                                            </button>
                                            {mostrarListaArbustos && (
                                                <Listas tipoPlanta="arbusto"/>
                                            )}
                                            </span>
                                        </span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto m-2 flex justify-center">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${tipoPlanta.includes('flor') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="flor"
                                        onChange={(e) => {
                                            const valor = e.target.value;
                                            setTipoPlanta(valor);
                                            setValue('tipo', valor);
                                        }}
                                        checked={tipoPlanta.includes('flor')}
                                        name="tipoPlanta" />
                                        <img src="flores.jpg" alt="arboles" className="w-28 h-28 object-contain"/>
                                        <span className="text-sm font-medium">Flores <span>
                                            <button
                                                onClick={() => setMostrarListaFlores(!mostrarListaFlores)}
                                                className="text-blue-600 hover:text-blue-800 cursor-pointer ml-1.5"
                                            >
                                                <HelpCircle className="w-5 h-5" />
                                            </button>
                                            {mostrarListaFlores && (
                                                <Listas tipoPlanta="flor"/>
                                            )}
                                            </span>
                                        </span>
                                </label>
                            </div>
                            <div className="p-2 mx-auto m-2 flex justify-center">
                                <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                    ${tipoPlanta.includes('suculenta') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                    <input className="hidden" type="radio" value="suculenta"
                                         onChange={(e) => {
                                            const valor = e.target.value;
                                            setTipoPlanta(valor);
                                            setValue('tipo', valor);
                                        }}
                                        checked={tipoPlanta.includes('suculenta')}
                                        name="tipoPlanta" />
                                        <img src="suculentas.JPG" alt="arboles" className="w-28 h-28 object-contain"/>
                                        <span className="text-sm font-medium">Suculentas <span>
                                            <button
                                                onClick={() => setMostrarListaSuculentas(!mostrarListaSuculentas)}
                                                className="text-blue-600 hover:text-blue-800 cursor-pointer ml-1.5"
                                            >
                                                <HelpCircle className="w-5 h-5" />
                                            </button>
                                            {mostrarListaSuculentas && (
                                                <Listas tipoPlanta="suculenta"/>
                                            )}
                                            </span>
                                        </span>
                                </label>
                            </div>
                            {errors.tipo && <span className="text-orange-600">No seleccionaste el tipo de planta</span>}
                        </div>  
                    </div>
                    <br />
                    <label className="flex flex-row" >
                        <div className="flex flex-row">
                            <button onClick={buscarDescripcion} className="bg-sky-200 rounded-full p-1 hover:bg-sky-300 cursor-pointer" ><Search /> </button>
                            <p>Buscar una descripción de la planta</p>
                        </div>
                        <br />
                        {buscando && (
                            <div className="flex items-center justify-center mt-4">
                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-500"/> 
                                <span className="ml-2 text-sm text-gray-600">Buscando descripción...</span>
                            </div>
                        )}
                    </label>
                    <br />
                    {errors.descripcion && <span className="text-orange-600">No buscaste una descripción de tu planta</span>}
                    {mostrarDescripcion && descripcion &&(
                        <div className="m-1.5">
                            {descripcion && <p className="text-sm text-teal-800"><strong>Descripción:</strong> {descripcion}</p>}
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    )}
                    <br />
                    <div className="w-full max-w-md mx-auto my-4">
                        <label className="block mb-2 font-semibold">Selecciona la etapa de la planta:</label>
                        <input
                            type="range"
                            min="0"
                            max="2"
                            step="1"
                            value={etapa}
                            onChange={(e) => {
                                const valor = e.target.value;
                                const nuevoValor = parseInt(valor);
                                setEtapa(nuevoValor);
                                setValue('etapa',clasificar(nuevoValor));
                            }}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />
                        <div className="flex justify-between mt-2 text-sm font-medium text-gray-700">
                            <span>Semilla 🌱</span>
                            <span>Plantín 🌿</span>
                            <span>Planta joven 🌳</span>
                        </div>
                        {errors.etapa && <span className="text-orange-600">No seleccionaste la etapa actual de tu planta</span>}
                        {etapa !== -1 &&(
                            <p className="mt-2 font-semibold">Etapa seleccionada: {etapa === 0 ? "Semilla" : etapa === 1 ? "Plantín" : etapa === 2 ? "Planta joven": ""}</p>
                        )}
                    </div>
                    <form onSubmit={handleSubmit(confirmarPlanta)}>
                        <input type="text" className="hidden" {...register('especie', {required:true})} value={especie}/>
                        <input type="text" className="hidden" {...register('tipo', {required:true})} value={tipoPlanta}/>
                        <input type="text" className="hidden" {...register('descripcion', {required:true})} value={descripcion}/>
                        <input type="text" className="hidden" {...register('etapa', {required:true})} value={clasificar(etapa)}/>
                        <button className="text-white font-bold cursor-pointer rounded-lg mt-2 bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 py-2.5 text-center focus:ring-green-300">Guardar ⮞</button>    
                    </form>
                </section> 
            </div>
            <div className="w-full md:w-1/3 p-4">
                <p className="text-xl dark:text-teal-900 font-semibold mb-2">Recomendaciones para plantar</p>
                {divResultado && (
                    <RecomendacionTipo1 
                        especie={divResultado.especie}
                        tipoPlanta={divResultado.tipoPlanta}
                        etapa={divResultado.etapa}
                        descripcion={divResultado.descripcion}
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