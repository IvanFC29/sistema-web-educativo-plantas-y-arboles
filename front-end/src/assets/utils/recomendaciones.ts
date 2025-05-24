// PARA EL LAYOUT 1
export function segunTipoPlanta(tipoPlanta: string): string {
    const tipo = tipoPlanta.toLowerCase();
    const respuestas: { [key: string]: string } = {
        arboles: "Los árboles son ideales para espacios amplios y suelen necesitar más profundidad y separación.",
        flores: "Las flores aportan color y requieren buena exposición solar y riego regular.",
        arbustos: "Los arbustos son resistentes y útiles para delimitar espacios o crear barreras naturales.",
        suculentas: "Las suculentas, como los cactus, retienen agua y necesitan poca humedad. Perfectas para climas secos."
    };
    return respuestas[tipo];
}

export function segunEstacion(estacion: string): string{
    const e = estacion.toLowerCase();
    const respuestas: { [key: string]: string } = {
        primavera: "La primavera es excelente para la mayoría de plantas: temperaturas suaves y buena humedad.",
        verano: "El verano exige más cuidado por el calor, sombra parcial y riegos frecuentes son claves.",
        otoño: "En otoño se recomienda plantar árboles y arbustos, aprovechando la tierra aún cálida.",
        invierno: "El invierno es época de reposo. Solo algunas especies resistentes pueden plantarse entonces."
    };
    return respuestas[e];
}

export function segunDimension(tipoPlanta: string): string {
    const tipo = tipoPlanta.toLowerCase();
    const respuestas: { [key: string]: string } = {
        arboles: "Considera dejar al menos 3-5 metros entre árboles y plantarlos a 50 cm de profundidad.",
        flores: "Las flores pueden ir separadas por 20-30 cm y no requieren mucha profundidad.",
        arbustos: "Requieren una distancia de 1 metro entre sí para un buen desarrollo.",
        suculentas: "Pueden ir cerca entre sí, en macetas poco profundas con buen drenaje."
    };
    return respuestas[tipo];
}

export function segunTipoTierra(tipoTierra: string):string{
    const tipo = tipoTierra.toLowerCase();
    const respuesta: {[key:string]: string } = {
        pedregoso: "La frecuencia de riego debe ser mayor porque el suelo retiene menos agua",
        arenoso: "La frecuencia de riego debe ser menor porque el suelo retiene mas agua"
    };
    return respuesta[tipo];
}

// PARA EL LAYOUT 2
export function segunHojas(tipoHojas: string): string{
    const respuesta: {[key:string]: string } = {
        tipoA: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
        tipoB: "Si vez que las nuevas hojas tienden a ser mas pequeñas la planta necesita mas luz solar",
        tipoC: "Si vez que las hojas tienen manchas o mas hojas secas la planta necesita mas sombra",
        tipoD: "Si al tocar las hojas ves que estan blandas necesita menos agua",
        tipoE: "Si vez que las hojas tienen pequeños agujeros indica que los bichos estan comiendo las hojas",
        tipoF: "Puede tener hongos"
    };
    return respuesta[tipoHojas];
}

export function segunClima(tipoClima:string): string{
    const respuesta: {[key:string]: string } = {
        lluvioso: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
        nublado: "Si el clima esta ventoso el riego debe ser regular y se debe eviatar el exceso de agua par aevitar hongos",
        caluroso: "El calor hace que el agua se evapore mas rapido por lo que es necesario regar con mayor frecuencia ",
    };
    return respuesta[tipoClima];
}

export function riegoSegunTipoPlanta(tipoPlanta: string): string{
    const tipo = tipoPlanta.toLowerCase();
    const respuestas: { [key: string]: string } = {
        arboles: "Los árboles requieren riego profundo ",
        flores: "Las flores necesitan un riego equilibrado para mantener su floracion y se recomienda regar cada dos o tres dias en verano ",
        arbustos: "Los arbustos son resistentes y útiles para delimitar espacios o crear barreras naturales.",
        suculentas: "Las suculentas por lo general son plantas de interior, sulene necesitar un riego de una o dos veces por semana."
    };
    return respuestas[tipo];
}
/**
 * Flores en primavera La primavera es de los mejores momentos para plantar flores ya que muchas plantas se encuentran en su mejor estado en esta época del año, debido a la temperatura y clima.
 * Los árboles y arbustos plantados en otoño/invierno requieren un mantenimiento mínimo porque el suelo es como el mar:
 * Flora en verano: la estación del año más calurosa para tus plantas
    El verano puede llegar a ser engañoso para la jardinería si no se sabe qué plantas y hortalizas pueden soportar el calor extremo, los rayos fuertes del sol y la escasez del agua
 *
 *  
 * 
 * 
 * 
 * 



 */

   