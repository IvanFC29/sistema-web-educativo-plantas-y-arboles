import { Celda } from "./Celda";
import { mapas, cantidadObjetos, cantidadNiveles } from "../../assets/utils/NivelesGame";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import corazon from '/img_juego/vida.png';
import manzana from '/img_juego/manzana.png';
import nuez from '/img_juego/nuez.png';
import { SquareArrowDown, SquareArrowLeft, SquareArrowRight, SquareArrowUp } from "lucide-react";

export function PanelGame() {
    const [mapa, setMapa] = useState<string[][]>(mapas(0));
    const [nivel, setNivel] = useState(0);
    const [manzanasPendientes, setManzanasPendientes] = useState(0);
    const [nuecesPendientes, setNuecesPendientes] = useState(0);
    const [posicionX, setPosicionX] = useState(0);
    const [posicionY, setPosicionY] = useState(0);
    const [vidas, setVidas] = useState(3);
    const [listaVidas, setListaVidas] = useState<string[]>([]);
    const [manzanas, setManzanas] = useState(0);
    const [listaManzanas, setListaManzanas] = useState<string[]>([]);
    const [nueces, setNueces] = useState(0);
    const [listaNueces, setListaNueces] = useState<string[]>([]);
    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const [gano, setGano] = useState(false);

    useEffect(() => {
        for (let i = 0; i < mapa.length; i++) {
            for (let j = 0; j < mapa[i].length; j++) {
                if (mapa[i][j] === 'A') {
                    setPosicionX(i);
                    setPosicionY(j);
                }
            }
        }
        const listaV:string[] = [];
        for (let i = 1; i <= vidas; i++) {
            listaV.push('vida'+i);
        }
        setListaVidas(listaV);

        const listaM:string[] = [];
        for (let i = 1; i <= manzanas; i++) {
            listaM.push('manzana'+i);
        }
        setListaManzanas(listaM);

        const listaN:string[] = [];
        for (let i = 1; i <= nueces; i++) {
            listaN.push('nuez'+i);
        }
        setListaNueces(listaN);

    }, [vidas,manzanas,nueces,mapa]);

    useEffect(() => {
        const reconocerTecla = (event: KeyboardEvent) => {
            if (event.key === 'ArrowUp') mover(-1, 0);
            if (event.key === 'ArrowDown') mover(1, 0);
            if (event.key === 'ArrowLeft') mover(0, -1);
            if (event.key === 'ArrowRight') mover(0, 1); 
        };

        window.addEventListener('keydown', reconocerTecla);
        return () => window.removeEventListener('keydown', reconocerTecla);
    }, [posicionX, posicionY, mapa]);

    const mover = (dx: number, dy: number) => {
        const nuevaX = posicionX + dx;
        const nuevaY = posicionY + dy;

        // Verifica si está dentro del mapa y no es una piedra
        if (
            nuevaX >= 0 && nuevaX < mapa.length &&
            nuevaY >= 0 && nuevaY < mapa[0].length &&
            mapa[nuevaX][nuevaY] !== 'P'
        ) {
            const nuevoMapa = mapa.map(fila => [...fila]); 
            // Actualiza el mapa: borra 'A' de la posición anterior y ponla en la nueva
            nuevoMapa[posicionX][posicionY] = '_';
            nuevoMapa[nuevaX][nuevaY] = 'A';

            setMapa(nuevoMapa);
            setPosicionX(nuevaX);
            setPosicionY(nuevaY);
        }

        if(mapa[nuevaX][nuevaY] === 'B') {
            var controlVidas = vidas -1;
            setVidas(controlVidas);
            if (controlVidas === 0) {
                setMostrarMensaje(true);
            }
       
        }

        if(mapa[nuevaX][nuevaY] === 'M') {
            setManzanas(manzanas+1);
            setManzanasPendientes(manzanasPendientes+1);
        }

        if(mapa[nuevaX][nuevaY] === 'N') {
            setNueces(nueces+1); 
            setNuecesPendientes(nuecesPendientes+1);
        }
    };

    useEffect(() => {
        var totalPorNivel = manzanasPendientes + nuecesPendientes;

        if (totalPorNivel === cantidadObjetos(nivel)) {
            const nuevoNivel = nivel + 1;
            if (nuevoNivel < 5) { /** TO DO */
                setNivel(nuevoNivel);
                setMapa(mapas(nuevoNivel));   
                setManzanasPendientes(0);
                setNuecesPendientes(0);     
            }else{
                console.log(cantidadNiveles());                
                setMostrarMensaje(true);
                setGano(true);
            }
        }

        if (manzanas === 3) {
            toast.success('Reflexion Desbloqueada');
            setManzanas(0);
        }

        if (nueces === 3) {
            toast.success('Aprendizaje Desbloqueado');
            setNueces(0);
        }

    }, [manzanasPendientes, nuecesPendientes]);    

    const arriba = () => {
        mover(-1, 0);
    }
    const abajo = () => {
        mover(1, 0);
    }
    const izquierda = () => {
        mover(0, -1);
    }
    const derecha = () => {
        mover(0, 1);
    }

    const cerrarMensaje = () => {
        setMostrarMensaje(false);
        /** TO DO */
        if (!gano) {
            console.log('reinciar');
        }else{

        }
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center pb-20 pt-10">
                {mapa && (
                    <div className="grid" style={{
                        gridTemplateColumns: `repeat(${mapa[0].length}, 1fr)`, // Tamaño proporcional
                        width: '100%',
                        maxWidth: '700px',
                        aspectRatio: `${mapa[0].length} / ${mapa.length}`,
                    }}>
                        {mapa.flat().map((celda, index) => (
                            <Celda key={index} tipo={celda} />
                        ))}
                    </div>
                )}
            </div>
            <div className="fixed bottom-0 w-full p-2 bg-amber-100 border-t border-amber-300">
                <div className="flex flex-col md:flex-row justify-between items-center px-4 max-w-5xl mx-auto">
                    
                    {/* Botones de dirección */}
                    <div className="flex flex-row space-x-4 mb-2 md:mb-0">
                        <button onClick={arriba} className="p-1 rounded hover:bg-amber-200 cursor-pointer" title="Mover Arriba">
                            <SquareArrowUp size={32} color="#ce7336" strokeWidth={2.25} />
                        </button>
                        <button onClick={abajo} className="p-1 rounded hover:bg-amber-200 cursor-pointer" title="Mover Abajo">
                            <SquareArrowDown size={32} color="#ce7336" strokeWidth={2.25} />
                        </button>
                        <button onClick={izquierda} className="p-1 rounded hover:bg-amber-200 cursor-pointer" title="Mover Izquierda">
                            <SquareArrowLeft size={32} color="#ce7336" strokeWidth={2.25} />
                        </button>
                        <button onClick={derecha} className="p-1 rounded hover:bg-amber-200 cursor-pointer" title="Mover Derecha">
                            <SquareArrowRight size={32} color="#ce7336" strokeWidth={2.25} />
                        </button>
                    </div>

                    {/* Indicadores de manzanas, nueces y vidas */}
                    <div className="flex flex-row space-x-6 items-center">
                        <p className="font-semibold text-lg flex items-center gap-1">
                            Manzanas:
                            {listaManzanas.map((item, index) => (
                            <img key={index} src={manzana} alt={item} width={24} height={24} />
                            ))}
                        </p>
                        <p className="font-semibold text-lg flex items-center gap-1">
                            Nueces:
                            {listaNueces.map((item, index) => (
                            <img key={index} src={nuez} alt={item} width={24} height={24} />
                            ))}
                        </p>
                        <p className="font-semibold text-lg flex items-center gap-1">
                            Vidas:
                            {listaVidas.map((item, index) => (
                            <img key={index} src={corazon} alt={item} width={24} height={24} />
                            ))}
                        </p>
                    </div>
                </div>
            </div>
            {mostrarMensaje &&(
                <div className="fixed z-10 inset-0 overflow-y-auto bg-opacity-50 flex items-center justify-center">
                    <div className="bg-amber-200 border-green-700 border-2 rounded-lg p-8">
                        {gano ?(
                            <p className="font-extrabold text-center">JUEGO TERMINADO!!!</p>
                        ):(
                            <p className="font-extrabold text-center">JUEGO PERDIDO </p>
                        )}
                        <div className="flex items-center justify-center mt-4">
                            <button onClick={cerrarMensaje} className="bg-gray-200 hover:bg-gray-500 rounded-2xl p-2 cursor-pointer">Okey</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
