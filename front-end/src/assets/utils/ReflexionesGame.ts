export const listaReflexiones = (indice: number): [string, string, string] => {
    const reflexiones = [
        {
            id: "1",
            titulo: "Es importante pensar en que sitio plantaras tu planta!!",
            descripcion: "Evita plantar cerca a los muros de tu hogar, especialmente si es un arbol que crecera a una gram altura. Este tipo de arboles pueden tener raices muy grandes y destrozar el pacimento."
        },
        {
            id: "2",
            titulo: "Las plantas no deben estar rodeadas de cemento",
            descripcion: "Si piensas plantar sobre tu acera, dale un espacio de un metro a la planta, no cubras de cemento al rededor del tallo, las plantas neceesitan estar rodeadas de tierra."
        },
        {
            id: "3",
            titulo: "Algunas plantas siempre van a perecer",
            descripcion: "Los plantines son muy hermosos, pero estos tienen un ciclo de vida corto, luego de que florezcan odas sus brotes poco a poco empezara a debilitarse, no crecen mas. No te pongas triste si tienes que sacarlo."
        }, 
        {
            id: "4",
            titulo: "Uno sale, otro entra",
            descripcion: "Si vas a quitar una planta por el motivo que sea, procura poner una nueva planta en su lugar."
        }
    ]

    var elID = reflexiones[indice].id;
    var elTitulo = reflexiones[indice].titulo;
    var laDescripcion = reflexiones[indice].descripcion;

    return [elID, elTitulo, laDescripcion];
};
