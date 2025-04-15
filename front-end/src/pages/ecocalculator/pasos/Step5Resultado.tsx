import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Acciones = {
    datos: (data: any) => void;
};
  
export function Step5Resultado({datos}: Acciones){
    const navegacion = useNavigate();
    const finalizar = () => {
        console.log(datos);
        navegacion('/mis-plantas');
        toast.success('Planta agregada a tu Jardin');
    }
    const d = [
        {
          nombre: "Pino 1",
          oxigeno: 45,
          co2: 120,
        },
        {
          nombre: "Pino 2",
          oxigeno: 38,
          co2: 100,
        },
        {
          nombre: "Pino 3",
          oxigeno: 52,
          co2: 140,
        },
      ];

    return(
        <div>
            <p className="text-2xl font-bold dark:text-teal-900 text-center">Resultados de la planta</p>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="bg-green-100 p-4 rounded-xl shadow">
                        <h3 className="text-lg font-bold">Oxígeno producido</h3>
                        <p className="text-2xl text-green-700">{200} kg / año</p>
                        <p className="text-sm text-gray-600">Promedio por planta: {56} kg</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-xl shadow">
                        <h3 className="text-lg font-bold">CO₂ almacenado</h3>
                        <p className="text-2xl text-blue-700">{300} kg</p>
                        <p className="text-sm text-gray-600">Promedio por planta: {67} kg</p>
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
            <p className="mt-10"> ¿Deseas guardar la planta en "Tu jardin" ?</p>
            <button onClick={finalizar} className="text-white font-bold cursor-pointer rounded-lg mt-2 bg-green-500 hover:bg-green-600 text-sm sm:w-auto px-5 py-2.5 text-center focus:ring-green-300">Si! ⮞</button>
        </div>
    )
}