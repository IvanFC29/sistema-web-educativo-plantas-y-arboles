type Acciones = {
  siguiente: () => void;
  datos: (data: any) => void;
  datoActual : any;
};

export function Step1TipoPlanta({siguiente, datos, datoActual}: Acciones){
  const seleccionar = (tipo: string) => {
    datos({ tipoPlanta: tipo });
    siguiente();
  };

  const tipoSeleccionado = datoActual?.tipoPlanta

  const cardClass = (tipo: String) => `cursor-pointer m-2 block max-w-sm p-6 border rounded-lg shadow-sm text-4xl text-center ${
    tipoSeleccionado === tipo
      ? 'bg-amber-200 border-amber-200'
      : 'bg-amber-50 border-amber-50 hover:bg-amber-100'
  }`;

  return(
    <div> 
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">¿Qué tipo de planta tienes?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div onClick={() => seleccionar("Arbol")} 
            className={cardClass('Arbol')}>
            <p className="text-4xl text-center">🌳 Árbol</p>
        </div>     
        <div onClick={() => seleccionar("Arbusto")} 
            className={cardClass('Arbusto')}>
            <p className="text-4xl text-center">🌿 Arbusto</p>
        </div>    
        <div onClick={() => seleccionar("Maceta")} 
            className={cardClass('Maceta')}>
            <p className="text-4xl text-center">🌼 Maceta</p>
        </div>
      </div>    
    </div>
  )
}