function calcularTotal(tipoHam, jamon, queso, salsa, mayo, mostaza, tomate, lechuga, cebolla){
    let calculo = 0;
    let bandera = true;
    switch (tipoHam) {
        case "Carne a la parrilla":
            calculo += 1800;
            break;
        case "Pollo":
            calculo += 1500;
            break;
        case "Vegetariana":
            calculo += 1200;
            break;
        default:
            bandera = false;
    }

    if(jamon){
        calculo += 30;
    }
    if(queso){
        calculo += 25;
    }
    if(salsa){
        calculo += 5;
    }
    if(mayo){
        calculo += 5;
    }
    if(mostaza){
        calculo += 5;
    }
    if(tomate){
        calculo += 15;
    }
    if(lechuga){
        calculo += 10;
    }
    if(cebolla){
        calculo += 10;
    }

    if(bandera){
        return calculo;
    }else{
        return 0;
    }
}

function mensaje(nombre, tipoHam, jamon, queso, salsa, mayo, mostaza, tomate, lechuga, cebolla){
    let total = calcularTotal(tipoHam, jamon, queso, salsa, mayo, mostaza, tomate, lechuga, cebolla);

    if (total != 0){
        return `Estimado ${nombre}, el monto total a pagar es de: $${total}`;
    }else{
        return "El tipo de hamburguesa ingresado es incorrecto";
    }
}

console.log(mensaje("Nicolas Torres", "Zaza", true, false, true, false, false, false, true, true));