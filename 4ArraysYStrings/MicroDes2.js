let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick','Elvis','Thor: amor y trueno'];

function masVendidaAMayusculas(nombrePelicula, arrayPelis){
    let frase = arrayPelis.join("  ").replace(nombrePelicula, "");
    frase = frase.trim().replace("   ", "  ");
    let nuevoArray = frase.split("  ");
    nuevoArray.unshift(nombrePelicula.toUpperCase())
    return nuevoArray;
}

peliculas = masVendidaAMayusculas("Thor: amor y trueno", peliculas);

console.log(peliculas);

let cadenaDeTexto = "Counter-Strike NOP Vértigo Nick Avatar";

let arrayOtrasPelis = cadenaDeTexto.split(" "); 

arrayOtrasPelis.shift();

function unirPelis(pelis1, pelis2){
    return pelis1.concat(pelis2);
}

console.log(unirPelis(peliculas, arrayOtrasPelis));