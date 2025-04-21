type Planta = {
    edad: number;
    altura: number;
    espesura: number;
}

type DatosPlanta = {
    tipoPlanta: string;
    especiePlanta: string;
    cantidadPlantas: number;
    plantas: Planta[];
}

interface ResultadoArbol {
    nombre: string;
    oxigeno: number;
    carbono: number;
    co2: number;
}

function calcularOxigenoPorPlanta(planta: {edad: number, altura: number, espesura: number}): number[]{
    /** Primero calculamos el volumen del arbol */ 
    const numero_PI: number = Math.PI;
    var DAP: number = planta.espesura/numero_PI;
    // promedio para casi todas las especies
    // const factor_forma: number = 0.496; 
    // //Area basal
    // var AB: number = (numero_PI * Math.pow(DAP, 2))/4;
    // var volumen: number = AB * planta.altura * factor_forma;
     
    /** Calculamos la biomasa del tronco y ramas */
    const a: number = 0.026;
    const b: number = 1.529;
    const c: number = 1.747;

    /** Biomasa aerea */
    var Bva:number = a * Math.pow(DAP, b) * Math.pow(planta.altura, c);
    /** Biomasa radicular */
    var Bvr:number = Bva*0.20;
    /** Biomasa verde total */
    var Bvt:number = Bva + Bvr;
    /** Biomasa seca */
    var BS:number = Bvt - ((Bva*40)/100);

    /** CAPTURA DE CARBONO */
    var CAT: number = BS * 0.5;
    var CR: number = CAT * 0.24;

    var C_almacenado: number = CAT + CR;
    
    /** Calcular la produccion de oxigeno del arbol/planta */
    const molCO2: number = 44;
    const molO: number = 32;
    var O2_generado = C_almacenado*(molO/molCO2);

    /** CO2 absorbido equivalent */
    const molC: number = 12;
    var CO2_absorbido: number = C_almacenado*(molCO2/molC);
    
    return [O2_generado, C_almacenado, CO2_absorbido];
}

export const calcularImpacto = (datos: DatosPlanta) => {
    const especie: string = datos.especiePlanta;
    const cantidad: number = datos.cantidadPlantas;
    
    var oxigenoTotal: number = 0;
    var carbonoTotal: number = 0;
    var CO2Total: number = 0;

    const resultados: ResultadoArbol[] = [];

    for (let i = 0; i < cantidad; i++) {
        const planta = datos.plantas[i];
        var resultadosParciales : number[] = calcularOxigenoPorPlanta(planta);
        oxigenoTotal = oxigenoTotal + resultadosParciales[0];
        carbonoTotal = carbonoTotal + resultadosParciales[1];
        CO2Total = CO2Total + resultadosParciales[2];
        resultados.push({
            nombre: especie,
            oxigeno: resultadosParciales[0],
            carbono: resultadosParciales[1],
            co2: resultadosParciales[2],
        })
    }

    return {resultados, oxigenoTotal, carbonoTotal, CO2Total};
};
