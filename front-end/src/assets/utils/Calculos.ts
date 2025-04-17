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
    co2: number;
}

function calcularOxigenoPorPlanta(tipo: string, planta: {edad: number, altura: number, espesura: number}): number[]{
    /** Primero calculamos el volumen del arbol */ 
    const factor_forma: number = 0.496;
    var volumen: number = factor_forma * (planta.altura * Math.pow(planta.espesura/100, 2))/4*Math.PI;
     
    /** Calculamos la biomasa del tronco y ramas 
    *  El primero es para arboles frondosos y el segundo para madera blanda 
    */
    const densidadArbol: number = 0.546;
    const densidadArbustoFlor: number = 0.438;

    if (tipo === "Arbol") {
        var biomasaInicial: number = densidadArbol * volumen;        
    }else{
        var biomasaInicial: number = densidadArbustoFlor * volumen;
    }

    /** Calculamos la biomasa total arbol + hojas */
    const factorExpansionArbol: number = 1.28;
    const factorExpansionArbustoFlor: number = 1.30;

    if (tipo === "Arbol") {
        var biomasaTotal:number = biomasaInicial * factorExpansionArbol;
    }else{
        var biomasaTotal:number = biomasaInicial * factorExpansionArbustoFlor;
    }

    /** Cantidad de CO2 almacenada en el arbol/planta */

    const tasaCarbono: number = 0.475;
    const masa_molar_co2: number = 44/12;
 
    var CO2compensado = tasaCarbono * biomasaTotal * masa_molar_co2;
 
     /** Calcular la produccion de oxigeno del arbol/planta */
    var O2_generado = Math.exp(biomasaInicial + biomasaTotal/planta.edad);
    
    return [CO2compensado, O2_generado];
}

export const calcularImpacto = (datos: DatosPlanta) => {
    const especie: string = datos.especiePlanta;
    const tipo: string = datos.tipoPlanta;
    const cantidad: number = datos.cantidadPlantas;
    
    var oxigenoTotal: number = 0;
    var CO2Total: number = 0;

    const resultados: ResultadoArbol[] = [];

    for (let i = 0; i < cantidad; i++) {
        const planta = datos.plantas[i];
        var resultadosParciales : number[] = calcularOxigenoPorPlanta(tipo, planta);
        oxigenoTotal = oxigenoTotal + resultadosParciales[1];
        CO2Total = CO2Total + resultadosParciales[0];
        resultados.push({
            nombre: especie,
            oxigeno: resultadosParciales[1],
            co2: resultadosParciales[0],
        })
    }

    return {resultados, oxigenoTotal, CO2Total};
};
