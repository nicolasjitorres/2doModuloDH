// Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
function nrosSiguientes(numero){
    let msj=`Los 10 números siguientes de ${numero} son: - `;
    for (indice = 1; indice <= 10; indice++){
        msj += (numero+indice) + " - ";
    }
    return msj;
}

// Imprimir los números entre el 1 y el 57, saltando de tres en tres.
function nrosDeTresEnTres(){
    let msj = "Los números entre 1 y 57, saltando de tres en tres son: - "
    for(indice = 2; indice <= 57; indice+=3){
        msj += indice + " - ";
    }
    return msj;
}

// Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
function sumatoria(){
    let indice = 0;
    let suma = 0;
    do{
        suma += indice;
        indice++;
    }while(indice <= 100)
    return "La sumatoria que empieza en 0 y termina en 100 es igual a: " + suma;
}

/* Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase. */

function letrasEnMayuscula(cadenaTexto){
    let indice = 0;
    let msj = ""
    do{
        msj += cadenaTexto[indice].toUpperCase() + "\n";
        indice++;
    }while(indice < cadenaTexto.length)
    return msj;
}


/* Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2. */

function valoresPares(arrayNros){
    let indice = 0;
    let arrayPares= [];
    while(indice < arrayNros.length){
        if(arrayNros[indice]%2 == 0){
            arrayPares.push(arrayNros[indice]);
        }
        indice++;
    }
    return arrayPares;
}


console.log(valoresPares([4,1,2,3,4,5,6,7,8,9,10,11]));