let electrodomesticos = ["Pava", "Lavarropas", "Secarropas", "TV", "Microondas", "Planchita"]


// Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
console.log(electrodomesticos[0]);
console.log(electrodomesticos[2]);
console.log(electrodomesticos[5]);
console.log(electrodomesticos[7]);

// Extraer el primer elemento del array y agregarlo al final del mismo.
let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);
console.log(electrodomesticos);

// Agregar al final del array dos (2) nuevos productos.
electrodomesticos.push("Secador", "Aspiradora");
console.log(electrodomesticos);


//Mostrar por la consola la cantidad de elementos que contiene el array.
console.log(electrodomesticos.length);


/* Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”. */
console.log(electrodomesticos.includes("TT")? "Producto encontrado" : "El producto buscado no existe");


/* Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco. */
let cadenaTexto = electrodomesticos.join(" ");
console.log(cadenaTexto);


// Determinar la cantidad de elementos que posee la cadena de texto obtenida.
console.log(cadenaTexto.length);


/* Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello. */
let nuevaCadena = cadenaTexto.replace("TV", "Television")
console.log(nuevaCadena);


/* Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma. */
let nuevoArray = nuevaCadena.split(" ");
console.log(nuevoArray);