import { Leaf, Trees } from "lucide-react"; 

interface Planta {
    especie: string;
    tipo: string;
    cantidad: number;
    oxigenoTotal: number;
    co2Total: number;
    carbonoTotal: number;
    fechaRegistro: string;
}

interface PlantaTarjeta{
    planta: Planta;
}

export function Tarjetas({planta}: PlantaTarjeta){
    return (
      <div className="m-7 bg-green-50 rounded-2xl shadow-md p-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-800">{planta.especie}</h2>
            <p className="text-sm text-gray-500">({planta.tipo})</p>
          </div>
  
          {/* Icono decorativo */}
          <div className="bg-green-200 rounded-full p-3">
            {planta.tipo === "Arbol" ? (
              <Trees className="w-10 h-10 text-green-700" />
            ) : (
              <Leaf className="w-10 h-10 text-green-700" />
            )}
          </div>
  
          <div className="grid grid-cols-2 gap-2 w-full text-sm text-gray-700">
            <div>
              <p className="font-bold">Cantidad:</p>
              <p>{planta.cantidad}</p>
            </div>
            <div>
              <p className="font-bold">Registrado el:</p>
              <p>{planta.fechaRegistro}</p>
            </div>
            <div>
              <p className="font-bold">Oxígeno producido:</p>
              <p>{planta.oxigenoTotal} kg/año</p>
            </div>
            <div>
              <p className="font-bold">Carbono almacenado:</p>
              <p>{planta.carbonoTotal} kg/año</p>
            </div>
          </div>
          <div className="mt-2 bg-teal-600 p-1 rounded-2xl">
            <p className="text-white text-sm">Huella Ecologica: {planta.co2Total} Kg.</p>
          </div>
        </div>
      </div>
    )
}