let operador = "}";
let resultado = 0;
let num1 = 21;
let num2 = 37;

switch (operador) {
    case "+":
        resultado = num1+num2;
        break;
    case "-":
        resultado = num1-num2;
        break;
    case "*":
        resultado = num1*num2;
        break;
    case "/":
        resultado = num1/num2;
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
        break;
}

if (resultado !=0) {
    console.log("El resultado de la operación es: " + resultado);
}

