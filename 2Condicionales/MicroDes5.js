let velocidad = 273;
let altura = 341;
let bandera = true;

if (velocidad>268 && velocidad<278) {
    if (altura>150 && altura<300) {
        bandera = false;
        console.log("Le indicamos que el avión está listo para realizar el aterrizaje");
    }
}

if(bandera){
    console.log("Le indicamos que el avión aún no está listo para realizar el aterrizaje");
}