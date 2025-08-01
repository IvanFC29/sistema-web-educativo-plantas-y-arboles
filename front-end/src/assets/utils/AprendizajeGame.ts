export function listaTemas(indice:number): [number, string, string, string, string, string]{
    const temas = [
        {
            id: 1,
            titulo: "La fotosintesis en las plantas",
            imagen: "/img_juego/aprendizaje/fotosintesis.JPG",
            contenido: `Todas las plantas realizan un proceso a lo largo de su vida. Este proceso consiste en crear materia orgánica a partir de materia inorgánica.  
                        Es por esta capacidad que el medio ambiente depende de ellas. 
                        
                        ## Fórmula química 
                        - 6 moléculas de agua
                        - 6 moléculas de dióxido de carbono
                        - Luz solar

                        Gracias a los cloroplastos, se transforman en:

                        - 1 molécula de glucosa (C6H12O6)
                        - 6 moléculas de oxígeno (O2)`,
            fuente:  `Texto: [Ecología Verde: Fotosíntesis Fases e Importancia](https://www.ecologiaverde.com/fotosintesis-que-es-fases-e-importancia-2948.html) 
                      Imagen: [Ecología Verde](https://www.ecologiaverde.com/fotosintesis-que-es-fases-e-importancia-2948.html)`,
            video: "https://www.youtube.com/embed/mtGgo68VM54?si=WpkYM3QAsHPxZhKl"
        },
        {
            id: 2,
            titulo: "",
            imagen: "",
            contenido: "",
            fuente: "",
            video: ""
        },
        {
            id: 3,
            titulo: "",
            imagen: "",
            contenido: "",
            fuente: "",
            video: ""
        },
        {
            id: 4,
            titulo: "",
            imagen: "",
            contenido: "",
            fuente: "",
            video: ""
        }
    ]

    var id:number = temas[indice].id;
    var titulo:string = temas[indice].titulo;
    var contenido:string = temas[indice].contenido;
    var imagen:string = temas[indice].imagen;
    var fuente:string = temas[indice].fuente;
    var video:string = temas[indice].video;

    return [id, titulo, contenido, imagen, fuente, video];
}