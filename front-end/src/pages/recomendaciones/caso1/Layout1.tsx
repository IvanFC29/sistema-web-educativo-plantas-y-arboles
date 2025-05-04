import { useState, useEffect } from "react";
import { RecomendacionTipo1 } from "./Recomendacion1";

type Resultado = {
    especie: string;
    tipoPlanta: string;
    tipoArbol: string; 
    estacion: string;
}

export function Layout1(){
    const [especie, setEspecie] = useState('');
    const [tipoPlanta, setTipoPlanta] = useState('');
    const [tipoArbol, setTipoArbol] = useState('');
    const [estacion, setEstacion] =  useState('');
    const [divResultado, setDivResultado] = useState<Resultado | null>(null);

    useEffect(() => {
        const nuevaRecomendacion: Resultado = {
            especie: especie,
            tipoPlanta: tipoPlanta,
            tipoArbol: tipoArbol,
            estacion: estacion
        };

        setDivResultado(nuevaRecomendacion);
    },[especie,tipoPlanta,tipoArbol,estacion]);

    return(
        <div className="flex m-1">
            <div className="flex-1 p-4">
                <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                    <p className="text-sm font-medium">Escribe la especie de tu planta</p>
                    <input type="text" onChange={(e)=> setEspecie(e.target.value)}
                    className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500 dark:text-black"  name="" id="" />
                </section> 
                {especie.length > 3&&(
                    <div>
                        <section className="m-2 p-4 max-w-4xl w-full mx-auto border-2 border-gray-400 rounded-lg">
                            <p className="text-sm font-medium">Tu planta puede pertenecer a uno de estos tipos</p>
                            <div className="grid grid-cols-4 p-3 ml-8 mr-8">
                                <div className="p-2 mx-auto">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                        ${tipoPlanta.includes('arboles') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="arboles"
                                            onChange={e => setTipoPlanta(e.target.value)}
                                            checked={tipoPlanta.includes('arboles')}
                                            name="tipoPlanta" />
                                            <span className="text-sm font-medium">Arboles</span>
                                    </label>
                                </div>
                                <div className="p-2 mx-auto">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                        ${tipoPlanta.includes('arbustos') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="arbustos"
                                            onChange={e => setTipoPlanta(e.target.value)}
                                            checked={tipoPlanta.includes('arbustos')}
                                            name="tipoPlanta" />
                                            <span className="text-sm font-medium">Arbustos</span>
                                    </label>
                                </div>
                                <div className="p-2 mx-auto">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                        ${tipoPlanta.includes('flores') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="flores"
                                            onChange={e => setTipoPlanta(e.target.value)}
                                            checked={tipoPlanta.includes('flores')}
                                            name="tipoPlanta" />
                                            <span className="text-sm font-medium">Flores</span>
                                    </label>
                                </div>
                                <div className="p-2 mx-auto">
                                    <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all 
                                        ${tipoPlanta.includes('suculentas') ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                        <input className="hidden" type="radio" value="suculentas"
                                            onChange={e => setTipoPlanta(e.target.value)}
                                            checked={tipoPlanta.includes('suculentas')}
                                            name="tipoPlanta" />
                                            <span className="text-sm font-medium">Suculentas</span>
                                    </label>
                                </div>
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
                        </section>
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
                    </div>      
                )}
            </div>
            <div className="w-1/3  p-4">
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
