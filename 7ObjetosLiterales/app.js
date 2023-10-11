const { log } = require('console');
const pelis = require('./peliculas');

let indice = 0;
while(indice < pelis.length){
    let pelicula = pelis[indice];
    console.log(`La pelicula numero ${pelicula.id}, tiene los siguientes datos:
Clasificación: ${pelicula.rating}
Premios: ${pelicula.awards}
Duracion: ${pelicula.length}
Precio: ${pelicula.price}
Genero: ${pelicula.genre}
`);

indice++;
}

const fs = require('fs');

let mensaje = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8");

console.log(mensaje);