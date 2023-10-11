let nombre = 'Nicolas';
let apellido = 'Torres';
let sueldoActual = 115000;
let porcentajeAumento = 15;

let calculoAumento = sueldoActual * (porcentajeAumento/100);

let nuevoSueldo = sueldoActual + calculoAumento;

console.log(`Hola, estimad@ ${nombre} ${apellido}
En base a su sueldo actual:
$${sueldoActual}
Ha recibido un aumento del ${porcentajeAumento}%: 
$${calculoAumento} 
Y su nuevo sueldo es de: $${nuevoSueldo}`);