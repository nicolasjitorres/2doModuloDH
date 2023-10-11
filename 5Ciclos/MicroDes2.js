function tablaDeMultiplicar(){
    let msj = `Tabla de multiplicar
--------------------\n`;
    for (let indiceNum = 1; indiceNum <= 10; indiceNum++) {
        for(let indiceTabla = 1; indiceTabla <= 10; indiceTabla++){
            msj += `${indiceNum} * ${indiceTabla} = ${indiceNum*indiceTabla}\n`
        }
        msj += "--------------------\n"
    }

    return msj;
}

console.log(tablaDeMultiplicar());