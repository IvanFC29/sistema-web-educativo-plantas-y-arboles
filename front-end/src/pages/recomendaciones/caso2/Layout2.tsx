import { Cloudy, Sun, CloudRain } from "lucide-react";
import { getPlantas } from "../../../assets/utils/sistema.api";
import { useEffect, useState } from "react";
import { RecomendacionTipo2 } from "./Recomendacion2";
import { SinPlantas } from "../../../components/SinPlantas";

interface Planta {
    especie: string;
    tipo: string;
}
type Resultado = {
    especie: string;
    tipo: string;
    dias: number;
    aguaRiego: number;
    tierra: string;
    clima: string;
    hojas: string;
}

export function Layout2() {
    const [lista, setLista] = useState<Planta[]>([]);
    const [especiePlanta, setEspeciePlanta] = useState('');
    const [tipoTierra, setTipoTierra] = useState('');
    const [maceta, setMaceta] = useState(false);
    const [clima, setClima] = useState('');
    const [tipoHojas, setTipoHojas] = useState('');
    const [divResultado, setDivResultado] = useState<Resultado | null>(null);

    const hojas = [
        { nombre: 'Necesita mas agua', imagen: '/img_hojas/Mas_agua.JPG' },
        { nombre: 'Necesita mas sol', imagen: '/img_hojas/Mas_sol.JPG' },
        { nombre: 'Necesita mas sombra', imagen: '/img_hojas/Mas_sombra.JPG' },
        { nombre: 'Necesita menos agua', imagen: '/img_hojas/Menos_agua.JPG' },
        { nombre: 'Lo comen los bichos', imagen: '/img_hojas/Presa_bichos.JPG' },
        { nombre: 'Tiene hongos', imagen: '/img_hojas/Tiene_hongos.JPG' }
    ];

    useEffect(() => {
        async function cargarPlantas() {
            const res = await getPlantas();
            setLista(res.data);
        }
        cargarPlantas();

        const nuevaRecomendacion: Resultado = {
            especie: especiePlanta,
            tipo: '',
            dias: 12,
            aguaRiego: 2,
            tierra: tipoTierra,
            clima: clima,
            hojas: tipoHojas
        };

        setDivResultado(nuevaRecomendacion);
    },[especiePlanta,tipoTierra,maceta,clima,tipoHojas]);

    return (
        <div className="flex m-1">
            <div className="flex-1 p-4">
                <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                    <label className="text-sm font-medium">Elige tu planta</label>
                    {lista.length === 0 ? (
                        <SinPlantas/>
                    ) : (
                        <select className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black" onChange={e => setEspeciePlanta(e.target.value)}>
                            <option value="">Tu planta es</option>
                            {lista.map((planta, index) => (
                                <option key={index} value={planta.especie}>{planta.especie}</option>
                            ))}
                        </select>
                    )}
                </section>
                {lista.length > 0 && (
                    <div>
                        <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                            <p className="text-xl dark:text-teal-900 font-semibold mb-2">Tipo de tierra en el que estan tus plantas</p>
                            <div className="grid grid-cols-2 p-3 ml-8 mr-8">
                                <div className="p-2 mx-auto">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                                ${tipoTierra.includes('arenoso') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="arenoso"
                                            onChange={e => setTipoTierra(e.target.value)}
                                            checked={tipoTierra.includes('arenoso')}
                                            name="tipoTierra" id="arenoso" />
                                        <span className="text-sm font-medium">Tierra Arenosa </span>
                                    </label>
                                </div>
                                <div className="p-2 mx-auto">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                                ${tipoTierra.includes('pedregoso') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="pedregoso"
                                            onChange={e => setTipoTierra(e.target.value)}
                                            checked={tipoTierra.includes('pedregoso')}
                                            name="tipoTierra" id="pedregoso" />
                                        <span className="text-sm font-medium">Tierra Pedregosa</span>
                                    </label>
                                </div>
                                <label className="mt-3">
                                    <input type="checkbox" checked={maceta} onChange={() => setMaceta(!maceta)} />
                                    <span className="text-sm font-medium">Mi planta esta en maceta</span>
                                </label>
                            </div>
                        </section>
                        <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                            <p className="text-xl dark:text-teal-900 font-semibold mb-2">El clima actual de la ciudad</p>
                            <div className="grid grid-cols-3 p-3">
                                <div className="p-2 mx-auto flex justify-center">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                                ${clima.includes('caluroso') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="caluroso"
                                            onChange={e => setClima(e.target.value)}
                                            checked={clima.includes('caluroso')}
                                            name="ciima" />
                                        <span className="flex justify-center"><Sun /></span>
                                        <span className="text-sm font-medium">Soleado / Caluroso </span>
                                    </label>
                                </div>
                                <div className="p-2 mx-auto flex justify-center">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                                ${clima.includes('lluvioso') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="lluvioso"
                                            onChange={e => setClima(e.target.value)}
                                            checked={clima.includes('lluvioso')}
                                            name="clima" />
                                        <span className="flex justify-center"><CloudRain /></span>
                                        <span className="text-sm font-medium"> LLuvioso </span>
                                    </label>
                                </div>
                                <div className="p-2 mx-auto flex justify-center">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                                ${clima.includes('nublado') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="nublado"
                                            onChange={e => setClima(e.target.value)}
                                            checked={clima.includes('nublado')}
                                            name="clima" />
                                        <span className="flex justify-center"> <Cloudy /> </span>
                                        <span className="text-sm font-medium">Templado / nublado </span>
                                    </label>
                                </div>
                            </div>
                        </section>
                        <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                            <p className="text-xl dark:text-teal-900 font-semibold mb-2">Las hojas de tu planta</p>
                            <p>Algunas de las hojas de tu planta lucen o tienen algun aspecto similar:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {hojas.map((hoja) => (
                                    <label
                                        key={hoja.nombre}
                                        className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                                ${tipoHojas.includes(hoja.nombre) ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
                                    >
                                        <input
                                            type="radio"
                                            onChange={() => setTipoHojas(hoja.nombre)}
                                            checked={tipoHojas.includes(hoja.nombre)}
                                            className="hidden"
                                        />
                                        <img
                                            src={hoja.imagen}
                                            alt={hoja.nombre}
                                            className="w-16 h-16 mx-auto mb-2 object-contain"
                                        />
                                    </label>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </div>
            <div className="w-1/3 p-4">
                <p className="text-xl dark:text-teal-900 font-semibold mb-2">Recomendaciones de cuidado</p>
                {divResultado && (
                    <RecomendacionTipo2
                        especie={divResultado.especie}
                        tipo={divResultado.tipo}
                        dias={divResultado.dias}
                        aguaRiego={divResultado.aguaRiego}
                        tierra={divResultado.tierra}
                        clima={divResultado.clima}
                        hojas={divResultado.hojas}
                    />
                )}
            </div>
        </div>
    )
}