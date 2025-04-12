type Acciones = {
  siguiente: () => void;
  datos: (data: any) => void;
};

export function Step1TipoPlanta({siguiente, datos}: Acciones){
  const seleccionar = (tipo: string) => {
    datos({ tipoPlanta: tipo });
    siguiente();
    console.log(datos);
  };

  return(
    <div> 
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">¿Qué tipo de planta tienes?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div onClick={() => seleccionar("Árbol")} className="cursor-pointer m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-amber-100 dark:border-amber-100 dark:hover:bg-amber-50">
            <p className="text-4xl text-center">🌳 Árbol</p>
        </div>     
        <div onClick={() => seleccionar("Arbusto")} className="cursor-pointer m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-amber-100 dark:border-amber-100 dark:hover:bg-amber-50">
            <p className="text-4xl text-center">🌿 Arbusto</p>
        </div>    
        <div onClick={() => seleccionar("Maceta")} className="cursor-pointer m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-amber-100 dark:border-amber-100 dark:hover:bg-amber-50">
            <p className="text-4xl text-center">🌼 Maceta</p>
        </div>
      </div>    
    </div>
  )
}