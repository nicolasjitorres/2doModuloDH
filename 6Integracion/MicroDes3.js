function encontrarElNumero(arreglo, num){
    let mensaje;
    if(arreglo.includes(num)){
        mensaje = `El número ${num} si existe en el array.`;
    }else{
        mensaje = `El valor solicitado no existe.`;
    }
    return mensaje;
}

//console.log(encontrarElNumero([1, 3, 5, 6, 1234, 42, 523, 421, 43], 5));

//console.log(encontrarElNumero([1, 3, 5, 6, 1234, 42, 523, 421, 43], 0));


let cadenasDeTexto = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];

function juegoDeTrompito(arreglo, vueltas){
    let mensaje;
    if(vueltas >=0 && vueltas < 6){
        mensaje = arreglo[vueltas];
    }else{
        mensaje = "Lo siento, el número de vueltas debe estar comprendido entre 2 y 6, inclusive."
    }
    return mensaje;
}

let randomVueltas = Math.floor(Math.random() * 6);


// console.log(juegoDeTrompito(cadenasDeTexto, randomVueltas));

function sumatoriaParesImpares(arreglo){
    let indice = 0;
    let sumatoriaPares = 0;
    let sumatoriaImpares = 0;
    while(indice < arreglo.length){
        if(arreglo[indice]%2 == 0){
            sumatoriaPares += arreglo[indice];
        }else{
            sumatoriaImpares += arreglo[indice];
        }
        indice++;
    }
    return `La sumatoria de los numeros pares es igual a ${sumatoriaPares} \nLa sumatoria de los numeros impares es igual a ${sumatoriaImpares}`;
}

// console.log(sumatoriaParesImpares([1,2,3,4,5,6,7,8,9,10]));