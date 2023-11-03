// Veamos como concatenar o unir 2 textos o variables:

const producto = "Monitor 20 Pulgadas";
const precio = "30 USD";

console.log(producto.concat(" en Descuento, ")); // Concatenar un string
console.log(producto.concat(precio)); // Concatenar una variable

// Otras formas de concatenar:
console.log(producto + precio);
console.log(producto + "Con un precio de " + precio);
console.log("El Producto" + producto + " tiene un precio de " + precio); // Esta forma se puede complicar
console.log("El Producto", producto, " tiene un precio de ", precio); // Otra forma

// ES6 introdujo una mejor forma de concatenar strings y variables mediante las llamadas Template String o template literal:

console.log(`El Producto ${producto} tiene un precio de ${precio}`);
