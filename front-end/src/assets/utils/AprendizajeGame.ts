export function listaTemas(indice:number): [number, string, string, string, string]{
    const temas = [
        {
            id: 1,
            titulo: "La fotosintesis en las plantas",
            imagen: "/img_juego/aprendizaje/fotosintesis.JPG",
            contenido: "Todas las plantas realizan un proceso a lo largo de su vida. Este proceso consiste en crear materia organiza a partir de materia inorganica; esto quiere decir que las plantas producen oxigeno y lo expulsan a la atmosfera. Es por esta capacidad de las plantas que el medio ambiente necesita de ellas. La fotosintesis al ser un proceso quimico cuenta con una formula quimica por la cual realiza el proceso: Donde 6 moleculas de agua y 6 moleculas de dioxido de carbono junto con la luz solar hacen una transformacion quimica; Gracias a los cloroplastos y al proceso de fotosíntesis, estos ingredientes se acaban transformando en una molécula de glucosa (C6H12O6) y 6 moléculas de oxígeno (02). ",
            fuente: "https://www.ecologiaverde.com/fotosintesis-que-es-fases-e-importancia-2948.html",
        },
        {
            id: 1,
            titulo: "",
            imagen: "",
            contenido: "",
            fuente: "",
        },
        {
            id: 1,
            titulo: "",
            imagen: "",
            contenido: "",
            fuente: "",
        },
        {
            id: 1,
            titulo: "",
            imagen: "",
            contenido: "",
            fuente: "",
        }
    ]

    var id:number = temas[indice].id;
    var titulo:string = temas[indice].titulo;
    var contenido:string = temas[indice].contenido;
    var imagen:string = temas[indice].imagen;
    var fuente:string = temas[indice].fuente;

    return [id, titulo, contenido, imagen, fuente];
}