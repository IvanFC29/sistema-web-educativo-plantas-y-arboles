import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../../assets/css/step5.css";
import { useForm } from "react-hook-form";
import { createPlanta } from "../../../assets/utils/sistema.api";

type Acciones = {
  datos: {
    resultados: { nombre?: string; oxigeno: number; carbono: number; co2: number }[];
    oxigenoTotal: number;
    carbonoTotal: number;
    CO2Total: number;
    especiePlanta: string;
    cantidadPlantas: number;
    tipoPlanta: string;
  };
};
type PlantaData = {
  especie: string;
  tipo: string;
  cantidad: number;
  oxigenoTotal: number;
  carbonoTotal: number;
  co2Total: number;
  usuario: number; 
};

export function Step5Resultado({datos}: Acciones){
    const [curiosidad, setCuriosidad] = useState('');
    const navegacion = useNavigate();
    const {register, handleSubmit} = useForm<PlantaData>();
   
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

    console.log(datos);
    const d = datos.resultados.map((item: any, index: number) => ({
      nombre: `Planta ${index + 1}`,
      carbono: item.carbono.toFixed(2),
      oxigeno: item.oxigeno.toFixed(2),
    }));

    const oxigenoProducido: number = parseFloat(datos.oxigenoTotal.toFixed(2));
    const carbonoAlmacenado: number = parseFloat(datos.carbonoTotal.toFixed(2));
    const promedioO2: number = oxigenoProducido / datos.cantidadPlantas;
    const promedioC: number = carbonoAlmacenado / datos.cantidadPlantas;

    const curiosidades =[
      'En Bolivia el 2022 aumentamos a 23 MT en produccion de C02 segun datosMacro.com',
      'Un auto al anio genera 340 Kg de CO2'
    ];
     useEffect(()=> {
            seleccionarCuriosidad();
        }, []);
    
        function seleccionarCuriosidad(){
            const i = Math.floor(Math.random()*curiosidades.length);
            setCuriosidad(curiosidades[i]);
        }
    return(
        <div>
            <p className="text-2xl font-bold dark:text-teal-900 text-center">Resultados de la planta</p>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="bg-green-100 p-4 rounded-xl shadow">
                        <h3 className="text-lg font-bold">Oxígeno producido</h3>
                        <p className="text-2xl text-green-700">{oxigenoProducido} kg.</p>
                        <p className="text-sm text-gray-600">Promedio por planta: {promedioO2.toFixed(2)} kg.</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-xl shadow">
                        <h3 className="text-lg font-bold">Carbono almacenado</h3>
                        <p className="text-2xl text-blue-700">{carbonoAlmacenado} kg.</p>
                        <p className="text-sm text-gray-600">Promedio por planta: {promedioC.toFixed(2)} kg.</p>
                    </div>
                </div>
                <div className="w-full h-[400px] p-4">
                  <h2 className="text-xl font-bold mb-4">Producción de Oxígeno y Captura de CO₂</h2>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={d} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="nombre" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="oxigeno" fill="#10B981" name="Oxígeno (kg/año)" />
                      <Bar dataKey="carbono" fill="#3B82F6" name="Carbono (kg/año)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-7">
              <div className="bg-orange-200 rounded-lg shadow m-6 p-4">
                <p className="text-2xl font-bold dark:text-teal-900 text-center mb-2"> 📈 Interpretacion de datos</p>
                <p className="text-cyan-700 text-sm font-medium"> 💨 Tu/s {datos.especiePlanta}/s estan absorbiendo un aproximado de {datos.CO2Total.toFixed(2)} Kg. de dioxido de carbono (CO2) del aire</p>
                <p className="text-cyan-700 text-sm font-medium mt-5"> 🎯{curiosidad}</p>
                <p className="text-green-700 text-sm font-medium mt-5"> <a href="https://8billiontrees.com/carbon-offsets-credits/how-much-co2-does-a-car-emit-per-mile/">Fuente</a></p>
              </div>
              <div className="bg-yellow-50 rounded-lg shadow m-6 p-4">
                <p className="text-2xl font-bold dark:text-teal-900 text-center mb-2"> 📝 Resumen de datos</p>
                <p className="text-cyan-700 text-sm font-medium"> ✅ Planta: {datos.especiePlanta} </p>
                <p className="text-cyan-700 text-sm font-medium"> ✅ Cantidad: {datos.cantidadPlantas}</p>
                <p className="text-cyan-700 text-sm font-medium"> ✅ Tipo de planta: {datos.tipoPlanta}</p>
                <p className="text-cyan-700 text-sm font-medium"> ✅ Huella ecológica : {datos.CO2Total.toFixed(2)} Kg.</p>
                <p className="mt-5"> ¿Deseas guardar la planta en "Tu jardin" ?</p>
                <form onSubmit={guardarPlanta}>
                  <input type="text" className="formulario" {...register('especie')} defaultValue={datos.especiePlanta}/>
                  <input type="text" className="formulario" {...register('tipo')} defaultValue={datos.tipoPlanta}/>
                  <input type="number" className="formulario" {...register('cantidad')} defaultValue={datos.cantidadPlantas}/>
                  <input type="number" className="formulario" {...register('oxigenoTotal')} defaultValue={datos.oxigenoTotal.toFixed(2)}/>
                  <input type="number" className="formulario" {...register('carbonoTotal')} defaultValue={datos.carbonoTotal.toFixed(2)}/>
                  <input type="number" className="formulario" {...register('co2Total')} defaultValue={datos.CO2Total.toFixed(2)}/>
                  <button onClick={guardarPlanta} className="text-white font-bold cursor-pointer rounded-lg mt-2 bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 py-2.5 text-center focus:ring-green-300">Si! ⮞</button>
                </form>
              </div>
            </div>         
        </div>
    )
}