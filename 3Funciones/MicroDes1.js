function alquilerVehiculo(tipoVeh, diasAlq, sillaBebe){
    let totalAPagar = 0;
    let bandera = true;
    let msjAdicional = "";
    switch (tipoVeh) {
        case "compacto":
        case "Compacto":
            totalAPagar += (14000*diasAlq);
            break;
        case "mediano":
        case "Mediano":
            totalAPagar += (17000*diasAlq);
            break;
        case "camioneta":
        case "Camioneta":
            totalAPagar += (28000*diasAlq);
            break;
    
        default:
            bandera = false;
            return "El tipo de vehiculo ingresado no es valido";
    }

    if (sillaBebe) {
        totalAPagar += (1200*diasAlq);
        msjAdicional = " y debido a que solicitó la silla para bebé";
    }

    if(bandera){
        return `Estimado cliente: en base al tipo de vehículo ${tipoVeh} alquilado, considerando los ${diasAlq} días
utilizados${msjAdicional}, el monto total a pagar es de ${totalAPagar}.`;
    }
}



console.log(alquilerVehiculo("tractor", 7, true));