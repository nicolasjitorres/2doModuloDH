let graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let graduadosNODEJS = "45 56 73 34 65 72 70 32";

let html5 = graduadosHTML5.split(" ");
let css3 = graduadosCSS3.split(" ");
let javascript = graduadosJAVASCRIPT.split(" ");
let nodejs = graduadosNODEJS.split(" ");

let conjuntoArreglos = [html5, css3, javascript, nodejs];

/*

function calcularPromedio(arreglo){
    let indice = 0;
    let promedio = 0;
    while(indice < arreglo.length){
        promedio = promedio + (arreglo[indice] - 0);
        indice++;
    }
    return (promedio/arreglo.length);
}


 function promedioGraduados (arregloHTML5, arregloCSS3, arregloJAVASCRIPT, arregloNOEJS, num){
    let promedio = 0;
    let bandera = true;
    let mensaje;
    switch (num) {
        case 1:
            promedio = calcularPromedio(arregloHTML5);
            break;
        case 2:
            promedio = calcularPromedio(arregloCSS3);
            break;
        case 3:
            promedio = calcularPromedio(arregloJAVASCRIPT);
            break;
        case 4:
            promedio = calcularPromedio(arregloNOEJS);
            break;
        default:
            mensaje = "Lo sentimos, debe ingresar un valor entre 1 y 4, de los cuales: \n1 = HTML5\n2 = CSS3\n3 = JAVASCRIPT\n4 = NODEJS";
            bandera = false;
            break;
    }

    if(bandera){
        return promedio;
    }else{
        return mensaje;
    }
} */

function promedioGraduados (arreglos, num){
    let promedio = 0;
    let mensaje;
    if(num>0 && num<5){
        let arreglo = arreglos[num-1];
        let indice = 0;
        let promedio = 0;
        while(indice < arreglo.length){
            promedio = promedio + (arreglo[indice] - 0);
            indice++;
        }
        return (promedio/arreglo.length);
    }else{
        return "Lo sentimos, debe ingresar un valor entre 1 y 4, de los cuales: \n1 = HTML5\n2 = CSS3\n3 = JAVASCRIPT\n4 = NODEJS";
    }

}


console.log(promedioGraduados(conjuntoArreglos, 5));