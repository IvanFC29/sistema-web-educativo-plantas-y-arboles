import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Acciones = {
  datos: {
    resultados: { nombre?: string; oxigeno: number; co2: number }[];
    oxigenoTotal: number;
    CO2Total: number;
    especiePlanta: string;
    cantidadPlantas: number;
    tipoPlanta: string;
  };
};

  
export function Step5Resultado({datos}: Acciones){
    const navegacion = useNavigate();
    const guardarPlanta = () => {
        navegacion('/mis-plantas');
        toast.success('Planta agregada a tu Jardin');
    }

    const d = datos.resultados.map((item: any, index: number) => ({
      nombre: `Planta ${index + 1}`,
      oxigeno: item.oxigeno.toFixed(2),
      co2: item.co2.toFixed(2),
    }));

    const oxigenoTotal: number = parseFloat(datos.oxigenoTotal.toFixed(2));
    const co2Almacenado: number = parseFloat(datos.CO2Total.toFixed(2));
    const promedioO2: number = oxigenoTotal / datos.cantidadPlantas;
    const promedioCO2: number = co2Almacenado / datos.cantidadPlantas;

    return(
        <div>
            <p className="text-2xl font-bold dark:text-teal-900 text-center">Resultados de la planta</p>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="bg-green-100 p-4 rounded-xl shadow">
                        <h3 className="text-lg font-bold">Oxígeno producido</h3>
                        <p className="text-2xl text-green-700">{oxigenoTotal} kg / año</p>
                        <p className="text-sm text-gray-600">Promedio por planta: {promedioO2.toFixed(2)} kg</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-xl shadow">
                        <h3 className="text-lg font-bold">CO₂ almacenado</h3>
                        <p className="text-2xl text-blue-700">{co2Almacenado} kg</p>
                        <p className="text-sm text-gray-600">Promedio por planta: {promedioCO2.toFixed(2)} kg</p>
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
                      <Bar dataKey="co2" fill="#3B82F6" name="CO₂ capturado (kg/año)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-7">
              <div className="bg-orange-200 rounded-lg shadow m-6 p-4">
                <p className="text-2xl font-bold dark:text-teal-900 text-center"> 📈 Interpretacion de datos</p>
               
              </div>
              <div className="bg-yellow-50 rounded-lg shadow m-6 p-4">
                <p className="text-2xl font-bold dark:text-teal-900 text-center mb-2"> 📝 Resumen de datos</p>
                <p className="text-cyan-700 text-sm font-medium"> ✅ Planta: {datos.especiePlanta} </p>
                <p className="text-cyan-700 text-sm font-medium"> ✅ Cantidad: {datos.cantidadPlantas}</p>
                <p className="text-cyan-700 text-sm font-medium"> ✅ Tipo de planta: {datos.tipoPlanta}</p>
                <p className="mt-5"> ¿Deseas guardar la planta en "Tu jardin" ?</p>
                <button onClick={guardarPlanta} className="text-white font-bold cursor-pointer rounded-lg mt-2 bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 py-2.5 text-center focus:ring-green-300">Si! ⮞</button>
              </div>
            </div>         
        </div>
    )
}