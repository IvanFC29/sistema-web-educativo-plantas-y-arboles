export const listaMensajes = (indice: number): [string, string] => {
    const mensajes = [
        {
            titulo: "Es importante pensar en que sitio plantaras tu planta!!",
            descripcion: "Evita plantar cerca a los muros de tu hogar, especialmente si es un arbol que crecera a una gram altura. Este tipo de arboles pueden tener raices muy grandes y destrozar el pacimento."
        },
        {
            titulo: "Las plantas no deben estar rodeadas de cemento",
            descripcion: "Si piensas plantar sobre tu acera, dale un espacio de un metro a la planta, no cubras de cemento al rededor del tallo, las plantas neceesitan estar rodeadas de tierra."
        },
        {
            titulo: "Algunas plantas siempre van a perecer",
            descripcion: "Los plantines son muy hermosos, pero estos tienen un ciclo de vida corto, luego de que florezcan odas sus brotes poco a poco empezara a debilitarse, no crecen mas. No te pongas triste si tienes que sacarlo."
        }, 
        {
            titulo: "Uno sale, otro entra",
            descripcion: "Si vas a quitar una planta por el motivo que sea, procura poner una nueva planta en su lugar."
        }
    ]

    var elTitulo = mensajes[indice].titulo;
    var laDescripcion = mensajes[indice].descripcion;

    return [elTitulo, laDescripcion];
};
