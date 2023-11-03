// Vamps a ver 3 métodos más .replace, .slice, y substring

// Replace
const producto = "Monitor 20 Pulgadas";
console.log(producto.replace("20", "24"));
console.log(producto.replace("Pulgadas", '"'));


// Slice te va a permitir extraer una parte de una cadena
console.log(producto.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(producto.slice(8)); // Cortar desde el 8 hasta el fin
console.log(producto.slice(2, 10)); // cortar desde 2 hasta el 10

console.log(producto.slice(2, 1)); // Si el primer número es mayor, no va a cortar hacia atras... No va a hacer nada.

// Existe uno similar a Slice que se llama substring
console.log(producto.substring(0, 10)); //=> Vemos que el resultado es el mismo.

console.log(producto.substring(2, 1)); // Si el número es mayor al segundo, va a cortar hacia atras ("voltear" los números). Es decir, básicamente va a ordenar las posiciones que le has pasado.

// Si has visto algunos sitios web muestran tu primer letra de tu nombre:

const nombre = "Juan";
console.log(nombre.substring(0, 1));

// Otra forma es con chartAt, devuelve en un nuevo String el carácter que esté en la posición indicada.
console.log(nombre.charAt(0));
