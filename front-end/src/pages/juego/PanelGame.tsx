import { Celda } from "./Celda";
import { mapas, cantidadNiveles } from "../../assets/utils/NivelesGame";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { SquareArrowDown, SquareArrowLeft, SquareArrowRight, SquareArrowUp } from "lucide-react";
import { saveAprendizajeDesbloqueado, saveMensajeDesbloqueado, updateContadorAprendizaje, updateContadorMensajes, getProgresoJuego } from "../../assets/utils/sistema.api";
import { listaMensajes } from "../../assets/utils/ReflexionesGame";
import { listaTemas } from "../../assets/utils/AprendizajeGame";
import corazon from '/img_juego/vida.png';
import manzana from '/img_juego/manzana.png';
import nuez from '/img_juego/nuez.png';
import juegoCompletado from '/audio/juegoCompletado.wav';
import juegoPerdido from '/audio/juegoPerdido.wav';
import itemEncontrado from '/audio/itemEncontrado.wav';
import itemBasuraEncontrado from '/audio/itemBasuraEncontrado.wav';

type MensajeData = {
    progreso: number;
    titulo: string;
    descripcion: string;
    destacado: boolean;
    desbloqueado: boolean;
}

type AprendizajeData = {
    progreso: number;
    titulo: string;
    contenido: string;
    imagen: string;
    fuente: string;
    video: string;
    destacado: boolean;
    desbloqueado: boolean;
}

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
    const [cantidadMsj, setCantidadMsj] = useState(0);
    const [cantidadApzj, setCantidadApzj] = useState(0);
    const [visibilidad, setVisibilidad] = useState(mapa ? mapa.map(fila => fila.map(() => false)) : []);
    const audioCompletado = new Audio(juegoCompletado);
    const audioPerdido = new Audio(juegoPerdido);
    const audioItemEncontrado = new Audio(itemEncontrado);
    const audioBasura = new Audio(itemBasuraEncontrado);
      
    useEffect(() => {
        if (mapa) {
          setVisibilidad(mapa.map(fila => fila.map(() => false)));
        }
    }, [mapa]);
      
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
            audioBasura.play();
            if (controlVidas === 0) {
                setMostrarMensaje(true);
            }
        }

        if(mapa[nuevaX][nuevaY] === 'M') {
            setManzanas(manzanas+1);
            audioBasura.play();
            setManzanasPendientes(manzanasPendientes+1);
        }

        if(mapa[nuevaX][nuevaY] === 'N') {
            setNueces(nueces+1); 
            audioBasura.play();
            setNuecesPendientes(nuecesPendientes+1);
        }
    };

    useEffect(() => {
        var totalPorNivel = manzanasPendientes + nuecesPendientes;

        if (totalPorNivel === 1) {
            const nuevoNivel = nivel + 1;
            if (nuevoNivel < cantidadNiveles()) { 
                setNivel(nuevoNivel);
                setMapa(mapas(nuevoNivel));   
                setManzanasPendientes(0);
                setNuecesPendientes(0);     
            }else{            
                setMostrarMensaje(true);
                setGano(true);
            }
        }

        if (manzanas === 3) {
            toast.success('Un consejo ha sido Desbloqueado');
            audioItemEncontrado.play();
            guardarProgresoMensajes();
            setManzanas(0);
        }

        if (nueces === 3) {
            toast.success('Tema de Aprendizaje Desbloqueado');
            audioItemEncontrado.play();
            guardarProgresoAprendizaje();
            setNueces(0);
        }

    }, [manzanasPendientes, nuecesPendientes]);    

    useEffect(()=> {
        if(mostrarMensaje && gano){
            audioCompletado.play();
        }
        if(mostrarMensaje && !gano){
            audioPerdido.play();
        }
    }, [mostrarMensaje, gano])

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

    const descubrir = (i: number, j: number) => {
        if (Math.abs(i - posicionX) <= 3 && Math.abs(j - posicionY) <= 3) {
            const nueva = [...visibilidad];
            nueva[i][j] = true;
            setVisibilidad(nueva);
        }
    };

    useEffect(()=>{
        async function obtenerIndiceMensajes(){
            const progresoActual = await getProgresoJuego();
            setCantidadMsj(progresoActual.data[0].cantidadMsjDesbloqueados);
            console.log(cantidadMsj); 
        }
        async function obtenerIndiceAprendizajes(){
            const progresoActual = await getProgresoJuego();
            setCantidadApzj(progresoActual.data[0].cantidadApzjDesbloqueados);
            console.log(cantidadApzj); 
        }
        obtenerIndiceMensajes();
        obtenerIndiceAprendizajes();
    });

    async function guardarProgresoMensajes() {
        console.log(cantidadMsj);
        
        const mensaje = listaMensajes(cantidadMsj);
        console.log("el ID es: "+location.pathname.split('/').pop());

        console.log(mensaje);

        const mensajeDesbloqueado: MensajeData = {
            progreso: Number(location.pathname.split('/').pop()),
            titulo: mensaje[1],
            descripcion: mensaje[2],
            destacado: false,
            desbloqueado: true,
        }
        try {
            const res = await saveMensajeDesbloqueado(mensajeDesbloqueado);
            console.log(res);
            await updateContadorMensajes();
        } catch (error) {
            console.log(error);
        }
    }

    async function guardarProgresoAprendizaje() {
        console.log(cantidadApzj);
        
        const tema = listaTemas(cantidadApzj);
        console.log("el ID es: "+location.pathname.split('/').pop());
        
        console.log(tema);
        const aprendizajeDesbloqueado: AprendizajeData = {
            progreso: Number(location.pathname.split('/').pop()),
            titulo: tema[1],
            contenido: tema[2],
            imagen: tema[3],
            fuente: tema[4],
            video: tema[5],
            destacado: false,
            desbloqueado: true,
        };
        try {
            const res = await saveAprendizajeDesbloqueado(aprendizajeDesbloqueado);
            console.log(res);
            await updateContadorAprendizaje();
        } catch (error) {
            console.log(error);
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
                       {mapa.flatMap((fila, i) =>
                            fila.map((celda, j) => {
                                const index = i * mapa[0].length + j;
                                if (celda === 'P' || celda === 'A') {
                                    return (
                                        <Celda
                                            key={index}
                                            tipo={celda}
                                            visible={true}
                                            onDescubrir={() => descubrir(i, j)}
                                        />
                                    );
                                }else{
                                    return (
                                        <Celda
                                            key={index}
                                            tipo={celda}
                                            visible={visibilidad[i][j]}
                                            onDescubrir={() => descubrir(i, j)}
                                        />
                                    );
                                }
                            })
                        )}
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

