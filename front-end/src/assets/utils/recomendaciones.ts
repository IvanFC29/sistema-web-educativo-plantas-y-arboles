export interface InfoPlanta{
    ubicacion: string;
    separacion: string;
    etapa: Record<number, Record<string, string>>; 
    tierra: Record<string, string>; 
    clima: Record<string, string>;
    hojas: Record<string, string>;
    tip: string;
}

export const plantas: Record<string, InfoPlanta> = {
    arbol: {
        ubicacion: "Plantar en espacios amplios no muy pegado a infraestructuras.",
        separacion: "3-5 metros entre otro árbol",
        etapa: {
            0: {
                profundidad: "Enterrar a una profundidad de aprox. 2 veces su tamaño",
                riego: "Mantener la tierra húmeda, sin encharcar.",
            },
            1: {
                profundidad: "Colocar a ras del cepellón",
                riego: "Riego profundo y abundante después de plantar.",
            },
            2: {
                profundidad: "A ras del cepellón con un pequeño cuenco alrededor del tallo para retener agua en los primeros riegos",
                riego: "Riego profundo cada 3-4 días durante el primer mes.",
            },
        },
        tierra:{
            pedregoso: "Frecuencia de riego mayor: El agua drena más rápido",
            arenoso: "Frecuencia de riego menor: El suelo retiene más humedad"
        },
        clima:{
            lluvioso: "Riego disminuido: Aprovechar el agua de lluvia",
            nublado: "Riego regular: Evitar el exceso de agua para prevenir hongos",
            caluroso: "Regar con mayor frecuencia: El agua se evapora rápido",    
        },
        hojas:{
            tipoA: "Hojas amarillas y sin brillo: falta de agua.",
            tipoB: "Hojas nuevas pequeñas: falta de luz solar.",
            tipoC: "Manchas o secas: exceso de sol, necesita más sombra.",
            tipoD: "Hojas blandas: exceso de agua.",
            tipoE: "Pequeños agujeros: insectos alimentándose.",
            tipoF: "Manchas oscuras: posible presencia de hongos."
        },
        tip: "Los árboles frutales no ocupan mucho espacio"
    },
    flor: {
        ubicacion: "Entre sol y sombre equilibrada",
        separacion: "20-30 cm entre flores",
        etapa: {
            0: {
                profundidad: "Las semillas de flores deben cubrirse con una capa de tierra de aproximadamente 2 veces su tamaño.",
                riego: "Mantener el sustrato húmedo, regando con atomizador o lluvia fina para no desplazar la semilla."
            },
            1: {
                profundidad: "Mantener al mismo nivel del cepellón.",
                riego: "Regar de forma regular (cada 2-3 días si es verano) evitando encharcar."
            },
            2: {
                profundidad: "Mantener al mismo nivel del cepellón.",
                riego: "Riego equilibrado: frecuente pero moderado, procurando que el suelo no se seque."
            }
        },    
        tierra:{
            pedregoso: "Frecuencia de riego mayor: El agua drena más rápido",
            arenoso: "Frecuencia de riego menor: El suelo retiene más humedad"
        },
        clima:{
            lluvioso: "Riego disminuido: Aprovechar el agua de lluvia. Si llueve muy fuerte cubrir la flor",
            nublado: "Riego regular: Evitar el exceso de agua para prevenir hongos",
            caluroso: "Regar con mayor frecuencia: El agua se evapora rápido",    
        },
        hojas:{
            tipoA: "Hojas amarillas y sin brillo: falta de agua.",
            tipoB: "Hojas nuevas pequeñas: falta de luz solar.",
            tipoC: "Manchas o secas: exceso de sol, necesita más sombra.",
            tipoD: "Hojas blandas: exceso de agua.",
            tipoE: "Pequeños agujeros: insectos alimentándose.",
            tipoF: "Manchas oscuras: posible presencia de hongos."
        },
        tip: "La primavera es excelente para la mayoría de las flores",
    },
    arbusto: {
        ubicacion: "En cualquier espacio abierto",
        separacion: "1 metro entre otros arbustos",
        etapa: {
            0: {
                profundidad: "Las semillas de arbustos deben cubrirse con tierra equivalente a 2 veces su tamaño.",
                riego: "Riego ligero y constante hasta la germinación, manteniendo humedad superficial."
            },
            1: {
                profundidad: "El plantín debe colocarse a ras del cepellón.",
                riego: "Regar profundo después del trasplante (2-3 veces por semana) para estimular raíces fuertes."
            },
            2: {
                profundidad: "Mantener a ras del cepellón.",
                riego: "Riego moderado pero profundo 1-2 veces por semana, aumentando en épocas de calor prolongado."
            }
        },
        tierra:{
            pedregoso: "Frecuencia de riego mayor: El agua drena más rápido",
            arenoso: "Frecuencia de riego menor: El suelo retiene más humedad"
        },
        clima:{
            lluvioso: "Riego reducido: Aprovechar el agua de lluvia",
            nublado: "Riego regular: Evitar el exceso de agua para prevenir hongos",
            caluroso: "Regar con mayor frecuencia: El agua se evapora rápido",    
        },
        hojas:{
            tipoA: "Hojas amarillas y sin brillo: falta de agua.",
            tipoB: "Hojas nuevas pequeñas: falta de luz solar.",
            tipoC: "Manchas o secas: exceso de sol, necesita más sombra.",
            tipoD: "Hojas blandas: exceso de agua.",
            tipoE: "Pequeños agujeros: insectos alimentándose.",
            tipoF: "Manchas oscuras: posible presencia de hongos."
        },
        tip: "Los arbustos son resistentes y útiles para delimitar espacios o crear barreras naturales.",
    },
    suculenta: {
        ubicacion: "En macetas, dentro el hogar o al pie de ventanas",
        separacion: "10-15 cm entre todo tipo de planta",  
        etapa: {
            0: {
                profundidad: "Las semillas de suculentas deben cubrirse con una capa muy fina de tierra o arena (no más de 2 mm).",
                riego: "Rociar con atomizador manteniendo humedad ligera pero sin encharcar."
            },
            1: {
                profundidad: "Trasplantar el plantín a ras del cepellón.",
                riego: "Riego ligero cada 7-10 días; esperar a que el sustrato se seque por completo antes de volver a regar."
            },
            2: {
                profundidad: "Mantener a ras del cepellón, en maceta o suelo con excelente drenaje.",
                riego: "Riego espaciado: cada 10-15 días en clima cálido; reducir a 1 vez al mes en invierno."
            }
        },
        tierra:{
            pedregoso: "Frecuencia de riego mayor: El agua drena más rápido",
            arenoso: "Frecuencia de riego menor: El suelo retiene más humedad"
        },
        clima:{
            lluvioso: "Se puede omitir riego por la humedad en el ambiente",
            nublado: "Riego regular: Una vez a la semana y en poca cantidad ",
            caluroso: "Similar a los dias nublados",    
        },
        hojas:{
            tipoA: "Hojas amarillas y sin brillo: falta de agua.",
            tipoB: "Hojas nuevas pequeñas: falta de luz solar.",
            tipoC: "Manchas o secas: exceso de sol, necesita más sombra.",
            tipoD: "Hojas blandas: exceso de agua.",
            tipoE: "Pequeños agujeros: insectos alimentándose.",
            tipoF: "Manchas oscuras: posible presencia de hongos."
        },
        tip: "Perfectas para climas secos.",
    }
};
