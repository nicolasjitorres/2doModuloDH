let operacionesRealizadas = [100, -25, 230, -77, 255, -199, -100];

function calcularSaldos(cuenta){
    let indice = 0;
    let depositos = 0;
    let retiros = 0;
    let saldoActual = 0;
    while(indice<cuenta.length){
        if(cuenta[indice]>=0){
            depositos += cuenta[indice];
        }else{
            retiros += cuenta[indice];
        }
        saldoActual += cuenta[indice];
        indice++;
    }

    return [depositos, retiros, saldoActual];
}

function cuentaCorriente(nombre, operacionesBancarias){
    let arrayOperaciones = calcularSaldos(operacionesBancarias);

    return `Estimad@ ${nombre}:
El monto total de los depositos es de: $${arrayOperaciones[0]}
El monto total de los retiros es de: $${arrayOperaciones[1]*(-1)}
Por lo tanto, su sueldo actual en la cuenta es de: $${arrayOperaciones[2]}`
}

console.log(cuentaCorriente('Nicolas Torres', operacionesRealizadas));