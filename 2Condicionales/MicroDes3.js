let palabra = "perro";

switch (palabra) {
    case "perro":
    case "Perro":
        console.log("Su palabra traducida al ingles es Dog");
        break;

    case "gato":
    case "Gato":
        console.log("Su palabra traducida al ingles es Cat");
        break;

    case "puerta":
    case "Puerta":
        console.log("Su palabra traducida al ingles es Door");
        break;

    case "ventana":
    case "Ventana":
        console.log("Su palabra traducida al ingles es Window");
        break;

    default:
        console.log("La palabra ingresada es incorrecta");
        break;
}