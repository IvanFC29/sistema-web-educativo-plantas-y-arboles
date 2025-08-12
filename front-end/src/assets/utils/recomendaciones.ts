export interface InfoPlanta{
    ubicacion: string;
    separacion: string;
    profundidad: string; 
    riego: string;
    estaciones: Record<string, string>; 
    tierra: Record<string, string>; 
    clima: Record<string, string>;
    hojas: Record<string, string>;
}

export const plantas: Record<string, InfoPlanta> = {
    arbol: {
        ubicacion: "Los árboles son ideales para espacios amplios y suelen necesitar más profundidad y separación.",
        separacion: "3-5 metros",
        profundidad: "",
        riego: "Los árboles requieren riego profundo",
        estaciones: {
            primavera: "La primavera es excelente para la mayoría de plantas: temperaturas suaves y buena humedad.",
            verano: "El verano exige más cuidado por el calor, sombra parcial y riegos frecuentes son claves.",
            otoño: "En otoño se recomienda plantar árboles y arbustos, aprovechando la tierra aún cálida.",
            invierno: "El invierno es época de reposo. Solo algunas especies resistentes pueden plantarse entonces."
        },
        tierra:{
            pedregoso: "La frecuencia de riego debe ser mayor porque el suelo retiene menos agua",
            arenoso: "La frecuencia de riego debe ser menor porque el suelo retiene mas agua"
        },
        clima:{
            lluvioso: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
            nublado: "Si el clima esta ventoso el riego debe ser regular y se debe eviatar el exceso de agua par aevitar hongos",
            caluroso: "El calor hace que el agua se evapore mas rapido por lo que es necesario regar con mayor frecuencia ",    
        },
        hojas:{
            tipoA: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
            tipoB: "Si vez que las nuevas hojas tienden a ser mas pequeñas la planta necesita mas luz solar",
            tipoC: "Si vez que las hojas tienen manchas o mas hojas secas la planta necesita mas sombra",
            tipoD: "Si al tocar las hojas ves que estan blandas necesita menos agua",
            tipoE: "Si vez que las hojas tienen pequeños agujeros indica que los bichos estan comiendo las hojas",
            tipoF: "Puede tener hongos"
        }
    },
    flor: {
        ubicacion: "Las flores aportan color y requieren buena exposición solar y riego regular.",
        separacion: "20-30 cm",
        profundidad: "",
        riego: "Las flores necesitan un riego equilibrado para mantener su floracion y se recomienda regar cada dos o tres dias en verano",
        estaciones: {
            primavera: "La primavera es excelente para la mayoría de plantas: temperaturas suaves y buena humedad.",
            verano: "El verano exige más cuidado por el calor, sombra parcial y riegos frecuentes son claves.",
            otoño: "En otoño se recomienda plantar árboles y arbustos, aprovechando la tierra aún cálida.",
            invierno: "El invierno es época de reposo. Solo algunas especies resistentes pueden plantarse entonces."    
        },
        tierra:{
            pedregoso: "La frecuencia de riego debe ser mayor porque el suelo retiene menos agua",
            arenoso: "La frecuencia de riego debe ser menor porque el suelo retiene mas agua"
        },
        clima:{
            lluvioso: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
            nublado: "Si el clima esta ventoso el riego debe ser regular y se debe eviatar el exceso de agua par aevitar hongos",
            caluroso: "El calor hace que el agua se evapore mas rapido por lo que es necesario regar con mayor frecuencia ",    
        },
        hojas:{
            tipoA: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
            tipoB: "Si vez que las nuevas hojas tienden a ser mas pequeñas la planta necesita mas luz solar",
            tipoC: "Si vez que las hojas tienen manchas o mas hojas secas la planta necesita mas sombra",
            tipoD: "Si al tocar las hojas ves que estan blandas necesita menos agua",
            tipoE: "Si vez que las hojas tienen pequeños agujeros indica que los bichos estan comiendo las hojas",
            tipoF: "Puede tener hongos"
        }
    },
    arbusto: {
        ubicacion: "Los arbustos son resistentes y útiles para delimitar espacios o crear barreras naturales.",
        separacion: "1 metro",
        profundidad: "",
        riego: "Los arbustos son resistentes y útiles para delimitar espacios o crear barreras naturales.",
        estaciones: {
            primavera: "La primavera es excelente para la mayoría de plantas: temperaturas suaves y buena humedad.",
            verano: "El verano exige más cuidado por el calor, sombra parcial y riegos frecuentes son claves.",
            otoño: "En otoño se recomienda plantar árboles y arbustos, aprovechando la tierra aún cálida.",
            invierno: "El invierno es época de reposo. Solo algunas especies resistentes pueden plantarse entonces."
        },
        tierra:{
            pedregoso: "La frecuencia de riego debe ser mayor porque el suelo retiene menos agua",
            arenoso: "La frecuencia de riego debe ser menor porque el suelo retiene mas agua"
        },
        clima:{
            lluvioso: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
            nublado: "Si el clima esta ventoso el riego debe ser regular y se debe eviatar el exceso de agua par aevitar hongos",
            caluroso: "El calor hace que el agua se evapore mas rapido por lo que es necesario regar con mayor frecuencia ",    
        },
        hojas:{
            tipoA: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
            tipoB: "Si vez que las nuevas hojas tienden a ser mas pequeñas la planta necesita mas luz solar",
            tipoC: "Si vez que las hojas tienen manchas o mas hojas secas la planta necesita mas sombra",
            tipoD: "Si al tocar las hojas ves que estan blandas necesita menos agua",
            tipoE: "Si vez que las hojas tienen pequeños agujeros indica que los bichos estan comiendo las hojas",
            tipoF: "Puede tener hongos"
        }
    },
    suculenta: {
        ubicacion: "Las suculentas, como los cactus, retienen agua y necesitan poca humedad. Perfectas para climas secos.",
        separacion: "10-15 cm",   
        profundidad: "",   
        riego: "Las suculentas por lo general son plantas de interior, sulene necesitar un riego de una o dos veces por semana.",
        estaciones: {
            primavera: "La primavera es excelente para la mayoría de plantas: temperaturas suaves y buena humedad.",
            verano: "El verano exige más cuidado por el calor, sombra parcial y riegos frecuentes son claves.",
            otoño: "En otoño se recomienda plantar árboles y arbustos, aprovechando la tierra aún cálida.",
            invierno: "El invierno es época de reposo. Solo algunas especies resistentes pueden plantarse entonces."    
        },
        tierra:{
            pedregoso: "La frecuencia de riego debe ser mayor porque el suelo retiene menos agua",
            arenoso: "La frecuencia de riego debe ser menor porque el suelo retiene mas agua"
        },
        clima:{
            lluvioso: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
            nublado: "Si el clima esta ventoso el riego debe ser regular y se debe eviatar el exceso de agua par aevitar hongos",
            caluroso: "El calor hace que el agua se evapore mas rapido por lo que es necesario regar con mayor frecuencia ",    
        },
        hojas:{
            tipoA: "Si vez que las hojas se han tornado amarillentas y sin brillo la planta necesita mas agua",
            tipoB: "Si vez que las nuevas hojas tienden a ser mas pequeñas la planta necesita mas luz solar",
            tipoC: "Si vez que las hojas tienen manchas o mas hojas secas la planta necesita mas sombra",
            tipoD: "Si al tocar las hojas ves que estan blandas necesita menos agua",
            tipoE: "Si vez que las hojas tienen pequeños agujeros indica que los bichos estan comiendo las hojas",
            tipoF: "Puede tener hongos"
        }
    }
};

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

   